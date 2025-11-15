"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  BookOpen,
  Users,
  Award,
  BarChart3,
  MessageSquare,
  Settings,
  Video,
  Mic,
  Target,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = {
    features: [
      {
        icon: Video,
        label: "Study material",
        href: "/features/study-material",
        desc: "Study related content",
      },
      {
        icon: Video,
        label: "Video lessons",
        href: "/features/video-lessons",
        desc: "HD video content",
      },
      {
        icon: BookOpen,
        label: "Practice material",
        href: "/features/practice-material",
        desc: "Interactive exercises",
      },
      {
        icon: Mic,
        label: "Voice recognition",
        href: "/features/voice-recognition",
        desc: "AI-powered feedback",
      },
      {
        icon: Settings,
        label: "Study tools",
        href: "/features/study-tools",
        desc: "Custom learning aids",
      },
      {
        icon: Award,
        label: "Offline study",
        href: "/features/offline-study",
        desc: "Learn anywhere",
      },
      {
        icon: BarChart3,
        label: "Progress tracking",
        href: "/features/progress-tracking",
        desc: "Monitor your growth",
      },
      {
        icon: Target,
        label: "Reward system",
        href: "/features/reward-system",
        desc: "Earn achievements",
      },
      {
        icon: Users,
        label: "One-to-one lessons",
        href: "/features/one-to-one-lessons",
        desc: "Personal tutoring",
      },
      {
        icon: MessageSquare,
        label: "Support system",
        href: "/features/support-system",
        desc: "24/7 assistance",
      },
    ],
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 px-6">
          <div
            className={`rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-lg shadow-xl border border-[#7B68EE]/20"
                : "bg-white/80 backdrop-blur-md shadow-lg border border-[#7B68EE]/10"
            }`}
          >
            <div className="flex justify-between items-center px-8 py-4">
              {/* Logo */}
              <a
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-[#4169E1] to-[#7B68EE] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                VirHom
              </a>

              {/* Desktop Navigation */}
              <nav className="flex items-center gap-8">
                {/* Features Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("features")}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <button className="flex items-center gap-1 text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium">
                    Features
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeDropdown === "features" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === "features" && (
                    <div className="absolute left-0 w-[500px] bg-white rounded-2xl shadow-2xl py-6 px-6 border border-[#7B68EE]/30 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-3">
                        {menuItems.features.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={idx}
                              href={item.href}
                              className="flex items-start gap-3 p-3 hover:bg-gradient-to-r hover:from-[#F0E6FF] hover:to-[#E8D9FF] rounded-xl transition-all duration-300 hover:scale-[1.02]"
                            >
                              <div className="mt-0.5 p-2 bg-gradient-to-br from-[#4169E1] to-[#7B68EE] rounded-lg shadow-md">
                                <Icon size={18} className="text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-[#333333] text-sm">
                                  {item.label}
                                </div>
                                <div className="text-xs text-[#7B68EE] mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#7B68EE]/30">
                        <a
                          href="/features"
                          className="inline-flex items-center gap-2 text-[#4169E1] font-semibold text-sm hover:text-[#7B68EE] transition-colors group"
                        >
                          <Sparkles
                            size={16}
                            className="group-hover:rotate-12 transition-transform"
                          />
                          Explore all features
                          <ChevronDown size={16} className="rotate-[-90deg]" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Membership Link */}
                <a
                  href="/membership"
                  className="text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium"
                >
                  Membership
                </a>

                {/* Level Guide Link */}
                <a
                  href="/level-guide"
                  className="text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium"
                >
                  Level Guide
                </a>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4">
                <a
                  href="/trial"
                  className="px-6 py-2 bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Free Trial
                </a>
                <a
                  href="/login"
                  className="px-6 py-2 border-2 border-[#4169E1] text-[#4169E1] font-bold rounded-lg hover:bg-[#4169E1] hover:text-white transition-all duration-300"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="lg:hidden bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white sticky top-0 z-50 shadow-lg">
        <div className="flex justify-between items-center p-6">
          <a href="/" className="text-3xl font-bold text-[#FFF7AE]">
            VirHom
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:scale-110 transition-transform"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-gradient-to-b from-[#4169E1] to-[#2d5aad] px-6 pb-6">
            <nav className="flex flex-col gap-3">
              {/* Features Accordion */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "features" ? null : "features"
                    )
                  }
                  className="w-full flex justify-between items-center text-lg font-semibold"
                >
                  Features
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      mobileDropdown === "features" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdown === "features" && (
                  <div className="mt-3 space-y-2 pt-3 border-t border-white/20">
                    {menuItems.features.slice(0, 6).map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon size={18} className="text-[#FFF7AE]" />
                          <span className="text-sm">{item.label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Memberships */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <a
                  href="/membership"
                  className="w-full flex items-center text-lg font-semibold hover:text-[#FFF7AE] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Memberships
                </a>
              </div>

              {/* Level Guide */}
              <a
                href="/level-guide"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-lg font-semibold hover:bg-white/15 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Level Guide
              </a>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href="/trial"
                  className="block w-full text-center px-6 py-3 bg-[#FFF7AE] text-[#4169E1] font-bold rounded-xl hover:bg-white transition"
                >
                  Free Trial
                </a>
                <a
                  href="/login"
                  className="block w-full text-center px-6 py-3 border-2 border-[#FFF7AE] font-bold rounded-xl hover:bg-white/10 transition"
                >
                  Login
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar on desktop */}
      <div className="hidden lg:block h-24"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}


//-------------------------------------------------------------------------------------------------------

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
