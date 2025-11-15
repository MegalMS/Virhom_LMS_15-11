"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../data/studyToolsData";
import { usePathname } from "next/navigation";
//  

=======
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

const Page = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
<<<<<<< HEAD


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

      function slugToCamel(str) {
        return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      }

      const fixedSlug = slugToCamel(slug);

      console.log("📌 URL Slug:", slug);
      console.log("📌 Converted Slug:", fixedSlug);

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

  const { section1, section2, cta } = contents;
=======
  const toolData = studyToolsData[slug];
  if (!toolData)
    return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

  return (
    <main style={{ backgroundColor: "#FFF7AE" }} className="font-sans">
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* ===== Section 1 ===== */}
      <div style={{ backgroundColor: "#FFFFFF" }} className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="feature_desc space-y-8">
<<<<<<< HEAD
            {/* Title 1 */}
            <h6
              className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#4169E1] after:absolute after:bottom-[-6px] after:left-0"
            >
              {section1.title1}
            </h6>
            <p className="text-gray-700 leading-relaxed">{section1.intro1}</p>

            <img
              src={section1.commentsImage}
=======
            <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#4169E1] after:absolute after:bottom-[-6px] after:left-0">
              English students love our video lessons, and we love making them.
            </h6>
            <p className="text-gray-700 leading-relaxed">
              We are delighted that you like our video lessons, and we are
              grateful for all the positive feedback we receive from you.
            </p>

            <img
              src="https://anglo-link.com/images/comments.png"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              alt="Comments"
              className="comments mx-auto"
            />

<<<<<<< HEAD
            {/* Title 2 */}
            <h6
              className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#7B68EE] after:absolute after:bottom-[-6px] after:left-0"
            >
              {section1.title2}
            </h6>
            <p className="text-gray-700">{section1.intro2}</p>

            {/* Features Grid */}
            {section1.features.map((feat, idx) => (
              <div
                key={idx}
                className="wrapper_collapse grid md:grid-cols-2 gap-10 items-center mt-10 bg-white rounded-xl p-6 shadow-sm"
              >
                {feat.imageFirst ? (
                  <>
                    <div className="flex justify-center">
                      <img
                        src={feat.image}
                        alt={feat.title}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h6
                        className="block text-xl font-semibold mb-3"
                        style={{ color: feat.color }}
                      >
                        {feat.title}
                      </h6>
                      <p className="text-gray-700 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h6
                        className="block text-xl font-semibold mb-3"
                        style={{ color: feat.color }}
                      >
                        {feat.title}
                      </h6>
                      <p className="text-gray-700 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={feat.image}
                        alt={feat.title}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}

            <p className="text-gray-700 mt-10">{section1.closing}</p>
=======
            <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#7B68EE] after:absolute after:bottom-[-6px] after:left-0">
              What makes our videos different?
            </h6>
            <p className="text-gray-700">
              We do our very best to make every one of our English video lessons:
            </p>

            {/* === Content-rich Section === */}
            <div className="wrapper_collapse grid md:grid-cols-2 gap-10 items-center mt-10 bg-white rounded-xl p-6 shadow-sm">
              <div>
                <h6 className="block text-xl text-[#4169E1] font-semibold mb-3">
                  Content-rich
                </h6>
                <p className="text-gray-700 leading-relaxed">
                  We make sure that you get all the essential information as well
                  as many meaningful examples on the topic of study. Most lessons
                  also include a practice activity that deepens your understanding
                  and active use of the language point.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://anglo-link.com/images/comment_1.png"
                  alt="Comment 1"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* === Easy-to-follow Section === */}
            <div className="wrapper_collapse grid md:grid-cols-2 gap-10 items-center mt-10 bg-white rounded-xl p-6 shadow-sm">
              <div className="order-2 md:order-1 flex justify-center">
                <img
                  src="https://anglo-link.com/images/comment_2.png"
                  alt="Comment 2"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h6 className="block text-xl text-[#7B68EE] font-semibold mb-3">
                  Easy-to-follow
                </h6>
                <p className="text-gray-700 leading-relaxed">
                  We present the content in simple English, and we speak clearly
                  so the explanations are easy to follow.
                </p>
              </div>
            </div>

            {/* === Professionally presented Section === */}
            <div className="wrapper_collapse grid md:grid-cols-2 gap-10 items-center mt-10 bg-white rounded-xl p-6 shadow-sm">
              <div>
                <h6 className="block text-xl text-[#4169E1] font-semibold mb-3">
                  Professionally presented
                </h6>
                <p className="text-gray-700 leading-relaxed">
                  We use extensive animations, colour coding, and visual cues to
                  clarify concepts for you. This greatly enhances your
                  understanding of the topic and helps you to easily remember the
                  examples when you want to use them in your own writing or
                  speech.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://anglo-link.com/images/comment_3.png"
                  alt="Comment 3"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <p className="text-gray-700 mt-10">
              To give you an idea of how much we care about the quality of our
              video lessons, we spend an average of 20 hours to produce one video
              lesson for you.
            </p>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          </div>
        </div>
      </div>

      {/* ===== Section 2 ===== */}
      <div style={{ backgroundColor: "#FFFFFF" }} className="text-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6 feature_desc">
          <div className="inner space-y-8 relative">
            <h5 className="text-3xl text-[#4169E1] font-semibold text-center mb-10">
<<<<<<< HEAD
              {section2.title}
            </h5>

            {section2.types.map((type, idx) => (
              <div key={idx}>
                <h6
                  className="relative font-semibold text-2xl leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:absolute after:bottom-[-6px] after:left-0"
                  style={{
                    color: type.color,
                    borderColor: type.color,
                  }}
                >
                  {type.title}
                </h6>
                <p className="text-gray-700 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
=======
              Types of video lessons
            </h5>

            <div>
              <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#4169E1] after:absolute after:bottom-[-6px] after:left-0">
                Grammar videos
              </h6>
              <p className="text-gray-700 leading-relaxed">
                Our grammar video lessons are voice-recorded and animated versions of
                our written explanations. They offer additional examples and exercises
                to deepen your understanding of the grammar topic.
              </p>
            </div>

            <div>
              <h6 className="relative font-semibold text-2xl text-[#7B68EE] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#7B68EE] after:absolute after:bottom-[-6px] after:left-0">
                Pronunciation, conversation, and vocabulary videos
              </h6>
              <p className="text-gray-700 leading-relaxed">
                These videos review and expand on the contents of pronunciation and
                conversation lessons. Their aim is to help you to fully assimilate the
                material and to continue to improve your English listening skills and
                your pronunciation. Some of them include dictation exercises that help
                you with your spelling and writing skills too.
              </p>
            </div>

            <div>
              <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#4169E1] after:absolute after:bottom-[-6px] after:left-0">
                Tutorials
              </h6>
              <p className="text-gray-700 leading-relaxed">
                These videos give you tips on how to study different areas of the
                English language effectively and how to improve different skills.
              </p>
            </div>

            <div>
              <h6 className="relative font-semibold text-2xl text-[#7B68EE] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#7B68EE] after:absolute after:bottom-[-6px] after:left-0">
                Exclusive videos
              </h6>
              <p className="text-gray-700 leading-relaxed">
                These English videos provide follow-up lessons and additional exercises
                on the more challenging topics in every category (grammar,
                pronunciation, and vocabulary). These video lessons are exclusive to
                Silver and Gold study plans.
              </p>
            </div>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
<<<<<<< HEAD
            href={cta.href}
=======
            href="https://anglo-link.com/features/"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
            className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
            style={{
              backgroundColor: "#4169E1",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7B68EE")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4169E1")}
          >
<<<<<<< HEAD
            {cta.text}
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
          </a>
        </div>
      </div>
    </main>
  );
};

export default Page;
<<<<<<< HEAD


// "use client";
// import React from "react";
// import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../src/data/studyToolsData";
// import { usePathname } from "next/navigation";

// const Page = () => {
//   const pathname = usePathname();
//   const slug = pathname.split("/").pop();
//   const toolData = studyToolsData[slug];
//   if (!toolData)
//     return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;

//   return (
//     <main style={{ backgroundColor: "#FFF7AE" }} className="font-sans">
//       <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />

//       {/* ===== Section 1 ===== */}
//       <div style={{ backgroundColor: "#FFFFFF" }} className="py-16">
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="feature_desc space-y-8">
//             <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#4169E1] after:absolute after:bottom-[-6px] after:left-0">
//               English students love our video lessons, and we love making them.
//             </h6>
//             <p className="text-gray-700 leading-relaxed">
//               We are delighted that you like our video lessons, and we are
//               grateful for all the positive feedback we receive from you.
//             </p>

//             <img
//               src="https://anglo-link.com/images/comments.png"
//               alt="Comments"
//               className="comments mx-auto"
//             />

//             <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#7B68EE] after:absolute after:bottom-[-6px] after:left-0">
//               What makes our videos different?
//             </h6>
//             <p className="text-gray-700">
//               We do our very best to make every one of our English video lessons:
//             </p>

//             {/* === Content-rich Section === */}
//             <div className="wrapper_collapse grid md:grid-cols-2 gap-10 items-center mt-10 bg-white rounded-xl p-6 shadow-sm">
//               <div>
//                 <h6 className="block text-xl text-[#4169E1] font-semibold mb-3">
//                   Content-rich
//                 </h6>
//                 <p className="text-gray-700 leading-relaxed">
//                   We make sure that you get all the essential information as well
//                   as many meaningful examples on the topic of study. Most lessons
//                   also include a practice activity that deepens your understanding
//                   and active use of the language point.
//                 </p>
//               </div>
//               <div className="flex justify-center">
//                 <img
//                   src="https://anglo-link.com/images/comment_1.png"
//                   alt="Comment 1"
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//             </div>

//             {/* === Easy-to-follow Section === */}
//             <div className="wrapper_collapse grid md:grid-cols-2 gap-10 items-center mt-10 bg-white rounded-xl p-6 shadow-sm">
//               <div className="order-2 md:order-1 flex justify-center">
//                 <img
//                   src="https://anglo-link.com/images/comment_2.png"
//                   alt="Comment 2"
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//               <div className="order-1 md:order-2">
//                 <h6 className="block text-xl text-[#7B68EE] font-semibold mb-3">
//                   Easy-to-follow
//                 </h6>
//                 <p className="text-gray-700 leading-relaxed">
//                   We present the content in simple English, and we speak clearly
//                   so the explanations are easy to follow.
//                 </p>
//               </div>
//             </div>

//             {/* === Professionally presented Section === */}
//             <div className="wrapper_collapse grid md:grid-cols-2 gap-10 items-center mt-10 bg-white rounded-xl p-6 shadow-sm">
//               <div>
//                 <h6 className="block text-xl text-[#4169E1] font-semibold mb-3">
//                   Professionally presented
//                 </h6>
//                 <p className="text-gray-700 leading-relaxed">
//                   We use extensive animations, colour coding, and visual cues to
//                   clarify concepts for you. This greatly enhances your
//                   understanding of the topic and helps you to easily remember the
//                   examples when you want to use them in your own writing or
//                   speech.
//                 </p>
//               </div>
//               <div className="flex justify-center">
//                 <img
//                   src="https://anglo-link.com/images/comment_3.png"
//                   alt="Comment 3"
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//             </div>

//             <p className="text-gray-700 mt-10">
//               To give you an idea of how much we care about the quality of our
//               video lessons, we spend an average of 20 hours to produce one video
//               lesson for you.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ===== Section 2 ===== */}
//       <div style={{ backgroundColor: "#FFFFFF" }} className="text-gray-800 py-20">
//         <div className="max-w-4xl mx-auto px-6 feature_desc">
//           <div className="inner space-y-8 relative">
//             <h5 className="text-3xl text-[#4169E1] font-semibold text-center mb-10">
//               Types of video lessons
//             </h5>

//             <div>
//               <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#4169E1] after:absolute after:bottom-[-6px] after:left-0">
//                 Grammar videos
//               </h6>
//               <p className="text-gray-700 leading-relaxed">
//                 Our grammar video lessons are voice-recorded and animated versions of
//                 our written explanations. They offer additional examples and exercises
//                 to deepen your understanding of the grammar topic.
//               </p>
//             </div>

//             <div>
//               <h6 className="relative font-semibold text-2xl text-[#7B68EE] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#7B68EE] after:absolute after:bottom-[-6px] after:left-0">
//                 Pronunciation, conversation, and vocabulary videos
//               </h6>
//               <p className="text-gray-700 leading-relaxed">
//                 These videos review and expand on the contents of pronunciation and
//                 conversation lessons. Their aim is to help you to fully assimilate the
//                 material and to continue to improve your English listening skills and
//                 your pronunciation. Some of them include dictation exercises that help
//                 you with your spelling and writing skills too.
//               </p>
//             </div>

//             <div>
//               <h6 className="relative font-semibold text-2xl text-[#4169E1] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#4169E1] after:absolute after:bottom-[-6px] after:left-0">
//                 Tutorials
//               </h6>
//               <p className="text-gray-700 leading-relaxed">
//                 These videos give you tips on how to study different areas of the
//                 English language effectively and how to improve different skills.
//               </p>
//             </div>

//             <div>
//               <h6 className="relative font-semibold text-2xl text-[#7B68EE] leading-[1.3] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#7B68EE] after:absolute after:bottom-[-6px] after:left-0">
//                 Exclusive videos
//               </h6>
//               <p className="text-gray-700 leading-relaxed">
//                 These English videos provide follow-up lessons and additional exercises
//                 on the more challenging topics in every category (grammar,
//                 pronunciation, and vocabulary). These video lessons are exclusive to
//                 Silver and Gold study plans.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-12">
//           <a
//             href="https://anglo-link.com/features/"
//             className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
//             style={{
//               backgroundColor: "#4169E1",
//               color: "#FFFFFF",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7B68EE")}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4169E1")}
//           >
//             View all features
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="ml-2"
//             >
//               <path
//                 d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
//                 fill="currentColor"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Page;
=======
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
