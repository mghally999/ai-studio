(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/layout/Sidebar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Sidebar-module__iWKCyq__active",
  "badge": "Sidebar-module__iWKCyq__badge",
  "brand": "Sidebar-module__iWKCyq__brand",
  "brandName": "Sidebar-module__iWKCyq__brandName",
  "brandSub": "Sidebar-module__iWKCyq__brandSub",
  "footer": "Sidebar-module__iWKCyq__footer",
  "footerCard": "Sidebar-module__iWKCyq__footerCard",
  "footerSub": "Sidebar-module__iWKCyq__footerSub",
  "footerTitle": "Sidebar-module__iWKCyq__footerTitle",
  "footerTop": "Sidebar-module__iWKCyq__footerTop",
  "item": "Sidebar-module__iWKCyq__item",
  "itemLabel": "Sidebar-module__iWKCyq__itemLabel",
  "itemSub": "Sidebar-module__iWKCyq__itemSub",
  "itemTop": "Sidebar-module__iWKCyq__itemTop",
  "logo": "Sidebar-module__iWKCyq__logo",
  "nav": "Sidebar-module__iWKCyq__nav",
  "pip": "Sidebar-module__iWKCyq__pip",
  "sectionTitle": "Sidebar-module__iWKCyq__sectionTitle",
  "sidebar": "Sidebar-module__iWKCyq__sidebar",
});
}),
"[project]/src/app/components/layout/Sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/Sidebar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NAV = [
    {
        href: "/studio",
        label: "Dashboard",
        sub: "Metrics & overview"
    },
    {
        href: "/content",
        label: "Content",
        sub: "Ads, scripts, copy"
    },
    {
        href: "/images",
        label: "Images",
        sub: "Generate & styles"
    },
    {
        href: "/videos",
        label: "Videos",
        sub: "Prompts & effects"
    },
    {
        href: "/prompts",
        label: "Prompts",
        sub: "Packs & templates"
    },
    {
        href: "/projects",
        label: "Projects",
        sub: "History & exports"
    },
    {
        href: "/billing",
        label: "Billing",
        sub: "Plans & usage"
    }
];
function Sidebar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "537a901df890566f872b80d46ad71ea5b5b70b841e88b3e0991d42f7368cadae") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "537a901df890566f872b80d46ad71ea5b5b70b841e88b3e0991d42f7368cadae";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== active.brandName) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandName,
            children: active.brandName
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[2] = active.brandName;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== active.tagline) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandSub,
            children: active.tagline
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[4] = active.tagline;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t1,
                        t2
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                    lineNumber: 74,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
            children: "Workspace"
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== pathname) {
        t5 = NAV.map({
            "Sidebar[NAV.map()]": (item)=>{
                const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemTop,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemLabel,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                                    lineNumber: 93,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pip
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                                    lineNumber: 93,
                                    columnNumber: 203
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                            lineNumber: 93,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemSub,
                            children: item.sub
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                            lineNumber: 93,
                            columnNumber: 240
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                    lineNumber: 93,
                    columnNumber: 16
                }, this);
            }
        }["Sidebar[NAV.map()]"]);
        $[10] = pathname;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerTop,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerTitle,
                                children: "Phase 1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                                lineNumber: 111,
                                columnNumber: 110
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                children: "UI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                                lineNumber: 111,
                                columnNumber: 161
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                        lineNumber: 111,
                        columnNumber: 76
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerSub,
                        children: "We polish UX, then wire APIs last."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                        lineNumber: 111,
                        columnNumber: 207
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/layout/Sidebar.jsx",
                lineNumber: 111,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t3 || $[16] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
            children: [
                t3,
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/layout/Sidebar.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t6;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s(Sidebar, "ZpyzFQhOKLw9F2iChTlzgMMr2cs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/Topbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "left": "Topbar-module__9USXWq__left",
  "right": "Topbar-module__9USXWq__right",
  "sub": "Topbar-module__9USXWq__sub",
  "themeChip": "Topbar-module__9USXWq__themeChip",
  "themeChipActive": "Topbar-module__9USXWq__themeChipActive",
  "themeGroup": "Topbar-module__9USXWq__themeGroup",
  "themeSwatch": "Topbar-module__9USXWq__themeSwatch",
  "title": "Topbar-module__9USXWq__title",
  "topbar": "Topbar-module__9USXWq__topbar",
});
}),
"[project]/src/app/components/ui/Button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn": "Button-module__Vsi6oa__btn",
  "danger": "Button-module__Vsi6oa__danger",
  "full": "Button-module__Vsi6oa__full",
  "ghost": "Button-module__Vsi6oa__ghost",
  "glow": "Button-module__Vsi6oa__glow",
  "lg": "Button-module__Vsi6oa__lg",
  "md": "Button-module__Vsi6oa__md",
  "outline": "Button-module__Vsi6oa__outline",
  "primary": "Button-module__Vsi6oa__primary",
  "secondary": "Button-module__Vsi6oa__secondary",
  "sm": "Button-module__Vsi6oa__sm",
});
}),
"[project]/src/app/components/ui/Button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Button.module.css [app-client] (css module)");
"use client";
;
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "60b1e18b1cf28e24409748270cf339f3446c852a684c1d4576c4e7142815aa83") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "60b1e18b1cf28e24409748270cf339f3446c852a684c1d4576c4e7142815aa83";
    }
    let children;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== t0) {
        ({ children, variant: t1, size: t2, full: t3, glow: t4, className: t5, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    const full = t3 === undefined ? false : t3;
    const glow = t4 === undefined ? false : t4;
    const className = t5 === undefined ? "" : t5;
    const t6 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant];
    const t7 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size];
    const t8 = full ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].full : "";
    const t9 = glow ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow : "";
    let t10;
    if ($[9] !== className || $[10] !== t6 || $[11] !== t7 || $[12] !== t8 || $[13] !== t9) {
        t10 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
            t6,
            t7,
            t8,
            t9,
            className
        ].filter(Boolean);
        $[9] = className;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const cls = t10.join(" ");
    let t11;
    if ($[15] !== children || $[16] !== cls || $[17] !== props) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: cls,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/components/ui/Button.jsx",
            lineNumber: 71,
            columnNumber: 11
        }, this);
        $[15] = children;
        $[16] = cls;
        $[17] = props;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/Topbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/Topbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Button.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function titleFromPath(path) {
    const p = (path || "").split("?")[0];
    if (p === "/studio") return "Dashboard";
    if (p.startsWith("/content")) return "Content Generation";
    if (p.startsWith("/images")) return "Image Generation";
    if (p.startsWith("/videos")) return "Video Generation";
    if (p.startsWith("/prompts")) return "Prompt Library";
    if (p.startsWith("/projects")) return "Projects";
    if (p.startsWith("/billing")) return "Billing";
    return "Studio";
}
function Topbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "0a0e0b44ef3f99ddef2fcd35f50aa10fffb956098e1a61db7f59a7dea401493b") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a0e0b44ef3f99ddef2fcd35f50aa10fffb956098e1a61db7f59a7dea401493b";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = titleFromPath(pathname);
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const title = t0;
    const { themes, themeId, setThemeId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Topbar[useEffect()]": ()=>{
                if (!titleRef.current) {
                    return;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(titleRef.current, {
                    y: 6,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.out"
                });
            }
        })["Topbar[useEffect()]"];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== title) {
        t2 = [
            title
        ];
        $[4] = title;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            ref: titleRef,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Topbar.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[6] = title;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
            children: "Black/white base • Blue/Purple accents • GSAP motion"
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Topbar.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleWrap,
                children: [
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/layout/Topbar.jsx",
                lineNumber: 93,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Topbar.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== setThemeId || $[12] !== themeId || $[13] !== themes) {
        let t7;
        if ($[15] !== setThemeId || $[16] !== themeId) {
            t7 = ({
                "Topbar[themes.map()]": (t)=>{
                    const active = themeId === t.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "data-chip": t.id,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeChip} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeChipActive : ""}`,
                        onClick: {
                            "Topbar[themes.map() > <button>.onClick]": ()=>setThemeId(t.id)
                        }["Topbar[themes.map() > <button>.onClick]"],
                        title: t.label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeSwatch
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/layout/Topbar.jsx",
                                lineNumber: 108,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeLabel,
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/layout/Topbar.jsx",
                                lineNumber: 108,
                                columnNumber: 112
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/src/app/components/layout/Topbar.jsx",
                        lineNumber: 106,
                        columnNumber: 18
                    }, this);
                }
            })["Topbar[themes.map()]"];
            $[15] = setThemeId;
            $[16] = themeId;
            $[17] = t7;
        } else {
            t7 = $[17];
        }
        t6 = themes.map(t7);
        $[11] = setThemeId;
        $[12] = themeId;
        $[13] = themes;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeGroup,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Topbar.jsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "primary",
            size: "sm",
            glow: true,
            children: "New Project"
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Topbar.jsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/layout/Topbar.jsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[21] = t7;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t5 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topbar,
            children: [
                t5,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/layout/Topbar.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[23] = t5;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    return t10;
}
_s(Topbar, "w37iqHOeeF0vbOFDEr+ekYvQ3Q0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Topbar;
var _c;
__turbopack_context__.k.register(_c, "Topbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/BackgroundFX.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blobA": "BackgroundFX-module__sJdrzG__blobA",
  "blobB": "BackgroundFX-module__sJdrzG__blobB",
  "blobC": "BackgroundFX-module__sJdrzG__blobC",
  "fx": "BackgroundFX-module__sJdrzG__fx",
  "grain": "BackgroundFX-module__sJdrzG__grain",
  "vignette": "BackgroundFX-module__sJdrzG__vignette",
});
}),
"[project]/src/app/components/layout/BackgroundFX.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundFX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/BackgroundFX.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BackgroundFX() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "94bf2e43feecb3579de4de2a09f99baa9c01988ab35519b77f89abae15c65581") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "94bf2e43feecb3579de4de2a09f99baa9c01988ab35519b77f89abae15c65581";
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "BackgroundFX[useEffect()]": ()=>{
                const el = ref.current;
                if (!el) {
                    return;
                }
                const blobs = el.querySelectorAll("[data-blob]");
                const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                    "BackgroundFX[useEffect() > gsap.context()]": ()=>{
                        blobs.forEach(_BackgroundFXUseEffectGsapContextBlobsForEach);
                    }
                }["BackgroundFX[useEffect() > gsap.context()]"], el);
                return ()=>ctx.revert();
            }
        })["BackgroundFX[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fx,
            ref: ref,
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blobA,
                    "data-blob": true
                }, void 0, false, {
                    fileName: "[project]/src/app/components/layout/BackgroundFX.jsx",
                    lineNumber: 44,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blobB,
                    "data-blob": true
                }, void 0, false, {
                    fileName: "[project]/src/app/components/layout/BackgroundFX.jsx",
                    lineNumber: 44,
                    columnNumber: 115
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blobC,
                    "data-blob": true
                }, void 0, false, {
                    fileName: "[project]/src/app/components/layout/BackgroundFX.jsx",
                    lineNumber: 44,
                    columnNumber: 164
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grain
                }, void 0, false, {
                    fileName: "[project]/src/app/components/layout/BackgroundFX.jsx",
                    lineNumber: 44,
                    columnNumber: 213
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vignette
                }, void 0, false, {
                    fileName: "[project]/src/app/components/layout/BackgroundFX.jsx",
                    lineNumber: 44,
                    columnNumber: 245
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/layout/BackgroundFX.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(BackgroundFX, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = BackgroundFX;
function _BackgroundFXUseEffectGsapContextBlobsForEach(b, i) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(b, {
        x: ()=>i % 2 === 0 ? 26 : -24,
        y: ()=>i % 2 === 0 ? -18 : 20,
        duration: 6 + i * 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
}
var _c;
__turbopack_context__.k.register(_c, "BackgroundFX");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/Shell.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "Shell-module__W7GSTq__content",
  "main": "Shell-module__W7GSTq__main",
  "shell": "Shell-module__W7GSTq__shell",
  "sidebar": "Shell-module__W7GSTq__sidebar",
});
}),
"[project]/src/app/components/layout/Shell.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/Topbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/BackgroundFX.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Shell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/Shell.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Shell(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e9cb5b3bf2b259bf4a117936dc01115ea0938cd44d080a43aad9d71e03a7c555") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9cb5b3bf2b259bf4a117936dc01115ea0938cd44d080a43aad9d71e03a7c555";
    }
    const { children } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Shell[useEffect()]": ()=>{
                const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(_ShellUseEffectGsapContext, wrapRef);
                return ()=>ctx.revert();
            }
        })["Shell[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Shell[useEffect()]": ()=>{
                if (!contentRef.current) {
                    return;
                }
                const ctx_0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                    "Shell[useEffect() > gsap.context()]": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(contentRef.current, {
                            opacity: 0,
                            y: 10
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.35,
                            ease: "power2.out"
                        });
                    }
                }["Shell[useEffect() > gsap.context()]"], wrapRef);
                return ()=>ctx_0.revert();
            }
        })["Shell[useEffect()]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== pathname) {
        t4 = [
            pathname
        ];
        $[4] = pathname;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$BackgroundFX$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/components/layout/Shell.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Shell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
            "data-anim": "sidebar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/components/layout/Shell.jsx",
                lineNumber: 87,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Shell.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-anim": "topbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Topbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/components/layout/Shell.jsx",
                lineNumber: 94,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/Shell.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== children) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Shell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
            ref: wrapRef,
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Shell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$Shell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                            ref: contentRef,
                            "data-anim": "content",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/layout/Shell.jsx",
                            lineNumber: 101,
                            columnNumber: 95
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/layout/Shell.jsx",
                    lineNumber: 101,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/layout/Shell.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    return t8;
}
_s(Shell, "F8rVnWdMym7QlZUrpVt66vf85Ew=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Shell;
function _ShellUseEffectGsapContext() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from("[data-anim=\"sidebar\"]", {
        x: -18,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from("[data-anim=\"topbar\"]", {
        y: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.05
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from("[data-anim=\"content\"]", {
        y: 12,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.08
    });
}
var _c;
__turbopack_context__.k.register(_c, "Shell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_3e5eb0d0._.js.map