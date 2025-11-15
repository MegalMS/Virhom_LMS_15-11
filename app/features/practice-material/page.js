"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../data/studyToolsData";
import { usePathname } from "next/navigation";
 

export default function PracticeMaterialPage() {
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
      <p className="text-center mt-10 text-red-500 text-lg">
        {contents?.notFoundMessage || "404 - Not Found"}
      </p>
    );

  return (
    <main className="min-h-screen">
=======
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";

export default function PracticeMaterialPage() {
  const pathname = usePathname(); // e.g. "/features/practice-material"
  const slug = pathname.split("/").pop(); // "practice-material"

  const toolData = studyToolsData[slug];
  console.log("slug:", slug);
  console.log("toolData:", toolData);

  if (!toolData) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        404 - Not Found
      </p>
    );
  }

  return (
    <main  className="min-h-screen">
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
      {/* === Reusable Top Section === */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* === Practice Section === */}
      <section
        style={{ backgroundColor: "#FFFFFF" }}
        className="py-20 flex justify-center rounded-2xl"
      >
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">
<<<<<<< HEAD
          {contents.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2
                className="text-2xl md:text-3xl font-semibold mb-2"
                style={{ color: section.headingColor }}
              >
                {section.heading}
              </h2>
              <div
                className="w-16 h-[3px] mb-6"
                style={{ backgroundColor: section.underlineColor }}
              ></div>
              {section.paragraph && (
                <p className="leading-relaxed text-[16px] md:text-[17px] text-[#333333]">
                  {section.paragraph}
                </p>
              )}
              {section.paragraphs &&
                section.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-[16px] md:text-[17px] mb-6 text-[#333333]"
                  >
                    {para}
                  </p>
                ))}
            </div>
          ))}

          {/* === Centered link === */}
          <div className="flex justify-center mt-20">
            <a
              href={contents.cta.href}
              className="inline-flex items-center font-semibold text-lg px-6 py-3 rounded-full transition-all shadow-md hover:shadow-xl"
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
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="ml-2"
                fill="currentColor"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </a>
=======
          {/* === Practice makes perfect === */}
          <div className="mb-10">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              style={{ color: "#4169E1" }}
            >
              Practice makes perfect
            </h2>
            <div
              className="w-16 h-[3px] mb-6"
              style={{ backgroundColor: "#7B68EE" }}
            ></div>
            <p className="leading-relaxed text-[16px] md:text-[17px] text-[#333333]">
              To be able to reflexively use the English vocabulary and grammar that you
              learn in each lesson, you need to practise the material many times and in
              different contexts. That is why every lesson includes its own exercise
              section, and we have included additional exercises in the video lessons too.
            </p>
          </div>

          {/* === Written exercises === */}
          <div className="mb-10">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              style={{ color: "#7B68EE" }}
            >
              Written exercises
            </h2>
            <div
              className="w-16 h-[3px] mb-6"
              style={{ backgroundColor: "#4169E1" }}
            ></div>
            <p className="leading-relaxed text-[16px] md:text-[17px] mb-6 text-[#333333]">
              This is where you put into practice what you have just studied. As you type
              your answer to each written exercise, our software analyses your answer. If
              you make a mistake while typing, our software warns you and guides you
              towards the correct answer. Thanks to this great feature, your spelling and
              punctuation improves at the same time as your knowledge of English grammar
              and vocabulary.
            </p>
          </div>

          {/* === Oral exercises === */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              style={{ color: "#4169E1" }}
            >
              Oral exercises
            </h2>
            <div
              className="w-16 h-[3px] mb-6"
              style={{ backgroundColor: "#7B68EE" }}
            ></div>
            <p className="leading-relaxed text-[16px] md:text-[17px] mb-6 text-[#333333]">
              Written exercises to assimilate grammar and vocabulary are essential.
              However, if they are only in written form and you never hear the correct
              English pronunciation, you will develop a gap in your listening skills.
              Also, if you have to imagine the pronunciation of what you are reading, you
              will inevitably make mistakes that come from the influence of your native
              language.
            </p>

            <p className="leading-relaxed text-[16px] md:text-[17px] mb-8 text-[#333333]">
              The key to achieving fluency and confidence to speak English is oral
              practice. That is why all the pronunciation lessons, conversation lessons,
              and grammar exercises are professionally voice-recorded so you can hear and
              repeat everything you study.
            </p>

            {/* === Centered link === */}
            <div className="flex justify-center mt-20">
              <a
                href="/features"
                className="inline-flex items-center font-semibold text-lg px-6 py-3 rounded-full transition-all shadow-md hover:shadow-xl"
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
                View all features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="ml-2"
                  fill="currentColor"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </a>
            </div>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          </div>
        </div>
      </section>
    </main>
  );
}
<<<<<<< HEAD

// "use client";
// import React from "react";
// import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../src/data/studyToolsData";
// import { usePathname } from "next/navigation";

// export default function PracticeMaterialPage() {
//   const pathname = usePathname(); // e.g. "/features/practice-material"
//   const slug = pathname.split("/").pop(); // "practice-material"

//   const toolData = studyToolsData[slug];
//   console.log("slug:", slug);
//   console.log("toolData:", toolData);

//   if (!toolData) {
//     return (
//       <p className="text-center mt-10 text-red-500 text-lg">
//         404 - Not Found
//       </p>
//     );
//   }

//   return (
//     <main  className="min-h-screen">
//       {/* === Reusable Top Section === */}
//       <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />

//       {/* === Practice Section === */}
//       <section
//         style={{ backgroundColor: "#FFFFFF" }}
//         className="py-20 flex justify-center rounded-2xl"
//       >
//         <div className="max-w-4xl w-full px-6 md:px-10 text-left">
//           {/* === Practice makes perfect === */}
//           <div className="mb-10">
//             <h2
//               className="text-2xl md:text-3xl font-semibold mb-2"
//               style={{ color: "#4169E1" }}
//             >
//               Practice makes perfect
//             </h2>
//             <div
//               className="w-16 h-[3px] mb-6"
//               style={{ backgroundColor: "#7B68EE" }}
//             ></div>
//             <p className="leading-relaxed text-[16px] md:text-[17px] text-[#333333]">
//               To be able to reflexively use the English vocabulary and grammar that you
//               learn in each lesson, you need to practise the material many times and in
//               different contexts. That is why every lesson includes its own exercise
//               section, and we have included additional exercises in the video lessons too.
//             </p>
//           </div>

//           {/* === Written exercises === */}
//           <div className="mb-10">
//             <h2
//               className="text-2xl md:text-3xl font-semibold mb-2"
//               style={{ color: "#7B68EE" }}
//             >
//               Written exercises
//             </h2>
//             <div
//               className="w-16 h-[3px] mb-6"
//               style={{ backgroundColor: "#4169E1" }}
//             ></div>
//             <p className="leading-relaxed text-[16px] md:text-[17px] mb-6 text-[#333333]">
//               This is where you put into practice what you have just studied. As you type
//               your answer to each written exercise, our software analyses your answer. If
//               you make a mistake while typing, our software warns you and guides you
//               towards the correct answer. Thanks to this great feature, your spelling and
//               punctuation improves at the same time as your knowledge of English grammar
//               and vocabulary.
//             </p>
//           </div>

//           {/* === Oral exercises === */}
//           <div>
//             <h2
//               className="text-2xl md:text-3xl font-semibold mb-2"
//               style={{ color: "#4169E1" }}
//             >
//               Oral exercises
//             </h2>
//             <div
//               className="w-16 h-[3px] mb-6"
//               style={{ backgroundColor: "#7B68EE" }}
//             ></div>
//             <p className="leading-relaxed text-[16px] md:text-[17px] mb-6 text-[#333333]">
//               Written exercises to assimilate grammar and vocabulary are essential.
//               However, if they are only in written form and you never hear the correct
//               English pronunciation, you will develop a gap in your listening skills.
//               Also, if you have to imagine the pronunciation of what you are reading, you
//               will inevitably make mistakes that come from the influence of your native
//               language.
//             </p>

//             <p className="leading-relaxed text-[16px] md:text-[17px] mb-8 text-[#333333]">
//               The key to achieving fluency and confidence to speak English is oral
//               practice. That is why all the pronunciation lessons, conversation lessons,
//               and grammar exercises are professionally voice-recorded so you can hear and
//               repeat everything you study.
//             </p>

//             {/* === Centered link === */}
//             <div className="flex justify-center mt-20">
//               <a
//                 href="/features"
//                 className="inline-flex items-center font-semibold text-lg px-6 py-3 rounded-full transition-all shadow-md hover:shadow-xl"
//                 style={{
//                   backgroundColor: "#4169E1",
//                   color: "#FFFFFF",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#7B68EE")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#4169E1")
//                 }
//               >
//                 View all features
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="22"
//                   height="22"
//                   viewBox="0 0 24 24"
//                   className="ml-2"
//                   fill="currentColor"
//                 >
//                   <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
=======
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
