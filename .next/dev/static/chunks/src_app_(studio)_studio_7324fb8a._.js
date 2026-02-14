(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(studio)/studio/studio.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "studio-module__mtJ2iG__actions",
  "card": "studio-module__mtJ2iG__card",
  "cardDesc": "studio-module__mtJ2iG__cardDesc",
  "cardFoot": "studio-module__mtJ2iG__cardFoot",
  "cardTitle": "studio-module__mtJ2iG__cardTitle",
  "cardWide": "studio-module__mtJ2iG__cardWide",
  "grid": "studio-module__mtJ2iG__grid",
  "h1": "studio-module__mtJ2iG__h1",
  "hero": "studio-module__mtJ2iG__hero",
  "heroRight": "studio-module__mtJ2iG__heroRight",
  "kicker": "studio-module__mtJ2iG__kicker",
  "list": "studio-module__mtJ2iG__list",
  "orb": "studio-module__mtJ2iG__orb",
  "p": "studio-module__mtJ2iG__p",
  "page": "studio-module__mtJ2iG__page",
  "primary": "studio-module__mtJ2iG__primary",
  "row": "studio-module__mtJ2iG__row",
  "secondary": "studio-module__mtJ2iG__secondary",
  "stat": "studio-module__mtJ2iG__stat",
  "statLabel": "studio-module__mtJ2iG__statLabel",
  "statSub": "studio-module__mtJ2iG__statSub",
  "statValue": "studio-module__mtJ2iG__statValue",
  "time": "studio-module__mtJ2iG__time",
});
}),
"[project]/src/app/(studio)/studio/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudioDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(studio)/studio/studio.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StudioDashboard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "165114b304e676b6b9f77e769954e73029a56385a78acdeeab28e57b223b793f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "165114b304e676b6b9f77e769954e73029a56385a78acdeeab28e57b223b793f";
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "StudioDashboard[useEffect()]": ()=>{
                const el = ref.current;
                if (!el) {
                    return;
                }
                const cards = el.querySelectorAll("[data-card]");
                const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                    "StudioDashboard[useEffect() > gsap.context()]": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(cards, {
                            y: 14,
                            opacity: 0,
                            duration: 0.55,
                            stagger: 0.08,
                            ease: "power3.out"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to("[data-float]", {
                            y: -6,
                            duration: 2.6,
                            yoyo: true,
                            repeat: -1,
                            ease: "sine.inOut"
                        });
                    }
                }["StudioDashboard[useEffect() > gsap.context()]"], el);
                return ()=>ctx.revert();
            }
        })["StudioDashboard[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
            children: "AI STUDIO"
        }, void 0, false, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h1,
            children: "Build content. Generate images. Produce videos."
        }, void 0, false, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].p,
            children: "One dashboard. Templates + prompt packs + projects. APIs plugged in later."
        }, void 0, false, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroLeft,
            children: [
                t2,
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary,
                            children: "Start a Generation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(studio)/studio/page.jsx",
                            lineNumber: 72,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary,
                            children: "Open Prompt Library"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(studio)/studio/page.jsx",
                            lineNumber: 72,
                            columnNumber: 149
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 72,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orb
        }, void 0, false, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                    children: "This Week"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 86,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                    children: "128"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 86,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statSub,
                    children: "Generations"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 86,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
            "data-float": true,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroRight,
                    children: [
                        t6,
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                    children: "Remaining"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                                    lineNumber: 93,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                    children: "940"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                                    lineNumber: 93,
                                    columnNumber: 181
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statSub,
                                    children: "Credits"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                                    lineNumber: 93,
                                    columnNumber: 224
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(studio)/studio/page.jsx",
                            lineNumber: 93,
                            columnNumber: 103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 93,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            "data-card": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                    children: "Content"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 100,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                    children: "Ad copy, scripts, blogs, emails."
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 100,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFoot,
                    children: "Open →"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 100,
                    columnNumber: 174
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            "data-card": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                    children: "Images"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 107,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                    children: "Styles, aspect ratios, batches."
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 107,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFoot,
                    children: "Open →"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 107,
                    columnNumber: 173
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            "data-card": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                    children: "Videos"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 114,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                    children: "Effects, duration, presets."
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 114,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFoot,
                    children: "Open →"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 114,
                    columnNumber: 169
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
            children: "Recent Activity"
        }, void 0, false, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Generated: “Luxury product ad copy”"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 128,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                    children: "2m"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 128,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Generated: “Cyberpunk image prompt”"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 135,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                    children: "18m"
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 135,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            ref: ref,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: [
                        t9,
                        t10,
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardWide,
                            "data-card": true,
                            children: [
                                t12,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                    children: [
                                        t13,
                                        t14,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Saved prompt pack: “E-commerce”"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 219
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$studio$2f$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                                                    children: "1h"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 263
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(studio)/studio/page.jsx",
                                            lineNumber: 142,
                                            columnNumber: 191
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                                    lineNumber: 142,
                                    columnNumber: 152
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(studio)/studio/page.jsx",
                            lineNumber: 142,
                            columnNumber: 97
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(studio)/studio/page.jsx",
                    lineNumber: 142,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(studio)/studio/page.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    return t15;
}
_s(StudioDashboard, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = StudioDashboard;
var _c;
__turbopack_context__.k.register(_c, "StudioDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28studio%29_studio_7324fb8a._.js.map