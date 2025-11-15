"use client";
import React, { useState, useEffect } from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";
import jsondata from "@/data/content.json";


// ✅ Reusable section heading with blue underline
function Heading({ children, color = "#4169E1" }) {
  return (
    <h6
      className="relative font-semibold text-2xl leading-[1.3] mb-6 inline-block pb-3"
      style={{
        color: color,
        borderBottom: `3px solid ${color}`,
      }}
    >
      {children}
    </h6>
  );
}

export default function CompletedLessonsPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();


  const [contents, setContents] = useState(jsondata);
  const toolData = contents?.toolData;

  const [loading, setLoading] = useState(true);

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


  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!toolData || !contents)
    return <p className="text-center mt-10 text-red-500">{contents?.notFoundMessage || "404 - Not Found"}</p>;

  return (
    <main style={{ backgroundColor: "#FFF7AE" }} className="min-h-screen">
      {/* === Top Section: Dynamic Study Tool Header === */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* === Bottom Section: Completed Lessons + Progress === */}
      <section
        style={{ backgroundColor: "#FFFFFF" }}
        className="py-20 flex justify-center"
      >
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">
          {contents.sections.map((section, index) => (
            <div key={index} className="mb-20 bg-white p-8">
              <Heading color={section.color}>{section.heading}</Heading>
              <p
                className="text-gray-700 leading-relaxed text-[16px] md:text-[17px]"
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
              />
            </div>
          ))}

          {/* === Centered CTA Link === */}
          <div className="text-center mt-12">
            <Link
              href={contents.cta.href}
              className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
              style={{
                backgroundColor: "#4169E1",
                color: "#FFFFFF",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#7B68EE")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4169E1")
              }
            >
              {contents.cta.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-2"
              >
                <path
                  d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


// "use client";
// import React from "react";
// import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../src/data/studyToolsData";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// // ✅ Reusable SVG constant (check icon)
// const CHECK_ICON =
//   "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%234169E1' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// // ✅ Reusable section heading with blue underline
// function Heading({ children, color = "#4169E1" }) {
//   return (
//     <h6
//       className="relative font-semibold text-2xl leading-[1.3] mb-6 inline-block pb-3"
//       style={{
//         color: color,
//         borderBottom: `3px solid ${color}`,
//       }}
//     >
//       {children}
//     </h6>
//   );
// }

// // ✅ Reusable checklist component (for possible future use)
// function CheckItem({ children }) {
//   return (
//     <li className="flex items-start gap-3 mb-3">
//       <img
//         src={CHECK_ICON}
//         alt="check"
//         className="w-5 h-5 mt-1 flex-shrink-0"
//       />
//       <span className="text-base leading-relaxed">{children}</span>
//     </li>
//   );
// }

// export default function CompletedLessonsPage() {
//   const pathname = usePathname();
//   const slug = pathname.split("/").pop();
//   const toolData = studyToolsData[slug];

//   if (!toolData) {
//     return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
//   }

//   return (
//     <main style={{ backgroundColor: "#FFF7AE" }} className="min-h-screen">
//       {/* === Top Section: Dynamic Study Tool Header === */}
//       <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />

//       {/* === Bottom Section: Completed Lessons + Progress === */}
//       <section
//         style={{ backgroundColor: "#FFFFFF" }}
//         className="py-20 flex justify-center"
//       >
//         <div className="max-w-4xl w-full px-6 md:px-10 text-left">

//           {/* === Completed lessons === */}
//           <div className="mb-20 bg-white p-8">
//             <Heading color="#4169E1">Completed lessons</Heading>
//             <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px]">
//               A lesson is considered <strong>“completed”</strong> when you have taken the
//               test for that lesson and achieved the minimum pass rate. You can then move
//               on to the next lesson in your personal study plan. You can easily see —
//               both in your study plan and on your dashboard — which lessons you’ve
//               completed and which ones still need review.
//             </p>
//           </div>

//           {/* === Test results & progress charts === */}
//           <div className="mb-20 bg-white p-8">
//             <Heading color="#7B68EE">Test results & progress charts</Heading>
//             <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px]">
//               Every time you take a test, your score is automatically recorded in your
//               progress chart. This helps you track improvement over time for each topic.
//               Our goal is to help you reach <strong>100%</strong> on every test by giving
//               you detailed feedback on your performance.
//             </p>
//           </div>

//           {/* === Feedback & recommendations === */}
//           <div className="mb-16 bg-white p-8">
//             <Heading color="#4169E1">Feedback & recommendations</Heading>
//             <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px] mb-8">
//               Our feedback system highlights your mistakes, gives you useful tips, and
//               directs you to the exact section of the lesson you need to revise. Once
//               you’ve made your revisions, you can retake the test for additional
//               feedback and improvement.
//             </p>
//           </div>

//           {/* === Centered CTA Link === */}
//           <div className="text-center mt-12">
//             <Link
//               href="/features"
//               className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
//               style={{
//                 backgroundColor: "#4169E1",
//                 color: "#FFFFFF",
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#7B68EE")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#4169E1")
//               }
//             >
//               View all features
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="ml-2"
//               >
//                 <path
//                   d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
