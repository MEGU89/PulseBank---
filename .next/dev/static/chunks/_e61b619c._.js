(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/donation-confirmation-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DonationConfirmationModal",
    ()=>DonationConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DonationConfirmationModal({ isOpen, request, onConfirm, onReject, isLoading = false }) {
    _s();
    const [rejectNotes, setRejectNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showRejectForm, setShowRejectForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen || !request) return null;
    const isRecipient = request.isRecipientRequest;
    const requestor = isRecipient ? request.recipientName || "Recipient" : request.hospital || "Hospital";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-lg max-w-md w-full mx-4 p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-12 h-12 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/components/donation-confirmation-modal.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-center text-gray-900 mb-2",
                    children: "Confirm Donation?"
                }, void 0, false, {
                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-50 rounded-lg p-4 mb-6 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600",
                                    children: "From:"
                                }, void 0, false, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: requestor
                                }, void 0, false, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/donation-confirmation-modal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600",
                                    children: "Blood Type:"
                                }, void 0, false, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-red-600",
                                    children: request.bloodType
                                }, void 0, false, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/donation-confirmation-modal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600",
                                    children: "Units Needed:"
                                }, void 0, false, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: request.unitsNeeded
                                }, void 0, false, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/donation-confirmation-modal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600",
                                    children: "Distance:"
                                }, void 0, false, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: [
                                        request.locationKm || "N/A",
                                        " km"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/donation-confirmation-modal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                showRejectForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Why are you rejecting? (optional)"
                        }, void 0, false, {
                            fileName: "[project]/components/donation-confirmation-modal.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: rejectNotes,
                            onChange: (e)=>setRejectNotes(e.target.value),
                            placeholder: "Enter reason for rejecting...",
                            className: "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500",
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/components/donation-confirmation-modal.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: showRejectForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowRejectForm(false);
                                    setRejectNotes("");
                                },
                                disabled: isLoading,
                                className: "flex-1 px-4 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/components/donation-confirmation-modal.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onReject(rejectNotes);
                                    setShowRejectForm(false);
                                    setRejectNotes("");
                                },
                                disabled: isLoading,
                                className: "flex-1 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/donation-confirmation-modal.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this),
                                    "Reject"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/donation-confirmation-modal.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowRejectForm(true),
                                disabled: isLoading,
                                className: "flex-1 px-4 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50",
                                children: "Reject"
                            }, void 0, false, {
                                fileName: "[project]/components/donation-confirmation-modal.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onConfirm,
                                disabled: isLoading,
                                className: "flex-1 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/donation-confirmation-modal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    "Confirm"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/donation-confirmation-modal.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-gray-600 mt-3",
                    children: "Processing..."
                }, void 0, false, {
                    fileName: "[project]/components/donation-confirmation-modal.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/donation-confirmation-modal.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/donation-confirmation-modal.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(DonationConfirmationModal, "48kxZcKxeDWFchW40sYjRayJoIc=");
_c = DonationConfirmationModal;
var _c;
__turbopack_context__.k.register(_c, "DonationConfirmationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
let globalSocket = null;
function useSocket() {
    _s();
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocket.useEffect": ()=>{
            // Reuse global socket instance to avoid multiple connections
            if (!globalSocket) {
                globalSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:5000", {
                    reconnection: true,
                    reconnectionDelay: 1000,
                    reconnectionDelayMax: 5000,
                    reconnectionAttempts: 5
                });
                globalSocket.on("connect", {
                    "useSocket.useEffect": ()=>{
                        console.log("✅ Socket connected:", globalSocket?.id);
                    }
                }["useSocket.useEffect"]);
                globalSocket.on("disconnect", {
                    "useSocket.useEffect": ()=>{
                        console.log("❌ Socket disconnected");
                    }
                }["useSocket.useEffect"]);
                globalSocket.on("error", {
                    "useSocket.useEffect": (error)=>{
                        console.error("Socket error:", error);
                    }
                }["useSocket.useEffect"]);
            }
            socketRef.current = globalSocket;
            return ({
                "useSocket.useEffect": ()=>{
                // Don't disconnect here; keep the socket alive for reuse
                }
            })["useSocket.useEffect"];
        }
    }["useSocket.useEffect"], []);
    return socketRef;
}
_s(useSocket, "8c0rAI93JE8jpOVTnobt43KkFfY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/donor/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DonorDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$donation$2d$confirmation$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/donation-confirmation-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplet.js [app-client] (ecmascript) <export default as Droplet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hospital.js [app-client] (ecmascript) <export default as Hospital>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ambulance.js [app-client] (ecmascript) <export default as Ambulance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSocket.ts [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LeafletMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = LeafletMap;
const HospitalRequestsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/HospitalRequestsMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/HospitalRequestsMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = HospitalRequestsMap;
;
;
;
;
;
function DonorDashboard() {
    _s();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hospitalRequests, setHospitalRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recipientRequests, setRecipientRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [schedules, setSchedules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [donorId, setDonorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [donorName, setDonorName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Donor");
    const [donorEmail, setDonorEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [donorPhone, setDonorPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [donorImage, setDonorImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [available, setAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locationSharing, setLocationSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sleepTime, setSleepTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [currentQuoteIndex, setCurrentQuoteIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-play video ON login, user asked this. Use true initially.
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Donation confirmation modal state
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRequest, setSelectedRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmLoading, setConfirmLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"])();
    // Motivational quotes for blood donors
    const motivationalQuotes = [
        "🩸 Your donation saves up to 3 lives. Be a hero today!",
        "🩸 One donation, three lives. You have the power to help.",
        "🩸 Blood donation is a gift of love. Give today, save a life tomorrow.",
        "🩸 Donate blood. It's the simplest way to make a difference.",
        "🩸 Every drop counts. Your blood donation matters more than you know.",
        "🩸 Be someone's type O positive. Donate blood today.",
        "🩸 A patient without blood is a patient without hope. Donate now.",
        "🩸 Your generosity flows through us. Thank you for donating!",
        "🩸 Blood donation is the greatest gift of all. Keep giving.",
        "🩸 Donate blood and become a real-life superhero."
    ];
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* -----------------------------------------------
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
        await loadRequests();
        setIsRefreshing(false);
    };
    // LOAD DONOR ID (from token)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            const token = localStorage.getItem("token");
            const stored = localStorage.getItem("user");
            if (token) {
                try {
                    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(token);
                    setDonorId(decoded.userId);
                } catch (e) {
                    console.error("Invalid token", e);
                }
            }
            if (stored) {
                const user = JSON.parse(stored);
                console.log("[Dashboard] Loading user from localStorage:", user);
                console.log("[Dashboard] Profile image:", user.profileImage);
                setDonorName(user.fullName || "Donor");
                setDonorEmail(user.email || "");
                setDonorPhone(user.phone || "");
                setDonorImage(user.profileImage || "");
                // Load availability status
                setAvailable(user.available || false);
                setSleepTime(user.sleepTime || 20);
                // Check if location sharing was auto-disabled due to sleep time expiry
                if (user.locationSharingStoppedAt) {
                    const stoppedTime = new Date(user.locationSharingStoppedAt).getTime();
                    const sleepDuration = (user.sleepTime || 20) * 60 * 1000; // Convert to milliseconds
                    const currentTime = new Date().getTime();
                    if (currentTime - stoppedTime > sleepDuration) {
                        // Sleep time has expired, clear location
                        setLocationSharing(false);
                        setLocation(null);
                        // Clear from localStorage and backend
                        user.locationSharingStoppedAt = null;
                        localStorage.setItem("user", JSON.stringify(user));
                    } else {
                        // Still within sleep time
                        setLocationSharing(true);
                    }
                } else {
                    setLocationSharing(user.locationSharing || false);
                }
            }
        }
    }["DonorDashboard.useEffect"], []);
    // Keep donor info (including avatar) in sync with profile page updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            const onUserUpdated = {
                "DonorDashboard.useEffect.onUserUpdated": (event)=>{
                    const updated = event?.detail || {};
                    setDonorName(updated.fullName || "Donor");
                    setDonorEmail(updated.email || "");
                    setDonorPhone(updated.phone || "");
                    setDonorImage(updated.profileImage || "");
                }
            }["DonorDashboard.useEffect.onUserUpdated"];
            window.addEventListener("user-updated", onUserUpdated);
            return ({
                "DonorDashboard.useEffect": ()=>window.removeEventListener("user-updated", onUserUpdated)
            })["DonorDashboard.useEffect"];
        }
    }["DonorDashboard.useEffect"], []);
    // Also sync when localStorage changes (e.g., profile updated in another tab)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            const syncFromStorage = {
                "DonorDashboard.useEffect.syncFromStorage": ()=>{
                    const storedUser = localStorage.getItem("user");
                    if (!storedUser) return;
                    try {
                        const parsed = JSON.parse(storedUser);
                        setDonorName(parsed.fullName || "Donor");
                        setDonorEmail(parsed.email || "");
                        setDonorPhone(parsed.phone || "");
                        setDonorImage(parsed.profileImage || "");
                    } catch (e) {
                        console.error("Unable to parse stored user", e);
                    }
                }
            }["DonorDashboard.useEffect.syncFromStorage"];
            window.addEventListener("storage", syncFromStorage);
            return ({
                "DonorDashboard.useEffect": ()=>window.removeEventListener("storage", syncFromStorage)
            })["DonorDashboard.useEffect"];
        }
    }["DonorDashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            const quoteInterval = setInterval({
                "DonorDashboard.useEffect.quoteInterval": ()=>{
                    setCurrentQuoteIndex({
                        "DonorDashboard.useEffect.quoteInterval": (prevIndex)=>(prevIndex + 1) % motivationalQuotes.length
                    }["DonorDashboard.useEffect.quoteInterval"]);
                }
            }["DonorDashboard.useEffect.quoteInterval"], 8000);
            return ({
                "DonorDashboard.useEffect": ()=>clearInterval(quoteInterval)
            })["DonorDashboard.useEffect"];
        }
    }["DonorDashboard.useEffect"], [
        motivationalQuotes.length
    ]);
    //     // SOCKET – LISTEN FOR REAL-TIME UPDATES
    // ----------------------------------------------------------*/
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            const socket = socketRef.current;
            if (!socket) return;
            socket.emit("register", donorId);
            socket.on("schedule_status_updated", {
                "DonorDashboard.useEffect": (data)=>{
                    console.log("[Socket] Schedule status updated:", data);
                    setSchedules({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (s)=>s._id === data.scheduleId ? {
                                        ...s,
                                        status: data.status
                                    } : s
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    loadSchedules(); // Reload all schedules and requests
                    alert(`Your donation schedule was ${data.status.toUpperCase()}`);
                }
            }["DonorDashboard.useEffect"]);
            // Listen for new requests created by hospitals and auto-refresh
            socket.on("request_created", {
                "DonorDashboard.useEffect": (payload)=>{
                    if (!payload || !payload._id) return;
                    setRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.some({
                                "DonorDashboard.useEffect": (r)=>r._id === payload._id
                            }["DonorDashboard.useEffect"]) ? prev : [
                                payload,
                                ...prev
                            ]
                    }["DonorDashboard.useEffect"]);
                    // Insert into hospitalRequests or recipientRequests depending on flag
                    if (payload.isRecipientRequest) {
                        setRecipientRequests({
                            "DonorDashboard.useEffect": (prev)=>prev.some({
                                    "DonorDashboard.useEffect": (r)=>r._id === payload._id
                                }["DonorDashboard.useEffect"]) ? prev : [
                                    payload,
                                    ...prev
                                ]
                        }["DonorDashboard.useEffect"]);
                    } else if (payload.hospital && payload.hospital !== "") {
                        setHospitalRequests({
                            "DonorDashboard.useEffect": (prev)=>prev.some({
                                    "DonorDashboard.useEffect": (r)=>r._id === payload._id
                                }["DonorDashboard.useEffect"]) ? prev : [
                                    payload,
                                    ...prev
                                ]
                        }["DonorDashboard.useEffect"]);
                    }
                    console.log("New request created:", payload);
                }
            }["DonorDashboard.useEffect"]);
            // Listen for availability changes from other donors (optional)
            socket.on("availability_changed", {
                "DonorDashboard.useEffect": (payload)=>{
                    console.log("Donor availability updated:", payload);
                }
            }["DonorDashboard.useEffect"]);
            // Listen for request fulfilled (when hospital marks donation completed)
            socket.on("request_fulfilled", {
                "DonorDashboard.useEffect": (payload)=>{
                    // Remove fulfilled request from active requests
                    setRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.filter({
                                "DonorDashboard.useEffect": (r)=>r._id !== payload.requestId
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    setHospitalRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.filter({
                                "DonorDashboard.useEffect": (r)=>r._id !== payload.requestId
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    setRecipientRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.filter({
                                "DonorDashboard.useEffect": (r)=>r._id !== payload.requestId
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    // Add to history
                    setHistory({
                        "DonorDashboard.useEffect": (prev)=>[
                                ...prev,
                                {
                                    _id: payload.requestId,
                                    units: payload.unitsNeeded,
                                    bloodType: payload.bloodType,
                                    date: new Date()
                                }
                            ]
                    }["DonorDashboard.useEffect"]);
                }
            }["DonorDashboard.useEffect"]);
            // Listen for donation confirmation/rejection status updates
            socket.on("request_confirmed", {
                "DonorDashboard.useEffect": (payload)=>{
                    if (!payload || !payload._id) return;
                    console.log("Request confirmation status updated:", payload);
                    // Update the request in both hospital and recipient request lists
                    setHospitalRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (r)=>r._id === payload._id ? {
                                        ...r,
                                        confirmationStatus: payload.confirmationStatus,
                                        confirmedBy: payload.confirmedBy,
                                        confirmationNotes: payload.confirmationNotes
                                    } : r
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    setRecipientRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (r)=>r._id === payload._id ? {
                                        ...r,
                                        confirmationStatus: payload.confirmationStatus,
                                        confirmedBy: payload.confirmedBy,
                                        confirmationNotes: payload.confirmationNotes
                                    } : r
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    // Update the main requests list
                    setRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (r)=>r._id === payload._id ? {
                                        ...r,
                                        confirmationStatus: payload.confirmationStatus,
                                        confirmedBy: payload.confirmedBy,
                                        confirmationNotes: payload.confirmationNotes
                                    } : r
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                }
            }["DonorDashboard.useEffect"]);
            // Listen for donation completion (when scheduled time arrives)
            socket.on("donation_completed", {
                "DonorDashboard.useEffect": (payload)=>{
                    if (!payload || !payload.requestId) return;
                    console.log("Donation completed (time reached):", payload);
                    // Update the request status to "Successful"
                    setHospitalRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (r)=>r._id === payload.requestId ? {
                                        ...r,
                                        confirmationStatus: "Successful",
                                        status: "Fulfilled"
                                    } : r
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    setRecipientRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (r)=>r._id === payload.requestId ? {
                                        ...r,
                                        confirmationStatus: "Successful",
                                        status: "Fulfilled"
                                    } : r
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                    setRequests({
                        "DonorDashboard.useEffect": (prev)=>prev.map({
                                "DonorDashboard.useEffect": (r)=>r._id === payload.requestId ? {
                                        ...r,
                                        confirmationStatus: "Successful",
                                        status: "Fulfilled"
                                    } : r
                            }["DonorDashboard.useEffect"])
                    }["DonorDashboard.useEffect"]);
                }
            }["DonorDashboard.useEffect"]);
            return ({
                "DonorDashboard.useEffect": ()=>{
                    socket.off("schedule_status_updated");
                    socket.off("request_created");
                    socket.off("availability_changed");
                    socket.off("request_fulfilled");
                    socket.off("request_confirmed");
                    socket.off("donation_completed");
                }
            })["DonorDashboard.useEffect"];
        }
    }["DonorDashboard.useEffect"], [
        donorId,
        socketRef
    ]);
    //     FETCH HISTORY
    // ----------------------------------------------------------*/
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    //     FETCH SCHEDULES (with deduplication)
    // ----------------------------------------------------------*/
    const loadRequests = async ()=>{
        try {
            const reqRes = await fetch("http://localhost:5000/request/all");
            const reqData = await reqRes.json();
            const all = reqData.requests || [];
            console.log("[Dashboard] Fetched raw requests:", all.length);
            if (all.length > 0) {
                console.log("[Dashboard] Sample raw request:", {
                    hospital: all[0].hospital,
                    phone: all[0].phone,
                    address: all[0].address,
                    location: all[0].location
                });
            }
            // Calculate distance from donor location to hospital location (Haversine formula)
            const calculateDistance = (lat1, lon1, lat2, lon2)=>{
                const R = 6371; // Earth's radius in km
                const dLat = (lat2 - lat1) * Math.PI / 180;
                const dLon = (lon2 - lon1) * Math.PI / 180;
                const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return Math.round(R * c * 10) / 10; // Round to 1 decimal place
            };
            // Calculate distance if donor has shared location
            const withDistances = all.map((r)=>{
                if (location && r.location && r.location.latitude && r.location.longitude) {
                    const distance = calculateDistance(location.lat, location.lng, r.location.latitude, r.location.longitude);
                    console.log(`[Dashboard] Distance calc: Donor(${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}) -> Hospital ${r.hospital}(${r.location.latitude}, ${r.location.longitude}) = ${distance}km`);
                    return {
                        ...r,
                        calculatedDistance: distance
                    };
                }
                return r;
            });
            // Filter hospitals: only those with valid locations AND within 20km radius
            const hospitals = withDistances.filter((r)=>r.hospital && r.hospital !== "" && !r.isRecipientRequest && r.location && r.location.latitude && r.location.longitude && (location ? r.calculatedDistance <= 20 : false) // Only show if within 20km when location is shared
            );
            // Filter recipient requests: must have location AND within 20km AND marked as recipient request
            const recipients = withDistances.filter((r)=>r.isRecipientRequest === true && r.location && r.location.latitude && r.location.longitude && (location ? r.calculatedDistance <= 20 : true) // Show if within 20km or no location shared
            );
            // Show ALL hospital requests (no deduplication) - each request is different and should be displayed
            setHospitalRequests(hospitals);
            setRecipientRequests(recipients);
            setRequests(withDistances);
            console.log("[Dashboard] Loaded hospitals within 20km:", hospitals.length);
            if (hospitals.length > 0) {
                const sample = hospitals[0];
                console.log("[Dashboard] Sample hospital after processing:", {
                    hospital: sample.hospital,
                    phone: sample.phone,
                    address: sample.address,
                    calculatedDistance: sample.calculatedDistance,
                    location: sample.location
                });
            }
        } catch (err) {
            console.error("Request fetch error:", err);
        }
    };
    const loadSchedules = async ()=>{
        if (!donorId) return;
        try {
            const res = await fetch(`http://localhost:5000/schedule/donor/${donorId}`);
            const data = await res.json();
            const allSchedules = data.schedules || [];
            // Remove duplicates based on requestId
            const uniqueSchedules = Array.from(new Map(allSchedules.map((s)=>[
                    s.requestId?._id || s.requestId || s._id,
                    s
                ])).values());
            setSchedules(uniqueSchedules);
            console.log("[Dashboard] Loaded schedules:", uniqueSchedules);
            // Reload requests after schedules to show updated request status
            loadRequests();
        } catch (err) {
            console.error("schedules fetch err", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            loadSchedules();
        }
    }["DonorDashboard.useEffect"], [
        donorId
    ]);
    // Auto-refresh schedules when page loads (in case coming back from schedule page)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            const timer = setTimeout({
                "DonorDashboard.useEffect.timer": ()=>{
                    loadSchedules();
                }
            }["DonorDashboard.useEffect.timer"], 500);
            return ({
                "DonorDashboard.useEffect": ()=>clearTimeout(timer)
            })["DonorDashboard.useEffect"];
        }
    }["DonorDashboard.useEffect"], [
        donorId
    ]);
    // Auto-request location on page load if not already shared
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            if (!location && donorId) {
                const timer = setTimeout({
                    "DonorDashboard.useEffect.timer": ()=>{
                        if (!navigator.geolocation) return;
                        navigator.geolocation.getCurrentPosition({
                            "DonorDashboard.useEffect.timer": (pos)=>{
                                const newLocation = {
                                    lat: pos.coords.latitude,
                                    lng: pos.coords.longitude
                                };
                                setLocation(newLocation);
                                console.log("[Donor Dashboard] Location auto-requested:", pos.coords);
                            }
                        }["DonorDashboard.useEffect.timer"], {
                            "DonorDashboard.useEffect.timer": (err)=>{
                                console.log("[Donor Dashboard] Location permission denied or error:", err);
                                // Still load requests even if location fails - they'll show without distance filter
                                loadRequests();
                            }
                        }["DonorDashboard.useEffect.timer"], {
                            enableHighAccuracy: true,
                            timeout: 15000
                        });
                    }
                }["DonorDashboard.useEffect.timer"], 500);
                return ({
                    "DonorDashboard.useEffect": ()=>clearTimeout(timer)
                })["DonorDashboard.useEffect"];
            }
        }
    }["DonorDashboard.useEffect"], [
        donorId
    ]);
    // Reload requests whenever location changes to update distance calculations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonorDashboard.useEffect": ()=>{
            if (location) {
                loadRequests();
            }
        }
    }["DonorDashboard.useEffect"], [
        location
    ]);
    //     FETCH URGENT REQUESTS & CALCULATE DISTANCES
    // ----------------------------------------------------------*/
    // Handled by loadRequests() function and its useEffect hook
    //     getLocation (explicit click -> forces browser permission popup)
    //     - we DO NOT auto-mark available here.
    // ----------------------------------------------------------*/
    const requestLocation = ()=>{
        if (!navigator.geolocation) return alert("Your browser does not support location");
        navigator.geolocation.getCurrentPosition(async (pos)=>{
            const newLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            console.log("[Donor Dashboard] Location shared:", newLocation);
            setLocation(newLocation);
            setLocationSharing(true);
            // Save to localStorage
            const stored = localStorage.getItem("user");
            if (stored) {
                const user = JSON.parse(stored);
                user.locationSharing = true;
                user.locationSharingStoppedAt = null;
                localStorage.setItem("user", JSON.stringify(user));
            }
            // Wait a moment for state to update, then reload requests
            setTimeout(async ()=>{
                await loadRequests();
                console.log("[Donor Dashboard] Requests reloaded after location share");
            }, 100);
            alert("Location captured and sharing enabled");
        }, (err)=>{
            console.error("[Donor Dashboard] Geolocation error:", err);
            if (err.code === 1) alert("Please allow location access");
            else alert("Unable to fetch location");
        }, {
            enableHighAccuracy: true,
            timeout: 15000
        });
    };
    //     markAvailable: only marks available after user clicked "Share Location" (so location exists)
    // ----------------------------------------------------------*/
    const markAvailable = async ()=>{
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
                // Save to localStorage
                const stored = localStorage.getItem("user");
                if (stored) {
                    const user = JSON.parse(stored);
                    user.available = true;
                    localStorage.setItem("user", JSON.stringify(user));
                }
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
                // Save to localStorage
                const stored = localStorage.getItem("user");
                if (stored) {
                    const user = JSON.parse(stored);
                    user.available = false;
                    localStorage.setItem("user", JSON.stringify(user));
                }
            } else {
                alert("Error: " + (data.message || "Could not mark unavailable"));
            }
        } catch (err) {
            console.error(err);
            alert("Network error while marking unavailable");
        }
    };
    const stopLocationSharing = ()=>{
        setLocationSharing(false);
        setLocation(null);
        setHospitalRequests([]); // Clear hospital requests when location is not shared
        // Save to localStorage
        const stored = localStorage.getItem("user");
        if (stored) {
            const user = JSON.parse(stored);
            user.locationSharing = false;
            user.locationSharingStoppedAt = null;
            localStorage.setItem("user", JSON.stringify(user));
        }
        alert("Location sharing stopped");
    };
    //     DONATION CONFIRMATION HANDLERS
    // ----------------------------------------------------------*/
    const handleOpenConfirmModal = (request)=>{
        setSelectedRequest(request);
        setShowConfirmModal(true);
    };
    const handleConfirmDonation = async ()=>{
        if (!selectedRequest) return;
        // Call API to confirm donation
        setConfirmLoading(true);
        try {
            const res = await fetch(`http://localhost:5000/request/${selectedRequest._id}/confirm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "Confirmed",
                    confirmedBy: donorId,
                    notes: "Donor confirmed and will proceed to schedule donation."
                })
            });
            const data = await res.json();
            if (data.success) {
                // Send emails to hospital, donor, and recipient
                try {
                    await fetch("http://localhost:5000/email/send-donation-scheduled", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            requestId: selectedRequest._id,
                            donorId: donorId,
                            donorName: donorName,
                            donorEmail: donorEmail,
                            hospital: selectedRequest.hospital,
                            bloodType: selectedRequest.bloodType,
                            units: selectedRequest.unitsNeeded,
                            recipientName: selectedRequest.recipientName,
                            recipientEmail: selectedRequest.recipientEmail,
                            isRecipientRequest: selectedRequest.isRecipientRequest
                        })
                    });
                } catch (emailErr) {
                    console.error("Error sending emails:", emailErr);
                }
                // Close modal and navigate to schedule page
                setShowConfirmModal(false);
                window.location.href = `/donor/schedule-donation?requestId=${selectedRequest._id}&hospital=${encodeURIComponent(selectedRequest.hospital || "")}&units=${selectedRequest.unitsNeeded}&bloodType=${selectedRequest.bloodType}`;
            } else {
                alert("Error confirming donation: " + (data.message || "Unknown error"));
            }
        } catch (err) {
            console.error("Error confirming donation:", err);
            alert("Network error while confirming donation");
        } finally{
            setConfirmLoading(false);
        }
    };
    const handleRejectDonation = async (notes)=>{
        if (!selectedRequest) return;
        setConfirmLoading(true);
        try {
            const res = await fetch(`http://localhost:5000/request/${selectedRequest._id}/confirm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "Rejected",
                    confirmedBy: donorId,
                    notes: notes || "Donor rejected donation request."
                })
            });
            const data = await res.json();
            if (data.success) {
                // Update local state to reflect rejection
                setHospitalRequests((prev)=>prev.map((r)=>r._id === selectedRequest._id ? {
                            ...r,
                            confirmationStatus: "Rejected"
                        } : r));
                setRecipientRequests((prev)=>prev.map((r)=>r._id === selectedRequest._id ? {
                            ...r,
                            confirmationStatus: "Rejected"
                        } : r));
                setShowConfirmModal(false);
                alert("Donation rejected. Hospital has been notified.");
            } else {
                alert("Error rejecting donation: " + (data.message || "Unknown error"));
            }
        } catch (err) {
            console.error("Error rejecting donation:", err);
            alert("Network error while rejecting donation");
        } finally{
            setConfirmLoading(false);
        }
    };
    //     UI
    // ----------------------------------------------------------*/
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-linear-to-br from-white via-red-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-red-600 text-white p-6 shadow-lg flex justify-between items-center sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-2xl font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-7 h-7 fill-white"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 732,
                                columnNumber: 11
                            }, this),
                            donorName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowProfileMenu(!showProfileMenu),
                                className: "p-2 rounded-full hover:bg-red-500 transition bg-white text-red-600 w-10 h-10 flex items-center justify-center",
                                title: "Profile menu",
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 737,
                                columnNumber: 11
                            }, this),
                            showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-12 bg-gradient-to-b from-white to-gray-50 text-gray-800 rounded-2xl shadow-2xl w-64 z-40 border border-red-100 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 bg-gradient-to-r from-red-50 to-red-100 border-b-2 border-red-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-lg text-red-700",
                                                children: donorName
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 749,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: donorEmail
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 750,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: donorPhone
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 751,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 748,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/donor/profile",
                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-gray-800 transition border-l-4 border-transparent hover:border-red-600",
                                                onClick: ()=>setShowProfileMenu(false),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-5 h-5 text-red-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Edit Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 756,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/donor/history",
                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-orange-50 text-gray-800 transition border-l-4 border-transparent hover:border-orange-600",
                                                onClick: ()=>setShowProfileMenu(false),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-5 h-5 text-orange-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 769,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "View History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 764,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/donor/perks",
                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-yellow-50 text-gray-800 transition border-l-4 border-transparent hover:border-yellow-600",
                                                onClick: ()=>setShowProfileMenu(false),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                        className: "w-5 h-5 text-yellow-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "View Perks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 778,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 772,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    // Save location sharing stop time if location is active
                                                    if (locationSharing) {
                                                        const stored = localStorage.getItem("user");
                                                        if (stored) {
                                                            const user = JSON.parse(stored);
                                                            user.locationSharingStoppedAt = new Date().toISOString();
                                                            user.sleepTime = sleepTime;
                                                            localStorage.setItem("user", JSON.stringify(user));
                                                        }
                                                    }
                                                    localStorage.removeItem("token");
                                                    window.location.href = "/";
                                                },
                                                className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-red-100 text-gray-800 transition border-l-4 border-transparent hover:border-red-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                        className: "w-5 h-5 text-red-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 798,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 780,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 736,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto p-6 space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroCard, {
                        donorName: donorName,
                        profileImage: donorImage,
                        getLocation: requestLocation,
                        stopLocationSharing: stopLocationSharing,
                        locationSharing: locationSharing,
                        available: available,
                        markAvailable: markAvailable,
                        markUnavailable: markUnavailable,
                        currentQuote: motivationalQuotes[currentQuoteIndex]
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 809,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoSection, {
                        showVideo: showVideo,
                        setShowVideo: setShowVideo
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-8 h-8 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 828,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-red-700",
                                            children: "Nearby Blood Requests"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 827,
                                    columnNumber: 13
                                }, this),
                                hospitalRequests.length > 0 || recipientRequests.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: location ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HospitalRequestsMap, {
                                        hospitalRequests: [
                                            ...hospitalRequests,
                                            ...recipientRequests
                                        ],
                                        donorLocation: location
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 835,
                                        columnNumber: 19
                                    }, this) : null
                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12 bg-red-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-12 h-12 text-red-300 mx-auto mb-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 843,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 font-semibold",
                                            children: "No blood requests found"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 844,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-2",
                                            children: "Check back later for new blood requests from hospitals and recipients"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 845,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 842,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 826,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 825,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScheduleStatistics, {
                        schedules: schedules
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BloodDonationGuide, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 855,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompatibilityChart, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 856,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImpactStories, {}, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 857,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScheduledRequests, {
                        schedules: schedules
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 859,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonationHistory, {
                        history: history
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 860,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$donation$2d$confirmation$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonationConfirmationModal"], {
                isOpen: showConfirmModal,
                request: selectedRequest,
                onConfirm: handleConfirmDonation,
                onReject: handleRejectDonation,
                isLoading: confirmLoading
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 864,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 728,
        columnNumber: 5
    }, this);
}
_s(DonorDashboard, "UtM3o99LVSqxa0MlKxVq76IwHF0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"]
    ];
});
_c2 = DonorDashboard;
//    COMPONENTS - same structure and style you had
// ----------------------------------------------------------*/
function HeroCard({ donorName, profileImage, getLocation, stopLocationSharing, locationSharing, available, markAvailable, markUnavailable, currentQuote }) {
    console.log("[HeroCard] Rendering with profileImage:", profileImage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600 grid md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-red-700",
                        children: [
                            "Welcome back",
                            donorName ? `, ${donorName.split(" ")[0]}` : "",
                            "!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 883,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mt-2 text-lg italic font-semibold text-red-600 min-h-[60px] flex items-center",
                        children: currentQuote
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 884,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: !locationSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: getLocation,
                                    className: "bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold hover:shadow-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 891,
                                            columnNumber: 17
                                        }, this),
                                        " Share Location"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 890,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: stopLocationSharing,
                                    className: "bg-linear-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold hover:shadow-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 895,
                                            columnNumber: 17
                                        }, this),
                                        " Stop Sharing"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 894,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 888,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: !available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: markAvailable,
                                    className: "bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg flex gap-2 items-center font-semibold hover:shadow-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this),
                                        " Mark Available"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: markUnavailable,
                                    className: "bg-linear-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg flex gap-2 items-center font-semibold hover:shadow-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 908,
                                            columnNumber: 17
                                        }, this),
                                        " Unavailable"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 907,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 901,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 886,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 882,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-red-50 via-red-100 to-red-200 flex items-center justify-center p-4 min-h-[280px]",
                children: profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: profileImage,
                        alt: "Donor profile",
                        className: "max-w-full max-h-[250px] rounded-lg shadow-2xl object-contain"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 918,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 917,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "text-red-500 w-20 h-20"
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 926,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-600 text-sm font-medium",
                            children: "Upload your photo"
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 927,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 925,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 915,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 881,
        columnNumber: 5
    }, this);
}
_c3 = HeroCard;
//    VIDEO SECTION - Beautiful design with gradient background
// ----------------------------------------------------------*/
function VideoSection({ showVideo, setShowVideo }) {
    return showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 rounded-2xl blur-lg opacity-50 -z-10"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 941,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-200 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl",
                                        children: "🎬"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 947,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-red-700",
                                                children: "Donor Education Video"
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 949,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Learn about blood donation & impact"
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 950,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 948,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 946,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowVideo(false),
                                className: "text-red-600 hover:text-red-800 text-2xl transition",
                                title: "Close video",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 945,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-xl overflow-hidden bg-black shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            title: "Intro video",
                            className: "w-full aspect-video",
                            src: "https://www.youtube.com/embed/_JlmwDqaYA0?autoplay=1&rel=0&modestbranding=1",
                            allow: "autoplay; encrypted-media"
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 964,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 963,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowVideo(false),
                        className: "w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition",
                        children: "Close Video"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 973,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 943,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 939,
        columnNumber: 5
    }, this) : null;
}
_c4 = VideoSection;
//    Remaining components: ScheduledRequests, DonationHistory, ImpactStories, UrgentRequests,
//    BloodDonationGuide, CompatibilityChart
//    (Use the exact implementations from your existing file — I'm copying the same)
// ----------------------------------------------------------*/
function ScheduledRequests({ schedules }) {
    const activeSchedules = (schedules || []).filter((s)=>s.status && s.status.toLowerCase() !== "completed" && s.status.toLowerCase() !== "cancelled");
    if (!activeSchedules.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-4",
                children: "My Scheduled Donations"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 994,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: activeSchedules.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 999,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 44
                                    }, this),
                                    " ",
                                    s.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1001,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {}, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 39
                                    }, this),
                                    " ",
                                    s.time
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1002,
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
                                        lineNumber: 1005,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1004,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 998,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 996,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 993,
        columnNumber: 5
    }, this);
}
_c5 = ScheduledRequests;
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
                lineNumber: 1019,
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
                                lineNumber: 1024,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: new Date(h.date).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1025,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1023,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1021,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1018,
        columnNumber: 5
    }, this);
}
_c6 = DonationHistory;
function ImpactStories() {
    _s1();
    const [currentNewsIndex, setCurrentNewsIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fadeIn, setFadeIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Helper function to get icon component based on icon name
    const getIconComponent = (iconName, size = "w-5 h-5")=>{
        const iconProps = `${size} text-white`;
        switch(iconName){
            case "droplet":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1041,
                    columnNumber: 30
                }, this);
            case "hospital":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__["Hospital"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1042,
                    columnNumber: 31
                }, this);
            case "baby":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1043,
                    columnNumber: 27
                }, this);
            case "target":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1044,
                    columnNumber: 29
                }, this);
            case "zap":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1045,
                    columnNumber: 26
                }, this);
            case "star":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1046,
                    columnNumber: 27
                }, this);
            case "heart":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1047,
                    columnNumber: 28
                }, this);
            case "ambulance":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__["Ambulance"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1048,
                    columnNumber: 32
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: iconProps
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1049,
                    columnNumber: 23
                }, this);
        }
    };
    const bloodDonationNews = [
        {
            title: "Life-Saving Donation Saves 3 Lives",
            outcome: "One blood donation can save up to 3 lives. A single donation in Delhi today helped 3 emergency patients.",
            icon: "droplet",
            impact: "+3 lives saved",
            date: "Today",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop" // Blood donation
        },
        {
            title: "Critical Surgery Averted",
            outcome: "A young accident victim received emergency transfusion from our donors. Now recovering well at Apollo Hospital.",
            icon: "hospital",
            impact: "1 life saved",
            date: "Yesterday",
            image: "https://images.unsplash.com/photo-1631217b5f58-d699e5edd3a5?w=500&h=400&fit=crop" // Hospital
        },
        {
            title: "Newborn Gets Second Chance",
            outcome: "A premature baby in NICU received platelet transfusion thanks to donors. Mother says 'They gave us hope'.",
            icon: "baby",
            impact: "1 child saved",
            date: "2 days ago",
            image: "https://images.unsplash.com/photo-1516627145497-ae3dbe626c3d?w=500&h=400&fit=crop" // Baby/healthcare
        },
        {
            title: "Blood Camp Success",
            outcome: "200 donors participated in blood drive at Mumbai Corporate Park. 280 units collected for hospitals in need.",
            icon: "target",
            impact: "+280 units",
            date: "3 days ago",
            image: "https://images.unsplash.com/photo-1631217b5f58-d699e5edd3a5?w=500&h=400&fit=crop" // Community event
        },
        {
            title: "Cancer Patient Gets Help",
            outcome: "Leukemia patient undergoing chemotherapy received 2 units of whole blood. Treatment proceeding smoothly.",
            icon: "zap",
            impact: "1 patient sustained",
            date: "4 days ago",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop" // Medical
        },
        {
            title: "Rare Blood Type Found",
            outcome: "O- negative donor's blood matched rare case. Thalassemia patient received critical transfusion in Chennai.",
            icon: "star",
            impact: "1 critical match",
            date: "5 days ago",
            image: "https://images.unsplash.com/photo-1624507898257-dae5d0ed8202?w=500&h=400&fit=crop" // Laboratory
        }
    ];
    // Filter only stories with valid images
    const validNews = bloodDonationNews.filter((story)=>story.image && story.image.trim() !== "");
    if (validNews.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-red-700 mb-6",
                    children: "🩸 Donor Impact Stories"
                }, void 0, false, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-lg p-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-16 h-16 text-gray-300 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 font-medium",
                            children: "Impact stories coming soon..."
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/donor/dashboard/page.tsx",
            lineNumber: 1109,
            columnNumber: 7
        }, this);
    }
    const currentNews = validNews[currentNewsIndex % validNews.length];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpactStories.useEffect": ()=>{
            const interval = setInterval({
                "ImpactStories.useEffect.interval": ()=>{
                    setFadeIn(false);
                    setTimeout({
                        "ImpactStories.useEffect.interval": ()=>{
                            setCurrentNewsIndex({
                                "ImpactStories.useEffect.interval": (prev)=>(prev + 1) % bloodDonationNews.length
                            }["ImpactStories.useEffect.interval"]);
                            setFadeIn(true);
                        }
                    }["ImpactStories.useEffect.interval"], 300);
                }
            }["ImpactStories.useEffect.interval"], 6000); // Change every 6 seconds
            return ({
                "ImpactStories.useEffect": ()=>clearInterval(interval)
            })["ImpactStories.useEffect"];
        }
    }["ImpactStories.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-8 bg-gradient-to-r from-red-50 via-red-100 to-red-50 rounded-2xl shadow-xl border-2 border-red-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-red-700 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl animate-pulse",
                                children: "📰"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1138,
                                columnNumber: 11
                            }, this),
                            " Live Donation Impact"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: bloodDonationNews.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setFadeIn(false);
                                    setTimeout(()=>{
                                        setCurrentNewsIndex(i);
                                        setFadeIn(true);
                                    }, 100);
                                },
                                className: `h-2 rounded-full transition-all duration-300 cursor-pointer ${i === currentNewsIndex ? "bg-red-600 w-8" : "bg-red-200 w-2 hover:bg-red-300"}`,
                                title: `Go to news ${i + 1}`
                            }, i, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1142,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg overflow-hidden border border-red-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-red-700 mb-2",
                                                children: currentNews.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2",
                                                        children: [
                                                            getIconComponent(currentNews.icon, "w-4 h-4"),
                                                            currentNews.date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1169,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-bold",
                                                        children: currentNews.impact
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1166,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 1165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base leading-relaxed",
                                    children: currentNews.outcome
                                }, void 0, false, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 1181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border-l-4 border-orange-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-orange-600",
                                                children: "💡 Key Insight:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1186,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            currentNews.outcome.split('.')[0],
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 1184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 bg-white rounded-lg p-4 border-l-4 border-blue-400 shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-blue-600",
                                    children: "ℹ️ Did you know?"
                                }, void 0, false, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 1195,
                                    columnNumber: 13
                                }, this),
                                " Every 2 seconds someone in the world needs blood. Your donation can save up to 3 lives, and you can donate again in just 56 days!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1194,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mt-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setFadeIn(false);
                            setTimeout(()=>{
                                setCurrentNewsIndex((prev)=>(prev - 1 + validNews.length) % validNews.length);
                                setFadeIn(true);
                            }, 100);
                        },
                        className: "bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition",
                        title: "Previous news",
                        children: "← Prev"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600 font-semibold text-sm",
                        children: [
                            currentNewsIndex + 1,
                            " / ",
                            validNews.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setFadeIn(false);
                            setTimeout(()=>{
                                setCurrentNewsIndex((prev)=>(prev + 1) % validNews.length);
                                setFadeIn(true);
                            }, 100);
                        },
                        className: "bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition",
                        title: "Next news",
                        children: "Next →"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1134,
        columnNumber: 5
    }, this);
}
_s1(ImpactStories, "YHnbo70bbZ3bPgRpy/GNidmkLp4=");
_c7 = ImpactStories;
function UrgentRequests({ hospitalRequests, recipientRequests, onRequestClick, location }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-red-700 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1242,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1241,
                            columnNumber: 11
                        }, this),
                        "Nearby Urgent Requests"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__["Droplet"], {
                                className: "w-8 h-8 text-red-600"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-bold text-red-700",
                                children: "Hospital Requests"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1250,
                        columnNumber: 9
                    }, this),
                    (hospitalRequests || []).filter((req)=>!req.confirmationStatus || req.confirmationStatus === "Pending" || req.confirmationStatus === "Confirmed").length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__["Droplet"], {
                                className: "w-16 h-16 text-gray-300 mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1257,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-lg",
                                children: "No hospital requests nearby"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1258,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1256,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: (hospitalRequests || []).filter((req)=>!req.confirmationStatus || req.confirmationStatus === "Pending" || req.confirmationStatus === "Confirmed").map((req, i)=>{
                            const distanceDisplay = req.calculatedDistance ? `${req.calculatedDistance} km away` : (req.locationKm ?? "N/A") + " km away";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-2 border-red-100 rounded-xl hover:shadow-lg transition bg-gradient-to-r from-red-50 to-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-5 gap-4 items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Hospital"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1270,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-gray-900",
                                                        children: req.hospital || "Hospital"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1271,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mt-1",
                                                        children: distanceDisplay
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1272,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1269,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Blood Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1276,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-red-600 text-lg",
                                                        children: req.bloodType
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1277,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1275,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Units"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-gray-900",
                                                        children: req.unitsNeeded
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1280,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Urgency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full text-xs font-semibold inline-block ${req.urgency === "critical" ? "bg-red-100 text-red-700" : req.urgency === "high" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: req.urgency?.toUpperCase() || "NORMAL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1287,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full text-xs font-semibold inline-block ${req.confirmationStatus === "Confirmed" ? "bg-green-100 text-green-700" : req.confirmationStatus === "Rejected" ? "bg-red-100 text-red-700" : req.confirmationStatus === "Successful" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: req.confirmationStatus || "Pending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1298,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1296,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1268,
                                        columnNumber: 19
                                    }, this),
                                    req.location && req.location.latitude && req.location.longitude ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 h-40 rounded-lg overflow-hidden border-2 border-red-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeafletMap, {
                                            activeDonors: [
                                                {
                                                    location: req.location,
                                                    fullName: req.hospital,
                                                    bloodType: req.bloodType
                                                }
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1311,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-sm text-gray-500",
                                        children: "Map not available for this request"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1315,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onRequestClick(req),
                                        disabled: req.confirmationStatus && ![
                                            "Pending"
                                        ].includes(req.confirmationStatus),
                                        className: `w-full mt-4 py-3 rounded-lg transition font-semibold ${req.confirmationStatus && ![
                                            "Pending"
                                        ].includes(req.confirmationStatus) ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg"}`,
                                        children: req.confirmationStatus === "Confirmed" ? "Proceeding to Schedule" : req.confirmationStatus === "Rejected" ? "Donation Rejected" : req.confirmationStatus === "Successful" ? "✅ Donation Completed" : "Schedule Donation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1318,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, `h-${i}`, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1267,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1261,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-8 h-8 text-purple-600"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-bold text-purple-700",
                                children: "Recipient Requests"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1346,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1344,
                        columnNumber: 9
                    }, this),
                    (recipientRequests || []).filter((req)=>!req.confirmationStatus || req.confirmationStatus === "Pending" || req.confirmationStatus === "Confirmed").length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-16 h-16 text-gray-300 mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-lg",
                                children: "No recipient requests nearby"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1350,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: (recipientRequests || []).filter((req)=>!req.confirmationStatus || req.confirmationStatus === "Pending" || req.confirmationStatus === "Confirmed").map((req, i)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-2 border-purple-100 rounded-xl hover:shadow-lg transition bg-gradient-to-r from-purple-50 to-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-6 gap-4 items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Recipient"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-gray-900",
                                                        children: req.recipientName || req.requestedBy?.fullName || req.requestedByName || req.requesterName || (typeof req.requestedBy === 'string' ? req.requestedBy : "Recipient")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1362,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1360,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Hospital"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1366,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-purple-600",
                                                        children: req.hospital || "N/A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1367,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1365,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Blood Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1371,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-red-600 text-lg",
                                                        children: req.bloodType
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1372,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1370,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Units"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1376,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-gray-900",
                                                        children: req.unitsNeeded
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1377,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1375,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Urgency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1381,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full text-xs font-semibold inline-block ${req.urgency === "critical" ? "bg-red-100 text-red-700" : req.urgency === "high" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: req.urgency?.toUpperCase() || "NORMAL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1382,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1380,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full text-xs font-semibold inline-block ${req.confirmationStatus === "Confirmed" ? "bg-green-100 text-green-700" : req.confirmationStatus === "Rejected" ? "bg-red-100 text-red-700" : req.confirmationStatus === "Successful" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: req.confirmationStatus || "Pending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                                        lineNumber: 1393,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1391,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1359,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onRequestClick(req),
                                        disabled: req.confirmationStatus && ![
                                            "Pending"
                                        ].includes(req.confirmationStatus),
                                        className: `w-full mt-4 py-3 rounded-lg transition font-semibold ${req.confirmationStatus && ![
                                            "Pending"
                                        ].includes(req.confirmationStatus) ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg"}`,
                                        children: req.confirmationStatus === "Confirmed" ? "Proceeding to Schedule" : req.confirmationStatus === "Rejected" ? "Donation Rejected" : req.confirmationStatus === "Successful" ? "✅ Donation Completed" : "Schedule Donation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1404,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, `r-${i}`, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1358,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1238,
        columnNumber: 5
    }, this);
}
_c8 = UrgentRequests;
//    SCHEDULE STATISTICS COMPONENT
// ----------------------------------------------------------*/
function ScheduleStatistics({ schedules }) {
    const totalScheduled = schedules?.length || 0;
    const totalUnits = schedules?.reduce((sum, s)=>{
        const units = s.requestId?.unitsNeeded || s.unitsNeeded || 0;
        return sum + units;
    }, 0) || 0;
    // Count by status
    const statusCounts = schedules?.reduce((acc, s)=>{
        const status = s.status || "Pending";
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {}) || {};
    console.log("[ScheduleStatistics] Schedules:", schedules);
    console.log("[ScheduleStatistics] Total Scheduled:", totalScheduled);
    console.log("[ScheduleStatistics] Total Units:", totalUnits);
    console.log("[ScheduleStatistics] Status Counts:", statusCounts);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold text-white",
                        children: "🩸 Your Donation Impact"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-opacity-90 mt-2",
                        children: "Track your scheduled donations and their status"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1456,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-red-600 uppercase tracking-wider",
                                        children: "Scheduled Donations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "📅"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1464,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-5xl font-bold text-red-700",
                                children: totalScheduled
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1466,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mt-2",
                                children: "Donation appointments booked"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1467,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-red-600 uppercase tracking-wider",
                                        children: "Total Units"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "💉"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1474,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-5xl font-bold text-red-700",
                                children: totalUnits
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mt-2",
                                children: "Units scheduled to donate"
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1477,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1471,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-red-600 uppercase tracking-wider",
                                        children: "Status Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1483,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1484,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1482,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: Object.entries(statusCounts).length > 0 ? Object.entries(statusCounts).map(([status, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-2 bg-gray-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-semibold capitalize",
                                                children: [
                                                    status,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1490,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-red-600",
                                                children: count
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1491,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, status, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1489,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "No scheduled donations yet"
                                }, void 0, false, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 1495,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1486,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1459,
                columnNumber: 7
            }, this),
            totalScheduled > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-6 border-t-2 border-white border-opacity-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-white font-semibold text-lg",
                    children: [
                        "🎯 You've scheduled ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-yellow-200",
                            children: totalScheduled
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1505,
                            columnNumber: 33
                        }, this),
                        " life-saving donations totaling ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-yellow-200",
                            children: [
                                totalUnits,
                                " units"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1505,
                            columnNumber: 122
                        }, this),
                        " of blood!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1504,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1503,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1453,
        columnNumber: 5
    }, this);
}
_c9 = ScheduleStatistics;
//    BloodDonationGuide + CompatibilityChart (same as earlier)
// ----------------------------------------------------------*/
function BloodDonationGuide() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-6 bg-white rounded-xl shadow border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl",
                        children: "🩸"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1520,
                        columnNumber: 9
                    }, this),
                    " Blood Donation Frequency Guide"
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-6 text-sm",
                children: "Know how often you can donate and make maximum impact on lives"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    {
                        type: "Whole Blood",
                        icon: "🩹",
                        wait: 56,
                        year: 6,
                        benefit: "Helps all blood types",
                        recovery: "3-4 weeks",
                        color: "from-red-400 to-red-600",
                        bg: "bg-red-50"
                    },
                    {
                        type: "Plasma",
                        icon: "💛",
                        wait: 2,
                        year: 24,
                        benefit: "Golden component",
                        recovery: "24 hours",
                        color: "from-yellow-400 to-yellow-600",
                        bg: "bg-yellow-50"
                    },
                    {
                        type: "Platelets",
                        icon: "💚",
                        wait: 2,
                        year: 24,
                        benefit: "Helps cancer patients",
                        recovery: "24 hours",
                        color: "from-green-400 to-green-600",
                        bg: "bg-green-50"
                    },
                    {
                        type: "Red Cells",
                        icon: "❤️",
                        wait: 112,
                        year: 3,
                        benefit: "Critical for anemia",
                        recovery: "8 weeks",
                        color: "from-pink-400 to-pink-600",
                        bg: "bg-pink-50"
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-6 rounded-2xl shadow-lg border-2 border-${item.color.split(' ')[1]} ${item.bg} hover:shadow-xl transition-all duration-300 transform hover:scale-105`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg text-gray-800",
                                                children: [
                                                    item.icon,
                                                    " ",
                                                    item.type
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1570,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 font-semibold",
                                                children: item.benefit
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1571,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1569,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-gradient-to-r ${item.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold`,
                                        children: item.year
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1573,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1568,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-semibold",
                                                children: "Frequency:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1579,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-white px-3 py-1 rounded-lg font-bold text-gray-800",
                                                children: [
                                                    "Every ",
                                                    item.wait,
                                                    " days"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1580,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1578,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-semibold",
                                                children: "Annual:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1583,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-white px-3 py-1 rounded-lg font-bold text-gray-800",
                                                children: [
                                                    item.year,
                                                    "x per year"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1584,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1582,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-semibold",
                                                children: "Recovery:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1587,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-white px-3 py-1 rounded-lg font-bold text-gray-800",
                                                children: item.recovery
                                            }, void 0, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1588,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1586,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1577,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1567,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1524,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1518,
        columnNumber: 5
    }, this);
}
_c10 = BloodDonationGuide;
function CompatibilityChart() {
    const types = [
        {
            type: "O-",
            badge: "🌟 Universal Donor",
            donate: [
                "Everyone"
            ],
            description: "Rarest hero - can save anyone",
            bg: "bg-gradient-to-br from-red-100 to-red-200",
            border: "border-red-400"
        },
        {
            type: "O+",
            badge: "Most Common",
            donate: [
                "O+",
                "A+",
                "B+",
                "AB+"
            ],
            description: "Help positive blood types",
            bg: "bg-gradient-to-br from-red-100 to-red-200",
            border: "border-red-400"
        },
        {
            type: "A-",
            badge: "Rare Giver",
            donate: [
                "A-",
                "A+",
                "AB-",
                "AB+"
            ],
            description: "Support 4 blood types",
            bg: "bg-gradient-to-br from-rose-100 to-rose-200",
            border: "border-rose-400"
        },
        {
            type: "A+",
            badge: "Common",
            donate: [
                "A+",
                "AB+"
            ],
            description: "Help A and AB types",
            bg: "bg-gradient-to-br from-red-50 to-red-100",
            border: "border-red-300"
        },
        {
            type: "B-",
            badge: "Rare Giver",
            donate: [
                "B-",
                "B+",
                "AB-",
                "AB+"
            ],
            description: "Support 4 blood types",
            bg: "bg-gradient-to-br from-rose-100 to-rose-200",
            border: "border-rose-400"
        },
        {
            type: "B+",
            badge: "Common",
            donate: [
                "B+",
                "AB+"
            ],
            description: "Help B and AB types",
            bg: "bg-gradient-to-br from-red-50 to-red-100",
            border: "border-red-300"
        },
        {
            type: "AB-",
            badge: "Rarest",
            donate: [
                "AB-",
                "AB+"
            ],
            description: "Precious for AB types",
            bg: "bg-gradient-to-br from-pink-100 to-pink-200",
            border: "border-pink-400"
        },
        {
            type: "AB+",
            badge: "🌟 Universal Recipient",
            donate: [
                "AB+"
            ],
            description: "Can receive from anyone",
            bg: "bg-gradient-to-br from-red-200 to-red-300",
            border: "border-red-500"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 p-8 bg-gradient-to-r from-white via-blue-50 to-white rounded-2xl shadow-lg border-2 border-blue-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-red-700 mb-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl",
                        children: "🩺"
                    }, void 0, false, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1669,
                        columnNumber: 9
                    }, this),
                    " Blood Compatibility Chart"
                ]
            }, void 0, true, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1668,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-6 text-sm",
                children: "Discover which blood types you can save with your donation"
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
                children: types.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${b.bg} p-5 rounded-2xl shadow-lg border-2 ${b.border} hover:shadow-xl transition-all duration-300 transform hover:scale-105`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-2xl text-gray-900 mb-1",
                                            children: b.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 1681,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm",
                                            children: b.badge
                                        }, void 0, false, {
                                            fileName: "[project]/app/donor/dashboard/page.tsx",
                                            lineNumber: 1682,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/donor/dashboard/page.tsx",
                                    lineNumber: 1680,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1679,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-700 font-semibold mb-3 italic",
                                children: [
                                    '"',
                                    b.description,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1687,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-gray-800 mb-2",
                                        children: "💉 Donates to:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1689,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: b.donate.map((d, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 bg-white font-bold text-gray-800 rounded-lg text-xs shadow border-2 border-gray-300",
                                                children: d
                                            }, j, false, {
                                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                                lineNumber: 1692,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/donor/dashboard/page.tsx",
                                        lineNumber: 1690,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/donor/dashboard/page.tsx",
                                lineNumber: 1688,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/donor/dashboard/page.tsx",
                        lineNumber: 1675,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1673,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-5 border-l-4 border-red-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-red-700",
                            children: "💡 Pro Tip:"
                        }, void 0, false, {
                            fileName: "[project]/app/donor/dashboard/page.tsx",
                            lineNumber: 1707,
                            columnNumber: 11
                        }, this),
                        " O- blood type donors are the most sought after because they can donate to anyone. If you have a rare blood type, you're a superhero for those who need it!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/donor/dashboard/page.tsx",
                    lineNumber: 1706,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/donor/dashboard/page.tsx",
                lineNumber: 1705,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/donor/dashboard/page.tsx",
        lineNumber: 1667,
        columnNumber: 5
    }, this);
}
_c11 = CompatibilityChart;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "LeafletMap");
__turbopack_context__.k.register(_c1, "HospitalRequestsMap");
__turbopack_context__.k.register(_c2, "DonorDashboard");
__turbopack_context__.k.register(_c3, "HeroCard");
__turbopack_context__.k.register(_c4, "VideoSection");
__turbopack_context__.k.register(_c5, "ScheduledRequests");
__turbopack_context__.k.register(_c6, "DonationHistory");
__turbopack_context__.k.register(_c7, "ImpactStories");
__turbopack_context__.k.register(_c8, "UrgentRequests");
__turbopack_context__.k.register(_c9, "ScheduleStatistics");
__turbopack_context__.k.register(_c10, "BloodDonationGuide");
__turbopack_context__.k.register(_c11, "CompatibilityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e61b619c._.js.map