(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/ui/Card.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Card-module__qLhDLW__card",
});
}),
"[project]/src/app/components/ui/Card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Card.module.css [app-client] (css module)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "b76db0cc1d06dde2ce367bf72b97e00b1223593a32f2e80f08a58ae315fd6013") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b76db0cc1d06dde2ce367bf72b97e00b1223593a32f2e80f08a58ae315fd6013";
    }
    const { className: t1, children } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/components/ui/Card.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/studio/GeneratePanel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "GeneratePanel-module__0838MG__body",
  "buttons": "GeneratePanel-module__0838MG__buttons",
  "card": "GeneratePanel-module__0838MG__card",
  "head": "GeneratePanel-module__0838MG__head",
  "sub": "GeneratePanel-module__0838MG__sub",
  "title": "GeneratePanel-module__0838MG__title",
});
}),
"[project]/src/app/components/studio/GeneratePanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeneratePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/studio/GeneratePanel.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
function GeneratePanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "62bfcb85a096743ce6c3bd93e7e941d39fefdd8925ca4d387adf6ef0f4ac1ae6") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "62bfcb85a096743ce6c3bd93e7e941d39fefdd8925ca4d387adf6ef0f4ac1ae6";
    }
    const { title, subtitle, children, onGenerate, primaryLabel: t1, secondaryLabel: t2, onSecondary } = t0;
    const primaryLabel = t1 === undefined ? "Generate" : t1;
    const secondaryLabel = t2 === undefined ? "Save as Prompt" : t2;
    let t3;
    if ($[1] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== subtitle) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = subtitle;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t3 || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== onSecondary || $[9] !== secondaryLabel) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "secondary",
            size: "sm",
            onClick: onSecondary,
            children: secondaryLabel
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[8] = onSecondary;
        $[9] = secondaryLabel;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== onGenerate || $[12] !== primaryLabel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "primary",
            size: "sm",
            glow: true,
            onClick: onGenerate,
            children: primaryLabel
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[11] = onGenerate;
        $[12] = primaryLabel;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t5 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[17] = t5;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== children) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 89,
            columnNumber: 11
        }, this);
        $[20] = children;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/studio/GeneratePanel.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t9;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    return t11;
}
_c = GeneratePanel;
var _c;
__turbopack_context__.k.register(_c, "GeneratePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/studio/PromptComposer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "PromptComposer-module__FkCOCG__actions",
  "chip": "PromptComposer-module__FkCOCG__chip",
  "chips": "PromptComposer-module__FkCOCG__chips",
  "sub": "PromptComposer-module__FkCOCG__sub",
  "textarea": "PromptComposer-module__FkCOCG__textarea",
  "title": "PromptComposer-module__FkCOCG__title",
  "top": "PromptComposer-module__FkCOCG__top",
  "wrap": "PromptComposer-module__FkCOCG__wrap",
});
}),
"[project]/src/app/components/studio/PromptComposer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromptComposer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/studio/PromptComposer.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PromptComposer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "3194fca1bb54197ada4a536ebaf7b0ca075d950c4ccb90469bfa244630f38cf1") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3194fca1bb54197ada4a536ebaf7b0ca075d950c4ccb90469bfa244630f38cf1";
    }
    const { title: t1, value, onChange, quickChips: t2, placeholder: t3 } = t0;
    const title = t1 === undefined ? "Prompt" : t1;
    let t4;
    if ($[1] !== t2) {
        t4 = t2 === undefined ? [] : t2;
        $[1] = t2;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const quickChips = t4;
    const placeholder = t3 === undefined ? "Write a prompt\u2026" : t3;
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const t5 = String(value || "");
    let t6;
    if ($[3] !== t5) {
        t6 = t5.trim();
        $[3] = t5;
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    const canCopy = t6.length > 0;
    let t7;
    if ($[5] !== canCopy || $[6] !== value) {
        t7 = async function copy() {
            if (!canCopy) {
                return;
            }
            try {
                await navigator.clipboard.writeText(value);
                setCopied(true);
                setTimeout({
                    "PromptComposer[copy > setTimeout()]": ()=>setCopied(false)
                }["PromptComposer[copy > setTimeout()]"], 1000);
            } catch  {}
        };
        $[5] = canCopy;
        $[6] = value;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const copy = t7;
    let t8;
    if ($[8] !== title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[8] = title;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
            children: "Click a template → auto-fill → refine."
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 82,
            columnNumber: 11
        }, this);
        $[11] = t8;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const t11 = !canCopy;
    const t12 = copied ? "Copied \u2713" : "Copy";
    let t13;
    if ($[13] !== copy || $[14] !== t11 || $[15] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "outline",
                size: "sm",
                onClick: copy,
                disabled: t11,
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
                lineNumber: 92,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[13] = copy;
        $[14] = t11;
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t10 || $[18] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t13;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== onChange || $[21] !== quickChips) {
        t15 = quickChips?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
            children: quickChips.map({
                "PromptComposer[quickChips.map()]": (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                        onClick: {
                            "PromptComposer[quickChips.map() > <button>.onClick]": ()=>onChange({
                                    "PromptComposer[quickChips.map() > <button>.onClick > onChange()]": (prev)=>`${(prev || "").trim()} ${c}`.trim()
                                }["PromptComposer[quickChips.map() > <button>.onClick > onChange()]"])
                        }["PromptComposer[quickChips.map() > <button>.onClick]"],
                        children: c
                    }, c, false, {
                        fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
                        lineNumber: 112,
                        columnNumber: 50
                    }, this)
            }["PromptComposer[quickChips.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 111,
            columnNumber: 37
        }, this);
        $[20] = onChange;
        $[21] = quickChips;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== onChange) {
        t16 = ({
            "PromptComposer[<textarea>.onChange]": (e)=>onChange(e.target.value)
        })["PromptComposer[<textarea>.onChange]"];
        $[23] = onChange;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== placeholder || $[26] !== t16 || $[27] !== value) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
            value: value,
            onChange: t16,
            placeholder: placeholder,
            spellCheck: false
        }, void 0, false, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[25] = placeholder;
        $[26] = t16;
        $[27] = value;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== t14 || $[30] !== t15 || $[31] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
            children: [
                t14,
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/studio/PromptComposer.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t15;
        $[31] = t17;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    return t18;
}
_s(PromptComposer, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = PromptComposer;
var _c;
__turbopack_context__.k.register(_c, "PromptComposer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(studio)/images/images.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "controls": "images-module__J1qaHG__controls",
  "grid": "images-module__J1qaHG__grid",
  "header": "images-module__J1qaHG__header",
  "label": "images-module__J1qaHG__label",
  "left": "images-module__J1qaHG__left",
  "page": "images-module__J1qaHG__page",
  "right": "images-module__J1qaHG__right",
  "row": "images-module__J1qaHG__row",
  "row2": "images-module__J1qaHG__row2",
  "sub": "images-module__J1qaHG__sub",
  "title": "images-module__J1qaHG__title",
  "tpl": "images-module__J1qaHG__tpl",
  "tplActive": "images-module__J1qaHG__tplActive",
  "tplDot": "images-module__J1qaHG__tplDot",
  "tplList": "images-module__J1qaHG__tplList",
  "tplSub": "images-module__J1qaHG__tplSub",
  "tplTitle": "images-module__J1qaHG__tplTitle",
  "tplTop": "images-module__J1qaHG__tplTop",
});
}),
"[project]/src/app/(studio)/images/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/studio/GeneratePanel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/studio/PromptComposer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$images$2f$images$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(studio)/images/images.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ImagesPage() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImagesPage.useEffect": ()=>{
            setMounted(true);
        }
    }["ImagesPage.useEffect"], []);
    if (!mounted) return null;
    async function onGenerate() {
        try {
            setLoading(true);
            setError("");
            setResults([]);
            const res = await fetch("/api/images/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error);
            }
            const arr = data?.result?.data;
            if (!Array.isArray(arr) || arr.length === 0) {
                throw new Error("No images returned");
            }
            setResults(arr.map((item, i)=>({
                    id: i,
                    url: item.imageURL,
                    title: `Image ${i + 1}`,
                    subtitle: "Runware AI"
                })));
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$images$2f$images$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$GeneratePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Image Generator",
                subtitle: "Generate AI images",
                onGenerate: onGenerate,
                primaryLabel: "Generate Images",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$studio$2f$PromptComposer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: prompt,
                    onChange: setPrompt
                }, void 0, false, {
                    fileName: "[project]/src/app/(studio)/images/page.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(studio)/images/page.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Generating..."
            }, void 0, false, {
                fileName: "[project]/src/app/(studio)/images/page.jsx",
                lineNumber: 56,
                columnNumber: 19
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$images$2f$images$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/(studio)/images/page.jsx",
                lineNumber: 57,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$images$2f$images$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: results.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: img.url,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$studio$292f$images$2f$images$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                    }, img.id, false, {
                        fileName: "[project]/src/app/(studio)/images/page.jsx",
                        lineNumber: 60,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(studio)/images/page.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(studio)/images/page.jsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_s(ImagesPage, "asKougpNVyPA8l2jHeP1bj0PhC0=");
_c = ImagesPage;
var _c;
__turbopack_context__.k.register(_c, "ImagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_2302d13e._.js.map