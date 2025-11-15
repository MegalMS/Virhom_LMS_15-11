"use client";
import React, { useState, useEffect } from "react";
import { GraduationCap, CheckCircle, Target, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";



// Animation wrapper
const FadeInView = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function Page() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    // const toolData = studyToolsData[slug];
  const [contents, setContents] = useState();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

useEffect(() => {
  async function loadData() {
    try {
      console.log("📌 Fetching: /api/content");

      const res = await fetch("/api/content", { cache: "no-store" });
      const json = await res.json();

      console.log("📌 API Response:", json);

      const fixedSlug = slug; // ← RAW SLUG

      console.log("📌 URL Slug:", slug);
      console.log("📌 Using Key:", fixedSlug);

      console.log("📌 Available Keys in JSON:", Object.keys(json.data || {}));

      const finalData = json.data?.[fixedSlug];
      console.log("📌 Matched Content:", finalData);

      setContents(finalData || null);
    } catch (err) {
      console.error("❌ Error loading JSON:", err);
    } finally {
      setLoading(false);
    }
  }

  loadData();
}, [slug]);


  // Color Palette
  const colors = {
    primary: "#4169E1",
    secondary: "#7B68EE",
    accent: "#FFF7AE",
    white: "#FFFFFF",
    dark: "#333333",
    lightBg: "#F8FAFF",
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg" style={{ color: colors.dark }}>Loading...</div>
      </div>
    );
  }

  // Error state: contents is null or undefined
  if (!contents) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-center">
          <p>Failed to load content.</p>
          <p className="text-sm mt-2">Check if <code className="bg-gray-100 px-1">/public/content.json</code> exists.</p>
        </div>
      </div>
    );
  }

  // NOW SAFE: destructure only after confirming contents exists
  const { header, table, levels, levelDetails } = contents;

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#F0F4FF] -z-10" />

      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: colors.primary, animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: colors.secondary, animation: "float 10s ease-in-out infinite 1s" }}
        />
      </div>

      {/* ---------- Header Section ---------- */}
      <section className="relative pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeInView delay={0} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4169E1]/10 border border-[#4169E1]/20 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                {header.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.dark }}>
              {header.title.replace(header.highlight, "")}{" "}
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                }}
              >
                {header.highlight}
              </span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
              {header.subtitle}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ---------- Table Section ---------- */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeInView delay={100}>
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#E8E8E8]/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      className="border-b"
                      style={{
                        background: `linear-gradient(to right, ${colors.primary}05, ${colors.secondary}05)`,
                        borderColor: "#E8E8E8",
                      }}
                    >
                      {table.headers.map((headerText, i) => (
                        <th
                          key={i}
                          className="px-6 py-4 text-left text-sm font-semibold"
                          style={{ color: colors.dark }}
                        >
                          <div className="flex items-center gap-2">
                            {i === 0 && <TrendingUp className="w-4 h-4" style={{ color: colors.primary }} />}
                            {headerText}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {levels.map((row, i) => (
                      <tr
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`border-b border-[#E8E8E8] cursor-pointer transition-all duration-300 ${
                          activeTab === i
                            ? "bg-[#4169E1]/8 hover:bg-[#4169E1]/12"
                            : "hover:bg-[#F8F8F8]"
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-semibold" style={{ color: colors.dark }}>
                          <div className="flex items-center gap-3">
                            <div
                              className="w-3 h-3 rounded-full transition-transform duration-300"
                              style={{
                                backgroundColor: activeTab === i ? colors.primary : colors.secondary,
                                transform: activeTab === i ? "scale(1.2)" : "scale(1)",
                              }}
                            />
                            {row.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className="px-2 py-1 rounded-md font-medium text-xs"
                            style={{
                              backgroundColor: colors.primary + "10",
                              color: colors.primary,
                            }}
                          >
                            {row.cefr}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#999999]">–</td>
                        <td className="px-6 py-4 text-sm text-[#999999]">–</td>
                        <td className="px-6 py-4 text-sm text-[#999999]">–</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes */}
              <div className="px-6 py-4 space-y-2 text-xs" style={{ backgroundColor: "#F8F8F8", borderTop: "1px solid #E8E8E8", color: "#666666" }}>
                {table.notes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ---------- Tab Navigation ---------- */}
      <section className="relative py-8 sticky top-0 z-30 bg-gradient-to-b from-white to-white/80 backdrop-blur-md border-b border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {levels.map((level, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border ${
                  activeTab === i
                    ? "border-transparent text-white shadow-lg"
                    : "border-[#E8E8E8] text-[#666666] hover:text-[#333333] hover:border-[#4169E1]/30"
                }`}
                style={
                  activeTab === i
                    ? {
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        boxShadow: `0 8px 16px ${colors.primary}40`,
                      }
                    : {}
                }
              >
                {level.tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Dynamic Level Section ---------- */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeInView delay={200} key={activeTab}>
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.secondary}08 100%)`,
                border: `2px solid ${colors.primary}20`,
              }}
            >
              {/* Header */}
              <div className="px-8 lg:px-12 pt-12 pb-8 border-b border-[#E8E8E8]">
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <GraduationCap size={32} style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.dark }}>
                      {levels[activeTab].title}
                    </h2>
                    <p style={{ color: "#666666" }}>
                      {levelDetails.progressTagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 lg:px-12 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Abilities */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle size={24} style={{ color: colors.primary }} />
                      <h3 className="text-xl font-semibold" style={{ color: colors.dark }}>
                        {levelDetails.abilitiesLabel}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-base" style={{ color: "#666666" }}>
                      {levels[activeTab].abilities}
                    </p>
                  </div>

                  {/* Goals */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Target size={24} style={{ color: colors.primary }} />
                      <h3 className="text-xl font-semibold" style={{ color: colors.dark }}>
                        {levelDetails.goalsLabel}
                      </h3>
                    </div>
                    <p className="mb-4 text-base" style={{ color: "#666666" }}>
                      {levelDetails.goalsIntro}
                    </p>
                    <ul className="space-y-3">
                      {levels[activeTab].goals.map((goal, i) => (
                        <li key={i} className="flex gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: colors.primary }}
                          />
                          <span className="leading-relaxed" style={{ color: "#666666" }}>
                            {goal}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Milestones */}
                <div className="mt-12 pt-12 border-t border-[#E8E8E8]">
                  <h4 className="text-lg font-semibold mb-6" style={{ color: colors.dark }}>
                    {levelDetails.milestonesLabel}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {levels[activeTab].milestones.map((milestone, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
                        style={{
                          backgroundColor: colors.accent + "80",
                          borderColor: colors.primary + "40",
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0"
                            style={{ backgroundColor: colors.primary }}
                          >
                            {i + 1}
                          </div>
                          <span className="font-medium text-sm" style={{ color: colors.dark }}>
                            {milestone}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}


// "use client";
// import React, { useState, useEffect } from "react";
// import { GraduationCap, CheckCircle, Target, TrendingUp } from "lucide-react";

// // Animation wrapper
// const FadeInView = ({ children, className, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`transition-all duration-700 ease-out ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default function Page() {
//   const levels = [
//     {
//       tab: "Beginner (A1)",
//       title: "Beginner (A1)",
//       cefr: "A1",
//       abilities:
//         "You understand and can use some basic English phrases to say hello, goodbye, thank you, etc. You can also say a few things about yourself (name, nationality, age, possessions), but you are not able to understand or engage in a conversation or any form of written exchange.",
//       goals: [
//         "Learn the basic structure and the most common daily vocabulary and phrases.",
//         "Open your ears to English sounds and rhythm by hearing English in the background (without trying to understand anything).",
//       ],
//       milestones: ["Master basic greetings", "Learn personal details", "Build confidence"],
//     },
//     {
//       tab: "Elementary (A2)",
//       title: "Elementary (A2)",
//       cefr: "A2",
//       abilities:
//         "You can understand frequently used expressions and communicate in simple tasks requiring a direct exchange of information. You can describe your background and immediate environment.",
//       goals: [
//         "Expand your vocabulary and improve your pronunciation.",
//         "Understand short phrases and simple sentences used in daily life.",
//       ],
//       milestones: ["Expand vocabulary", "Improve pronunciation", "Simple conversations"],
//     },
//     {
//       tab: "Intermediate (B1-B2)",
//       title: "Intermediate (B1-B2)",
//       cefr: "B1-B2",
//       abilities:
//         "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.",
//       goals: [
//         "Learn to express opinions, agree/disagree, and describe events clearly.",
//         "Start reading and listening to English media for comprehension.",
//       ],
//       milestones: ["Express opinions", "Understand media", "Complex sentences"],
//     },
//     {
//       tab: "Advanced (C1)",
//       title: "Advanced (C1)",
//       cefr: "C1",
//       abilities:
//         "You can express yourself fluently and spontaneously without much obvious searching for expressions. You use language flexibly for social, academic, and professional purposes.",
//       goals: [
//         "Improve advanced grammar and idiomatic expressions.",
//         "Work on writing essays and formal correspondence.",
//       ],
//       milestones: ["Master idioms", "Write formally", "Professional English"],
//     },
//     {
//       tab: "Fluent (C1+)",
//       title: "Fluent (C1+)",
//       cefr: "C1+",
//       abilities:
//         "You can understand demanding texts and recognize implicit meaning. You can express ideas fluently and use language effectively for professional purposes.",
//       goals: [
//         "Refine your accent and vocabulary range.",
//         "Engage in debates and discussions on complex topics.",
//       ],
//       milestones: ["Refine accent", "Advanced vocabulary", "Debate fluency"],
//     },
//     {
//       tab: "Proficient (C2)",
//       title: "Proficient (C2)",
//       cefr: "C2",
//       abilities:
//         "You can understand practically everything you hear or read and express yourself spontaneously, fluently, and precisely.",
//       goals: [
//         "Perfect your understanding of cultural nuances in communication.",
//         "Write and speak with precision and natural flow.",
//       ],
//       milestones: ["Cultural nuance", "Precise expression", "Natural fluency"],
//     },
//     {
//       tab: "Expert (C2+)",
//       title: "Expert (Near Native) (C2+)",
//       cefr: "C2+",
//       abilities:
//         "You have a level of English comparable to that of a well-educated native speaker.",
//       goals: [
//         "Master stylistic variety and cultural references in all contexts.",
//         "Communicate effortlessly with full natural fluency.",
//       ],
//       milestones: ["Master stylistic variety", "Native-like fluency", "Expert proficiency"],
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   // Color Palette
//   const colors = {
//     primary: "#4169E1",       // Royal Blue
//     secondary: "#7B68EE",     // Medium Slate Blue
//     accent: "#FFF7AE",        // Soft Pastel Yellow
//     white: "#FFFFFF",         // White
//     dark: "#333333",          // Dark Gray
//     lightBg: "#F8FAFF",
//   };

//   return (
//     <>
//       {/* Background */}
//       <div className="fixed inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#F0F4FF] -z-10" />

//       {/* Decorative elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
//         <div
//           className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
//           style={{ backgroundColor: colors.primary, animation: "float 8s ease-in-out infinite" }}
//         />
//         <div
//           className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
//           style={{ backgroundColor: colors.secondary, animation: "float 10s ease-in-out infinite 1s" }}
//         />
//       </div>

//       {/* ---------- Header Section ---------- */}
//       <section className="relative pt-16 pb-8">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <FadeInView delay={0} className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4169E1]/10 border border-[#4169E1]/20 mb-6">
//               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
//               <span className="text-sm font-semibold" style={{ color: colors.primary }}>
//                 English Proficiency Levels
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb- 4" style={{ color: colors.dark }}>
//               From Beginner to{" "}
//               <span
//                 className="bg-gradient-to-r bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
//                 }}
//               >
//                 Expert Fluency
//               </span>
//             </h1>
//             <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
//               Aligned with CEFR standards, our structured levels help you track progress and achieve your English language goals
//             </p>
//           </FadeInView>
//         </div>
//       </section>

//       {/* ---------- Table Section ---------- */}
//       <section className="relative py-12">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <FadeInView delay={100}>
//             <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#E8E8E8]/50">
//               {/* Table Header */}
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr
//                       className="border-b"
//                       style={{
//                         background: `linear-gradient(to right, ${colors.primary}05, ${colors.secondary}05)`,
//                         borderColor: "#E8E8E8",
//                       }}
//                     >
//                       <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: colors.dark }}>
//                         <div className="flex items-center gap-2">
//                           <TrendingUp className="w-4 h-4" style={{ color: colors.primary }} />
//                           VirHom Level
//                         </div>
//                       </th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: colors.dark }}>CEFR</th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: colors.dark }}>IELTS</th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: colors.dark }}>Cambridge</th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: colors.dark }}>TOEFL iBT</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {levels.map((row, i) => (
//                       <tr
//                         key={i}
//                         onClick={() => setActiveTab(i)}
//                         className={`border-b border-[#E8E8E8] cursor-pointer transition-all duration-300 ${
//                           activeTab === i
//                             ? "bg-[#4169E1]/8 hover:bg-[#4169E1]/12"
//                             : "hover:bg-[#F8F8F8]"
//                         }`}
//                       >
//                         <td className="px-6 py-4 text-sm font-semibold" style={{ color: colors.dark }}>
//                           <div className="flex items-center gap-3">
//                             <div
//                               className="w-3 h-3 rounded-full transition-transform duration-300"
//                               style={{
//                                 backgroundColor: activeTab === i ? colors.primary : colors.secondary,
//                                 transform: activeTab === i ? "scale(1.2)" : "scale(1)",
//                               }}
//                             />
//                             {row.title}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 text-sm">
//                           <span
//                             className="px-2 py-1 rounded-md font-medium text-xs"
//                             style={{
//                               backgroundColor: colors.primary + "10",
//                               color: colors.primary,
//                             }}
//                           >
//                             {row.cefr}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 text-sm text-[#999999]">–</td>
//                         <td className="px-6 py-4 text-sm text-[#999999]">–</td>
//                         <td className="px-6 py-4 text-sm text-[#999999]">–</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Notes */}
//               <div className="px-6 py-4 space-y-2 text-xs" style={{ backgroundColor: "#F8F8F8", borderTop: "1px solid #E8E8E8", color: "#666666" }}>
//                 <p>* CEFR: Common European Framework of Reference for Languages</p>
//                 <p>** Cambridge: KET (Key), PET (Preliminary), FCE (First), CAE (Advanced), CPE (Proficiency)</p>
//               </div>
//             </div>
//           </FadeInView>
//         </div>
//       </section>

//       {/* ---------- Tab Navigation ---------- */}
//       <section className="relative py-8 sticky top-0 z-30 bg-gradient-to-b from-white to-white/80 backdrop-blur-md border-b border-[#E8E8E8]">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {levels.map((level, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActiveTab(i)}
//                 className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border ${
//                   activeTab === i
//                     ? "border-transparent text-white shadow-lg"
//                     : "border-[#E8E8E8] text-[#666666] hover:text-[#333333] hover:border-[#4169E1]/30"
//                 }`}
//                 style={
//                   activeTab === i
//                     ? {
//                         background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
//                         boxShadow: `0 8px 16px ${colors.primary}40`,
//                       }
//                     : {}
//                 }
//               >
//                 {level.tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Dynamic Level Section ---------- */}
//       <section className="relative py-20">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <FadeInView delay={200} key={activeTab}>
//             <div
//               className="rounded-2xl overflow-hidden shadow-2xl"
//               style={{
//                 background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.secondary}08 100%)`,
//                 border: `2px solid ${colors.primary}20`,
//               }}
//             >
//               {/* Header */}
//               <div className="px-8 lg:px-12 pt-12 pb-8 border-b border-[#E8E8E8]">
//                 <div className="flex items-start gap-6 mb-6">
//                   <div
//                     className="p-4 rounded-xl"
//                     style={{ backgroundColor: colors.accent }}
//                   >
//                     <GraduationCap size={32} style={{ color: colors.primary }} />
//                   </div>
//                   <div>
//                     <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.dark }}>
//                       {levels[activeTab].title}
//                     </h2>
//                     <p style={{ color: "#666666" }}>
//                       Progress toward fluency and professional proficiency
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="px-8 lg:px-12 py-12">
//                 <div className="grid md:grid-cols-2 gap-12">
//                   {/* Abilities */}
//                   <div>
//                     <div className="flex items-center gap-3 mb-4">
//                       <CheckCircle size={24} style={{ color: colors.primary }} />
//                       <h3 className="text-xl font-semibold" style={{ color: colors.dark }}>
//                         Your Abilities
//                       </h3>
//                     </div>
//                     <p className="leading-relaxed text-base" style={{ color: "#666666" }}>
//                       {levels[activeTab].abilities}
//                     </p>
//                   </div>

//                   {/* Goals */}
//                   <div>
//                     <div className="flex items-center gap-3 mb-4">
//                       <Target size={24} style={{ color: colors.primary }} />
//                       <h3 className="text-xl font-semibold" style={{ color: colors.dark }}>
//                         Your Goals
//                       </h3>
//                     </div>
//                     <p className="mb-4 text-base" style={{ color: "#666666" }}>
//                       Working through this level, you will:
//                     </p>
//                     <ul className="space-y-3">
//                       {levels[activeTab].goals.map((goal, i) => (
//                         <li key={i} className="flex gap-3">
//                           <div
//                             className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
//                             style={{ backgroundColor: colors.primary }}
//                           />
//                           <span className="leading-relaxed" style={{ color: "#666666" }}>
//                             {goal}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Milestones */}
//                 <div className="mt-12 pt-12 border-t border-[#E8E8E8]">
//                   <h4 className="text-lg font-semibold mb-6" style={{ color: colors.dark }}>
//                     Key Milestones
//                   </h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                     {levels[activeTab].milestones.map((milestone, i) => (
//                       <div
//                         key={i}
//                         className="p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
//                         style={{
//                           backgroundColor: colors.accent + "80",
//                           borderColor: colors.primary + "40",
//                         }}
//                       >
//                         <div className="flex items-start gap-3">
//                           <div
//                             className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0"
//                             style={{ backgroundColor: colors.primary }}
//                           >
//                             {i + 1}
//                           </div>
//                           <span className="font-medium text-sm" style={{ color: colors.dark }}>
//                             {milestone}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeInView>
//         </div>
//       </section>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-30px);
//           }
//         }

//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }

//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </>
//   );
// }



// // // "use client";
// // // import React from "react";

// // // export default function Page() {
// // //   const levels = [
// // //     {
// // //       level: "Beginner",
// // //       CEFR: "A1",
// // //       IELTS: "1.0",
// // //       Cambridge: "KET Pass (100-119)",
// // //       TOEFL: "0 - 19",
// // //     },
// // //     {
// // //       level: "Lower Elementary",
// // //       CEFR: "A2",
// // //       IELTS: "3.0",
// // //       Cambridge: "KET/PET Pass (120-139)",
// // //       TOEFL: "20 - 31",
// // //     },
// // //     {
// // //       level: "Upper Elementary",
// // //       CEFR: "B1",
// // //       IELTS: "4.0",
// // //       Cambridge: "PET (140 - 148)",
// // //       TOEFL: "32 - 38",
// // //     },
// // //     {
// // //       level: "Lower Intermediate",
// // //       CEFR: "B1+",
// // //       IELTS: "5.0",
// // //       Cambridge: "PET (150 - 159)",
// // //       TOEFL: "39 - 45",
// // //     },
// // //     {
// // //       level: "Upper Intermediate",
// // //       CEFR: "B2",
// // //       IELTS: "6.0",
// // //       Cambridge: "FCE (160 - 169)",
// // //       TOEFL: "46 - 70",
// // //     },
// // //     {
// // //       level: "Lower Advanced",
// // //       CEFR: "B2+",
// // //       IELTS: "6.5",
// // //       Cambridge: "FCE (170 - 179)",
// // //       TOEFL: "71 - 83",
// // //     },
// // //     {
// // //       level: "Upper Advanced",
// // //       CEFR: "C1",
// // //       IELTS: "7.0",
// // //       Cambridge: "CAE (180 - 189)",
// // //       TOEFL: "94 - 101",
// // //     },
// // //     {
// // //       level: "Fluent",
// // //       CEFR: "C1+",
// // //       IELTS: "7.5",
// // //       Cambridge: "CAE (190 - 199)",
// // //       TOEFL: "102 - 114",
// // //     },
// // //     {
// // //       level: "Proficient",
// // //       CEFR: "C2",
// // //       IELTS: "8.0",
// // //       Cambridge: "CPE (200 - 219)",
// // //       TOEFL: "115 - 117",
// // //     },
// // //     {
// // //       level: "Expert (near-native)",
// // //       CEFR: "C2+",
// // //       IELTS: "9.0",
// // //       Cambridge: "CPE (220 - 230)",
// // //       TOEFL: "118 - 120",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="bg-white py-20">
// // //       <div className="max-w-5xl mx-auto px-4">
// // //         {/* Heading */}
// // //         <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
// // //           VirHom's ranks in the framework of international tests
// // //         </h2>

// // //         {/* Table */}
// // //         <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md">
// // //           <table className="w-full text-center border-collapse">
// // //             <thead>
// // //               <tr className="bg-[#E8F3FC] border-b border-blue-300">
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   VirHom level
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   CEFR
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   IELTS
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// // //                   Cambridge
// // //                 </th>
// // //                 <th className="p-3 text-sm font-semibold text-gray-800">
// // //                   TOEFL iBT
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {levels.map((row, i) => (
// // //                 <tr
// // //                   key={i}
// // //                   className={`text-gray-700 text-sm ${
// // //                     i % 2 === 0 ? "bg-gray-50" : "bg-white"
// // //                   } hover:bg-blue-50 transition`}
// // //                 >
// // //                   <td className="p-3 border border-gray-200">{row.level}</td>
// // //                   <td className="p-3 border border-gray-200">{row.CEFR}</td>
// // //                   <td className="p-3 border border-gray-200">{row.IELTS}</td>
// // //                   <td className="p-3 border border-gray-200">
// // //                     {row.Cambridge}
// // //                   </td>
// // //                   <td className="p-3 border border-gray-200">{row.TOEFL}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Notes */}
// // //         <div className="mt-6 text-sm text-gray-600">
// // //           <p className="mt-2">
// // //             * The Common European Framework of Reference for Languages{" "}
// // //             <a href="#" className="text-[#207FC5] hover:underline font-medium">
// // //               (CEFR)
// // //             </a>
// // //           </p>
// // //           <p className="mt-1">
// // //             ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE: First,
// // //             CAE: Advanced, CPE: Proficiency
// // //           </p>
// // //         </div>

// // //         {/* Tabs */}
// // //         <div className="flex justify-center mt-10 overflow-x-hidden whitespace-nowrap">
// // //           {[
// // //             "Beginner (A1)",
// // //             "Elementary (A2)",
// // //             "Intermediate (B1-B2)",
// // //             "Advanced (C1)",
// // //             "Fluent (C1+)",
// // //             "Proficient (C2)",
// // //             "Expert (Near Native) (C2+)",
// // //           ].map((tab, i) => (
// // //             <button
// // //               key={i}
// // //               className={`text-xs px-3 py-1.5 border-t-2 border-x border-b-0 ${
// // //                 i === 0
// // //                   ? "bg-[#207FC5] text-white border-[#207FC5]"
// // //                   : "bg-[#E8F3FC] text-gray-700 border-[#C8E0F5]"
// // //               } hover:bg-[#207FC5]/90 hover:text-white transition`}
// // //             >
// // //               {tab}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";
// // import React from "react";
// // import { GraduationCap } from "lucide-react";

// // export default function Page() {
// //   const levels = [
// //     {
// //       level: "Beginner",
// //       CEFR: "A1",
// //       IELTS: "1.0",
// //       Cambridge: "KET Pass (100-119)",
// //       TOEFL: "0 - 19",
// //     },
// //     {
// //       level: "Lower Elementary",
// //       CEFR: "A2",
// //       IELTS: "3.0",
// //       Cambridge: "KET/PET Pass (120-139)",
// //       TOEFL: "20 - 31",
// //     },
// //     {
// //       level: "Upper Elementary",
// //       CEFR: "B1",
// //       IELTS: "4.0",
// //       Cambridge: "PET (140 - 148)",
// //       TOEFL: "32 - 38",
// //     },
// //     {
// //       level: "Lower Intermediate",
// //       CEFR: "B1+",
// //       IELTS: "5.0",
// //       Cambridge: "PET (150 - 159)",
// //       TOEFL: "39 - 45",
// //     },
// //     {
// //       level: "Upper Intermediate",
// //       CEFR: "B2",
// //       IELTS: "6.0",
// //       Cambridge: "FCE (160 - 169)",
// //       TOEFL: "46 - 70",
// //     },
// //     {
// //       level: "Lower Advanced",
// //       CEFR: "B2+",
// //       IELTS: "6.5",
// //       Cambridge: "FCE (170 - 179)",
// //       TOEFL: "71 - 83",
// //     },
// //     {
// //       level: "Upper Advanced",
// //       CEFR: "C1",
// //       IELTS: "7.0",
// //       Cambridge: "CAE (180 - 189)",
// //       TOEFL: "94 - 101",
// //     },
// //     {
// //       level: "Fluent",
// //       CEFR: "C1+",
// //       IELTS: "7.5",
// //       Cambridge: "CAE (190 - 199)",
// //       TOEFL: "102 - 114",
// //     },
// //     {
// //       level: "Proficient",
// //       CEFR: "C2",
// //       IELTS: "8.0",
// //       Cambridge: "CPE (200 - 219)",
// //       TOEFL: "115 - 117",
// //     },
// //     {
// //       level: "Expert (near-native)",
// //       CEFR: "C2+",
// //       IELTS: "9.0",
// //       Cambridge: "CPE (220 - 230)",
// //       TOEFL: "118 - 120",
// //     },
// //   ];

// //   return (
// //     <>
// //       {/* ---------------- Table Section ---------------- */}
// //       <section className="bg-white py-20">
// //         <div className="max-w-5xl mx-auto px-4">
// //           <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
// //             VirHom's ranks in the framework of international tests
// //           </h2>

// //           <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md">
// //             <table className="w-full text-center border-collapse">
// //               <thead>
// //                 <tr className="bg-[#E8F3FC] border-b border-blue-300">
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     VirHom level
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     CEFR
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     IELTS
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
// //                     Cambridge
// //                   </th>
// //                   <th className="p-3 text-sm font-semibold text-gray-800">
// //                     TOEFL iBT
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {levels.map((row, i) => (
// //                   <tr
// //                     key={i}
// //                     className={`text-gray-700 text-sm ${
// //                       i % 2 === 0 ? "bg-gray-50" : "bg-white"
// //                     } hover:bg-blue-50 transition`}
// //                   >
// //                     <td className="p-3 border border-gray-200">{row.level}</td>
// //                     <td className="p-3 border border-gray-200">{row.CEFR}</td>
// //                     <td className="p-3 border border-gray-200">{row.IELTS}</td>
// //                     <td className="p-3 border border-gray-200">
// //                       {row.Cambridge}
// //                     </td>
// //                     <td className="p-3 border border-gray-200">{row.TOEFL}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="mt-6 text-sm text-gray-600">
// //             <p className="mt-2">
// //               * The Common European Framework of Reference for Languages{" "}
// //               <a
// //                 href="#"
// //                 className="text-[#207FC5] hover:underline font-medium"
// //               >
// //                 (CEFR)
// //               </a>
// //             </p>
// //             <p className="mt-1">
// //               ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE:
// //               First, CAE: Advanced, CPE: Proficiency
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------- Beginner Section ---------------- */}
// //       <section className="bg-[#1E5373] text-white py-12 md:py-20">
// //         {/* Tabs */}
// //         <div className="flex justify-center flex-wrap gap-1 mb-8">
// //           {[
// //             "Beginner (A1)",
// //             "Elementary (A2)",
// //             "Intermediate (B1-B2)",
// //             "Advanced (C1)",
// //             "Fluent (C1+)",
// //             "Proficient (C2)",
// //             "Expert (Near Native) (C2+)",
// //           ].map((tab, i) => (
// //             <button
// //               key={i}
// //               className={`text-xs md:text-sm px-3 py-2 font-medium ${
// //                 i === 0
// //                   ? "bg-[#207FC5] text-white"
// //                   : "bg-[#F2F2F2] text-[#333]"
// //               } rounded-t-md`}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Content */}
// //         <div className="max-w-4xl mx-auto text-center px-6">
// //           <h2 className="text-xl md:text-2xl font-semibold mb-6">
// //             Beginner (A1)
// //           </h2>

// //           <div className="flex justify-center mb-6">
// //             <div className="bg-white/10 p-3 rounded-md">
// //               <GraduationCap size={36} className="text-white" />
// //             </div>
// //           </div>

// //           <div className="text-sm md:text-base leading-relaxed space-y-6">
// //             <div>
// //               <h3 className="font-semibold mb-2">Your abilities</h3>
// //               <p className="text-gray-100 max-w-2xl mx-auto">
// //                 You understand and can use some basic English phrases to say
// //                 hello, goodbye, thank you, etc. You can also say a few things
// //                 about yourself (name, nationality, age, possessions), but you
// //                 are not able to understand or engage in a conversation or any
// //                 form of written exchange.
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="font-semibold mb-2">Your goals</h3>
// //               <p className="text-gray-100 max-w-2xl mx-auto">
// //                 Your goals working through this level are to:
// //               </p>
// //               <ul className="text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left">
// //                 <li>
// //                   Learn the basic structure and the most common daily vocabulary
// //                   and phrases.
// //                 </li>
// //                 <li>
// //                   Open your ears to English sounds and rhythm by hearing English
// //                   in the background (without trying to understand anything).
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// "use client";
// import React, { useState } from "react";
// import { GraduationCap } from "lucide-react";

// export default function Page() {
//   const levels = [
//     {
//       tab: "Beginner (A1)",
//       title: "Beginner (A1)",
//       abilities:
//         "You understand and can use some basic English phrases to say hello, goodbye, thank you, etc. You can also say a few things about yourself (name, nationality, age, possessions), but you are not able to understand or engage in a conversation or any form of written exchange.",
//       goals: [
//         "Learn the basic structure and the most common daily vocabulary and phrases.",
//         "Open your ears to English sounds and rhythm by hearing English in the background (without trying to understand anything).",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Elementary (A2)",
//       title: "Elementary (A2)",
//       abilities:
//         "You can understand frequently used expressions and communicate in simple tasks requiring a direct exchange of information. You can describe your background and immediate environment.",
//       goals: [
//         "Expand your vocabulary and improve your pronunciation.",
//         "Understand short phrases and simple sentences used in daily life.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Intermediate (B1-B2)",
//       title: "Intermediate (B1-B2)",
//       abilities:
//         "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.",
//       goals: [
//         "Learn to express opinions, agree/disagree, and describe events clearly.",
//         "Start reading and listening to English media for comprehension.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Advanced (C1)",
//       title: "Advanced (C1)",
//       abilities:
//         "You can express yourself fluently and spontaneously without much obvious searching for expressions. You use language flexibly for social, academic, and professional purposes.",
//       goals: [
//         "Improve advanced grammar and idiomatic expressions.",
//         "Work on writing essays and formal correspondence.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Fluent (C1+)",
//       title: "Fluent (C1+)",
//       abilities:
//         "You can understand demanding texts and recognize implicit meaning. You can express ideas fluently and use language effectively for professional purposes.",
//       goals: [
//         "Refine your accent and vocabulary range.",
//         "Engage in debates and discussions on complex topics.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Proficient (C2)",
//       title: "Proficient (C2)",
//       abilities:
//         "You can understand practically everything you hear or read and express yourself spontaneously, fluently, and precisely.",
//       goals: [
//         "Perfect your understanding of cultural nuances in communication.",
//         "Write and speak with precision and natural flow.",
//       ],
//       bg: "#1E5373",
//     },
//     {
//       tab: "Expert (Near Native) (C2+)",
//       title: "Expert (Near Native) (C2+)",
//       abilities:
//         "You have a level of English comparable to that of a well-educated native speaker.",
//       goals: [
//         "Master stylistic variety and cultural references in all contexts.",
//         "Communicate effortlessly with full natural fluency.",
//       ],
//       bg: "#1E5373",
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <>
//       {/* ---------- Table Section ---------- */}
//       <section className="bg-white py-20 relative">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
//             VirHom's ranks in the framework of international tests
//           </h2>

//           {/* Table */}
//           <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md mb-20">
//             <table className="w-full text-center border-collapse">
//               <thead>
//                 <tr className="bg-[#E8F3FC] border-b border-blue-300">
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     VirHom level
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     CEFR
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     IELTS
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
//                     Cambridge
//                   </th>
//                   <th className="p-3 text-sm font-semibold text-gray-800">
//                     TOEFL iBT
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {levels.map((row, i) => (
//                   <tr
//                     key={i}
//                     className={`text-gray-700 text-sm ${
//                       i % 2 === 0 ? "bg-gray-50" : "bg-white"
//                     } hover:bg-blue-50 transition`}
//                   >
//                     <td className="p-3 border border-gray-200">{row.title}</td>
//                     <td className="p-3 border border-gray-200">
//                       {row.tab.match(/\(([^)]+)\)/)?.[1] || ""}
//                     </td>
//                     <td className="p-3 border border-gray-200">–</td>
//                     <td className="p-3 border border-gray-200">–</td>
//                     <td className="p-3 border border-gray-200">–</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Notes */}
//           <div className="mt-6 text-sm text-gray-600">
//             <p className="mt-2">
//               * The Common European Framework of Reference for Languages{" "}
//               <a
//                 href="#"
//                 className="text-[#207FC5] hover:underline font-medium"
//               >
//                 (CEFR)
//               </a>
//             </p>
//             <p className="mt-1">
//               ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE:
//               First, CAE: Advanced, CPE: Proficiency
//             </p>
//           </div>
//         </div>

//         {/* Tabs overlapping between white and blue section */}
//         <div className="absolute left-1/2 -bottom-[24px] transform -translate-x-1/2 z-20 flex flex-wrap justify-center bg-transparent">
//           {levels.map((level, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTab(i)}
//               className={`text-xs md:text-sm px-3 py-2 font-medium border-t-2 border-x border-b-0 transition ${
//                 activeTab === i
//                   ? "bg-[#207FC5] text-white border-[#207FC5]"
//                   : "bg-[#E8F3FC] text-[#333] border-[#C8E0F5] hover:bg-[#207FC5]/90 hover:text-white"
//               }`}
//             >
//               {level.tab}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Dynamic Blue Section ---------- */}
//       <section
//         className="text-white py-16 md:py-20 relative z-10"
//         style={{ backgroundColor: levels[activeTab].bg }}
//       >
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-xl md:text-2xl font-semibold mb-6">
//             {levels[activeTab].title}
//           </h2>

//           <div className="flex justify-center mb-6">
//             <div className="bg-white/10 p-3 rounded-md">
//               <GraduationCap size={36} className="text-white" />
//             </div>
//           </div>

//           <div className="text-sm md:text-base leading-relaxed space-y-6">
//             <div>
//               <h3 className="font-semibold mb-2">Your abilities</h3>
//               <p className="text-gray-100 max-w-2xl mx-auto">
//                 {levels[activeTab].abilities}
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-2">Your goals</h3>
//               <p className="text-gray-100 max-w-2xl mx-auto">
//                 Your goals working through this level are to:
//               </p>
//               <ul className="text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left">
//                 {levels[activeTab].goals.map((goal, i) => (
//                   <li key={i}>{goal}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


