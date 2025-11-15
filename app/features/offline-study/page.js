"use client";
import React, { useState, useEffect } from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";
import jsondata from "@/data/content.json";

// ✅ Reusable heading component
function Heading({ children, color = "#4169E1" }) {
  return (
    <h2
      className="relative font-semibold text-2xl md:text-3xl leading-[1.3] mb-6 inline-block pb-2"
      style={{
        color: color,
        borderBottom: `3px solid ${color}`,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {children}
    </h2>
  );
}

export default function AccessAnywherePage() {
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
    return (
      <p className="text-center mt-10 text-red-500 text-lg font-Montserrat">
        {contents?.notFoundMessage || "404 - Not Found"}
      </p>
    );

  return (
    <main
      style={{
        fontFamily: "Montserrat, sans-serif",
        color: "#333333",
      }}
      className="min-h-screen"
    >
      {/* === Dynamic Reusable Section === */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* === Access Anywhere Section === */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left bg-white p-10 rounded-2xl ">
          <div className="mb-16">
            {contents.sections.map((section, index) => (
              <div key={index}>
                <Heading color={section.color}>{section.heading}</Heading>
                <p className="leading-relaxed text-[16px] md:text-[17px] mb-6">
                  {section.paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* === Centered CTA Link === */}
          <div className="text-center mt-10">
            <Link
              href={contents.cta.href}
              className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
              style={{
                backgroundColor: "#4169E1",
                color: "#FFFFFF",
                fontFamily: "Montserrat, sans-serif",
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

// // ✅ Reusable heading component
// function Heading({ children, color = "#4169E1" }) {
//   return (
//     <h2
//       className="relative font-semibold text-2xl md:text-3xl leading-[1.3] mb-6 inline-block pb-2"
//       style={{
//         color: color,
//         borderBottom: `3px solid ${color}`,
//         fontFamily: "Montserrat, sans-serif",
//       }}
//     >
//       {children}
//     </h2>
//   );
// }

// export default function AccessAnywherePage() {
//   const pathname = usePathname();
//   const slug = pathname.split("/").pop();
//   const toolData = studyToolsData[slug];

//   if (!toolData) {
//     return (
//       <p className="text-center mt-10 text-red-500 text-lg font-Montserrat">
//         404 - Not Found
//       </p>
//     );
//   }

//   return (
//     <main
//       style={{
//         fontFamily: "Montserrat, sans-serif",
//         color: "#333333",
//       }}
//       className="min-h-screen"
//     >
//       {/* === Dynamic Reusable Section === */}
//       <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />

//       {/* === Access Anywhere Section === */}
//       <section className="py-20 flex justify-center">
//         <div className="max-w-4xl w-full px-6 md:px-10 text-left bg-white p-10 rounded-2xl ">
//           <div className="mb-16">
//             <Heading>Access anytime & anywhere</Heading>

//             <p className="leading-relaxed text-[16px] md:text-[17px] mb-6">
//               It can be frustrating not to be able to study English when you have
//               the opportunity and the time, but no Internet access. To avoid this
//               situation, we have made all the video lessons and audio recordings
//               downloadable so you can access them offline anytime, anywhere.
//             </p>

//             <Heading color="#7B68EE">Working with pen and paper</Heading>

//             <p className="leading-relaxed text-[16px] md:text-[17px] mb-8">
//               We know that some of you still prefer working with pen and paper.
//               Also, if you are an English teacher, you may want to print and
//               photocopy some of the material for your students. To meet your
//               needs, we have prepared downloadable PDF transcripts of the written
//               content of the online course.
//             </p>
//           </div>

//           {/* === Centered CTA Link === */}
//           <div className="text-center mt-10">
//             <Link
//               href="/features"
//               className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
//               style={{
//                 backgroundColor: "#4169E1",
//                 color: "#FFFFFF",
//                 fontFamily: "Montserrat, sans-serif",
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
