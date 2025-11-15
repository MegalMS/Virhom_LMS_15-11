"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";
 

=======
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

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

export default function TargetedNeedsPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
<<<<<<< HEAD
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
      <p className="text-center mt-10 text-red-500 text-lg">{contents?.notFoundMessage || "404 - Not Found"}</p>
    );
=======
  const toolData = studyToolsData[slug];

  if (!toolData) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">404 - Not Found</p>
    );
  }
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

  return (
    <main style={{ backgroundColor: "#FFF7AE" }} className="min-h-screen">
      {/* === Dynamic Header Section === */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* === Targeted Needs Section === */}
      <section
        style={{ backgroundColor: "#FFFFFF" }}
        className="py-20 flex justify-center"
      >
        <div className="max-w-4xl w-full px-6 md:px-10 text-left">
<<<<<<< HEAD
          {contents.sections.map((section, index) => (
            <div key={index} className="mb-20 bg-white p-8">
              <Heading color={section.color}>
                {section.heading}
              </Heading>

              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-[16px] md:text-[17px] mb-6">
                  {para}
                </p>
              ))}
            </div>
          ))}
=======
          <div className="mb-20 bg-white p-8">
            <Heading color="#4169E1">
              Targeted to your specific needs
            </Heading>

            <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px] mb-6">
              Once you have started your journey towards fluency on your online English
              course, there may be times when you feel the need to talk to a teacher to
              find out how you are doing, and get some advice on what you need to focus
              on during the rest of your journey.
            </p>

            <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px] mb-6">
              Or, you may need a few lessons to focus on an important task — for example,
              to prepare for the speaking or writing part of an English language test
              like IELTS or TOEFL, or to get ready for an interview or presentation.
            </p>

            <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px]">
              All you need to do to book your one-to-one lesson is visit our teachers’
              calendars and choose the date, time, and lesson length. Once you’ve made
              your choice, you can use your accumulated free credits or purchase the
              required number of credits in the store to finalise your booking.
            </p>
          </div>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

          {/* === Centered CTA Button === */}
          <div className="text-center mt-12">
            <Link
<<<<<<< HEAD
              href={contents.cta.href}
=======
              href="/features"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
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
<<<<<<< HEAD
              {contents.cta.text}
=======
              View all features
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
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
<<<<<<< HEAD


// "use client";
// import React from "react";
// import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../src/data/studyToolsData";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

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

// export default function TargetedNeedsPage() {
//   const pathname = usePathname();
//   const slug = pathname.split("/").pop();
//   const toolData = studyToolsData[slug];

//   if (!toolData) {
//     return (
//       <p className="text-center mt-10 text-red-500 text-lg">404 - Not Found</p>
//     );
//   }

//   return (
//     <main style={{ backgroundColor: "#FFF7AE" }} className="min-h-screen">
//       {/* === Dynamic Header Section === */}
//       <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />

//       {/* === Targeted Needs Section === */}
//       <section
//         style={{ backgroundColor: "#FFFFFF" }}
//         className="py-20 flex justify-center"
//       >
//         <div className="max-w-4xl w-full px-6 md:px-10 text-left">
//           <div className="mb-20 bg-white p-8">
//             <Heading color="#4169E1">
//               Targeted to your specific needs
//             </Heading>

//             <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px] mb-6">
//               Once you have started your journey towards fluency on your online English
//               course, there may be times when you feel the need to talk to a teacher to
//               find out how you are doing, and get some advice on what you need to focus
//               on during the rest of your journey.
//             </p>

//             <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px] mb-6">
//               Or, you may need a few lessons to focus on an important task — for example,
//               to prepare for the speaking or writing part of an English language test
//               like IELTS or TOEFL, or to get ready for an interview or presentation.
//             </p>

//             <p className="text-gray-700 leading-relaxed text-[16px] md:text-[17px]">
//               All you need to do to book your one-to-one lesson is visit our teachers’
//               calendars and choose the date, time, and lesson length. Once you’ve made
//               your choice, you can use your accumulated free credits or purchase the
//               required number of credits in the store to finalise your booking.
//             </p>
//           </div>

//           {/* === Centered CTA Button === */}
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
=======
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
