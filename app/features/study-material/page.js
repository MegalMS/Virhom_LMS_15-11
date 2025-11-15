<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../data/studyToolsData";
import { usePathname } from "next/navigation";
 

=======
  // "use client"
  // import React from 'react'
  // import StudyToolsSection from '../../../src/components/StudyToolsSection'
  // import {studyToolsData} from '../../../src/data/studyToolsData'
  // import { useParams } from "next/navigation";
  // import { usePathname } from 'next/navigation';

  // export default function StudyMaterialPage() {
  //     const pathname = usePathname(); // e.g. "/features/study-material"
  //   const slug = pathname.split("/").pop(); // "study-material"

  //   const toolData = studyToolsData[slug];
  //   console.log("slug:", slug); // ✅ should log "study-material"

  //   if (!toolData) {
  //     return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
  //   }
  //   console.log("toolData:", toolData); // ✅ should log the data for "study-material"
    
  //   return (
  //     <main className=" bg-[#F3F9FE] mt-12">
  // <StudyToolsSection
  //         title={toolData.title}
  //         description={toolData.description}
  //         image={toolData.image}
  //       />
  //       {/* Hero Image Section */}
  //       <div className="dark rounded-2xl mb-10">

  //         <div className="container mx-auto p-6">
  //           <div className="inner">

  //             <section className="space-y-6 pl-80 pr-80">
  //               <div>
  //                 <h6 className="relative font-normal text-2xl leading-[1.2] mb-10 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-5] after:left-0">
  //   Complete and relevant content
  // </h6>

  //                 <p className="text-base leading-[2.2] mb-8">
  //                   To become fluent in English, you need to master all its components:
  //                   pronunciation, grammar, and vocabulary. You also need to practise all four
  //                   skills: reading, writing, listening, and speaking.
  //                 </p>
  //                 <p className='text-base leading-[2.2] mb-20'> 
  //                   We have divided your online course into three categories: pronunciation,
  //                   grammar, and conversation. However, we have made sure that whichever category a
  //                   particular lesson focuses on, it also allows you to review and practise relevant
  //                   content from the other two categories. In this way, every lesson helps you to
  //                   improve your English grammar, vocabulary, and pronunciation simultaneously. We
  //                   have also made sure that you get the opportunity to practise all four skills in
  //                   every lesson.
  //                 </p>
  //               </div>

  //               <div>
  //                                 <h6 className="relative font-normal text-2xl leading-[1.2] mb-10 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  //   Graded
  // </h6>
                
  //                 <p className='text-base leading-[2.2] mb-5'>
  //                   Another important aspect of a self-study course is that the content needs to be
  //                   graded, going from easy to more difficult.
  //                 </p>

  //                 <p className='mb-5'> We have made sure that:</p>
  // <ul className="text-sm ml-4 space-y-3 mb-15">

  //   <li className="flex items-start gap-2">
  //     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 flex-shrink-0"
  //     />
  //     <span>
  //       The lessons in each category follow a logical sequence of easy to more
  //       difficult, with difficulty levels clearly marked for you.
  //     </span>
  //   </li>

  //   <li className="flex items-start gap-2">
  //     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 flex-shrink-0"
  //     />
  //     <span>
  //       More advanced lessons revise and build on the contents of earlier lessons.
  //     </span>
  //   </li>
  // </ul>

  //               </div>

  //               <div>
  //                                           <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  //   Clear explanations
  // </h6>
  // <p className='text-base leading-[2.2] mb-3'>We have ensured that our explanations are clear and easy-to-follow by using:</p>
  //                 <ul className="list-disc text-sm ml-6 mb-15">
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //               <span>Simple English</span>   </li>
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span> Tables</span></li>
  //                   <li className='flex items-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span>  Timelines</span></li>
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span>  Colour coding</span></li>
  //                   <li className='flex item-start gap-2'>
  //                     <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //               <span>    Tips &amp; notes</span></li>
  //                 </ul>
  //               </div>

  //               <div>
  //                                           <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  //   Meaningful examples
  // </h6>
  // <p className='text-base leading-[2.2] mb-3'>We have made sure that our example phrases and sentences:</p>

  //                 <ul className="list-disc text-sm ml-6">
  //                   <li className='flex item-start gap-2'>
  //                       <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                   <span> Easily clarify the point you are learning.</span></li>
  //                   <li className='flex item-start gap-2'>
  //                       <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                     <span>Include useful daily English expressions.</span></li>
  //                   <li className='flex item-start gap-2'>
  //                       <img
  //       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
  //       alt="check"
  //       className="w-5 h-5 mt-1 flex-shrink-0"
  //     />
  //                         <span>Perfectly match the language level you are studying.</span></li>
  //                 </ul>
  //               </div>
  //             </section>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Light Section */}
  //       <div className="light bg-white rounded-2xl p-6 ">
  //         <div className="container mx-auto ml-75 mr-75">
  //           <div className="inner space-y-6">
  //             <h5 className="text-3xl font-semibold flex item-center justify-center">What do I learn in each type of lesson?</h5>

  //             <div>

  //                                                       <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  // Pronunciation</h6>
  //               <p className='text-base leading-[2.2]'>
  //                 In pronunciation lessons, you learn about the sounds, stress patterns, and
  //                 intonation patterns of Standard British English (Received Pronunciation).
  //                 Understanding the sound system of the English language is essential in developing
  //                 good listening skills so you can understand native speakers, movies, news, and
  //                 other broadcasts in English. You can then use these resources to expand your active
  //                 vocabulary. It is also important for you to develop a clear pronunciation yourself,
  //                 and our self-study course gives you many opportunities to actively work on your own
  //                 pronunciation.
  //               </p>
  //             </div>

  //             <div>
  //                                                         <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  // Grammar</h6>
  //               <p className='text-base leading-[2.2]'>
  //                 In Grammar lessons, you learn all the important grammatical structures in English.
  //                 Mastering these is necessary for writing English fluently. A good knowledge of
  //                 grammar also improves your reading and listening skills. It is true that absolute
  //                 grammatical accuracy is not essential for speaking fluently. However, a good
  //                 knowledge of grammatical structures can definitely increase your self-confidence.
  //                 When we do not know the grammar rules, we may think we are making too many mistakes,
  //                 and we can lose our confidence to speak English in front of others. On the
  //                 contrary, when we know the rules, we are able to recognise and correct our mistakes,
  //                 and this is a great boost to our self-confidence.
  //               </p>
  //             </div>

  //             <div>
  //                                                         <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
  // Conversation</h6>
  //               <p className='text-base leading-[2.2]'>
  //                 In conversation lessons, you focus on expanding your range of vocabulary and
  //                 expressions in a variety of everyday contexts. Learning English vocabulary in
  //                 situational dialogues reduces the need for translation and ensures that you can use
  //                 the vocabulary you learn reflexively. All the situational dialogues in the course
  //                 have been voice-recorded so you can improve your listening skills and pronunciation
  //                 at the same time as you learn new vocabulary and expressions.
  //               </p>
  //             </div>
  //           </div>
  //         </div>

  //       <div className="text-center mt-8">
  //   <a
  //     href="https://anglo-link.com/features/"
  //     className="inline-block text-blue-400 px-5 py-2 rounded-full transition"
  //   >
  //     View all features
  // <img
  //   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' fill='%2337aadc'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"
  //   alt="arrow"
  //   className="inline-block ml-2 w-6 h-6 align-middle"
  // />

  //   </a>
  // </div>

  //       </div>
  //     </main>
  //   );
  // }

  
"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";

// ✅ reusable SVG constant (check icon)
const CHECK_ICON =
  "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%234169E1' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

// ✅ reusable section heading with accent underline
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
<<<<<<< HEAD
const CHECK_ICON =
  "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%234169E1' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

=======
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

// ✅ reusable checklist component
function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 mb-3">
      <img src={CHECK_ICON} alt="check" className="w-5 h-5 mt-1 flex-shrink-0" />
      <span className="text-base leading-relaxed">{children}</span>
    </li>
  );
}

export default function StudyMaterialPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
<<<<<<< HEAD


  const [contents, setContents] = useState(jsondata);
  const toolData = contents?.toolData;
  console.log("vfhvewshdfja",toolData);

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
  if (!toolData || !contents) return <p className="text-center mt-10 text-red-500">{contents?.notFoundMessage || "404 - Not Found"}</p>;


=======
  const toolData = studyToolsData[slug];

  if (!toolData)
    return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

  return (
    <main style={{ backgroundColor: '#FFF7AE' }} className="min-h-screen">
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* First Content Section */}
      <div style={{ backgroundColor: '#FFFFFF' }} className="px-6">
        <div className="container mx-auto max-w-5xl">
          <section>
<<<<<<< HEAD
            {contents.sections.map((section, secIndex) => (
              <div key={secIndex} className="bg-white rounded-xl p-8">
                <Heading color={section.color}>{section.heading}</Heading>
                {section.paragraphs.map((p, pIndex) => {
                  const length = section.paragraphs.length;
                  let mbClass = pIndex < length - 1 ? "mb-6" : section.checkItems.length > 0 ? "mb-6" : "";
                  let colorClass = "text-gray-700";
                  let fontClass = "";
                  if (pIndex === length - 1 && section.checkItems.length > 0 && section.heading === "Graded") {
                    mbClass = "mb-5";
                    fontClass = "font-medium";
                    colorClass = "text-gray-800";
                  }
                  return (
                    <p key={pIndex} className={`text-base leading-[1.8] ${mbClass} ${fontClass} ${colorClass}`}>
                      {p}
                    </p>
                  );
                })}
                {section.checkItems.length > 0 && (
                  <ul 
                    className={`${section.heading === "Graded" ? "space-y-2" : ""} ml-2`} 
                    style={{ color: '#333333' }}
                  >
                    {section.checkItems.map((item, itemIndex) => (
                      <CheckItem key={itemIndex}>{item}</CheckItem>
                    ))}
                  </ul>
                )}
              </div>
            ))}
=======
            {/* ✅ Section 1 */}
            <div className="bg-white rounded-xl p-8" >
              <Heading color="#4169E1">Complete and relevant content</Heading>
              <p className="text-base leading-[1.8] mb-6 text-gray-700">
                To become fluent in English, you need to master all its components:
                pronunciation, grammar, and vocabulary. You also need to practise all
                four skills: reading, writing, listening, and speaking.
              </p>
              <p className="text-base leading-[1.8] text-gray-700">
                We have divided your online course into three categories:
                pronunciation, grammar, and conversation. However, we have made sure
                that whichever category a particular lesson focuses on, it also allows
                you to review and practise relevant content from the other two
                categories. In this way, every lesson helps you to improve your English
                grammar, vocabulary, and pronunciation simultaneously. We have also made
                sure that you get the opportunity to practise all four skills in every
                lesson.
              </p>
            </div>

            {/* ✅ Section 2 */}
            <div className="bg-white rounded-xl p-8" >
              <Heading color="#7B68EE">Graded</Heading>
              <p className="text-base leading-[1.8] mb-6 text-gray-700">
                Another important aspect of a self-study course is that the content
                needs to be graded, going from easy to more difficult.
              </p>
              <p className="text-base mb-5 font-medium text-gray-800">We have made sure that:</p>
              <ul className="space-y-2 ml-2" style={{ color: '#333333' }}>
                <CheckItem>
                  The lessons in each category follow a logical sequence of easy to more
                  difficult, with difficulty levels clearly marked for you.
                </CheckItem>
                <CheckItem>
                  More advanced lessons revise and build on the contents of earlier
                  lessons.
                </CheckItem>
              </ul>
            </div>

            {/* ✅ Section 3 */}
            <div className="bg-white rounded-xl  p-8">
              <Heading color="#4169E1">Clear explanations</Heading>
              <p className="text-base leading-[1.8] mb-6 text-gray-700">
                We have ensured that our explanations are clear and easy-to-follow by
                using:
              </p>
              <ul className="ml-2" style={{ color: '#333333' }}>
                <CheckItem>Simple English</CheckItem>
                <CheckItem>Tables</CheckItem>
                <CheckItem>Timelines</CheckItem>
                <CheckItem>Colour coding</CheckItem>
                <CheckItem>Tips &amp; notes</CheckItem>
              </ul>
            </div>

            {/* ✅ Section 4 */}
            <div className="bg-white rounded-xl p-8">
              <Heading color="#7B68EE">Meaningful examples</Heading>
              <p className="text-base leading-[1.8] mb-6 text-gray-700">
                We have made sure that our example phrases and sentences:
              </p>
              <ul className="ml-2" style={{ color: '#333333' }}>
                <CheckItem>
                  Easily clarify the point you are learning.
                </CheckItem>
                <CheckItem>Include useful daily English expressions.</CheckItem>
                <CheckItem>
                  Perfectly match the language level you are studying.
                </CheckItem>
              </ul>
            </div>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          </section>
        </div>
      </div>

      {/* Second Content Section - Same background as first */}
      <div style={{ backgroundColor: '#FFFFFF' }} className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h5 
            className="text-4xl font-bold text-center mb-16"
            style={{ 
              color: '#333333',
              borderBottom: '4px solid #4169E1',
              paddingBottom: '16px',
              display: 'inline-block',
              width: '100%'
            }}
          >
<<<<<<< HEAD
            {contents.lessonsSection.title}
          </h5>

          <div>
            {contents.lessonsSection.subsections.map((sub, subIndex) => (
              <div key={subIndex} className="bg-white rounded-xl p-8">
                <Heading color={sub.color}>{sub.heading}</Heading>
                <p className="text-base leading-[1.8] text-gray-700">
                  {sub.paragraph}
                </p>
              </div>
            ))}
=======
            What do I learn in each type of lesson?
          </h5>

          <div>
            {/* ✅ Pronunciation Section */}
            <div className="bg-white rounded-xl p-8">
              <Heading color="#4169E1">Pronunciation</Heading>
              <p className="text-base leading-[1.8] text-gray-700">
                In pronunciation lessons, you learn about the sounds, stress patterns,
                and intonation patterns of Standard British English (Received
                Pronunciation). Understanding the sound system of the English language is
                essential in developing good listening skills so you can understand native
                speakers, movies, news, and other broadcasts in English. You can then use
                these resources to expand your active vocabulary. It is also important for
                you to develop a clear pronunciation yourself, and our self-study course
                gives you many opportunities to actively work on your own pronunciation.
              </p>
            </div>

            {/* ✅ Grammar Section */}
            <div className="bg-white rounded-xl p-8">
              <Heading color="#7B68EE">Grammar</Heading>
              <p className="text-base leading-[1.8] text-gray-700">
                In Grammar lessons, you learn all the important grammatical structures in
                English. Mastering these is necessary for writing English fluently. A good
                knowledge of grammar also improves your reading and listening skills. It
                is true that absolute grammatical accuracy is not essential for speaking
                fluently. However, a good knowledge of grammatical structures can
                definitely increase your self-confidence. When we do not know the grammar
                rules, we may think we are making too many mistakes, and we can lose our
                confidence to speak English in front of others. On the contrary, when we
                know the rules, we are able to recognise and correct our mistakes, and this
                is a great boost to our self-confidence.
              </p>
            </div>

            {/* ✅ Conversation Section */}
            <div className="bg-white rounded-xl p-8">
              <Heading color="#4169E1">Conversation</Heading>
              <p className="text-base leading-[1.8] text-gray-700">
                In conversation lessons, you focus on expanding your range of vocabulary
                and expressions in a variety of everyday contexts. Learning English
                vocabulary in situational dialogues reduces the need for translation and
                ensures that you can use the vocabulary you learn reflexively. All the
                situational dialogues in the course have been voice-recorded so you can
                improve your listening skills and pronunciation at the same time as you
                learn new vocabulary and expressions.
              </p>
            </div>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          </div>

          {/* ✅ CTA */}
          <div className="text-center mt-12">
            <a
<<<<<<< HEAD
              href={contents.cta.href}
=======
              href="/features"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
              style={{
                backgroundColor: '#4169E1',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7B68EE'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4169E1'}
            >
<<<<<<< HEAD
              {contents.cta.text}
=======
              View all features
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ml-2">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
<<<<<<< HEAD
}

  
// "use client";
// import React from "react";
// import StudyToolsSection from "../../../src/components/StudyToolsSection";
// import { studyToolsData } from "../../../src/data/studyToolsData";
// import { usePathname } from "next/navigation";

// // ✅ reusable SVG constant (check icon)
// const CHECK_ICON =
//   "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%234169E1' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// // ✅ reusable section heading with accent underline
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

// // ✅ reusable checklist component
// function CheckItem({ children }) {
//   return (
//     <li className="flex items-start gap-3 mb-3">
//       <img src={CHECK_ICON} alt="check" className="w-5 h-5 mt-1 flex-shrink-0" />
//       <span className="text-base leading-relaxed">{children}</span>
//     </li>
//   );
// }

// export default function StudyMaterialPage() {
//   const pathname = usePathname();
//   const slug = pathname.split("/").pop();
//   const toolData = studyToolsData[slug];

//   if (!toolData)
//     return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;

//   return (
//     <main style={{ backgroundColor: '#FFF7AE' }} className="min-h-screen">
//       <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />

//       {/* First Content Section */}
//       <div style={{ backgroundColor: '#FFFFFF' }} className="px-6">
//         <div className="container mx-auto max-w-5xl">
//           <section>
//             {/* ✅ Section 1 */}
//             <div className="bg-white rounded-xl p-8" >
//               <Heading color="#4169E1">Complete and relevant content</Heading>
//               <p className="text-base leading-[1.8] mb-6 text-gray-700">
//                 To become fluent in English, you need to master all its components:
//                 pronunciation, grammar, and vocabulary. You also need to practise all
//                 four skills: reading, writing, listening, and speaking.
//               </p>
//               <p className="text-base leading-[1.8] text-gray-700">
//                 We have divided your online course into three categories:
//                 pronunciation, grammar, and conversation. However, we have made sure
//                 that whichever category a particular lesson focuses on, it also allows
//                 you to review and practise relevant content from the other two
//                 categories. In this way, every lesson helps you to improve your English
//                 grammar, vocabulary, and pronunciation simultaneously. We have also made
//                 sure that you get the opportunity to practise all four skills in every
//                 lesson.
//               </p>
//             </div>

//             {/* ✅ Section 2 */}
//             <div className="bg-white rounded-xl p-8" >
//               <Heading color="#7B68EE">Graded</Heading>
//               <p className="text-base leading-[1.8] mb-6 text-gray-700">
//                 Another important aspect of a self-study course is that the content
//                 needs to be graded, going from easy to more difficult.
//               </p>
//               <p className="text-base mb-5 font-medium text-gray-800">We have made sure that:</p>
//               <ul className="space-y-2 ml-2" style={{ color: '#333333' }}>
//                 <CheckItem>
//                   The lessons in each category follow a logical sequence of easy to more
//                   difficult, with difficulty levels clearly marked for you.
//                 </CheckItem>
//                 <CheckItem>
//                   More advanced lessons revise and build on the contents of earlier
//                   lessons.
//                 </CheckItem>
//               </ul>
//             </div>

//             {/* ✅ Section 3 */}
//             <div className="bg-white rounded-xl  p-8">
//               <Heading color="#4169E1">Clear explanations</Heading>
//               <p className="text-base leading-[1.8] mb-6 text-gray-700">
//                 We have ensured that our explanations are clear and easy-to-follow by
//                 using:
//               </p>
//               <ul className="ml-2" style={{ color: '#333333' }}>
//                 <CheckItem>Simple English</CheckItem>
//                 <CheckItem>Tables</CheckItem>
//                 <CheckItem>Timelines</CheckItem>
//                 <CheckItem>Colour coding</CheckItem>
//                 <CheckItem>Tips &amp; notes</CheckItem>
//               </ul>
//             </div>

//             {/* ✅ Section 4 */}
//             <div className="bg-white rounded-xl p-8">
//               <Heading color="#7B68EE">Meaningful examples</Heading>
//               <p className="text-base leading-[1.8] mb-6 text-gray-700">
//                 We have made sure that our example phrases and sentences:
//               </p>
//               <ul className="ml-2" style={{ color: '#333333' }}>
//                 <CheckItem>
//                   Easily clarify the point you are learning.
//                 </CheckItem>
//                 <CheckItem>Include useful daily English expressions.</CheckItem>
//                 <CheckItem>
//                   Perfectly match the language level you are studying.
//                 </CheckItem>
//               </ul>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Second Content Section - Same background as first */}
//       <div style={{ backgroundColor: '#FFFFFF' }} className="py-16 px-6">
//         <div className="container mx-auto max-w-5xl">
//           <h5 
//             className="text-4xl font-bold text-center mb-16"
//             style={{ 
//               color: '#333333',
//               borderBottom: '4px solid #4169E1',
//               paddingBottom: '16px',
//               display: 'inline-block',
//               width: '100%'
//             }}
//           >
//             What do I learn in each type of lesson?
//           </h5>

//           <div>
//             {/* ✅ Pronunciation Section */}
//             <div className="bg-white rounded-xl p-8">
//               <Heading color="#4169E1">Pronunciation</Heading>
//               <p className="text-base leading-[1.8] text-gray-700">
//                 In pronunciation lessons, you learn about the sounds, stress patterns,
//                 and intonation patterns of Standard British English (Received
//                 Pronunciation). Understanding the sound system of the English language is
//                 essential in developing good listening skills so you can understand native
//                 speakers, movies, news, and other broadcasts in English. You can then use
//                 these resources to expand your active vocabulary. It is also important for
//                 you to develop a clear pronunciation yourself, and our self-study course
//                 gives you many opportunities to actively work on your own pronunciation.
//               </p>
//             </div>

//             {/* ✅ Grammar Section */}
//             <div className="bg-white rounded-xl p-8">
//               <Heading color="#7B68EE">Grammar</Heading>
//               <p className="text-base leading-[1.8] text-gray-700">
//                 In Grammar lessons, you learn all the important grammatical structures in
//                 English. Mastering these is necessary for writing English fluently. A good
//                 knowledge of grammar also improves your reading and listening skills. It
//                 is true that absolute grammatical accuracy is not essential for speaking
//                 fluently. However, a good knowledge of grammatical structures can
//                 definitely increase your self-confidence. When we do not know the grammar
//                 rules, we may think we are making too many mistakes, and we can lose our
//                 confidence to speak English in front of others. On the contrary, when we
//                 know the rules, we are able to recognise and correct our mistakes, and this
//                 is a great boost to our self-confidence.
//               </p>
//             </div>

//             {/* ✅ Conversation Section */}
//             <div className="bg-white rounded-xl p-8">
//               <Heading color="#4169E1">Conversation</Heading>
//               <p className="text-base leading-[1.8] text-gray-700">
//                 In conversation lessons, you focus on expanding your range of vocabulary
//                 and expressions in a variety of everyday contexts. Learning English
//                 vocabulary in situational dialogues reduces the need for translation and
//                 ensures that you can use the vocabulary you learn reflexively. All the
//                 situational dialogues in the course have been voice-recorded so you can
//                 improve your listening skills and pronunciation at the same time as you
//                 learn new vocabulary and expressions.
//               </p>
//             </div>
//           </div>

//           {/* ✅ CTA */}
//           <div className="text-center mt-12">
//             <a
//               href="/features"
//               className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
//               style={{
//                 backgroundColor: '#4169E1',
//                 color: '#FFFFFF'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7B68EE'}
//               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4169E1'}
//             >
//               View all features
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ml-2">
//                 <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// } 
=======
} 
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
