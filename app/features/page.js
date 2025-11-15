"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ────────────────────── Re-usable helpers ────────────────────── */
function Heading({ children }) {
  return (
    <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-8px] after:left-0">
      {children}
    </h6>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2">
      <img
        src={CHECK_ICON}
        alt="check"
        className="w-5 h-5 mt-1 flex-shrink-0"
      />
      <span>{children}</span>
    </li>
  );
}

/* ────────────────────── Page component ────────────────────── */
export default function FeatureListPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [contents, setContents] = useState(null);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!contents) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">{contents?.notFoundMessage || "404 - Not Found"}</p>
    );
  }

  const CHECK_ICON = contents.checkIcon;

  return (
    <main className="bg-white">
      {/* ── Study-method tabs ── */}
      <section className="py-12 flex justify-center bg-gray-50">
        <div className="max-w-6xl w-full px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {contents.studyMethods.map((m) => (
              <Link href={m.link || "#"} key={m.title}>
                <div
                  className={`text-white p-4 rounded-lg shadow-sm cursor-pointer hover:opacity-90 transition ${
                    m.bg || ""
                  }`}
                  style={m.style}
                >
                  <h3 className="font-semibold text-lg">{m.title}</h3>
                  <p className="text-sm mt-1">{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature list ── */}
      <section className="py-20 flex justify-center">
        <div className="max-w-6xl w-full px-6 md:px-10">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
            {contents.hero?.heading || "Our Features"}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {contents.featuresList.map((f) => (
              <div key={f.slug} className="flex gap-4">
                <div className="text-4xl flex-shrink-0">{f.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed mb-3">
                    {f.desc}
                  </p>
                  <Link
                    href={`/features/${f.slug}`}
                    className="text-sky-500 font-medium hover:underline inline-flex items-center"
                  >
                    Learn more
                    <span className="ml-1">›</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


// // app/features/page.js
// "use client";
// import React from "react";
// import Link from "next/link";
// import { useContent, getPageContent } from "@/src/hooks/useContent";

// /* ────────────────────── Re-usable helpers ────────────────────── */
// const CHECK_ICON =
//   "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";

// function Heading({ children }) {
//   return (
//     <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-8px] after:left-0">
//       {children}
//     </h6>
//   );
// }

// function CheckItem({ children }) {
//   return (
//     <li className="flex items-start gap-2">
//       <img
//         src={CHECK_ICON}
//         alt="check"
//         className="w-5 h-5 mt-1 flex-shrink-0"
//       />
//       <span>{children}</span>
//     </li>
//   );
// }

// /* ────────────────────── Study Methods (with custom color for Type (Write)) ────────────────────── */
// const studyMethods = [
//   {
//     title: "Read",
//     bg: "bg-red-700",
//     desc: "Read simple and clear explanations and examples.",
//     link: "study-material",
//   },
//   {
//     title: "Listen",
//     bg: "bg-orange-700",
//     desc: "Listen to explanations and hear new examples (video lessons).",
//     link: "/video-lessons",
//   },
//   {
//     title: "Take notes",
//     bg: "bg-yellow-700",
//     desc: "Take personal notes in a handy revision tool called PEN.",
//     link: "/study-tools",
//   },
//   {
//     title: "Type (Write)",
//     style: { backgroundColor: "#1366A8" },
//     desc: "Type your answers to written exercises or write your answers in downloadable PDF documents.",
//     link: "/practice-material",
//   },
//   {
//     title: "Speak",
//     bg: "bg-purple-700",
//     desc: "Speak by repeating hundreds of common daily phrases that have been voice-recorded for you.",
//     link: "/practice-material",
//   },
//   {
//     title: "Record",
//     bg: "bg-green-700",
//     desc: "Record and listen to your own voice using our voice recognition software.Record and listen to your own voice.",
//     link: "/voice-recognition",
//   },
// ];

// /* ────────────────────── Features (FIXED: Emojis restored) ────────────────────── */
// const features = [
//   {
//     icon: "📖",
//     title: "Study material",
//     slug: "study-material",
//     desc: "We have made sure that the study material covers all the essential components of the English language in terms of pronunciation, grammar, and vocabulary. We have also made sure that each lesson allows you to practise all four skills: reading, writing, listening, and speaking.",
//   },
//   {
//     icon: "🎥",
//     title: "Video lessons",
//     slug: "video-lessons",
//     desc: "A large part of the study material in your online English course consists of our popular video lessons. These videos review and expand on the written explanations and examples contained in the study sections.",
//   },
//   {
//     icon: "✍️",
//     title: "Practice material: written & oral exercises",
//     slug: "practice-material",
//     desc: "To ensure that you can easily assimilate and actively use what you learn, we have included many written and oral exercises in every lesson.",
//   },
//   {
//     icon: "🎤",
//     title: "Voice recognition",
//     slug: "voice-recognition",
//     desc: "We have included a voice recognition software that enables you to know immediately if the way you have pronounced a word or a phrase is clear enough to be easily understood.",
//   },
//   {
//     icon: "🛠️",
//     title: "Study tools",
//     slug: "study-tools",
//     desc: "So that you have everything you need to study efficiently, we have incorporated an English-English dictionary, a translation tool, and an online note-taking facility into the platform.",
//   },
//   {
//     icon: "📥",
//     title: "Offline study",
//     slug: "offline-study",
//     desc: "To ensure that you have access to your study material both online and offline, we have made all the video lessons, audio recordings, and written content downloadable.",
//   },
//   {
//     icon: "📊",
//     title: "Progress tracking & feedback",
//     slug: "progress-tracking",
//     desc: "Once you begin your online English lessons, our system allows you to track your progress by showing you which lessons you have completed, and by recording your test results for each lesson in a progress chart. You can see all this information at a glance in your personal study plan and on your dashboard.",
//   },
//   {
//     icon: "🏆",
//     title: "Reward system",
//     slug: "reward-system",
//     desc: "To make sure you stay motivated throughout your journey until you have reached your goal of mastering the English language, we have introduced some fun features such as trophies, ranks, and free credits.",
//   },
//   {
//     icon: "🆘",
//     title: "Support system",
//     slug: "support-system",
//     desc: "The programme is designed to allow you to study completely independently or with different levels of support from Minoo.",
//   },
//   {
//     icon: "👥",
//     title: "One-to-one lessons",
//     slug: "one-to-one-lessons",
//     desc: "On any journey you sometimes need a guide to make sure you are on track, or to accelerate your journey towards a specific destination. That is why we offer you the option of booking one-to-one lessons whenever you need feed-back and guidance, or when you need additional support with a specific goal, e.g. improving your pronunciation, confidence training, presentation or job interview practice, or exam preparation (IELTS, TOEFL).",
//   },
// ];

// /* ────────────────────── Page component ────────────────────── */
// export default function FeatureListPage() {
//   const { content, loading } = useContent();
//   const pageContent = getPageContent(content, "features");

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-xl text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-white">
//       {/* ── Study-method tabs ── */}
//       <section className="py-12 flex justify-center bg-gray-50">
//         <div className="max-w-6xl w-full px-6 md:px-10">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {studyMethods.map((m) => (
//               <Link href={m.link || "#"} key={m.title}>
//                 <div
//                   className={`text-white p-4 rounded-lg shadow-sm cursor-pointer hover:opacity-90 transition ${
//                     m.bg || ""
//                   }`}
//                   style={m.style}
//                 >
//                   <h3 className="font-semibold text-lg">{m.title}</h3>
//                   <p className="text-sm mt-1">{m.desc}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Feature list ── */}
//       <section className="py-20 flex justify-center">
//         <div className="max-w-6xl w-full px-6 md:px-10">
//           <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
//             {pageContent.hero?.heading || "Our Features"}
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12">
//             {features.map((f) => (
//               <div key={f.slug} className="flex gap-4">
//                 <div className="text-4xl flex-shrink-0">{f.icon}</div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-medium text-gray-800 mb-2">
//                     {f.title}
//                   </h3>
//                   <p className="text-gray-600 text-[16px] leading-relaxed mb-3">
//                     {f.desc}
//                   </p>
//                   <Link
//                     href={`/features/${f.slug}`}
//                     className="text-sky-500 font-medium hover:underline inline-flex items-center"
//                   >
//                     Learn more
//                     <span className="ml-1">›</span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
