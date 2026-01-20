module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/hooks/useSocket.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
let globalSocket = null;
function useSocket() {
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reuse global socket instance to avoid multiple connections
        if (!globalSocket) {
            globalSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:5000", {
                reconnection: true,
                reconnectionDelay: 1000,
                reconnectionDelayMax: 5000,
                reconnectionAttempts: 5
            });
            globalSocket.on("connect", ()=>{
                console.log("✅ Socket connected:", globalSocket?.id);
            });
            globalSocket.on("disconnect", ()=>{
                console.log("❌ Socket disconnected");
            });
            globalSocket.on("error", (error)=>{
                console.error("Socket error:", error);
            });
        }
        socketRef.current = globalSocket;
        return ()=>{
        // Don't disconnect here; keep the socket alive for reuse
        };
    }, []);
    return socketRef;
}
}),
"[project]/app/donor/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // "use client";
// // import Link from "next/link";
// // import { useEffect, useState, useRef } from "react";
// // import { jwtDecode } from "jwt-decode";
// // import {
// //   Heart,
// //   Droplet,
// //   MapPin,
// //   CheckCircle,
// //   Play,
// // } from "lucide-react";
// // import { io } from "socket.io-client";
// // export default function DonorDashboard() {
// //   const [history, setHistory] = useState<any[]>([]);
// //   const [requests, setRequests] = useState<any[]>([]);
// //   const [donorId, setDonorId] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
// //   const [available, setAvailable] = useState<boolean>(false);
// //   const [showVideo, setShowVideo] = useState(false);
// //   const socketRef = useRef<any>(null);
// //   // Load donorId from token
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       const decoded: any = jwtDecode(token);
// //       setDonorId(decoded.userId);
// //     }
// //   }, []);
// //   // Socket.io live request notifications
// //   useEffect(() => {
// //     if (!donorId) return;
// //     const socket = io("http://localhost:5000");
// //     socketRef.current = socket;
// //     socket.on("connect", () => {
// //       socket.emit("register", donorId);
// //     });
// //     socket.on("new_request", (req) => {
// //       alert(`🔔 NEW REQUEST: ${req.bloodType} → ${req.unitsNeeded} units needed`);
// //       setRequests((prev) => [req, ...prev]);
// //     });
// //     return () => socket.disconnect();
// //   }, [donorId]);
// //   // Fetch history
// //   useEffect(() => {
// //     if (!donorId) return;
// //     fetch(`http://localhost:5000/donor/history/${donorId}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setHistory(data.donations || []);
// //         setLoading(false);
// //       });
// //   }, [donorId]);
// //   // Fetch urgent requests
// //   useEffect(() => {
// //     fetch("http://localhost:5000/donor/requests")
// //       .then((res) => res.json())
// //       .then((data) => setRequests(data.requests || []));
// //   }, []);
// //   // Location handler
// //   const getLocation = () => {
// //     navigator.geolocation.getCurrentPosition(
// //       (pos) => {
// //         setLocation({
// //           lat: pos.coords.latitude,
// //           lng: pos.coords.longitude,
// //         });
// //         alert("📍 Location Captured Successfully");
// //       },
// //       () => alert("❌ Location access denied")
// //     );
// //   };
// //   // Mark availability
// //   const markAvailable = async () => {
// //     if (!location) return alert("Please share your location first");
// //     await fetch("http://localhost:5000/donor/availability", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         donorId,
// //         available: true,
// //         latitude: location.lat,
// //         longitude: location.lng,
// //       }),
// //     });
// //     setAvailable(true);
// //   };
// //   const markUnavailable = async () => {
// //     await fetch("http://localhost:5000/donor/availability", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ donorId, available: false }),
// //     });
// //     setAvailable(false);
// //   };
// //   return (
// //     <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
// //       {/* HEADER */}
// //       <header className="bg-red-600 text-white p-6 shadow-lg flex justify-between items-center sticky top-0 z-20">
// //         <div className="flex items-center gap-3 text-2xl font-bold">
// //           <Heart className="w-7 h-7 fill-white" />
// //           Pulse Bank
// //         </div>
// //         <div className="flex items-center gap-4">
// //           {location && (
// //             <div className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg">
// //               <MapPin className="w-5 h-5" /> Location Active
// //             </div>
// //           )}
// //           <button
// //             onClick={() => {
// //               localStorage.removeItem("token");
// //               window.location.href = "/";
// //             }}
// //             className="p-2 hover:bg-red-500 rounded-lg"
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       </header>
// //       {/* MAIN SECTION */}
// //       <div className="max-w-7xl mx-auto p-6">
// //         {/* HERO CARD */}
// //         <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600 grid md:grid-cols-2">
// //           <div className="p-10">
// //             <h2 className="text-3xl font-bold text-red-700">
// //               Welcome Back, Life Saver!
// //             </h2>
// //             <p className="text-gray-700 mt-2">
// //               Thank you for helping save lives ❤️
// //             </p>
// //             <div className="mt-4 space-y-1">
// //               <p>
// //                 <b>{history.length}</b> total donations
// //               </p>
// //               <p>
// //                 <b>{history.length * 400}</b> ml contributed
// //               </p>
// //             </div>
// //             <div className="mt-6 flex gap-4 flex-wrap">
// //               <button
// //                 onClick={getLocation}
// //                 className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow"
// //               >
// //                 <MapPin /> Share Location
// //               </button>
// //               {!available ? (
// //                 <button
// //                   onClick={markAvailable}
// //                   className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg shadow"
// //                 >
// //                   <CheckCircle /> Mark Available
// //                 </button>
// //               ) : (
// //                 <button
// //                   onClick={markUnavailable}
// //                   className="flex items-center gap-2 bg-gray-600 text-white px-5 py-3 rounded-lg shadow"
// //                 >
// //                   Disable Availability
// //                 </button>
// //               )}
// //             </div>
// //           </div>
// //           <div className="bg-gray-900 flex items-center justify-center">
// //             <Heart className="text-gray-400 w-20 h-20" />
// //           </div>
// //         </div>
// //         {/* VIDEO */}
// //         {!showVideo ? (
// //           <div className="bg-red-50 mt-8 p-6 rounded-xl flex items-center justify-between border">
// //             <div>
// //               <h3 className="text-2xl font-bold text-red-700">Feel Inspired?</h3>
// //               <p className="text-gray-600">
// //                 Watch stories of lives changed through donation.
// //               </p>
// //             </div>
// //             <button
// //               onClick={() => setShowVideo(true)}
// //               className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
// //             >
// //               <Play className="w-5" /> Watch Video
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="mt-8 shadow-lg rounded-xl overflow-hidden border">
// //             <iframe
// //               className="w-full aspect-video"
// //               src="https://www.youtube.com/embed/_JlmwDqaYA0"
// //             ></iframe>
// //             <button
// //               onClick={() => setShowVideo(false)}
// //               className="bg-red-600 w-full text-white py-2 font-semibold"
// //             >
// //               Close Video
// //             </button>
// //           </div>
// //         )}
// //         {/* SPECIAL SECTIONS */}
// //         <BloodDonationGuide />
// //         <CompatibilityChart />
// //         <ImpactStories />
// //         {/* URGENT REQUESTS */}
// //         <UrgentRequests requests={requests} />
// //       </div>
// //     </main>
// //   );
// // }
// // /* ---------------------------------------
// //   REUSABLE COMPONENTS
// // ----------------------------------------*/
// // function BloodDonationGuide() {
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">
// //         Blood Donation Frequency Guide
// //       </h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {[
// //           { type: "Whole Blood", wait: 56, year: 6 },
// //           { type: "Plasma", wait: 2, year: 24 },
// //           { type: "Platelets", wait: 2, year: 24 },
// //           { type: "Red Cells", wait: 112, year: 3 },
// //         ].map((item, i) => (
// //           <div key={i} className="p-5 border rounded-xl shadow">
// //             <h3 className="text-xl font-bold text-red-700">{item.type}</h3>
// //             <p>Can donate every {item.wait} days</p>
// //             <p className="text-sm text-gray-600">
// //               Yearly limit: {item.year} times
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function CompatibilityChart() {
// //   const types = [
// //     { type: "O-", donate: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"] },
// //     { type: "O+", donate: ["O+", "A+", "B+", "AB+"] },
// //     { type: "A-", donate: ["A-", "A+", "AB-", "AB+"] },
// //     { type: "A+", donate: ["A+", "AB+"] },
// //     { type: "B-", donate: ["B-", "B+", "AB-", "AB+"] },
// //     { type: "B+", donate: ["B+", "AB+"] },
// //     { type: "AB-", donate: ["AB-", "AB+"] },
// //     { type: "AB+", donate: ["AB+"] },
// //   ];
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">
// //         Blood Compatibility Chart
// //       </h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {types.map((b, i) => (
// //           <div key={i} className="p-5 border rounded-xl shadow">
// //             <h3 className="text-xl font-bold text-red-700 mb-2">{b.type}</h3>
// //             <p className="text-gray-700">Donates to:</p>
// //             <div className="flex flex-wrap gap-2 mt-1">
// //               {b.donate.map((d, j) => (
// //                 <span
// //                   key={j}
// //                   className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
// //                 >
// //                   {d}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function ImpactStories() {
// //   const stories = [
// //     { title: "Sarah's Second Chance", img: "/story1.jpg" },
// //     { title: "Newborn Battle Survivor", img: "/story2.jpg" },
// //     { title: "Accident Hero Recovery", img: "/story3.jpg" },
// //   ];
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">Stories of Impact</h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {stories.map((story, i) => (
// //           <div key={i} className="rounded-xl overflow-hidden shadow">
// //             <div className="h-40 bg-gray-200"></div>
// //             <div className="p-4 bg-red-50">
// //               <h3 className="font-bold text-red-700">{story.title}</h3>
// //               <p className="text-gray-600 text-sm">
// //                 Your donation made a real difference
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function UrgentRequests({ requests }: any) {
// //   return (
// //     <div className="mt-12">
// //       <h2 className="text-3xl font-bold text-red-700 mb-4">
// //         Nearby Hospitals Requesting Blood
// //       </h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {requests.map((req: any, i: number) => (
// //           <div
// //             key={i}
// //             className="bg-white rounded-xl shadow p-5 border-l-4 border-red-600"
// //           >
// //             <h3 className="text-xl font-bold text-red-700">
// //               {req.hospital || req.hospitalName || "Unknown Hospital"}
// //             </h3>
// //             <p className="text-gray-600 mt-1">
// //               {req.locationKm ? `${req.locationKm} km away` : ""}
// //             </p>
// //             <div className="flex justify-between mt-3">
// //               <span className="font-bold text-red-700">{req.bloodType}</span>
// //               <span className="font-bold">{req.unitsNeeded} units</span>
// //             </div>
// //             <p className="text-sm text-gray-600 mt-2">
// //               Urgency: {req.urgency || "Moderate"}
// //             </p>
// //             {/* FIXED SCHEDULE DONATION LINK */}
// //             <Link
// //               href={`/donor/schedule-donation?requestId=${req._id}&hospital=${encodeURIComponent(
// //                 req.hospital || req.hospitalName || ""
// //               )}&units=${req.unitsNeeded}&bloodType=${req.bloodType}`}
// //               className="w-full"
// //             >
// //               <button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg">
// //                 Schedule Donation
// //               </button>
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";
// // import Link from "next/link";
// // import { useEffect, useState, useRef } from "react";
// // import { jwtDecode } from "jwt-decode";
// // import {
// //   Heart,
// //   Droplet,
// //   MapPin,
// //   CheckCircle,
// //   Play,
// //   Calendar,
// //   Clock,
// //   AlertCircle,
// // } from "lucide-react";
// // import { io } from "socket.io-client";
// // export default function DonorDashboard() {
// //   const [history, setHistory] = useState<any[]>([]);
// //   const [requests, setRequests] = useState<any[]>([]);
// //   const [schedules, setSchedules] = useState<any[]>([]);
// //   const [donorId, setDonorId] = useState<string | null>(null);
// //   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
// //   const [available, setAvailable] = useState<boolean>(false);
// //   const [showVideo, setShowVideo] = useState(false);
// //   const socketRef = useRef<any>(null);
// //   /* ----------------------------------------------------------
// //       LOAD DONOR ID FROM TOKEN
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       const decoded: any = jwtDecode(token);
// //       setDonorId(decoded.userId);
// //     }
// //   }, []);
// //   /* ----------------------------------------------------------
// //       SOCKET.IO – LISTEN FOR HOSPITAL RESPONSE
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     if (!donorId) return;
// //     const socket = io("http://localhost:5000");
// //     socketRef.current = socket;
// //     socket.emit("register", donorId);
// //     socket.on("schedule_status_updated", (data) => {
// //       setSchedules((prev) =>
// //         prev.map((s) =>
// //           s._id === data.scheduleId ? { ...s, status: data.status } : s
// //         )
// //       );
// //        alert(`Your donation schedule was ${data.status.toUpperCase()}`);
// //     });
// //     return () => socket.disconnect();
// //   }, [donorId]);
// //   /* ----------------------------------------------------------
// //       FETCH DONATION HISTORY
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     if (!donorId) return;
// //     fetch(`http://localhost:5000/donor/history/${donorId}`)
// //       .then((res) => res.json())
// //       .then((data) => setHistory(data.donations || []));
// //   }, [donorId]);
// //   /* ----------------------------------------------------------
// //       FETCH DONOR SCHEDULES
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     if (!donorId) return;
// //     fetch(`http://localhost:5000/schedule/donor/${donorId}`)
// //       .then((res) => res.json())
// //       .then((data) => setSchedules(data.schedules || []));
// //   }, [donorId]);
// //   /* ----------------------------------------------------------
// //       FETCH URGENT REQUESTS
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     fetch("http://localhost:5000/donor/requests")
// //       .then((res) => res.json())
// //       .then((data) => setRequests(data.requests || []));
// //   }, []);
// //   /* ----------------------------------------------------------
// //       LOCATION
// //   ----------------------------------------------------------*/
// //   const getLocation = () => {
// //     navigator.geolocation.getCurrentPosition(
// //       (pos) => {
// //         setLocation({
// //           lat: pos.coords.latitude,
// //           lng: pos.coords.longitude,
// //         });
// //         alert("📍 Location Captured Successfully");
// //       },
// //       () => alert("❌ Please allow location access")
// //     );
// //   };
// //   /* ----------------------------------------------------------
// //       AVAILABILITY
// //   ----------------------------------------------------------*/
// //   const markAvailable = async () => {
// //     if (!location) return alert("Please share your location first");
// //     await fetch("http://localhost:5000/donor/availability", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         donorId,
// //         available: true,
// //         latitude: location.lat,
// //         longitude: location.lng,
// //       }),
// //     });
// //     setAvailable(true);
// //   };
// //   const markUnavailable = async () => {
// //     await fetch("http://localhost:5000/donor/availability", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ donorId, available: false }),
// //     });
// //     setAvailable(false);
// //   };
// //   /* ----------------------------------------------------------
// //       UI SECTION
// //   ----------------------------------------------------------*/
// //   return (
// //     <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
// //       {/* HEADER */}
// //       <header className="bg-red-600 text-white p-6 shadow-lg flex justify-between items-center sticky top-0 z-20">
// //         <div className="flex items-center gap-3 text-2xl font-bold">
// //           <Heart className="w-7 h-7 fill-white" />
// //           Pulse Bank
// //         </div>
// //         <button
// //           onClick={() => {
// //             localStorage.removeItem("token");
// //             window.location.href = "/";
// //           }}
// //           className="p-2 hover:bg-red-500 rounded-lg"
// //         >
// //           Logout
// //         </button>
// //       </header>
// //       {/* MAIN CONTENT */}
// //       <div className="max-w-7xl mx-auto p-6 space-y-12">
// //         {/* HERO */}
// //         <HeroCard
// //           history={history}
// //           location={location}
// //           getLocation={getLocation}
// //           available={available}
// //           markAvailable={markAvailable}
// //           markUnavailable={markUnavailable}
// //         />
// //         {/* VIDEO */}
// //         <VideoSection showVideo={showVideo} setShowVideo={setShowVideo} />
// //         {/* DONATION GUIDE */}
// //         <BloodDonationGuide />
// //         {/* COMPATIBILITY */}
// //         <CompatibilityChart />
// //         {/* IMPACT STORIES */}
// //         <ImpactStories />
// //         {/* ACTIVE REQUESTS */}
// //         <UrgentRequests requests={requests} />
// //         {/* SCHEDULED DONATIONS */}
// //         <ScheduledRequests schedules={schedules} />
// //         {/* DONATION HISTORY */}
// //         <DonationHistory history={history} />
// //       </div>
// //     </main>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     COMPONENTS
// // ----------------------------------------------------------*/
// // function HeroCard({ history, location, getLocation, available, markAvailable, markUnavailable }: any) {
// //   return (
// //     <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600 grid md:grid-cols-2">
// //       <div className="p-10">
// //         <h2 className="text-3xl font-bold text-red-700">Welcome Back, Life Saver!</h2>
// //         <p className="text-gray-700 mt-2">Thank you for helping save lives ❤️</p>
// //         <div className="mt-4 space-y-1">
// //           <p><b>{history.length}</b> total donations</p>
// //           <p><b>{history.length * 400}</b> ml contributed</p>
// //         </div>
// //         <div className="mt-6 flex gap-4 flex-wrap">
// //           <button onClick={getLocation} className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow flex gap-2 items-center">
// //             <MapPin /> Share Location
// //           </button>
// //           {!available ? (
// //             <button onClick={markAvailable} className="bg-green-600 text-white px-5 py-3 rounded-lg shadow flex gap-2 items-center">
// //               <CheckCircle /> Mark Available
// //             </button>
// //           ) : (
// //             <button onClick={markUnavailable} className="bg-gray-600 text-white px-5 py-3 rounded-lg shadow flex gap-2 items-center">
// //               Disable Availability
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //       <div className="bg-gray-900 flex items-center justify-center">
// //         <Heart className="text-gray-400 w-20 h-20" />
// //       </div>
// //     </div>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     VIDEO SECTION
// // ----------------------------------------------------------*/
// // function VideoSection({ showVideo, setShowVideo }: any) {
// //   return !showVideo ? (
// //     <div className="bg-red-50 mt-8 p-6 rounded-xl flex items-center justify-between border">
// //       <div>
// //         <h3 className="text-2xl font-bold text-red-700">Feel Inspired?</h3>
// //         <p className="text-gray-600">Watch stories of lives changed through donation.</p>
// //       </div>
// //       <button
// //         onClick={() => setShowVideo(true)}
// //         className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
// //       >
// //         <Play className="w-5" /> Watch Video
// //       </button>
// //     </div>
// //   ) : (
// //     <div className="mt-8 shadow-lg rounded-xl overflow-hidden border">
// //       <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/_JlmwDqaYA0"></iframe>
// //       <button
// //         onClick={() => setShowVideo(false)}
// //         className="bg-red-600 w-full text-white py-2 font-semibold"
// //       >
// //         Close Video
// //       </button>
// //     </div>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     SCHEDULED DONATIONS
// // ----------------------------------------------------------*/
// // function ScheduledRequests({ schedules }: any) {
// //   if (!schedules.length) return null;
// //   return (
// //     <div className="mt-12">
// //       <h2 className="text-3xl font-bold text-red-700 mb-4">My Scheduled Donations</h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {schedules.map((s: any, i: number) => (
// //           <div key={i} className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500">
// //             <h3 className="text-xl font-bold text-red-700">Hospital: {s.requestId?.hospital || "N/A"}</h3>
// //             <p className="text-gray-700 mt-2 flex items-center gap-2">
// //               <Calendar className="w-5" /> {s.date}
// //             </p>
// //             <p className="text-gray-700 flex items-center gap-2">
// //               <Clock className="w-5" /> {s.time}
// //             </p>
// //             <p className="mt-3">
// //               Status:{" "}
// //               <span className="px-3 py-1 rounded-lg bg-red-100 text-red-700 font-semibold">
// //                 {s.status.toUpperCase()}
// //               </span>
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     DONATION HISTORY
// // ----------------------------------------------------------*/
// // function DonationHistory({ history }: any) {
// //   if (!history.length) return null;
// //   return (
// //     <div className="mt-12">
// //       <h2 className="text-3xl font-bold text-red-700 mb-4">My Donation History</h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {history.map((h: any, i: number) => (
// //           <div key={i} className="bg-white p-5 rounded-xl shadow border-l-4 border-green-600">
// //             <p className="text-xl font-bold">+ {h.units} units</p>
// //             <p className="text-gray-700 mt-1">{new Date(h.date).toLocaleDateString()}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     OTHER SECTIONS (GUIDE, COMPATIBILITY, IMPACT)
// // ----------------------------------------------------------*/
// // function BloodDonationGuide() {
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">Blood Donation Frequency Guide</h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {[
// //           { type: "Whole Blood", wait: 56, year: 6 },
// //           { type: "Plasma", wait: 2, year: 24 },
// //           { type: "Platelets", wait: 2, year: 24 },
// //           { type: "Red Cells", wait: 112, year: 3 },
// //         ].map((item, i) => (
// //           <div key={i} className="p-5 border rounded-xl shadow">
// //             <h3 className="text-xl font-bold text-red-700">{item.type}</h3>
// //             <p>Can donate every {item.wait} days</p>
// //             <p className="text-sm text-gray-600">Yearly limit: {item.year} times</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function CompatibilityChart() {
// //   const types = [
// //     { type: "O-", donate: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"] },
// //     { type: "O+", donate: ["O+", "A+", "B+", "AB+"] },
// //     { type: "A-", donate: ["A-", "A+", "AB-", "AB+"] },
// //     { type: "A+", donate: ["A+", "AB+"] },
// //     { type: "B-", donate: ["B-", "B+", "AB-", "AB+"] },
// //     { type: "B+", donate: ["B+", "AB+"] },
// //     { type: "AB-", donate: ["AB-", "AB+"] },
// //     { type: "AB+", donate: ["AB+"] },
// //   ];
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">Blood Compatibility Chart</h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {types.map((b, i) => (
// //           <div key={i} className="p-5 border rounded-xl shadow">
// //             <h3 className="text-xl font-bold text-red-700 mb-2">{b.type}</h3>
// //             <p className="text-gray-700">Donates to:</p>
// //             <div className="flex flex-wrap gap-2 mt-1">
// //               {b.donate.map((d, j) => (
// //                 <span key={j} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
// //                   {d}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function ImpactStories() {
// //   const stories = [
// //     { title: "Sarah's Second Chance" },
// //     { title: "Newborn Battle Survivor" },
// //     { title: "Accident Hero Recovery" },
// //   ];
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">Stories of Impact</h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {stories.map((story, i) => (
// //           <div key={i} className="rounded-xl overflow-hidden shadow bg-red-50 p-4">
// //             <h3 className="font-bold text-red-700">{story.title}</h3>
// //             <p className="text-gray-600 text-sm mt-1">Your donation made a real difference</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function UrgentRequests({ requests }: any) {
// //   return (
// //     <div className="mt-12">
// //       <h2 className="text-3xl font-bold text-red-700 mb-4">Nearby Hospitals Requesting Blood</h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {requests.map((req: any, i: number) => (
// //           <div
// //             key={i}
// //             className="bg-white rounded-xl shadow p-5 border-l-4 border-red-600"
// //           >
// //             <h3 className="text-xl font-bold text-red-700">{req.hospital}</h3>
// //             <p className="text-gray-600 mt-1">{req.locationKm} km away</p>
// //             <div className="flex justify-between mt-3">
// //               <span className="font-bold text-red-700">{req.bloodType}</span>
// //               <span className="font-bold">{req.unitsNeeded} units</span>
// //             </div>
// //             <p className="text-sm text-gray-600 mt-2">Urgency: {req.urgency}</p>
// //             <Link
// //               href={`/donor/schedule-donation?requestId=${req._id}&hospital=${encodeURIComponent(
// //                 req.hospital
// //               )}&units=${req.unitsNeeded}&bloodType=${req.bloodType}`}
// //               className="w-full"
// //             >
// //               <button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg">
// //                 Schedule Donation
// //               </button>
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";
// // import Link from "next/link";
// // import { useEffect, useState, useRef } from "react";
// // import { jwtDecode } from "jwt-decode";
// // import {
// //   Heart,
// //   MapPin,
// //   CheckCircle,
// //   Play,
// //   Calendar,
// //   Clock,
// // } from "lucide-react";
// // import { io } from "socket.io-client";
// // export default function DonorDashboard() {
// //   const [history, setHistory] = useState<any[]>([]);
// //   const [requests, setRequests] = useState<any[]>([]);
// //   const [schedules, setSchedules] = useState<any[]>([]);
// //   const [donorId, setDonorId] = useState<string | null>(null);
// //   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
// //   const [available, setAvailable] = useState<boolean>(false);
// //   const [showVideo, setShowVideo] = useState(true); // 🔥 Auto-play video ON login
// //   const socketRef = useRef<any>(null);
// //   /* ----------------------------------------------------------
// //       LOAD DONOR ID
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       const decoded: any = jwtDecode(token);
// //       setDonorId(decoded.userId);
// //     }
// //   }, []);
// //   /* ----------------------------------------------------------
// //       SOCKET – LISTEN FOR HOSPITAL RESPONSE
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     if (!donorId) return;
// //     const socket = io("http://localhost:5000");
// //     socketRef.current = socket;
// //     socket.emit("register", donorId);
// //     socket.on("schedule_status_updated", (data) => {
// //       setSchedules((prev) =>
// //         prev.map((s) =>
// //           s._id === data.scheduleId ? { ...s, status: data.status } : s
// //         )
// //       );
// //       alert(`Your donation schedule was ${data.status.toUpperCase()}`);
// //     });
// //     return () => socket.disconnect();
// //   }, [donorId]);
// //   /* ----------------------------------------------------------
// //       FETCH HISTORY
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     if (!donorId) return;
// //     fetch(`http://localhost:5000/donor/history/${donorId}`)
// //       .then((res) => res.json())
// //       .then((data) => setHistory(data.donations || []));
// //   }, [donorId]);
// //   /* ----------------------------------------------------------
// //       FETCH SCHEDULED DONATIONS
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     if (!donorId) return;
// //     fetch(`http://localhost:5000/schedule/donor/${donorId}`)
// //       .then((res) => res.json())
// //       .then((data) => setSchedules(data.schedules || []));
// //   }, [donorId]);
// //   /* ----------------------------------------------------------
// //       FETCH REQUESTS
// //   ----------------------------------------------------------*/
// //   useEffect(() => {
// //     fetch("http://localhost:5000/donor/requests")
// //       .then((res) => res.json())
// //       .then((data) => setRequests(data.requests || []));
// //   }, []);
// //   /* ----------------------------------------------------------
// //       FIXED LOCATION POPUP FUNCTION
// //   ----------------------------------------------------------*/
// //   const getLocation = () => {
// //     if (!navigator.geolocation) {
// //       alert("❌ Your browser does not support location");
// //       return;
// //     }
// //     navigator.geolocation.getCurrentPosition(
// //       (pos) => {
// //         setLocation({
// //           lat: pos.coords.latitude,
// //           lng: pos.coords.longitude,
// //         });
// //         alert("📍 Location captured successfully!");
// //       },
// //       (err) => {
// //         if (err.code === 1) {
// //           alert("⚠ Please allow location access in browser popup.");
// //         } else {
// //           alert("❌ Unable to fetch location.");
// //         }
// //       },
// //       {
// //         enableHighAccuracy: true, // FORCE POPUP
// //         timeout: 8000,
// //         maximumAge: 0,
// //       }
// //     );
// //   };
// //   /* ----------------------------------------------------------
// //       MARK AVAILABLE ONLY AFTER LOCATION
// //   ----------------------------------------------------------*/
// //   const markAvailable = async () => {
// //     if (!location) return alert("⚠ Please share your location first!");
// //     await fetch("http://localhost:5000/donor/availability", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         donorId,
// //         available: true,
// //         latitude: location.lat,
// //         longitude: location.lng,
// //       }),
// //     });
// //     setAvailable(true);
// //   };
// //   const markUnavailable = async () => {
// //     await fetch("http://localhost:5000/donor/availability", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ donorId, available: false }),
// //     });
// //     setAvailable(false);
// //   };
// //   /* ----------------------------------------------------------
// //       UI SECTION
// //   ----------------------------------------------------------*/
// //   return (
// //     <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
// //       {/* HEADER */}
// //       <header className="bg-red-600 text-white p-6 shadow-lg flex justify-between items-center sticky top-0 z-20">
// //         <div className="flex items-center gap-3 text-2xl font-bold">
// //           <Heart className="w-7 h-7 fill-white" />
// //           Pulse Bank
// //         </div>
// //         <button
// //           onClick={() => {
// //             localStorage.removeItem("token");
// //             window.location.href = "/";
// //           }}
// //           className="p-2 hover:bg-red-500 rounded-lg"
// //         >
// //           Logout
// //         </button>
// //       </header>
// //       {/* BODY */}
// //       <div className="max-w-7xl mx-auto p-6 space-y-12">
// //         {/* HERO CARD */}
// //         <HeroCard
// //           history={history}
// //           location={location}
// //           getLocation={getLocation}
// //           available={available}
// //           markAvailable={markAvailable}
// //           markUnavailable={markUnavailable}
// //         />
// //         {/* VIDEO SECTION (AUTO-PLAY ON LOGIN) */}
// //         <VideoSection showVideo={showVideo} setShowVideo={setShowVideo} />
// //         <BloodDonationGuide />
// //         <CompatibilityChart />
// //         <ImpactStories />
// //         <UrgentRequests requests={requests} />
// //         <ScheduledRequests schedules={schedules} />
// //         <DonationHistory history={history} />
// //       </div>
// //     </main>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     HERO CARD
// // ----------------------------------------------------------*/
// // function HeroCard({ history, location, getLocation, available, markAvailable, markUnavailable }: any) {
// //   return (
// //     <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600 grid md:grid-cols-2">
// //       <div className="p-10">
// //         <h2 className="text-3xl font-bold text-red-700">Welcome Back, Life Saver!</h2>
// //         <div className="mt-4">
// //           <p><b>{history.length}</b> total donations</p>
// //           <p><b>{history.length * 400}</b> ml contributed</p>
// //         </div>
// //         <div className="mt-6 flex gap-4">
// //           <button onClick={getLocation} className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
// //             <MapPin /> Share Location
// //           </button>
// //           {!available ? (
// //             <button onClick={markAvailable} className="bg-green-600 text-white px-5 py-3 rounded-lg flex gap-2 items-center">
// //               <CheckCircle /> Mark Available
// //             </button>
// //           ) : (
// //             <button onClick={markUnavailable} className="bg-gray-600 text-white px-5 py-3 rounded-lg flex gap-2 items-center">
// //               Disable Availability
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //       <div className="bg-gray-900 flex items-center justify-center">
// //         <Heart className="text-gray-400 w-20 h-20" />
// //       </div>
// //     </div>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     VIDEO - AUTO OPEN ON LOGIN
// // ----------------------------------------------------------*/
// // function VideoSection({ showVideo, setShowVideo }: any) {
// //   return showVideo ? (
// //     <div className="mt-8 shadow-xl rounded-xl border overflow-hidden">
// //       <iframe
// //         className="w-full aspect-video"
// //         src="https://www.youtube.com/embed/_JlmwDqaYA0?autoplay=1" // AUTO-PLAY ENABLED
// //       ></iframe>
// //       <button
// //         onClick={() => setShowVideo(false)}
// //         className="bg-red-600 w-full text-white py-2"
// //       >
// //         Close Video
// //       </button>
// //     </div>
// //   ) : null;
// // }
// // /* ----------------------------------------------------------
// //     OTHER SECTIONS
// // ----------------------------------------------------------*/
// // function ScheduledRequests({ schedules }: any) {
// //   if (!schedules.length) return null;
// //   return (
// //     <div className="mt-12">
// //       <h2 className="text-3xl font-bold text-red-700 mb-4">My Scheduled Donations</h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {schedules.map((s: any, i: number) => (
// //           <div key={i} className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500">
// //             <h3 className="text-xl font-bold text-red-700">Hospital: {s.requestId?.hospital}</h3>
// //             <p className="mt-2 flex gap-2"><Calendar /> {s.date}</p>
// //             <p className="flex gap-2"><Clock /> {s.time}</p>
// //             <p className="mt-3 font-semibold">
// //               Status: <span className="bg-red-100 px-3 py-1 rounded-lg">{s.status.toUpperCase()}</span>
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function DonationHistory({ history }: any) {
// //   if (!history.length) return null;
// //   return (
// //     <div className="mt-12">
// //       <h2 className="text-3xl font-bold text-red-700 mb-4">My Donation History</h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {history.map((h: any, i: number) => (
// //           <div key={i} className="bg-white p-5 rounded-xl shadow border-l-4 border-green-600">
// //             <p className="text-xl font-bold">+ {h.units} units</p>
// //             <p>{new Date(h.date).toLocaleDateString()}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function ImpactStories() {
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">Stories of Impact</h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {["Sarah's Second Chance", "Newborn Battle Survivor", "Accident Hero Recovery"].map((title, i) => (
// //           <div key={i} className="p-4 rounded-xl shadow bg-red-50">
// //             <h3 className="font-bold text-red-700">{title}</h3>
// //             <p className="text-gray-600 text-sm">Your donation made a difference ❤️</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function UrgentRequests({ requests }: any) {
// //   return (
// //     <div className="mt-12">
// //       <h2 className="text-3xl font-bold text-red-700 mb-4">Nearby Hospitals Requesting Blood</h2>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         {requests.map((req: any, i: number) => (
// //           <div key={i} className="bg-white rounded-xl shadow p-5 border-l-4 border-red-600">
// //             <h3 className="text-xl font-bold text-red-700">{req.hospital}</h3>
// //             <p className="text-gray-600 mt-1">{req.locationKm} km away</p>
// //             <div className="flex justify-between mt-3">
// //               <span className="font-bold">{req.bloodType}</span>
// //               <span className="font-bold">{req.unitsNeeded} units</span>
// //             </div>
// //             <Link
// //               href={`/donor/schedule-donation?requestId=${req._id}&hospital=${encodeURIComponent(
// //                 req.hospital
// //               )}&units=${req.unitsNeeded}&bloodType=${req.bloodType}`}
// //             >
// //               <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg">
// //                 Schedule Donation
// //               </button>
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // /* ----------------------------------------------------------
// //     BLOOD GUIDE + COMPATIBILITY CHART
// // ----------------------------------------------------------*/
// // function BloodDonationGuide() {
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">Blood Donation Frequency Guide</h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {[
// //           { type: "Whole Blood", wait: 56, year: 6 },
// //           { type: "Plasma", wait: 2, year: 24 },
// //           { type: "Platelets", wait: 2, year: 24 },
// //           { type: "Red Cells", wait: 112, year: 3 },
// //         ].map((item, i) => (
// //           <div key={i} className="p-5 border rounded-xl shadow">
// //             <h3 className="font-bold text-red-700">{item.type}</h3>
// //             <p>Every {item.wait} days</p>
// //             <p className="text-gray-500 text-sm">Annual limit: {item.year}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // function CompatibilityChart() {
// //   const types = [
// //     { type: "O-", donate: ["Everyone"] },
// //     { type: "O+", donate: ["O+", "A+", "B+", "AB+"] },
// //     { type: "A-", donate: ["A-", "A+", "AB-", "AB+"] },
// //     { type: "A+", donate: ["A+", "AB+"] },
// //     { type: "B-", donate: ["B-", "B+", "AB-", "AB+"] },
// //     { type: "B+", donate: ["B+", "AB+"] },
// //     { type: "AB-", donate: ["AB-", "AB+"] },
// //     { type: "AB+", donate: ["AB+"] },
// //   ];
// //   return (
// //     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
// //       <h2 className="text-2xl font-bold text-red-700 mb-4">Blood Compatibility Chart</h2>
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {types.map((b, i) => (
// //           <div key={i} className="p-5 border rounded-xl shadow">
// //             <h3 className="font-bold text-red-700 mb-2">{b.type}</h3>
// //             <p>Donates to:</p>
// //             <div className="flex flex-wrap gap-2 mt-1">
// //               {b.donate.map((d, j) => (
// //                 <span key={j} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
// //                   {d}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import Link from "next/link";
// import { useEffect, useState, useRef } from "react";
// import { jwtDecode } from "jwt-decode";
// import {
//   Heart,
//   MapPin,
//   CheckCircle,
//   Play,
//   Calendar,
//   Clock,
// } from "lucide-react";
// import { io } from "socket.io-client";
// export default function DonorDashboard() {
//   const [history, setHistory] = useState<any[]>([]);
//   const [requests, setRequests] = useState<any[]>([]);
//   const [schedules, setSchedules] = useState<any[]>([]);
//   const [donorId, setDonorId] = useState<string | null>(null);
//   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
//   const [available, setAvailable] = useState<boolean>(false);
//   const [showVideo, setShowVideo] = useState(true); // autoplay
//   const socketRef = useRef<any>(null);
//   /* ----------------------------------------------
//         LOAD DONOR ID
//   ----------------------------------------------*/
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded: any = jwtDecode(token);
//       setDonorId(decoded.userId);
//     }
//   }, []);
//   /* ----------------------------------------------
//         SOCKET.IO — HOSPITAL RESPONSE LISTENER
//   ----------------------------------------------*/
//   useEffect(() => {
//     if (!donorId) return;
//     const socket = io("http://localhost:5000");
//     socketRef.current = socket;
//     socket.emit("register", donorId);
//     socket.on("schedule_status_updated", (data) => {
//       setSchedules((prev) =>
//         prev.map((s) =>
//           s._id === data.scheduleId ? { ...s, status: data.status } : s
//         )
//       );
//       alert(`Your donation schedule was ${data.status.toUpperCase()}`);
//     });
//     return () => socket.disconnect();
//   }, [donorId]);
//   /* ----------------------------------------------
//         FETCH DONATION HISTORY
//   ----------------------------------------------*/
//   useEffect(() => {
//     if (!donorId) return;
//     fetch(`http://localhost:5000/donor/history/${donorId}`)
//       .then((res) => res.json())
//       .then((data) => setHistory(data.donations || []));
//   }, [donorId]);
//   /* ----------------------------------------------
//         FETCH DONOR SCHEDULES
//   ----------------------------------------------*/
//   useEffect(() => {
//     if (!donorId) return;
//     fetch(`http://localhost:5000/schedule/donor/${donorId}`)
//       .then((res) => res.json())
//       .then((data) => setSchedules(data.schedules || []));
//   }, [donorId]);
//   /* ----------------------------------------------
//         FETCH ACTIVE REQUESTS
//   ----------------------------------------------*/
//   useEffect(() => {
//     fetch("http://localhost:5000/donor/requests")
//       .then((res) => res.json())
//       .then((data) => setRequests(data.requests || []));
//   }, []);
//   /* ----------------------------------------------
//         FIXED LOCATION POPUP — MANUAL ONLY
//   ----------------------------------------------*/
//   const getLocation = () => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setLocation({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         });
//         alert("📍 Location captured successfully!");
//       },
//       (err) => {
//         if (err.code === 1) {
//           alert("⚠ Please ALLOW location access in the popup.");
//         } else {
//           alert("❌ Unable to fetch location.");
//         }
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 8000,
//         maximumAge: 0,
//       }
//     );
//   };
//   /* ----------------------------------------------
//         AVAILABLE ONLY AFTER LOCATION
//   ----------------------------------------------*/
//   const markAvailable = async () => {
//     if (!location) return alert("⚠ Please click Share Location first!");
//     await fetch("http://localhost:5000/donor/availability", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         donorId,
//         available: true,
//         latitude: location.lat,
//         longitude: location.lng,
//       }),
//     });
//     setAvailable(true);
//     alert("You are now available for hospitals!");
//   };
//   const markUnavailable = async () => {
//     await fetch("http://localhost:5000/donor/availability", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ donorId, available: false }),
//     });
//     setAvailable(false);
//   };
//   /* ----------------------------------------------
//         UI SECTION — NO UI CHANGES DONE
//   ----------------------------------------------*/
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
//       {/* HEADER */}
//       <header className="bg-red-600 text-white p-6 shadow-lg flex justify-between items-center sticky top-0">
//         <div className="flex items-center gap-3 text-2xl font-bold">
//           <Heart className="w-7 h-7 fill-white" /> Pulse Bank
//         </div>
//         <button
//           onClick={() => {
//             localStorage.removeItem("token");
//             window.location.href = "/";
//           }}
//           className="p-2 hover:bg-red-500 rounded-lg"
//         >
//           Logout
//         </button>
//       </header>
//       {/* BODY */}
//       <div className="max-w-7xl mx-auto p-6 space-y-12">
//         {/* HERO */}
//         <HeroCard
//           history={history}
//           location={location}
//           getLocation={getLocation}
//           available={available}
//           markAvailable={markAvailable}
//           markUnavailable={markUnavailable}
//         />
//         {/* VIDEO — AUTOPLAY */}
//         <VideoSection showVideo={showVideo} setShowVideo={setShowVideo} />
//         <BloodDonationGuide />
//         <CompatibilityChart />
//         <ImpactStories />
//         <UrgentRequests requests={requests} />
//         <ScheduledRequests schedules={schedules} />
//         <DonationHistory history={history} />
//       </div>
//     </main>
//   );
// }
// /* ----------------------------------------------------------
//         </div>
//         <div className="mt-6 flex gap-4">
//           <button onClick={getLocation} className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
//             <MapPin /> Share Location
//           </button>
//           {!available ? (
//             <button onClick={markAvailable} className="bg-green-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
//               <CheckCircle /> Mark Available
//             </button>
//           ) : (
//             <button onClick={markUnavailable} className="bg-gray-600 text-white px-5 py-3 rounded-lg">
//               Disable Availability
//             </button>
//           )}
//         </div>
//       </div>
//       <div className="bg-gray-900 flex items-center justify-center">
//         <Heart className="text-gray-400 w-20 h-20" />
//       </div>
//     </div>
//   );
// }
// /* ----------------------------------------------------------
//     VIDEO SECTION — AUTO PLAY ENABLED
// ----------------------------------------------------------*/
// function VideoSection({ showVideo, setShowVideo }: any) {
//   return showVideo ? (
//     <div className="mt-8 shadow-xl rounded-xl border overflow-hidden">
//       <iframe
//         className="w-full aspect-video"
//         src="https://www.youtube.com/embed/_JlmwDqaYA0?autoplay=1"
//       ></iframe>
//       <button
//         onClick={() => setShowVideo(false)}
//         className="bg-red-600 w-full text-white py-2"
//       >
//         Close Video
//       </button>
//     </div>
//   ) : null;
// }
// /* ----------------------------------------------------------
//     OTHER SECTIONS (UNCHANGED)
// ----------------------------------------------------------*/
// function ScheduledRequests({ schedules }: any) {
//   if (!schedules.length) return null;
//   return (
//     <div className="mt-12">
//       <h2 className="text-3xl font-bold text-red-700 mb-4">My Scheduled Donations</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {schedules.map((s: any, i: number) => (
//           <div key={i} className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500">
//             <h3 className="text-xl font-bold text-red-700">Hospital: {s.requestId?.hospital}</h3>
//             <p className="mt-2 flex gap-2"><Calendar /> {s.date}</p>
//             <p className="flex gap-2"><Clock /> {s.time}</p>
//             <p className="mt-3 font-semibold">
//               Status: <span className="bg-red-100 px-3 py-1 rounded-lg">{s.status.toUpperCase()}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// function DonationHistory({ history }: any) {
//   if (!history.length) return null;
//   return (
//     <div className="mt-12">
//       <h2 className="text-3xl font-bold text-red-700 mb-4">My Donation History</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {history.map((h: any, i: number) => (
//           <div key={i} className="bg-white p-5 rounded-xl shadow border-l-4 border-green-600">
//             <p className="text-xl font-bold">+ {h.units} units</p>
//             <p>{new Date(h.date).toLocaleDateString()}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// function ImpactStories() {
//   return (
//     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
//       <h2 className="text-2xl font-bold text-red-700 mb-4">Stories of Impact</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {["Sarah's Second Chance", "Newborn Battle Survivor", "Accident Hero Recovery"].map((title, i) => (
//           <div key={i} className="p-4 rounded-xl shadow bg-red-50">
//             <h3 className="font-bold text-red-700">{title}</h3>
//             <p className="text-gray-600 text-sm">Your donation made a difference ❤️</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// function UrgentRequests({ requests }: any) {
//   return (
//     <div className="mt-12">
//       <h2 className="text-3xl font-bold text-red-700 mb-4">Nearby Hospitals Requesting Blood</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {requests.map((req: any, i) => (
//           <div key={i} className="bg-white rounded-xl shadow p-5 border-l-4 border-red-600">
//             <h3 className="text-xl font-bold text-red-700">{req.hospital}</h3>
//             <p className="text-gray-600 mt-1">{req.locationKm} km away</p>
//             <div className="flex justify-between mt-3">
//               <span className="font-bold">{req.bloodType}</span>
//               <span className="font-bold">{req.unitsNeeded} units</span>
//             </div>
//             <Link
//               href={`/donor/schedule-donation?requestId=${req._id}&hospital=${encodeURIComponent(
//                 req.hospital
//               )}&units=${req.unitsNeeded}&bloodType=${req.bloodType}`}
//             >
//               <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg">
//                 Schedule Donation
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// function BloodDonationGuide() {
//   return (
//     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
//       <h2 className="text-2xl font-bold text-red-700 mb-4">Blood Donation Frequency Guide</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {[{ type: "Whole Blood", wait: 56, year: 6 },
//           { type: "Plasma", wait: 2, year: 24 },
//           { type: "Platelets", wait: 2, year: 24 },
//           { type: "Red Cells", wait: 112, year: 3 }].map((i, index) => (
//           <div key={index} className="p-5 border rounded-xl shadow">
//             <h3 className="font-bold text-red-700">{i.type}</h3>
//             <p>Every {i.wait} days</p>
//             <p className="text-gray-500 text-sm">Annual limit: {i.year}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// function CompatibilityChart() {
//   const types = [
//     { type: "O-", donate: ["Everyone"] },
//     { type: "O+", donate: ["O+", "A+", "B+", "AB+"] },
//     { type: "A-", donate: ["A-", "A+", "AB-", "AB+"] },
//     { type: "A+", donate: ["A+", "AB+"] },
//     { type: "B-", donate: ["B-", "B+", "AB-", "AB+"] },
//     { type: "B+", donate: ["B+", "AB+"] },
//     { type: "AB-", donate: ["AB-", "AB+"] },
//     { type: "AB+", donate: ["AB+"] },
//   ];
//   return (
//     <div className="mt-10 p-6 bg-white rounded-xl shadow border">
//       <h2 className="text-2xl font-bold text-red-700 mb-4">Blood Compatibility Chart</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {types.map((b, i) => (
//           <div key={i} className="p-5 border rounded-xl shadow">
//             <h3 className="font-bold text-red-700 mb-2">{b.type}</h3>
//             <p>Donates to:</p>
//             <div className="flex flex-wrap gap-2 mt-1">
//               {b.donate.map((d, j) => (
//                 <span
//                   key={j}
//                   className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
//                 >
//                   {d}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>DonorDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSocket.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DonorDashboard() {
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hospitalRequests, setHospitalRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recipientRequests, setRecipientRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [schedules, setSchedules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [donorId, setDonorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [donorName, setDonorName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Donor");
    const [donorEmail, setDonorEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [donorPhone, setDonorPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [available, setAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-play video ON login, user asked this. Use true initially.
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSocket"])();
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ----------------------------------------------------------
      REFRESH ALL DATA
  ----------------------------------------------------------*/ const handleRefresh = async ()=>{
        setIsRefreshing(true);
        // Fetch history and schedules
        if (donorId) {
            try {
                const historyRes = await fetch(`http://localhost:5000/donor/history/${donorId}`);
                const historyData = await historyRes.json();
                setHistory(historyData.donations || []);
                const schedulesRes = await fetch(`http://localhost:5000/schedule/donor/${donorId}`);
                const schedulesData = await schedulesRes.json();
                setSchedules(schedulesData.schedules || []);
            } catch (err) {
                console.error("Refresh error:", err);
            }
        }
        // Fetch all requests
        try {
            const reqRes = await fetch("http://localhost:5000/request/all");
            const reqData = await reqRes.json();
            const all = reqData.requests || [];
            const hospitals = all.filter((r)=>r.hospital && r.hospital !== "");
            const recipients = all.filter((r)=>!r.hospital || r.hospital === "");
            setHospitalRequests(hospitals);
            setRecipientRequests(recipients);
            setRequests(all);
        } catch (err) {
            console.error("Request refresh error:", err);
        }
        setIsRefreshing(false);
    };
    /* ----------------------------------------------------------
      LOAD DONOR ID (from token)
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem("token");
        const stored = localStorage.getItem("user");
        if (token) {
            try {
                const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtDecode"])(token);
                setDonorId(decoded.userId);
            } catch (e) {
                console.error("Invalid token", e);
            }
        }
        if (stored) {
            const user = JSON.parse(stored);
            setDonorName(user.fullName || "Donor");
            setDonorEmail(user.email || "");
            setDonorPhone(user.phone || "");
        }
    }, []);
    /* ----------------------------------------------------------
      SOCKET – LISTEN FOR REAL-TIME UPDATES
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const socket = socketRef.current;
        if (!socket) return;
        socket.emit("register", donorId);
        socket.on("schedule_status_updated", (data)=>{
            setSchedules((prev)=>prev.map((s)=>s._id === data.scheduleId ? {
                        ...s,
                        status: data.status
                    } : s));
            alert(`Your donation schedule was ${data.status.toUpperCase()}`);
        });
        // Listen for new requests created by hospitals and auto-refresh
        socket.on("request_created", (payload)=>{
            setRequests((prev)=>[
                    payload,
                    ...prev
                ]);
            console.log("New request created:", payload);
        });
        // Listen for availability changes from other donors (optional)
        socket.on("availability_changed", (payload)=>{
            console.log("Donor availability updated:", payload);
        });
        // Listen for request fulfilled (when hospital marks donation completed)
        socket.on("request_fulfilled", (payload)=>{
            // Remove fulfilled request from active requests
            setRequests((prev)=>prev.filter((r)=>r._id !== payload.requestId));
            setHospitalRequests((prev)=>prev.filter((r)=>r._id !== payload.requestId));
            setRecipientRequests((prev)=>prev.filter((r)=>r._id !== payload.requestId));
            // Add to history
            setHistory((prev)=>[
                    ...prev,
                    {
                        _id: payload.requestId,
                        units: payload.unitsNeeded,
                        bloodType: payload.bloodType,
                        date: new Date()
                    }
                ]);
        });
        return ()=>{
            socket.off("schedule_status_updated");
            socket.off("request_created");
            socket.off("availability_changed");
            socket.off("request_fulfilled");
        };
    }, [
        donorId,
        socketRef
    ]);
    /* ----------------------------------------------------------
      FETCH HISTORY
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!donorId) return;
        fetch(`http://localhost:5000/donor/history/${donorId}`).then((res)=>res.json()).then((data)=>setHistory(data.donations || [])).catch((err)=>console.error("history fetch error", err));
    }, [
        donorId
    ]);
    /* ----------------------------------------------------------
      FETCH SCHEDULES
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!donorId) return;
        fetch(`http://localhost:5000/schedule/donor/${donorId}`).then((res)=>res.json()).then((data)=>setSchedules(data.schedules || [])).catch((err)=>console.error("schedules fetch err", err));
    }, [
        donorId
    ]);
    /* ----------------------------------------------------------
      FETCH URGENT REQUESTS
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("http://localhost:5000/request/all").then((res)=>res.json()).then((data)=>{
            const all = data.requests || [];
            // split between hospital-made (have hospital field) and recipient-made (no hospital)
            const hospitals = all.filter((r)=>r.hospital && r.hospital !== "");
            const recipients = all.filter((r)=>!r.hospital || r.hospital === "");
            setHospitalRequests(hospitals);
            setRecipientRequests(recipients);
            setRequests(all);
        }).catch((err)=>console.error("requests fetch err", err));
    }, []);
    /* ----------------------------------------------------------
      getLocation (explicit click -> forces browser permission popup)
      - we DO NOT auto-mark available here.
  ----------------------------------------------------------*/ const requestLocation = ()=>{
        if (!navigator.geolocation) return alert("Your browser does not support location");
        navigator.geolocation.getCurrentPosition((pos)=>{
            setLocation({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            });
            alert("Location captured");
        }, (err)=>{
            if (err.code === 1) alert("Please allow location access");
            else alert("Unable to fetch location");
        }, {
            enableHighAccuracy: true
        });
    };
    /* ----------------------------------------------------------
      markAvailable: only marks available after user clicked "Share Location" (so location exists)
  ----------------------------------------------------------*/ const markAvailable = async ()=>{
        if (!donorId) return alert("⚠ Not logged in");
        if (!location) return alert("⚠ Please share your location first!");
        try {
            const res = await fetch("http://localhost:5000/donor/availability", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    donorId,
                    available: true,
                    latitude: location.lat,
                    longitude: location.lng
                })
            });
            const data = await res.json();
            if (data.success) {
                setAvailable(true);
            } else {
                alert("Error: " + (data.message || "Could not mark available"));
            }
        } catch (err) {
            console.error(err);
            alert("Network error while marking availability");
        }
    };
    const markUnavailable = async ()=>{
        if (!donorId) return alert("⚠ Not logged in");
        try {
            const res = await fetch("http://localhost:5000/donor/availability", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    donorId,
                    available: false
                })
            });
            const data = await res.json();
            if (data.success) {
                setAvailable(false);
            } else {
                alert("Error: " + (data.message || "Could not mark unavailable"));
            }
        } catch (err) {
            console.error(err);
            alert("Network error while marking unavailable");
        }
    };
    /* ----------------------------------------------------------
      UI
  ----------------------------------------------------------*/ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-white via-red-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-red-600 text-white p-6 shadow-lg flex justify-between items-center sticky top-0 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-2xl font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-7 h-7 fill-white"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1935,
                                columnNumber: 11
                            }, this),
                            donorName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1934,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowProfileMenu(!showProfileMenu),
                                className: "p-2 rounded-full hover:bg-red-500 transition bg-white text-red-600 w-10 h-10 flex items-center justify-center",
                                title: "Profile menu",
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1940,
                                columnNumber: 11
                            }, this),
                            showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-12 bg-white text-gray-800 rounded-lg shadow-xl w-56 z-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-lg",
                                                children: donorName
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1951,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: donorEmail
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1952,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: donorPhone
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1953,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1950,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/donor/profile",
                                        className: "block px-4 py-2 hover:bg-gray-100 text-gray-800",
                                        onClick: ()=>setShowProfileMenu(false),
                                        children: "📋 Edit Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1955,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            localStorage.clear();
                                            window.location.href = "/";
                                        },
                                        className: "w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 border-t",
                                        children: "🚪 Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1962,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1949,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1939,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1933,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto p-6 space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroCard, {
                        history: history,
                        location: location,
                        getLocation: requestLocation,
                        available: available,
                        markAvailable: markAvailable,
                        markUnavailable: markUnavailable
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1979,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoSection, {
                        showVideo: showVideo,
                        setShowVideo: setShowVideo
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1989,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BloodDonationGuide, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1992,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompatibilityChart, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1993,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImpactStories, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1994,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UrgentRequests, {
                        hospitalRequests: hospitalRequests,
                        recipientRequests: recipientRequests
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1995,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScheduledRequests, {
                        schedules: schedules
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1996,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DonationHistory, {
                        history: history
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1997,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1977,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1931,
        columnNumber: 5
    }, this);
}
/* ----------------------------------------------------------
   COMPONENTS - same structure and style you had
----------------------------------------------------------*/ function HeroCard({ history, location, getLocation, available, markAvailable, markUnavailable }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600 grid md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-red-700",
                        children: "Welcome Back, Life Saver!"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2011,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: history.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2014,
                                        columnNumber: 14
                                    }, this),
                                    " total donations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2014,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: history.length * 400
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2015,
                                        columnNumber: 14
                                    }, this),
                                    " ml contributed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2015,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2013,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: getLocation,
                                className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold hover:shadow-lg transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2020,
                                        columnNumber: 13
                                    }, this),
                                    " Share Location"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2019,
                                columnNumber: 11
                            }, this),
                            !available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markAvailable,
                                className: "bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg flex gap-2 items-center font-semibold hover:shadow-lg transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2025,
                                        columnNumber: 15
                                    }, this),
                                    " Mark Available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2024,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markUnavailable,
                                className: "bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg flex gap-2 items-center font-semibold hover:shadow-lg transition",
                                children: "❌ Unavailable"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2028,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2018,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2010,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: "text-gray-400 w-20 h-20"
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 2036,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2035,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2009,
        columnNumber: 5
    }, this);
}
/* ----------------------------------------------------------
   VIDEO SECTION - auto-play enabled via YouTube ?autoplay=1
   NOTE: Some browsers block autoplay with sound; YouTube will attempt silent autoplay.
----------------------------------------------------------*/ function VideoSection({ showVideo, setShowVideo }) {
    return showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 shadow-xl rounded-xl border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                className: "w-full aspect-video",
                src: "https://www.youtube.com/embed/_JlmwDqaYA0?autoplay=1&rel=0&modestbranding=1",
                allow: "autoplay; encrypted-media"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2049,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowVideo(false),
                className: "bg-red-600 w-full text-white py-2",
                children: "Close Video"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2055,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2048,
        columnNumber: 5
    }, this) : null;
}
/* ----------------------------------------------------------
   Remaining components: ScheduledRequests, DonationHistory, ImpactStories, UrgentRequests,
   BloodDonationGuide, CompatibilityChart
   (Use the exact implementations from your existing file — I'm copying the same)
----------------------------------------------------------*/ function ScheduledRequests({ schedules }) {
    if (!schedules.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-4",
                children: "My Scheduled Donations"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2072,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: schedules.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl shadow border-l-4 border-orange-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-red-700",
                                children: [
                                    "Hospital: ",
                                    s.requestId?.hospital
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2077,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2079,
                                        columnNumber: 44
                                    }, this),
                                    " ",
                                    s.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2079,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2080,
                                        columnNumber: 39
                                    }, this),
                                    " ",
                                    s.time
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2080,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 font-semibold",
                                children: [
                                    "Status: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-red-100 px-3 py-1 rounded-lg",
                                        children: s.status.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2083,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2082,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2076,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2074,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2071,
        columnNumber: 5
    }, this);
}
function DonationHistory({ history }) {
    if (!history.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-4",
                children: "My Donation History"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2097,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: history.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl shadow border-l-4 border-green-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold",
                                children: [
                                    "+ ",
                                    h.units,
                                    " units"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: new Date(h.date).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2101,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2099,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2096,
        columnNumber: 5
    }, this);
}
function ImpactStories() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-6 bg-white rounded-xl shadow border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-red-700 mb-4",
                children: "Stories of Impact"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: [
                    "Sarah's Second Chance",
                    "Newborn Battle Survivor",
                    "Accident Hero Recovery"
                ].map((title, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl shadow bg-red-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-red-700",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "Your donation made a difference ❤️"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2118,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2113,
        columnNumber: 5
    }, this);
}
function UrgentRequests({ hospitalRequests, recipientRequests }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-4",
                children: "Nearby Urgent Requests"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-red-600 mb-3",
                        children: "Hospital Requests"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: (hospitalRequests || []).map((req, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow p-5 border-l-4 border-red-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-red-700",
                                        children: req.hospital || "Hospital"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mt-1",
                                        children: [
                                            req.locationKm ?? "N/A",
                                            " km away"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: req.bloodType
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 2143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    req.unitsNeeded,
                                                    " units"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 2144,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/donor/schedule-donation?requestId=${req._id}&hospital=${encodeURIComponent(req.hospital || "")}&units=${req.unitsNeeded}&bloodType=${req.bloodType}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full mt-4 bg-red-600 text-white py-3 rounded-lg",
                                            children: "Schedule Donation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 2148,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `h-${i}`, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2138,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-rose-600 mb-3",
                        children: "Recipient Requests"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: (recipientRequests || []).map((req, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow p-5 border-l-4 border-rose-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-rose-600",
                                        children: req.requestedByName || req.requesterName || req.requestedBy || "Recipient"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mt-1",
                                        children: [
                                            req.locationKm ?? "N/A",
                                            " km away"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: req.bloodType
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 2165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    req.unitsNeeded,
                                                    " units"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 2166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/donor/schedule-donation?requestId=${req._id}&hospital=&units=${req.unitsNeeded}&bloodType=${req.bloodType}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full mt-4 bg-rose-600 text-white py-3 rounded-lg",
                                            children: "Schedule Donation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 2171,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `r-${i}`, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2160,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2130,
        columnNumber: 5
    }, this);
}
/* ----------------------------------------------------------
   BloodDonationGuide + CompatibilityChart (same as earlier)
----------------------------------------------------------*/ function BloodDonationGuide() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-6 bg-white rounded-xl shadow border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-red-700 mb-4",
                children: "Blood Donation Frequency Guide"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    {
                        type: "Whole Blood",
                        wait: 56,
                        year: 6
                    },
                    {
                        type: "Plasma",
                        wait: 2,
                        year: 24
                    },
                    {
                        type: "Platelets",
                        wait: 2,
                        year: 24
                    },
                    {
                        type: "Red Cells",
                        wait: 112,
                        year: 3
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border rounded-xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-red-700",
                                children: item.type
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Every ",
                                    item.wait,
                                    " days"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm",
                                children: [
                                    "Annual limit: ",
                                    item.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2197,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2187,
        columnNumber: 5
    }, this);
}
function CompatibilityChart() {
    const types = [
        {
            type: "O-",
            donate: [
                "Everyone"
            ]
        },
        {
            type: "O+",
            donate: [
                "O+",
                "A+",
                "B+",
                "AB+"
            ]
        },
        {
            type: "A-",
            donate: [
                "A-",
                "A+",
                "AB-",
                "AB+"
            ]
        },
        {
            type: "A+",
            donate: [
                "A+",
                "AB+"
            ]
        },
        {
            type: "B-",
            donate: [
                "B-",
                "B+",
                "AB-",
                "AB+"
            ]
        },
        {
            type: "B+",
            donate: [
                "B+",
                "AB+"
            ]
        },
        {
            type: "AB-",
            donate: [
                "AB-",
                "AB+"
            ]
        },
        {
            type: "AB+",
            donate: [
                "AB+"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-6 bg-white rounded-xl shadow border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-red-700 mb-4",
                children: "Blood Compatibility Chart"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: types.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border rounded-xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-red-700 mb-2",
                                children: b.type
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Donates to:"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mt-1",
                                children: b.donate.map((d, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs",
                                        children: d
                                    }, j, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2231,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2229,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2226,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2221,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d9e4294._.js.map