(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isNavbarVisible, setIsNavbarVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileDropdown, setMobileDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
                    setIsScrolled(currentScrollY > 50);
                    setLastScrollY(currentScrollY);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        lastScrollY
    ]);
    const menuItems = {
        features: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
                label: "Study material",
                href: "/features/study-material",
                desc: "Study related content"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
                label: "Video lessons",
                href: "/features/video-lessons",
                desc: "HD video content"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                label: "Practice material",
                href: "/features/practice-material",
                desc: "Interactive exercises"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
                label: "Voice recognition",
                href: "/features/voice-recognition",
                desc: "AI-powered feedback"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                label: "Study tools",
                href: "/features/study-tools",
                desc: "Custom learning aids"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                label: "Offline study",
                href: "/features/offline-study",
                desc: "Learn anywhere"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                label: "Progress tracking",
                href: "/features/progress-tracking",
                desc: "Monitor your growth"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                label: "Reward system",
                href: "/features/reward-system",
                desc: "Earn achievements"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                label: "One-to-one lessons",
                href: "/features/one-to-one-lessons",
                desc: "Personal tutoring"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                label: "Support system",
                href: "/features/support-system",
                desc: "24/7 assistance"
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-8dca918abf3713ba" + " " + `hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8dca918abf3713ba" + " " + "max-w-7xl mx-auto py-4 px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca918abf3713ba" + " " + `rounded-2xl transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border border-[#7B68EE]/20" : "bg-white/80 backdrop-blur-md shadow-lg border border-[#7B68EE]/10"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8dca918abf3713ba" + " " + "flex justify-between items-center px-8 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "jsx-8dca918abf3713ba" + " " + "text-3xl font-bold bg-gradient-to-r from-[#4169E1] to-[#7B68EE] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300",
                                    children: "VirHom"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: ()=>setActiveDropdown("features"),
                                            onMouseLeave: (e)=>{
                                                if (!e.currentTarget.contains(e.relatedTarget)) {
                                                    setActiveDropdown(null);
                                                }
                                            },
                                            className: "jsx-8dca918abf3713ba" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-1 text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium",
                                                    children: [
                                                        "Features",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 18,
                                                            className: `transition-transform duration-300 ${activeDropdown === "features" ? "rotate-180" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                activeDropdown === "features" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8dca918abf3713ba" + " " + "absolute left-0 w-[500px] bg-white rounded-2xl shadow-2xl py-6 px-6 border border-[#7B68EE]/30 animate-fadeIn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8dca918abf3713ba" + " " + "grid grid-cols-2 gap-3",
                                                            children: menuItems.features.map((item, idx)=>{
                                                                const Icon = item.icon;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: item.href,
                                                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-start gap-3 p-3 hover:bg-gradient-to-r hover:from-[#F0E6FF] hover:to-[#E8D9FF] rounded-xl transition-all duration-300 hover:scale-[1.02]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8dca918abf3713ba" + " " + "mt-0.5 p-2 bg-gradient-to-br from-[#4169E1] to-[#7B68EE] rounded-lg shadow-md",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                size: 18,
                                                                                className: "jsx-8dca918abf3713ba" + " " + "text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Navbar.js",
                                                                                lineNumber: 162,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Navbar.js",
                                                                            lineNumber: 161,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8dca918abf3713ba" + " " + "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8dca918abf3713ba" + " " + "font-semibold text-[#333333] text-sm",
                                                                                    children: item.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Navbar.js",
                                                                                    lineNumber: 165,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8dca918abf3713ba" + " " + "text-xs text-[#7B68EE] mt-0.5",
                                                                                    children: item.desc
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Navbar.js",
                                                                                    lineNumber: 168,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Navbar.js",
                                                                            lineNumber: 164,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/Navbar.js",
                                                                    lineNumber: 156,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8dca918abf3713ba" + " " + "pt-4 mt-4 border-t border-[#7B68EE]/30",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "/features",
                                                                className: "jsx-8dca918abf3713ba" + " " + "inline-flex items-center gap-2 text-[#4169E1] font-semibold text-sm hover:text-[#7B68EE] transition-colors group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                        size: 16,
                                                                        className: "group-hover:rotate-12 transition-transform"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Navbar.js",
                                                                        lineNumber: 181,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Explore all features",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        size: 16,
                                                                        className: "rotate-[-90deg]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Navbar.js",
                                                                        lineNumber: 186,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Navbar.js",
                                                                lineNumber: 177,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/membership",
                                            className: "jsx-8dca918abf3713ba" + " " + "text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium",
                                            children: "Membership"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/level-guide",
                                            className: "jsx-8dca918abf3713ba" + " " + "text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium",
                                            children: "Level Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/trial",
                                            className: "jsx-8dca918abf3713ba" + " " + "px-6 py-2 bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
                                            children: "Free Trial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/login",
                                            className: "jsx-8dca918abf3713ba" + " " + "px-6 py-2 border-2 border-[#4169E1] text-[#4169E1] font-bold rounded-lg hover:bg-[#4169E1] hover:text-white transition-all duration-300",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-8dca918abf3713ba" + " " + "lg:hidden bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white sticky top-0 z-50 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca918abf3713ba" + " " + "flex justify-between items-center p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "jsx-8dca918abf3713ba" + " " + "text-3xl font-bold text-[#FFF7AE]",
                                children: "VirHom"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "jsx-8dca918abf3713ba" + " " + "text-white hover:scale-110 transition-transform",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 240,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 240,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca918abf3713ba" + " " + "bg-gradient-to-b from-[#4169E1] to-[#2d5aad] px-6 pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "jsx-8dca918abf3713ba" + " " + "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "bg-white/10 backdrop-blur-sm rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileDropdown(mobileDropdown === "features" ? null : "features"),
                                            className: "jsx-8dca918abf3713ba" + " " + "w-full flex justify-between items-center text-lg font-semibold",
                                            children: [
                                                "Features",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 20,
                                                    className: `transition-transform ${mobileDropdown === "features" ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        mobileDropdown === "features" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8dca918abf3713ba" + " " + "mt-3 space-y-2 pt-3 border-t border-white/20",
                                            children: menuItems.features.slice(0, 6).map((item, idx)=>{
                                                const Icon = item.icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: item.href,
                                                    onClick: ()=>setIsMenuOpen(false),
                                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-3 py-2 px-3 bg-white/5 rounded-lg hover:bg-white/10 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 18,
                                                            className: "jsx-8dca918abf3713ba" + " " + "text-[#FFF7AE]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 277,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-8dca918abf3713ba" + " " + "text-sm",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 278,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 271,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "bg-white/10 backdrop-blur-sm rounded-xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/membership",
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "jsx-8dca918abf3713ba" + " " + "w-full flex items-center text-lg font-semibold hover:text-[#FFF7AE] transition",
                                        children: "Memberships"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/level-guide",
                                    onClick: ()=>setIsMenuOpen(false),
                                    className: "jsx-8dca918abf3713ba" + " " + "bg-white/10 backdrop-blur-sm rounded-xl p-4 text-lg font-semibold hover:bg-white/15 transition",
                                    children: "Level Guide"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "pt-4 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/trial",
                                            className: "jsx-8dca918abf3713ba" + " " + "block w-full text-center px-6 py-3 bg-[#FFF7AE] text-[#4169E1] font-bold rounded-xl hover:bg-white transition",
                                            children: "Free Trial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/login",
                                            className: "jsx-8dca918abf3713ba" + " " + "block w-full text-center px-6 py-3 border-2 border-[#FFF7AE] font-bold rounded-xl hover:bg-white/10 transition",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8dca918abf3713ba" + " " + "hidden lg:block h-24"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8dca918abf3713ba",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn.jsx-8dca918abf3713ba{animation:.2s ease-out fadeIn}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
} //-------------------------------------------------------------------------------------------------------
 // "use client";
 // import { useState, useEffect } from "react";
 // import {
 //   Menu,
 //   X,
 //   Globe,
 //   BookOpen,
 //   Users,
 //   Award,
 //   BarChart3,
 //   MessageSquare,
 //   Settings,
 //   Video,
 //   Mic,
 //   Target,
 //   ChevronDown,
 //   Sparkles,
 //   WifiOff,
 // } from "lucide-react";
 // import { useSession, signOut } from "next-auth/react";
 // export default function Navbar() {
 //   const [isMenuOpen, setIsMenuOpen] = useState(false);
 //   const [lastScrollY, setLastScrollY] = useState(0);
 //   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
 //   const [activeDropdown, setActiveDropdown] = useState(null);
 //   const [isScrolled, setIsScrolled] = useState(false);
 //   const [mobileDropdown, setMobileDropdown] = useState(null);
 //   const { data: session, status } = useSession();
 //   useEffect(() => {
 //     const handleScroll = () => {
 //       const currentScrollY = window.scrollY;
 //       setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
 //       setIsScrolled(currentScrollY > 50);
 //       setLastScrollY(currentScrollY);
 //     };
 //     window.addEventListener("scroll", handleScroll);
 //     return () => window.removeEventListener("scroll", handleScroll);
 //   }, [lastScrollY]);
 //   const menuItems = {
 //     features: [
 //       {
 //         icon: Video,
 //         label: "Study material",
 //         href: "/features/study-material",
 //         desc: "Study related mete",
 //       },
 //       {
 //         icon: Video,
 //         label: "Video lessons",
 //         href: "/features/video-lessons",
 //         desc: "HD video content",
 //       },
 //       {
 //         icon: BookOpen,
 //         label: "Practice material",
 //         href: "/features/practice-material",
 //         desc: "Interactive exercises",
 //       },
 //       {
 //         icon: Mic,
 //         label: "Voice recognition",
 //         href: "/features/voice-recognition",
 //         desc: "AI-powered feedback",
 //       },
 //       {
 //         icon: Settings,
 //         label: "Study tools",
 //         href: "/features/study-tools",
 //         desc: "Custom learning aids",
 //       },
 //       {
 //         icon: Award,
 //         label: "Offline study",
 //         href: "/features/offline-study",
 //         desc: "Learn anywhere",
 //       },
 //       {
 //         icon: BarChart3,
 //         label: "Progress tracking",
 //         href: "/features/progress-tracking",
 //         desc: "Monitor your growth",
 //       },
 //       {
 //         icon: Target,
 //         label: "Reward system",
 //         href: "/features/reward-system",
 //         desc: "Earn achievements",
 //       },
 //       {
 //         icon: Users,
 //         label: "One-to-one lessons",
 //         href: "/features/one-to-one-lessons",
 //         desc: "Personal tutoring",
 //       },
 //       {
 //         icon: MessageSquare,
 //         label: "Support system",
 //         href: "/features/support-system",
 //         desc: "24/7 assistance",
 //       },
 //     ],
 //   };
 //   return (
 //     <>
 //       {/* Desktop Navbar */}
 //       <header
 //         className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
 //           isNavbarVisible ? "translate-y-0" : "-translate-y-full"
 //         }`}
 //       >
 //         <div className="max-w-7xl mx-auto px-6 py-4">
 //           <div
 //             className={`rounded-2xl transition-all duration-300 ${
 //               isScrolled
 //                 ? "bg-white/95 backdrop-blur-lg shadow-xl"
 //                 : "bg-white/80 backdrop-blur-md shadow-lg"
 //             }`}
 //           >
 //             <div className="flex justify-between items-center px-8 py-4">
 //               {/* Logo */}
 //               <a
 //                 href="/"
 //                 className="text-3xl font-bold bg-gradient-to-r from-[#6B4F4F] to-[#A27B5C] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
 //               >
 //                 Anglo-Link
 //               </a>
 //               {/* Desktop Navigation */}
 //               <nav className="flex items-center gap-8">
 //                 {/* Features Dropdown */}
 //                 <div
 //                   className="relative"
 //                   onMouseEnter={() => setActiveDropdown("features")}
 //                   onMouseLeave={(e) => {
 //                     // Ensure the mouse truly left the dropdown area
 //                     if (!e.currentTarget.contains(e.relatedTarget)) {
 //                       setActiveDropdown(null);
 //                     }
 //                   }}
 //                 >
 //                   <button className="flex items-center gap-1 text-[#6B4F4F] hover:text-[#A27B5C] transition-colors py-2 font-medium">
 //                     Features
 //                     <ChevronDown
 //                       size={18}
 //                       className={`transition-transform duration-300 ${
 //                         activeDropdown === "features" ? "rotate-180" : ""
 //                       }`}
 //                     />
 //                   </button>
 //                   {activeDropdown === "features" && (
 //                     <div className="absolute left-0  w-[500px] bg-white rounded-2xl shadow-2xl py-6 px-6 border border-[#CBB59D]/30 animate-fadeIn">
 //                       <div className="grid grid-cols-2 gap-3">
 //                         {menuItems.features.map((item, idx) => {
 //                           const Icon = item.icon;
 //                           return (
 //                             <a
 //                               key={idx}
 //                               href={item.href}
 //                               className="flex items-start gap-3 p-3 hover:bg-gradient-to-r hover:from-[#F5F1ED] hover:to-[#EDE5DD] rounded-xl transition-all duration-300 hover:scale-[1.02]"
 //                             >
 //                               <div className="mt-0.5 p-2 bg-gradient-to-br from-[#CBB59D] to-[#A27B5C] rounded-lg shadow-md">
 //                                 <Icon size={18} className="text-white" />
 //                               </div>
 //                               <div className="flex-1">
 //                                 <div className="font-semibold text-[#3E2723] text-sm">
 //                                   {item.label}
 //                                 </div>
 //                                 <div className="text-xs text-[#8B7355] mt-0.5">
 //                                   {item.desc}
 //                                 </div>
 //                               </div>
 //                             </a>
 //                           );
 //                         })}
 //                       </div>
 //                       <div className="pt-4 mt-4 border-t border-[#CBB59D]/30">
 //                         <a
 //                           href="/features"
 //                           className="inline-flex items-center gap-2 text-[#6B4F4F] font-semibold text-sm hover:text-[#A27B5C] transition-colors group"
 //                         >
 //                           <Sparkles
 //                             size={16}
 //                             className="group-hover:rotate-12 transition-transform"
 //                           />
 //                           Explore all features
 //                           <ChevronDown size={16} className="rotate-[-90deg]" />
 //                         </a>
 //                       </div>
 //                     </div>
 //                   )}
 //                 </div>
 //                 {/* Memberships Dropdown */}
 //                 <a
 //                   href="/membership"
 //                   className="text-[#6B4F4F] hover:text-[#A27B5C] transition-colors py-2 font-medium"
 //                 >
 //                   Membership
 //                 </a>
 //                 <a
 //                   href="/level-guide"
 //                   className="text-[#6B4F4F] hover:text-[#A27B5C] transition-colors py-2 font-medium"
 //                 >
 //                   Level Guide
 //                 </a>
 //               </nav>
 //               {/* Right Side Actions */}
 //               {session?.user ? (
 //                 // ✅ Logged in
 //                 <div className="flex items-center gap-4">
 //                   <a
 //                     href="/trial"
 //                     className="px-6 py-2 bg-gradient-to-r from-[#A27B5C] to-[#6B4F4F] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
 //                   >
 //                     Free trial
 //                   </a>
 //                   <a
 //                     href="/dashboard"
 //                     className="px-6 py-2 border-2 border-[#A27B5C] text-[#6B4F4F] font-bold rounded-lg hover:bg-[#A27B5C] hover:text-white transition-all duration-300"
 //                   >
 //                     My Dashboard
 //                   </a>
 //                 </div>
 //               ) : (
 //                 // ❌ Not logged in
 //                 <div className="flex items-center gap-4">
 //                   <a
 //                     href="/trial"
 //                     className="px-6 py-2 bg-gradient-to-r from-[#A27B5C] to-[#6B4F4F] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
 //                   >
 //                     Free trial
 //                   </a>
 //                   <a
 //                     href="/login"
 //                     className="px-6 py-2 border-2 border-[#A27B5C] text-[#6B4F4F] font-bold rounded-lg hover:bg-[#A27B5C] hover:text-white transition-all duration-300"
 //                   >
 //                     Login
 //                   </a>
 //                 </div>
 //               )}
 //             </div>
 //           </div>
 //         </div>
 //       </header>
 //       {/* Mobile Navbar */}
 //       <header className="lg:hidden bg-gradient-to-r from-[#6B4F4F] to-[#A27B5C] text-white sticky top-0 z-50 shadow-lg">
 //         <div className="flex justify-between items-center p-6">
 //           <a href="/" className="text-3xl font-bold text-[#DCC7AA]">
 //             Anglo-Link
 //           </a>
 //           <button
 //             onClick={() => setIsMenuOpen(!isMenuOpen)}
 //             className="text-white hover:scale-110 transition-transform"
 //           >
 //             {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
 //           </button>
 //         </div>
 //         {/* Mobile Menu */}
 //         {isMenuOpen && (
 //           <div className="bg-gradient-to-b from-[#6B4F4F] to-[#8B7355] px-6 pb-6">
 //             <nav className="flex flex-col gap-3">
 //               {/* Features Accordion */}
 //               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
 //                 <button
 //                   onClick={() =>
 //                     setMobileDropdown(
 //                       mobileDropdown === "features" ? null : "features"
 //                     )
 //                   }
 //                   className="w-full flex justify-between items-center text-lg font-semibold"
 //                 >
 //                   Features
 //                   <ChevronDown
 //                     size={20}
 //                     className={`transition-transform ${
 //                       mobileDropdown === "features" ? "rotate-180" : ""
 //                     }`}
 //                   />
 //                 </button>
 //                 {mobileDropdown === "features" && (
 //                   <div className="mt-3 space-y-2 pt-3 border-t border-white/20">
 //                     {menuItems.features.slice(0, 6).map((item, idx) => {
 //                       const Icon = item.icon;
 //                       return (
 //                         <a
 //                           key={idx}
 //                           href={item.href}
 //                           className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
 //                           onClick={() => setIsMenuOpen(false)}
 //                         >
 //                           <Icon size={18} className="text-[#DCC7AA]" />
 //                           <span className="text-sm">{item.label}</span>
 //                         </a>
 //                       );
 //                     })}
 //                   </div>
 //                 )}
 //               </div>
 //               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
 //                 <button
 //                   onClick={() =>
 //                     setMobileDropdown(
 //                       mobileDropdown === "memberships" ? null : "memberships"
 //                     )
 //                   }
 //                   className="w-full flex justify-between items-center text-lg font-semibold"
 //                 >
 //                   Memberships
 //                   <ChevronDown
 //                     size={20}
 //                     className={`transition-transform ${
 //                       mobileDropdown === "memberships" ? "rotate-180" : ""
 //                     }`}
 //                   />
 //                 </button>
 //               </div>
 //               <a
 //                 href="/level-guide"
 //                 className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-lg font-semibold hover:bg-white/15 transition"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Level Guide
 //               </a>
 //               {/* Action Buttons */}
 //               <div className="pt-4 space-y-3">
 //                 {/* <button className="w-full px-4 py-3 border-2 border-white rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-white/10 transition">
 //                   <Globe size={18} />
 //                   <span>English</span>
 //                 </button> */}
 //                 <a
 //                   href="/trial"
 //                   className="block w-full text-center px-6 py-3 bg-white text-[#6B4F4F] font-bold rounded-xl hover:bg-[#DCC7AA] transition"
 //                 >
 //                   Free trial
 //                 </a>
 //                 <a
 //                   href="/login"
 //                   className="block w-full text-center px-6 py-3 border-2 border-white font-bold rounded-xl hover:bg-white/10 transition"
 //                 >
 //                   Login
 //                 </a>
 //               </div>
 //             </nav>
 //           </div>
 //         )}
 //       </header>
 //       {/* Spacer for fixed navbar on desktop */}
 //       <div className="hidden lg:block h-24"></div>
 //       <style jsx>{`
 //         @keyframes fadeIn {
 //           from {
 //             opacity: 0;
 //             transform: translateY(-8px);
 //           }
 //           to {
 //             opacity: 1;
 //             transform: translateY(0);
 //           }
 //         }
 //         .animate-fadeIn {
 //           animation: fadeIn 0.2s ease-out;
 //         }
 //       `}</style>
 //     </>
 //   );
 // }
 // -------------------------------------------------------------------------------------------------------
 // "use client";
 // import React, { useState, useEffect } from "react";
 // import {
 //   Menu,
 //   X,
 //   Globe,
 //   BookOpen,
 //   Users,
 //   Award,
 //   BarChart3,
 //   MessageSquare,
 //   Settings,
 // } from "lucide-react";
 // import { useRouter } from "next/navigation";
 // export default function Navbar() {
 //   const [isMenuOpen, setIsMenuOpen] = useState(false);
 //   const [lastScrollY, setLastScrollY] = useState(0);
 //   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
 //   const [activeDropdown, setActiveDropdown] = useState(null);
 // const router = useRouter();
 //   useEffect(() => {
 //     const handleScroll = () => {
 //       const currentScrollY = window.scrollY;
 //       setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
 //       setLastScrollY(currentScrollY);
 //     };
 //     window.addEventListener("scroll", handleScroll);
 //     return () => window.removeEventListener("scroll", handleScroll);
 //   }, [lastScrollY]);
 //   const menuItems = {
 //     features: [
 //       // { icon: BookOpen, label: "Study material", href: "/study-material" },
 //       { icon: Users, label: "Video lessons", href: "#" },
 //       { icon: Settings, label: "Practice material", href: "#" },
 //       { icon: BarChart3, label: "Voice recognition", href: "#" },
 //       { icon: Settings, label: "Study tools", href: "#" },
 //       { icon: Award, label: "Offline study", href: "#" },
 //       { icon: MessageSquare, label: "Progress tracking", href: "#" },
 //       { icon: Settings, label: "Reward system", href: "#" },
 //       { icon: Users, label: "One-to-one lessons", href: "#" },
 //       { icon: MessageSquare, label: "Support system", href: "#" },
 //     ],
 //     memberships: [
 //       { label: "Basic Plan", href: "#" },
 //       { label: "Premium Plan", href: "#" },
 //       { label: "Student Discount", href: "#" },
 //     ],
 //   };
 //   return (
 //     <div className="bg-white">
 //       <header className="bg-[#207FC5] text-white relative">
 //         {/* Mobile Header */}
 //         <div className="flex justify-between items-center p-6 lg:hidden">
 //           <h1 className="text-3xl font-bold text-[#7ED957]">Anglo-Link</h1>
 //           <button
 //             onClick={() => setIsMenuOpen(!isMenuOpen)}
 //             className="text-white"
 //           >
 //             {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
 //           </button>
 //         </div>
 //         {/* Desktop Header */}
 //         <div
 //           className={`hidden lg:flex justify-between items-center px-30 py-3 max-w-8xl transition-all duration-300 fixed top-0 left-0 right-0 bg-[#207FC5] z-50 ${
 //             isNavbarVisible ? "translate-y-0" : "-translate-y-full"
 //           } ${
 //             lastScrollY > 100 ? "bg-opacity-95 shadow-md" : "bg-opacity-100"
 //           }`}
 //         >
 //           <div className="flex items-center gap-12">
 //             <a href="/" className="text-4xl font-bold text-[#7ED957]">
 //               Angao-Link
 //             </a>
 //             <nav className="flex gap-8 text-lg">
 //               {/* Features Dropdown */}
 //               <div
 //                 className="relative group"
 //                 onMouseEnter={() => setActiveDropdown("features")}
 //                 onMouseLeave={() => setActiveDropdown(null)}
 //               >
 //                 <button className="hover:text-[#7ED957] transition py-2">
 //                   Features
 //                 </button>
 //                 {activeDropdown === "features" && (
 //                   <div className="absolute left-0 mt-0 w-80 bg-white text-gray-800 rounded-lg shadow-xl py-4 px-6 grid grid-cols-2 gap-3 animate-in fade-in duration-200">
 //                     {menuItems.features.map((item, idx) => {
 //                       const Icon = item.icon;
 //                       return (
 //                         <a
 //                           key={idx}
 //                           href={item.href}
 //                           className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-lg transition"
 //                         >
 //                           <Icon size={18} className="text-[#207FC5]" />
 //                           <span className="text-sm">{item.label}</span>
 //                         </a>
 //                       );
 //                     })}
 //                     <div className="col-span-2 pt-2 border-t">
 //                       <a
 //                         href="#"
 //                         className="text-[#207FC5] font-semibold text-sm hover:underline"
 //                       >
 //                         Learn more &gt;
 //                       </a>
 //                     </div>
 //                   </div>
 //                 )}
 //               </div>
 //               {/* Memberships Dropdown */}
 //               <div
 //                 className="relative group"
 //                 onMouseEnter={() => setActiveDropdown("memberships")}
 //                 onMouseLeave={() => setActiveDropdown(null)}
 //               >
 //                 <button className="hover:text-[#7ED957] transition py-2">
 //                   Memberships
 //                 </button>
 //                 {activeDropdown === "memberships" && (
 //                   <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-3 px-4 animate-in fade-in duration-200">
 //                     {menuItems.memberships.map((item, idx) => (
 //                       <a
 //                         key={idx}
 //                         href={item.href}
 //                         className="block py-2 px-3 hover:bg-gray-100 rounded-lg transition text-sm"
 //                       >
 //                         {item.label}
 //                       </a>
 //                     ))}
 //                   </div>
 //                 )}
 //               </div>
 //               {/* Level Guide Dropdown */}
 //               <div
 //                 className="relative group"
 //               >
 //                 <button
 //                   className="hover:text-[#7ED957] transition py-2"
 //                   onClick={() => router.push("/level-guide")}
 //                 >
 //                   Level Guide
 //                 </button>
 //               </div>
 //             </nav>
 //           </div>
 //           <div className="flex items-center gap-4">
 //             <button className="flex items-center gap-2 px-4 py-2 border-2 border-white rounded-lg text-sm hover:bg-white hover:bg-opacity-10 transition">
 //               <Globe size={16} />
 //               <span>English</span>
 //             </button>
 //             <a
 //               href="/trial"
 //               className="px-6 py-3 bg-white text-[#207FC5] font-bold rounded-lg hover:bg-gray-100 transition"
 //             >
 //               Free trial
 //             </a>
 //             <a
 //               href="/login"
 //               className="px-6 py-3 border-2 border-white font-bold rounded-lg hover:bg-white hover:bg-opacity-20 transition"
 //             >
 //               Login
 //             </a>
 //           </div>
 //         </div>
 //         {/* Mobile Menu */}
 //         {isMenuOpen && (
 //           <div className="lg:hidden bg-[#207FC5] p-6">
 //             <nav className="flex flex-col gap-4">
 //               <a
 //                 href="#features"
 //                 className="py-2 text-lg"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Features
 //               </a>
 //               <a
 //                 href="#memberships"
 //                 className="py-2 text-lg"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Memberships
 //               </a>
 //               <a
 //                 href="/level-guide"
 //                 className="py-2 text-lg"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Level Guide
 //               </a>
 //               <div className="pt-4 space-y-3">
 //                 <button className="w-full px-4 py-2 border-2 border-white rounded-lg flex items-center justify-center gap-2">
 //                   <Globe size={16} />
 //                   <span>English</span>
 //                 </button>
 //                 <a
 //                   href="/trial"
 //                   className="block w-full text-center px-6 py-3 bg-white text-[#207FC5] font-bold rounded-lg"
 //                 >
 //                   Free trial
 //                 </a>
 //                 <a
 //                   href="/login"
 //                   className="block w-full text-center px-6 py-3 border-2 border-white font-bold rounded-lg"
 //                 >
 //                   Login
 //                 </a>
 //               </div>
 //             </nav>
 //           </div>
 //         )}
 //       </header>
 //     </div>
 //   );
 // }
_s(Navbar, "YzIUhy9RE1x0N36JUIAsCCdMo08=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Join.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Join
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FadeInDiv = ({ children, className, delay = 0 })=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeInDiv.useEffect": ()=>{
            const timer = setTimeout({
                "FadeInDiv.useEffect.timer": ()=>setIsVisible(true)
            }["FadeInDiv.useEffect.timer"], delay);
            return ({
                "FadeInDiv.useEffect": ()=>clearTimeout(timer)
            })["FadeInDiv.useEffect"];
        }
    }["FadeInDiv.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Join.js",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FadeInDiv, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = FadeInDiv;
function Join() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-gradient-to-br from-[#4169E1] via-[#7B68EE] to-[#4169E1] py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Join.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Join.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 w-20 h-20 bg-[#FFF7AE]/20 rounded-full blur-2xl animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/Join.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 right-10 w-32 h-32 bg-[#4169E1]/20 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: '1s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Join.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse",
                style: {
                    animationDelay: '0.5s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Join.js",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto text-center px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        delay: 100,
                        className: "flex justify-center mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/20 backdrop-blur-md rounded-full p-4 border-2 border-white/30 shadow-xl animate-bounce",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "text-[#FFF7AE] w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Join.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Join.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Join.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        delay: 200,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl lg:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg",
                            children: [
                                "Ready for a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FFF7AE]",
                                    children: "fun and successful"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                "journey to English fluency?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Join.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Join.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        delay: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed",
                            children: "Join our unique teacher-supported self-study programme today!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Join.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Join.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        delay: 400,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4 mb-10",
                            children: [
                                'Structured Learning',
                                'Expert Support',
                                'Flexible Schedule'
                            ].map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full border border-white/30 text-white font-medium hover:bg-white/25 transition-all duration-300 hover:scale-105 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            size: 18,
                                            className: "text-[#FFF7AE]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Join.js",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        feature
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Join.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Join.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        delay: 500,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "group inline-flex items-center gap-3 px-12 py-6 bg-white text-[#4169E1] text-2xl font-bold rounded-2xl hover:bg-[#FFF7AE] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: "Join Programme"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 28,
                                    className: "relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Join.js",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Join.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        delay: 600,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex -space-x-2",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full bg-gradient-to-br from-[#4169E1] to-[#7B68EE] border-2 border-white flex items-center justify-center text-white font-bold text-xs",
                                                    children: String.fromCharCode(64 + i)
                                                }, i, false, {
                                                    fileName: "[project]/src/components/Join.js",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Join.js",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Join 10,000+ learners"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Join.js",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block w-px h-6 bg-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-0.5",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-[#FFF7AE] fill-current",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Join.js",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/src/components/Join.js",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Join.js",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "4.9/5 rating"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Join.js",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Join.js",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Join.js",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Join.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        delay: 700,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-8 text-white/70 text-sm",
                            children: "No credit card required • Start your free trial today"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Join.js",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Join.js",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Join.js",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Join.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = Join;
var _c, _c1;
__turbopack_context__.k.register(_c, "FadeInDiv");
__turbopack_context__.k.register(_c1, "Join");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Simple animation component
const FadeInDiv = ({ children, className, delay = 0 })=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeInDiv.useEffect": ()=>{
            const timer = setTimeout({
                "FadeInDiv.useEffect.timer": ()=>setIsVisible(true)
            }["FadeInDiv.useEffect.timer"], delay);
            return ({
                "FadeInDiv.useEffect": ()=>clearTimeout(timer)
            })["FadeInDiv.useEffect"];
        }
    }["FadeInDiv.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.js",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FadeInDiv, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = FadeInDiv;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#4169E1] via-[#2d5aad] to-[#1a3a7a] text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-16 pt-20 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                                className: "flex flex-col items-center md:items-start space-y-6 flex-1",
                                delay: 100,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "55",
                                            height: "55",
                                            viewBox: "0 0 55 55",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "27.5",
                                                    cy: "27.5",
                                                    r: "27.5",
                                                    fill: "#FFF7AE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "27.5",
                                                    y: "35",
                                                    fontSize: "24",
                                                    fontWeight: "bold",
                                                    fill: "#4169E1",
                                                    textAnchor: "middle",
                                                    children: "AL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-center md:text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#FFF7AE] group cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 20,
                                                        className: "group-hover:scale-110 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 55,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-medium group-hover:text-white transition-colors",
                                                        children: "office@anglo-link.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 56,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full md:w-auto border-2 border-[#7B68EE] text-[#FFF7AE] px-6 py-3 rounded-xl hover:bg-[#7B68EE] hover:text-white transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        size: 18,
                                                        className: "group-hover:translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Contact Us"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-40 bg-gradient-to-b from-transparent via-[#7B68EE]/50 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7B68EE] rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                                className: "flex-1 text-center md:text-left space-y-5",
                                delay: 200,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-[#FFF7AE] mb-4",
                                        children: "More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            'About',
                                            'Acceptable Use Policy',
                                            'Privacy & Cookie Policy',
                                            'Terms of Use'
                                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-[#FFF7AE] hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative z-10",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.js",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFF7AE] group-hover:w-full transition-all duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.js",
                                                            lineNumber: 85,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-40 bg-gradient-to-b from-transparent via-[#7B68EE]/50 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7B68EE] rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                                className: "flex-1 text-center md:text-left space-y-5",
                                delay: 300,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-[#FFF7AE] mb-4",
                                        children: "Connect With Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center md:justify-start gap-4",
                                        children: [
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                                color: 'hover:text-[#1877F2]'
                                            },
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
                                                color: 'hover:text-[#FF0000]'
                                            },
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                                color: 'hover:text-[#FFF7AE]'
                                            },
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
                                                color: 'hover:text-[#FFFFFF]'
                                            }
                                        ].map(({ Icon, color }, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: `bg-white/10 backdrop-blur-sm p-3 rounded-xl ${color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg group`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-6 h-6 group-hover:scale-110 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-[#7B68EE]/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[#FFF7AE] mb-3",
                                                children: "Stay updated with our latest news"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        placeholder: "Your email",
                                                        className: "flex-1 px-4 py-2 bg-white/10 border border-[#7B68EE]/30 rounded-lg text-white placeholder-[#7B68EE]/50 focus:outline-none focus:border-[#FFF7AE] transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-4 py-2 bg-gradient-to-r from-[#4169E1] to-[#7B68EE] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.js",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 mb-8 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full border-t border-[#7B68EE]/30"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-[#4169E1] to-[#1a3a7a] px-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-[#7B68EE] rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-[#4169E1] rounded-full animate-pulse",
                                                style: {
                                                    animationDelay: '0.2s'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-[#FFF7AE] rounded-full animate-pulse",
                                                style: {
                                                    animationDelay: '0.4s'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                        className: "text-center space-y-3 mb-8",
                        delay: 400,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-[#FFF7AE]",
                                children: "VirHom"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#FFF7AE] italic",
                                children: "Your journey to English fluency starts here"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.js",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-[#1a3a7a] via-[#152d63] to-[#1a3a7a] py-5 text-center relative border-t border-[#7B68EE]/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#7B68EE] text-sm font-medium",
                            children: "VirHom Languages © 2025 All Rights Reserved"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.js",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#4169E1] text-xs mt-1",
                            children: "Crafted with passion for language learners worldwide"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.js",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.js",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.js",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFF7AE] to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.js",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
} // "use client";
 // import React, { useState, useEffect } from 'react';
 // import { Facebook, Youtube, Globe, X, Mail, Send } from "lucide-react";
 // // Simple animation component
 // const FadeInDiv = ({ children, className, delay = 0 }) => {
 //   const [isVisible, setIsVisible] = useState(false);
 //   useEffect(() => {
 //     const timer = setTimeout(() => setIsVisible(true), delay);
 //     return () => clearTimeout(timer);
 //   }, [delay]);
 //   return (
 //     <div
 //       className={`transition-all duration-700 ease-out ${
 //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
 //       } ${className}`}
 //     >
 //       {children}
 //     </div>
 //   );
 // };
 // function Footer() {
 //   return (
 //     <div className="bg-gradient-to-br from-[#6B4F4F] via-[#5d4343] to-[#4a3535] text-white relative overflow-hidden">
 //       {/* Decorative Background Pattern */}
 //       <div className="absolute inset-0 opacity-5">
 //         <div className="absolute inset-0" style={{
 //           backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
 //                            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`
 //         }}></div>
 //       </div>
 //       {/* Top Decorative Wave
 //       <div className="absolute top-0 left-0 right-0">
 //         <svg
 //           viewBox="0 0 1440 60"
 //           className="w-full"
 //           preserveAspectRatio="none"
 //         >
 //           <path
 //             fill="#F5F1ED"
 //             d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,0L0,0Z"
 //           ></path>
 //         </svg>
 //       </div> */}
 //       {/* Main Content */}
 //       <div className="max-w-7xl mx-auto px-6 py-16 pt-20 relative z-10">
 //         <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
 //           {/* Left Section - Brand */}
 //           <FadeInDiv className="flex flex-col items-center md:items-start space-y-6 flex-1" delay={100}>
 //             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
 //               <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
 //                 <circle cx="27.5" cy="27.5" r="27.5" fill="#DCC7AA"/>
 //                 <text x="27.5" y="35" fontSize="24" fontWeight="bold" fill="#6B4F4F" textAnchor="middle">AL</text>
 //               </svg>
 //             </div>
 //             <div className="space-y-3 text-center md:text-left">
 //               <div className="flex items-center gap-2 text-[#DCC7AA] group cursor-pointer">
 //                 <Mail size={20} className="group-hover:scale-110 transition-transform" />
 //                 <p className="text-lg font-medium group-hover:text-white transition-colors">
 //                   office@anglo-link.com
 //                 </p>
 //               </div>
 //               <button className="w-full md:w-auto border-2 border-[#CBB59D] text-[#DCC7AA] px-6 py-3 rounded-xl hover:bg-[#CBB59D] hover:text-[#6B4F4F] transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
 //                 <Send size={18} className="group-hover:translate-x-1 transition-transform" />
 //                 Contact Us
 //               </button>
 //             </div>
 //           </FadeInDiv>
 //           {/* Decorative Divider */}
 //           <div className="hidden md:block relative">
 //             <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#CBB59D]/50 to-transparent"></div>
 //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#CBB59D] rounded-full"></div>
 //           </div>
 //           {/* Middle Section - Links */}
 //           <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={200}>
 //             <h3 className="text-2xl font-bold text-[#DCC7AA] mb-4">More</h3>
 //             <ul className="space-y-3">
 //               {['About', 'Acceptable Use Policy', 'Privacy & Cookie Policy', 'Terms of Use'].map((item, idx) => (
 //                 <li key={idx}>
 //                   <a 
 //                     href="#" 
 //                     className="text-[#CBB59D] hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative"
 //                   >
 //                     <span className="relative z-10">{item}</span>
 //                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DCC7AA] group-hover:w-full transition-all duration-300"></span>
 //                   </a>
 //                 </li>
 //               ))}
 //             </ul>
 //           </FadeInDiv>
 //           {/* Decorative Divider */}
 //           <div className="hidden md:block relative">
 //             <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#CBB59D]/50 to-transparent"></div>
 //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#CBB59D] rounded-full"></div>
 //           </div>
 //           {/* Right Section - Social */}
 //           <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={300}>
 //             <h3 className="text-2xl font-bold text-[#DCC7AA] mb-4">Connect With Us</h3>
 //             <div className="flex justify-center md:justify-start gap-4">
 //               {[
 //                 { Icon: Facebook, color: 'hover:text-[#1877F2]' },
 //                 { Icon: Youtube, color: 'hover:text-[#FF0000]' },
 //                 { Icon: Globe, color: 'hover:text-[#DCC7AA]' },
 //                 { Icon: X, color: 'hover:text-[#000000]' }
 //               ].map(({ Icon, color }, idx) => (
 //                 <a
 //                   key={idx}
 //                   href="#"
 //                   className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl ${color} transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg group`}
 //                 >
 //                   <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
 //                 </a>
 //               ))}
 //             </div>
 //             {/* Newsletter Signup */}
 //             <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-[#CBB59D]/30">
 //               <p className="text-sm text-[#DCC7AA] mb-3">Stay updated with our latest news</p>
 //               <div className="flex gap-2">
 //                 <input 
 //                   type="email" 
 //                   placeholder="Your email" 
 //                   className="flex-1 px-4 py-2 bg-white/10 border border-[#CBB59D]/30 rounded-lg text-white placeholder-[#CBB59D]/50 focus:outline-none focus:border-[#DCC7AA] transition-all"
 //                 />
 //                 <button className="px-4 py-2 bg-gradient-to-r from-[#A27B5C] to-[#8B7355] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
 //                   <Send size={18} />
 //                 </button>
 //               </div>
 //             </div>
 //           </FadeInDiv>
 //         </div>
 //         {/* Decorative Line */}
 //         <div className="mt-12 mb-8 relative">
 //           <div className="absolute inset-0 flex items-center">
 //             <div className="w-full border-t border-[#CBB59D]/30"></div>
 //           </div>
 //           <div className="relative flex justify-center">
 //             <div className="bg-gradient-to-br from-[#6B4F4F] to-[#4a3535] px-4">
 //               <div className="flex gap-2">
 //                 <div className="w-2 h-2 bg-[#CBB59D] rounded-full animate-pulse"></div>
 //                 <div className="w-2 h-2 bg-[#A27B5C] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
 //                 <div className="w-2 h-2 bg-[#DCC7AA] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //         {/* Tagline */}
 //         <FadeInDiv className="text-center space-y-3 mb-8" delay={400}>
 //           <h4 className="text-2xl font-bold text-[#DCC7AA]">Anglo-Link</h4>
 //           <p className="text-[#CBB59D] italic">Your journey to English fluency starts here</p>
 //         </FadeInDiv>
 //       </div>
 //       {/* Bottom Bar */}
 //       <div className="bg-gradient-to-r from-[#4a3535] via-[#3d2f2f] to-[#4a3535] py-5 text-center relative border-t border-[#CBB59D]/20">
 //         <div className="relative z-10">
 //           <p className="text-[#CBB59D] text-sm font-medium">
 //             Anglo-Link Languages Ltd © 2025 All Rights Reserved
 //           </p>
 //           <p className="text-[#A27B5C] text-xs mt-1">
 //             Crafted with passion for language learners worldwide
 //           </p>
 //         </div>
 //       </div>
 //       {/* Bottom Decorative Element */}
 //       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DCC7AA] to-transparent"></div>
 //     </div>
 //   );
 // }
 // export default Footer;
 // import React from 'react'
 // import Image from "next/image";
 // import { Facebook, Youtube,Globe ,X } from "lucide-react";
 // function Footer() {
 //   return (
 //     <div className="bg-[#414146] text-white">
 //         {/* Top Section */}
 //         <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 relative">
 //           {/* Left Section */}
 //           <div className="flex flex-col items-center md:items-start space-y-4 flex-1">
 //             <Image
 //               src="https://anglo-link.com/images/anglolink_logo_white_comma.svg"
 //               alt="Anglo-Link Logo"
 //               width={55}
 //               height={55}
 //             />
 //             <p className="text-lg font-semibold">office@anglo-link.com</p>
 //             <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-[#414146] transition">
 //               Contact Us
 //             </button>
 //           </div>
 //           {/* Vertical Divider */}
 //           <div className="hidden md:block w-px bg-gray-500 h-32 mx-4"></div>
 //           {/* Middle Section */}
 //           <div className="flex-1 text-center md:text-left space-y-3">
 //             <h3 className="text-lg font-semibold">More</h3>
 //             <ul className="space-y-2 text-gray-300">
 //               <li>
 //                 <a href="#" className="hover:text-white">
 //                   About
 //                 </a>
 //               </li>
 //               <li>
 //                 <a href="#" className="hover:text-white">
 //                   Acceptable Use Policy
 //                 </a>
 //               </li>
 //               <li>
 //                 <a href="#" className="hover:text-white">
 //                   Privacy & Cookie Policy
 //                 </a>
 //               </li>
 //               <li>
 //                 <a href="#" className="hover:text-white">
 //                   Terms of Use
 //                 </a>
 //               </li>
 //             </ul>
 //           </div>
 //           {/* Right Section */}
 //           <div className="flex-1 text-center md:text-left space-y-3">
 //             <h3 className="text-lg font-semibold">Social</h3>
 //             <div className="flex justify-center md:justify-start gap-4 text-gray-400">
 //               <a href="#" className="hover:text-white">
 //                 <Facebook className="w-6 h-6" />
 //               </a>
 //               <a href="#" className="hover:text-white">
 //                 <Youtube className="w-6 h-6" />
 //               </a>
 //               <a href="#" className="hover:text-white">
 //                 <Globe className="w-6 h-6" />
 //               </a>
 //               <a href="#" className="hover:text-white">
 //                 <X className="w-6 h-6" />
 //               </a>
 //             </div>
 //           </div>
 //         </div>
 //         {/* Bottom Bar */}
 //         <div className="bg-[#3b3b3f] py-4 text-center text-gray-300 text-sm">
 //           Anglo-Link Languages Ltd © 2025 All Rights Reserved
 //         </div>
 //       </div>
 //   )
 // }
 // export default Footer
_c1 = Footer;
var _c, _c1;
__turbopack_context__.k.register(_c, "FadeInDiv");
__turbopack_context__.k.register(_c1, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SessionProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function SessionProvider({ children, session }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: session,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/SessionProvider.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = SessionProvider;
var _c;
__turbopack_context__.k.register(_c, "SessionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_b671e354._.js.map