# 🚀 PulseBank - Complete Render Deployment Guide

Deploy **both frontend and backend** on Render with automatic GitHub deployments!

---

## Part 1: Deploy Backend on Render

### Step 1: Create Render Account
1. Go to https://render.com
2. Click "Sign up"
3. Select "Sign up with GitHub"
4. Authorize Render to access your GitHub

### Step 2: Deploy Backend Service

1. **Click "New +" button** (top-right)
2. Select **"Web Service"**
3. **Connect GitHub:**
   - Click "Connect account" (if not connected)
   - Select your `PulseBank-main` repository
   - Authorize Render

4. **Configure Service:**
   - **Name:** `pulsebank-backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Runtime:** `node-18` (or latest)

5. **Set Environment Variables:**
   - Scroll down to "Environment Variables"
   - Click "Add Environment Variable" for each:

   ```
   MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/pulsebank?retryWrites=true&w=majority
   JWT_SECRET = your-random-secure-secret-key-here
   EMAIL_SERVICE = gmail
   EMAIL_USER = your-email@gmail.com
   EMAIL_PASSWORD = your-app-specific-password
   TWILIO_SID = your-twilio-sid
   TWILIO_AUTH_TOKEN = your-twilio-auth-token
   NODE_ENV = production
   PORT = 5000
   ```

6. **Click "Create Web Service"**
7. **Wait 5-10 minutes** for deployment to complete
8. **Copy your backend URL** (will look like: `https://pulsebank-backend.onrender.com`)
   - You'll see it at the top of the page
   - **SAVE THIS URL** - you'll need it for frontend!

---

## Part 2: Deploy Frontend on Render

### Step 1: Create `.env.production` File

In your project root (`PulseBank-main/`), create a file named `.env.production`:

```
NEXT_PUBLIC_API_URL=https://pulsebank-backend.onrender.com
NEXT_PUBLIC_SOCKET_URL=https://pulsebank-backend.onrender.com
```

**Replace `pulsebank-backend` with your actual backend service name!**

### Step 2: Update `next.config.mjs`

Make sure your Next.js config supports static export (for Render):

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### Step 3: Commit Changes

```bash
git add .env.production next.config.mjs
git commit -m "Configure Render deployment"
git push origin main
```

### Step 4: Deploy Frontend on Render

1. **In Render Dashboard, click "New +" → "Web Service"**
2. **Connect GitHub:**
   - Select your `PulseBank-main` repository
   - Authorize if needed

3. **Configure Service:**
   - **Name:** `pulsebank-frontend`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Runtime:** `node-18`

4. **Set Environment Variables:**
   ```
   NEXT_PUBLIC_API_URL = https://pulsebank-backend.onrender.com
   NEXT_PUBLIC_SOCKET_URL = https://pulsebank-backend.onrender.com
   ```
   (Same as `.env.production`)

5. **Click "Create Web Service"**
6. **Wait 10-15 minutes** for build and deployment
7. **Copy your frontend URL** (will look like: `https://pulsebank-frontend.onrender.com`)

---

## Part 3: Update Backend CORS for Frontend URL

Now that you have your frontend URL, update your backend CORS:

### In `Backend/server.js`, update CORS config:

```javascript
const allowedOrigins = [
  "https://pulsebank-frontend.onrender.com",
  "https://your-custom-domain.com", // if using custom domain later
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
```

### Update Socket.io CORS similarly:

```javascript
const socketOrigins = [
  "https://pulsebank-frontend.onrender.com",
  "https://your-custom-domain.com",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

const io = new Server(server, {
  cors: {
    origin: socketOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
```

### Commit and push:

```bash
git add Backend/server.js
git commit -m "Update CORS for Render frontend URL"
git push origin main
```

**Both services will automatically redeploy!** ✅

---

## Part 4: Verify Deployment

### Check Backend

1. Go to your backend URL: `https://pulsebank-backend.onrender.com`
2. You should see a JSON response or error (which is fine, you're just checking it's running)
3. Open browser console (F12) - check for any CORS errors

### Check Frontend

1. Go to your frontend URL: `https://pulsebank-frontend.onrender.com`
2. Wait for it to load (first load takes 30 seconds if it's been idle)
3. Try to sign up as a hospital
4. Check browser Network tab (F12):
   - Look for `register` API call
   - Should show **Status 200 or 201** (success) ✅
   - If it fails, check error message

---

## Part 5: Enable Custom Domain (Optional)

### Add Custom Domain to Frontend

1. **In Render Dashboard → Frontend Service → Settings**
2. Scroll to **"Custom Domain"**
3. Enter your domain (e.g., `pulsebank.com`)
4. Follow DNS instructions from your domain registrar
5. Update `.env.production` with custom domain:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-domain.com
   NEXT_PUBLIC_SOCKET_URL=https://your-backend-domain.com
   ```

---

## Part 6: Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Frontend shows 404** | Wait 5 mins for build, check build logs in Render dashboard |
| **Signup fails with network error** | Check NEXT_PUBLIC_API_URL is correct, verify backend is running |
| **CORS error in console** | Make sure frontend URL is in backend CORS allowed origins |
| **Build fails** | Check build logs, make sure all dependencies in package.json |
| **Backend won't start** | Check MONGO_URI is correct, verify MongoDB Atlas connection |
| **Socket.io not connecting** | Ensure NEXT_PUBLIC_SOCKET_URL matches backend service URL |

---

## Part 7: View Logs

### Backend Logs
1. Render Dashboard → Backend Service → Logs
2. Check for errors during deployment

### Frontend Logs
1. Render Dashboard → Frontend Service → Logs
2. Check for build errors

### Browser Console
1. Open your frontend URL
2. Press F12 → Console tab
3. Look for any errors in red

---

## Part 8: Automatic Deployments

**Great news!** Render auto-deploys when you push to GitHub:

```bash
# Just make changes and push
git add .
git commit -m "Your changes"
git push origin main

# Both frontend & backend redeploy automatically! ✅
```

You can disable this in Render settings if needed.

---

## Part 9: Database Setup

**If you haven't already:**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a free cluster
4. Click "Connect" → Get connection string
5. Copy the URI
6. Add to backend environment variables as `MONGO_URI`

---

## Summary Checklist

- [ ] Create Render account
- [ ] Deploy backend service
- [ ] Add backend environment variables (MONGO_URI, JWT_SECRET, etc.)
- [ ] Copy backend URL
- [ ] Create `.env.production` with backend URL
- [ ] Deploy frontend service
- [ ] Add frontend environment variables
- [ ] Update CORS in `Backend/server.js`
- [ ] Commit and push
- [ ] Wait for both services to redeploy
- [ ] Test signup functionality
- [ ] Check network tab for successful API calls
- [ ] Add custom domain (optional)

---

## Useful Links

- Render Docs: https://render.com/docs
- Render Node.js Guide: https://render.com/docs/deploy-node-express-app
- Render Next.js Guide: https://render.com/docs/deploy-next
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Render Dashboard: https://dashboard.render.com

---

## Questions?

1. **Where's my backend URL?** → Render Dashboard → Backend Service → top of page
2. **Where's my frontend URL?** → Render Dashboard → Frontend Service → top of page
3. **How do I update code?** → Just git push, auto-deploys!
4. **Where do I add environment variables?** → Service → Settings → Environment
5. **How long does deployment take?** → 5-15 minutes usually

Start with **Part 1** and follow step by step! 🚀
