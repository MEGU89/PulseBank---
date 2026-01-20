(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/donor/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
//     HERO CARD
// ----------------------------------------------------------*/
// function HeroCard({ history, location, getLocation, available, markAvailable, markUnavailable }: any) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600 grid md:grid-cols-2">
//       <div className="p-10">
//         <h2 className="text-3xl font-bold text-red-700">Welcome Back, Life Saver!</h2>
//         <div className="mt-4">
//           <p><b>{history.length}</b> total donations</p>
//           <p><b>{history.length * 400}</b> ml contributed</p>
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DonorDashboard() {
    _s();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [schedules, setSchedules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [donorId, setDonorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [available, setAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-play video ON login, user asked this. Use true initially.
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ----------------------------------------------------------
      LOAD DONOR ID (from token)
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(token);
                    setDonorId(decoded.userId);
                } catch (e) {
                    console.error("Invalid token", e);
                }
            }
        }
    }["DonorDashboard.useEffect"], []);
    /* ----------------------------------------------------------
      SOCKET – LISTEN FOR HOSPITAL RESPONSE (real-time schedule updates)
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            if (!donorId) return;
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:5000");
            socketRef.current = socket;
            socket.emit("register", donorId);
            socket.on("schedule_status_updated", {
                "DonorDashboard.useEffect": (data)=>{
                    setSchedules({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (s)=>s._id === data.scheduleId ? {
                                        ...s,
                                        status: data.status
                                    } : s
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    alert(`Your donation schedule was ${data.status.toUpperCase()}`);
                }
            }["DonorDashboard.useEffect"]);
            return ({
                "DonorDashboard.useEffect": ()=>{
                    socket.disconnect();
                }
            })["DonorDashboard.useEffect"];
        }
    }["DonorDashboard.useEffect"], [
        donorId
    ]);
    /* ----------------------------------------------------------
      FETCH HISTORY
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            if (!donorId) return;
            fetch(`http://localhost:5000/donor/history/${donorId}`).then({
                "DonorDashboard.useEffect": (res)=>res.json()
            }["DonorDashboard.useEffect"]).then({
                "DonorDashboard.useEffect": (data)=>setHistory(data.donations || [])
            }["DonorDashboard.useEffect"]).catch({
                "DonorDashboard.useEffect": (err)=>console.error("history fetch error", err)
            }["DonorDashboard.useEffect"]);
        }
    }["DonorDashboard.useEffect"], [
        donorId
    ]);
    /* ----------------------------------------------------------
      FETCH SCHEDULES
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            if (!donorId) return;
            fetch(`http://localhost:5000/schedule/donor/${donorId}`).then({
                "DonorDashboard.useEffect": (res)=>res.json()
            }["DonorDashboard.useEffect"]).then({
                "DonorDashboard.useEffect": (data)=>setSchedules(data.schedules || [])
            }["DonorDashboard.useEffect"]).catch({
                "DonorDashboard.useEffect": (err)=>console.error("schedules fetch err", err)
            }["DonorDashboard.useEffect"]);
        }
    }["DonorDashboard.useEffect"], [
        donorId
    ]);
    /* ----------------------------------------------------------
      FETCH URGENT REQUESTS
  ----------------------------------------------------------*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            fetch("http://localhost:5000/donor/requests").then({
                "DonorDashboard.useEffect": (res)=>res.json()
            }["DonorDashboard.useEffect"]).then({
                "DonorDashboard.useEffect": (data)=>setRequests(data.requests || [])
            }["DonorDashboard.useEffect"]).catch({
                "DonorDashboard.useEffect": (err)=>console.error("requests fetch err", err)
            }["DonorDashboard.useEffect"]);
        }
    }["DonorDashboard.useEffect"], []);
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
  ----------------------------------------------------------*/ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-white via-red-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-red-600 text-white p-6 shadow-lg flex justify-between items-center sticky top-0 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-2xl font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-7 h-7 fill-white"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1858,
                                columnNumber: 11
                            }, this),
                            "Pulse Bank"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1857,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            localStorage.removeItem("token");
                            window.location.href = "/";
                        },
                        className: "p-2 hover:bg-red-500 rounded-lg",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1862,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1856,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto p-6 space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroCard, {
                        history: history,
                        location: location,
                        getLocation: requestLocation,
                        available: available,
                        markAvailable: markAvailable,
                        markUnavailable: markUnavailable
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1876,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoSection, {
                        showVideo: showVideo,
                        setShowVideo: setShowVideo
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1886,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BloodDonationGuide, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1889,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompatibilityChart, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1890,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImpactStories, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1891,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UrgentRequests, {
                        requests: requests
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1892,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScheduledRequests, {
                        schedules: schedules
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1893,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonationHistory, {
                        history: history
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1894,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1874,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1854,
        columnNumber: 5
    }, this);
}
_s(DonorDashboard, "5/NjQrFWVywfFcYz6Frw5P5mBW0=");
_c = DonorDashboard;
/* ----------------------------------------------------------
   COMPONENTS - same structure and style you had
----------------------------------------------------------*/ function HeroCard({ history, location, getLocation, available, markAvailable, markUnavailable }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600 grid md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-red-700",
                        children: "Welcome Back, Life Saver!"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1908,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: history.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1911,
                                        columnNumber: 14
                                    }, this),
                                    " total donations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1911,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: history.length * 400
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1912,
                                        columnNumber: 14
                                    }, this),
                                    " ml contributed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1912,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1910,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: getLocation,
                                className: "bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1917,
                                        columnNumber: 13
                                    }, this),
                                    " Share Location"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1916,
                                columnNumber: 11
                            }, this),
                            !available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markAvailable,
                                className: "bg-green-600 text-white px-5 py-3 rounded-lg flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1922,
                                        columnNumber: 15
                                    }, this),
                                    " Mark Available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1921,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markUnavailable,
                                className: "bg-gray-600 text-white px-5 py-3 rounded-lg flex gap-2 items-center",
                                children: "Disable Availability"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1925,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1915,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1907,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: "text-gray-400 w-20 h-20"
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1933,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1932,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1906,
        columnNumber: 5
    }, this);
}
_c1 = HeroCard;
/* ----------------------------------------------------------
   VIDEO SECTION - auto-play enabled via YouTube ?autoplay=1
   NOTE: Some browsers block autoplay with sound; YouTube will attempt silent autoplay.
----------------------------------------------------------*/ function VideoSection({ showVideo, setShowVideo }) {
    return showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 shadow-xl rounded-xl border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                className: "w-full aspect-video",
                src: "https://www.youtube.com/embed/_JlmwDqaYA0?autoplay=1&rel=0&modestbranding=1",
                allow: "autoplay; encrypted-media"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1946,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowVideo(false),
                className: "bg-red-600 w-full text-white py-2",
                children: "Close Video"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1952,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1945,
        columnNumber: 5
    }, this) : null;
}
_c2 = VideoSection;
/* ----------------------------------------------------------
   Remaining components: ScheduledRequests, DonationHistory, ImpactStories, UrgentRequests,
   BloodDonationGuide, CompatibilityChart
   (Use the exact implementations from your existing file — I'm copying the same)
----------------------------------------------------------*/ function ScheduledRequests({ schedules }) {
    if (!schedules.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-4",
                children: "My Scheduled Donations"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1969,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: schedules.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl shadow border-l-4 border-orange-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-red-700",
                                children: [
                                    "Hospital: ",
                                    s.requestId?.hospital
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1974,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1976,
                                        columnNumber: 44
                                    }, this),
                                    " ",
                                    s.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1976,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1977,
                                        columnNumber: 39
                                    }, this),
                                    " ",
                                    s.time
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1977,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 font-semibold",
                                children: [
                                    "Status: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-red-100 px-3 py-1 rounded-lg",
                                        children: s.status.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1980,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1979,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1973,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1971,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1968,
        columnNumber: 5
    }, this);
}
_c3 = ScheduledRequests;
function DonationHistory({ history }) {
    if (!history.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-4",
                children: "My Donation History"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1994,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: history.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl shadow border-l-4 border-green-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold",
                                children: [
                                    "+ ",
                                    h.units,
                                    " units"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1999,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: new Date(h.date).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2000,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1998,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1996,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1993,
        columnNumber: 5
    }, this);
}
_c4 = DonationHistory;
function ImpactStories() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-6 bg-white rounded-xl shadow border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-red-700 mb-4",
                children: "Stories of Impact"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2011,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: [
                    "Sarah's Second Chance",
                    "Newborn Battle Survivor",
                    "Accident Hero Recovery"
                ].map((title, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl shadow bg-red-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-red-700",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2016,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "Your donation made a difference ❤️"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2017,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2015,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2013,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2010,
        columnNumber: 5
    }, this);
}
_c5 = ImpactStories;
function UrgentRequests({ requests }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-4",
                children: "Nearby Hospitals Requesting Blood"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2028,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: requests.map((req, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow p-5 border-l-4 border-red-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-red-700",
                                children: req.hospital
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2033,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1",
                                children: [
                                    req.locationKm,
                                    " km away"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2035,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: req.bloodType
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2038,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: [
                                            req.unitsNeeded,
                                            " units"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2039,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2037,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/donor/schedule-donation?requestId=${req._id}&hospital=${encodeURIComponent(req.hospital)}&units=${req.unitsNeeded}&bloodType=${req.bloodType}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full mt-4 bg-red-600 text-white py-3 rounded-lg",
                                    children: "Schedule Donation"
                                }, void 0, false, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 2043,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2042,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2032,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2030,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2027,
        columnNumber: 5
    }, this);
}
_c6 = UrgentRequests;
/* ----------------------------------------------------------
   BloodDonationGuide + CompatibilityChart (same as earlier)
----------------------------------------------------------*/ function BloodDonationGuide() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-6 bg-white rounded-xl shadow border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-red-700 mb-4",
                children: "Blood Donation Frequency Guide"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2061,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border rounded-xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-red-700",
                                children: item.type
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2071,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Every ",
                                    item.wait,
                                    " days"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2072,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm",
                                children: [
                                    "Annual limit: ",
                                    item.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2073,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2070,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2063,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2060,
        columnNumber: 5
    }, this);
}
_c7 = BloodDonationGuide;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-6 bg-white rounded-xl shadow border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-red-700 mb-4",
                children: "Blood Compatibility Chart"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2095,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: types.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border rounded-xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-red-700 mb-2",
                                children: b.type
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Donates to:"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mt-1",
                                children: b.donate.map((d, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs",
                                        children: d
                                    }, j, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 2104,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 2102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 2099,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 2097,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 2094,
        columnNumber: 5
    }, this);
}
_c8 = CompatibilityChart;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DonorDashboard");
__turbopack_context__.k.register(_c1, "HeroCard");
__turbopack_context__.k.register(_c2, "VideoSection");
__turbopack_context__.k.register(_c3, "ScheduledRequests");
__turbopack_context__.k.register(_c4, "DonationHistory");
__turbopack_context__.k.register(_c5, "ImpactStories");
__turbopack_context__.k.register(_c6, "UrgentRequests");
__turbopack_context__.k.register(_c7, "BloodDonationGuide");
__turbopack_context__.k.register(_c8, "CompatibilityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_donor_dashboard_page_tsx_fa808af6._.js.map