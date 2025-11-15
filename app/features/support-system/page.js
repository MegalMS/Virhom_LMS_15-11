"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function SupportFromMinooPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();


  const [contents, setContents] = useState();
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

  const CHECK_ICON = contents.checkIcon;

  // Reusable Heading
  const Heading = ({ children }) => (
=======
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";

/* ────────────────────── Reusable Helpers ────────────────────── */
const CHECK_ICON =
  "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// ✅ Unified heading style
function Heading({ children }) {
  return (
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
    <h2
      className="relative font-semibold text-2xl md:text-3xl leading-[1.3] mb-6 inline-block pb-2"
      style={{
        color: "#4169E1",
        borderBottom: "3px solid #4169E1",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {children}
    </h2>
  );
<<<<<<< HEAD

  // Reusable Check Item
  const CheckItem = ({ children }) => (
    <li className="flex items-start gap-3 text-gray-700">
      <img src={CHECK_ICON} alt="check" className="w-5 h-5 mt-1 flex-shrink-0" />
      <span className="leading-relaxed text-[16px] md:text-[17px]">{children}</span>
    </li>
  );
=======
}

// ✅ Reusable check item
function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-gray-700">
      <img
        src={CHECK_ICON}
        alt="check"
        className="w-5 h-5 mt-1 flex-shrink-0"
      />
      <span className="leading-relaxed text-[16px] md:text-[17px]">{children}</span>
    </li>
  );
}

/* ────────────────────── Main Component ────────────────────── */
export default function SupportFromMinooPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const toolData = studyToolsData[slug];

  if (!toolData) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg font-Montserrat">
        404 - Not Found
      </p>
    );
  }
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

  return (
    <main
      className="min-h-screen"
      style={{
        fontFamily: "Montserrat, sans-serif",
        color: "#333333",
      }}
    >
<<<<<<< HEAD
      {/* Dynamic Header */}
=======
      {/* === Dynamic header section === */}
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

<<<<<<< HEAD
      {/* Main Content */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left bg-white p-10 rounded-2xl">
          {contents.sections.map((section, idx) => (
            <div key={idx} className={idx === 0 ? "mb-10" : "mb-10"}>
              <Heading>{section.heading}</Heading>

              {section.intro && (
                <p className="leading-relaxed text-[16px] md:text-[17px] mb-4">
                  {section.intro}
                </p>
              )}

              {section.checkItems && section.checkItems.length > 0 && (
                <ul className="list-none pl-0 space-y-3 mb-6">
                  {section.checkItems.map((item, i) => (
                    <CheckItem key={i}>{item}</CheckItem>
                  ))}
                </ul>
              )}

              {section.paragraphs &&
                section.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-[16px] md:text-[17px]"
                    style={{ marginBottom: i < section.paragraphs.length - 1 ? "1.5rem" : "0" }}
                  >
                    {para}
                  </p>
                ))}
            </div>
          ))}

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href={contents.cta.href}
=======
      {/* === Support From Minoo Section === */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left bg-white p-10 rounded-2xl">
          <Heading>Support from Minoo</Heading>

          <p className="leading-relaxed text-[16px] md:text-[17px] mb-4">
            Send Minoo any questions you have about the programme or about the
            English language. You can do this:
          </p>

          <ul className="list-none pl-0 space-y-3 mb-6">
            <CheckItem>By posting your question in the Students' Forum</CheckItem>
            <CheckItem>By messaging Minoo directly from your course dashboard</CheckItem>
            <CheckItem>By opening a 'Teacher Support' ticket</CheckItem>
          </ul>

          <p className="leading-relaxed text-[16px] md:text-[17px] mb-6">
            Join Minoo’s weekly LIVE workshops and Q&A sessions to actively revise
            and practise the course materials with her and with your peers.
          </p>

          <p className="leading-relaxed text-[16px] md:text-[17px] mb-10">
            Book one-to-one sessions with Minoo for your specific needs, such as
            improving your pronunciation, confidence training, presentation or job
            interview practice, or exam preparation (IELTS, TOEFL).
          </p>

          {/* === Technical / Sales Support === */}
          <Heading>Technical / Sales Support</Heading>

          <p className="leading-relaxed text-[16px] md:text-[17px] mb-8">
            If you have any questions about the features, or if you need help using
            the platform, you are welcome to open a ticket for the technical or
            sales team.
          </p>

          {/* === Centered CTA === */}
          <div className="text-center mt-10">
            <Link
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

// /* ────────────────────── Reusable Helpers ────────────────────── */
// const CHECK_ICON =
//   "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// // ✅ Unified heading style
// function Heading({ children }) {
//   return (
//     <h2
//       className="relative font-semibold text-2xl md:text-3xl leading-[1.3] mb-6 inline-block pb-2"
//       style={{
//         color: "#4169E1",
//         borderBottom: "3px solid #4169E1",
//         fontFamily: "Montserrat, sans-serif",
//       }}
//     >
//       {children}
//     </h2>
//   );
// }

// // ✅ Reusable check item
// function CheckItem({ children }) {
//   return (
//     <li className="flex items-start gap-3 text-gray-700">
//       <img
//         src={CHECK_ICON}
//         alt="check"
//         className="w-5 h-5 mt-1 flex-shrink-0"
//       />
//       <span className="leading-relaxed text-[16px] md:text-[17px]">{children}</span>
//     </li>
//   );
// }

// /* ────────────────────── Main Component ────────────────────── */
// export default function SupportFromMinooPage() {
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
//       className="min-h-screen"
//       style={{
//         fontFamily: "Montserrat, sans-serif",
//         color: "#333333",
//       }}
//     >
//       {/* === Dynamic header section === */}
//       <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />

//       {/* === Support From Minoo Section === */}
//       <section className="py-20 flex justify-center">
//         <div className="max-w-4xl w-full px-6 md:px-10 text-left bg-white p-10 rounded-2xl">
//           <Heading>Support from Minoo</Heading>

//           <p className="leading-relaxed text-[16px] md:text-[17px] mb-4">
//             Send Minoo any questions you have about the programme or about the
//             English language. You can do this:
//           </p>

//           <ul className="list-none pl-0 space-y-3 mb-6">
//             <CheckItem>By posting your question in the Students' Forum</CheckItem>
//             <CheckItem>By messaging Minoo directly from your course dashboard</CheckItem>
//             <CheckItem>By opening a 'Teacher Support' ticket</CheckItem>
//           </ul>

//           <p className="leading-relaxed text-[16px] md:text-[17px] mb-6">
//             Join Minoo’s weekly LIVE workshops and Q&A sessions to actively revise
//             and practise the course materials with her and with your peers.
//           </p>

//           <p className="leading-relaxed text-[16px] md:text-[17px] mb-10">
//             Book one-to-one sessions with Minoo for your specific needs, such as
//             improving your pronunciation, confidence training, presentation or job
//             interview practice, or exam preparation (IELTS, TOEFL).
//           </p>

//           {/* === Technical / Sales Support === */}
//           <Heading>Technical / Sales Support</Heading>

//           <p className="leading-relaxed text-[16px] md:text-[17px] mb-8">
//             If you have any questions about the features, or if you need help using
//             the platform, you are welcome to open a ticket for the technical or
//             sales team.
//           </p>

//           {/* === Centered CTA === */}
//           <div className="text-center mt-10">
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
