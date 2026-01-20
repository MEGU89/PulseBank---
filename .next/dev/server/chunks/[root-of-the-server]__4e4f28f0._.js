module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const body = await request.json();
        const message = body?.message;
        const user = body?.user || null; // { role?: string, id?: string }
        if (!message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Message is required"
            }, {
                status: 400
            });
        }
        // Role-aware AI response logic (simple rule-based, replaceable with real AI)
        const reply = generateAIResponse(message, user);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            reply
        });
    } catch (error) {
        console.error("Chat API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to process message"
        }, {
            status: 500
        });
    }
}
// Role-aware AI response generator
function generateAIResponse(message, user) {
    const lowerMessage = (message || "").toLowerCase();
    const role = user?.role || "guest";
    // Role-specific quick replies
    if (role === "donor") {
        if (lowerMessage.includes("where") && lowerMessage.includes("donate")) {
            return "You can donate at any certified blood center. To schedule, go to the 'Schedule Donation' section in your dashboard — enter your availability and preferred hospital.";
        }
        if (lowerMessage.includes("availability") || lowerMessage.includes("available")) {
            return "To mark yourself available, share your location and press 'Mark Available' on your dashboard. We'll notify nearby hospitals when you are available.";
        }
    }
    if (role === "recipient") {
        if (lowerMessage.includes("request") || lowerMessage.includes("need")) {
            return "To request blood, go to the hospital dashboard and create a new request. Include blood type, units needed, and urgency. Hospitals will notify donors nearby.";
        }
        if (lowerMessage.includes("status") || lowerMessage.includes("track")) {
            return "If you've submitted a request, check the Requests table under your hospital dashboard for updates. Hospitals update status once donors respond.";
        }
    }
    // General answers (works for all roles)
    if (lowerMessage.includes("blood type") || lowerMessage.includes("compatible")) {
        return "Blood compatibility depends on the ABO and Rh systems. O- is the universal donor, AB+ is the universal recipient. For specific compatibility, consult medical staff.";
    }
    if (lowerMessage.includes("donate") || lowerMessage.includes("donation")) {
        return "Whole blood can be donated every 56 days (8 weeks). Ensure you meet eligibility criteria and stay hydrated. Contact local centers for appointment details.";
    }
    if (lowerMessage.includes("health") || lowerMessage.includes("safe")) {
        return "Blood donation is safe when performed at licensed centers; donors are screened and procedures are followed to ensure safety.";
    }
    if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
        return `Hello${role && role !== "guest" ? " " + role : ""}! I'm Pulse Bot. I can help with donation info, requests, scheduling, and your dashboard.`;
    }
    if (lowerMessage.includes("hospital") || lowerMessage.includes("service")) {
        return "Pulse Bank connects donors and recipients. Use the dashboards to create requests, mark availability, and schedule donations.";
    }
    // Fallback
    return "I can help with blood donation info, scheduling, requests and dashboard actions. Please ask a specific question or include your role (donor/recipient/hospital).";
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e4f28f0._.js.map