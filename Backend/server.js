// server.js
import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io";

// Scheduler
import { initializeDonationScheduler } from "./utils/scheduler.js";

// Routes
import authRoutes from "./routes/auth.js";
import donorRoutes from "./routes/donor.js";
import requestRoutes from "./routes/request.js";
import scheduleRoutes from "./routes/schedule.js";
import hospitalRoutes from "./routes/hospital.js";
import aiRoutes from "./routes/ai.js";
import hospitalStatsRoutes from "./routes/hospitalStats.js";
import emailRoutes from "./routes/email.js";


dotenv.config();

const app = express();
const server = http.createServer(app);

// ----------------------
// SOCKET.IO
// ----------------------
const socketOrigins = [
  "https://pulsebank.netlify.app",
  "https://pulsebank-dev.netlify.app",
  "http://localhost:3000",
  "http://localhost:3001",
  process.env.FRONTEND_URL,
].filter(Boolean);

const io = new Server(server, {
  cors: {
    origin: socketOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("🔌 Socket Connected:", socket.id);

  socket.on("register", (userId) => {
    socket.join(userId);
    console.log(`👤 User joined room: ${userId}`);
  });

  socket.on("new_request", (payload) => {
    console.log("🚨 New urgent request:", payload);
    io.emit("urgent_request", payload);
  });

  socket.on("disconnect", () => {
    console.log("❌ Socket Disconnected:", socket.id);
  });
});

// Make IO available in controllers
app.locals.io = io;

// ----------------------
// MIDDLEWARE
// ----------------------
const allowedOrigins = [
  "https://pulsebank.netlify.app",
  "https://pulsebank-dev.netlify.app",
  "http://localhost:3000",
  "http://localhost:3001",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// ----------------------
// API ROUTES
// ----------------------
app.use("/auth", authRoutes);
app.use("/donor", donorRoutes(io));
app.use("/request", requestRoutes);
app.use("/schedule", scheduleRoutes);

// Merge hospital routes
app.use("/hospital", hospitalRoutes);
app.use("/hospital", hospitalStatsRoutes);

app.use("/ai", aiRoutes);
app.use("/email", emailRoutes);

// ----------------------
// ERROR HANDLER
// ----------------------
app.use((err, req, res, next) => {
  console.error("❌ API Error:", err.message);
  res.status(500).json({ success: false, message: err.message });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ----------------------
// MONGO CONNECTION (FIXED)
// ----------------------
const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pulsebank";

mongoose
  .connect(MONGO) // ✅ NO OLD OPTIONS
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    // Initialize donation completion scheduler
    initializeDonationScheduler(io);

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
