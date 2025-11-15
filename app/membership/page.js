<<<<<<< HEAD
// app/membership/page.js
"use client";

import React, { useState, useEffect } from "react";
import { Check, X, HelpCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PricingPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "membership";

  const [period, setPeriod] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ─────── useEffect: Fetch /api/content (same as other pages) ─────── */
  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        console.log("Fetching: /api/content");
        const res = await fetch("/api/content", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load content");
        const json = await res.json();

        console.log("API Response:", json);
        console.log("URL Slug:", slug);
        console.log("Available Keys:", Object.keys(json.data || {}));

        const finalData = json.data?.[slug]; // <-- expects "membership"
        console.log("Matched Content:", finalData);

        setContent(finalData || null);
      } catch (err) {
        console.error("Content load error:", err);
        setContent(null);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [slug]);

  /* ────────────────────── Loading State ────────────────────── */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  /* ────────────────────── 404 / Not Found ────────────────────── */
  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-center text-red-500 text-lg">
          404 - Page Not Found
        </p>
      </div>
    );
  }

  const pageContent = content || {};

  // === SAFE: Ensure features is an array ===
  const features = Array.isArray(pageContent.features) ? pageContent.features : [];

  // === SAFE: Parse price from string like "$9.99" ===
  const parsePrice = (priceStr) => {
    if (typeof priceStr !== "string") return 0;
    return parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
  };

  // === Build plans safely ===
  const plans = [
    {
      id: "free",
      name: pageContent.plans?.free?.name || "Free Plan",
      price: {
        monthly: parsePrice(pageContent.plans?.free?.price),
        sixMonths: 0,
      },
      popular: false,
    },
    {
      id: "pro",
      name: pageContent.plans?.pro?.name || "Pro Plan",
      price: {
        monthly: parsePrice(pageContent.plans?.pro?.price),
        sixMonths: parsePrice(pageContent.plans?.pro?.price) * 5,
      },
      popular: true,
    },
    {
      id: "premium",
      name: pageContent.plans?.premium?.name || "Premium Plan",
      price: {
        monthly: parsePrice(pageContent.plans?.premium?.price),
        sixMonths: parsePrice(pageContent.plans?.premium?.price) * 5,
      },
=======
'use client';

import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const [period, setPeriod] = useState('monthly');
  const [currency, setCurrency] = useState('USD');

  const plans = [
    {
      id: 'bronze',
      name: 'Bronze',
      price: { monthly: 32.45, sixMonths: 162.25 },
      icon: 'https://anglo-link.com/images/bronze_membership.png',
      popular: false,
    },
    {
      id: 'silver',
      name: 'Silver',
      price: { monthly: 69.99, sixMonths: 349.95 },
      icon: 'https://anglo-link.com/images/silver_membership.png',
      popular: true,
    },
    {
      id: 'gold',
      name: 'Gold',
      price: { monthly: 174.99, sixMonths: 874.95 },
      icon: 'https://anglo-link.com/images/gold_membership.png',
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
      popular: false,
    },
  ];

<<<<<<< HEAD
  // === Price formatting ===
  const getPrice = (plan) => {
    const amount = period === "monthly" ? plan.price.monthly : plan.price.sixMonths;
    const symbol = currency === "USD" ? "$" : currency === "EUR" ? "EUR" : "GBP";
=======
  const features = [
    { name: 'Personal study plan', all: true, tooltip: 'A step-by-step guide showing your performance in each lesson & which lesson to study next' },
    { name: 'Video lessons (80+)', all: true, tooltip: 'A wide range of video lessons on pronunciation, grammar, vocabulary, conversation, including listening & speaking exercises' },
    { name: 'Written material', all: true, tooltip: 'Written version of the video lessons with new example sentences to widen your range of vocabulary and expressions' },
    { name: 'Written exercises', all: true, tooltip: 'Hundreds of written exercises to assimilate the structures and the vocabulary in order to improve your writing skills' },
    { name: 'Oral exercises', all: true, tooltip: 'Voice recording of lessons and exercises to listen to and repeat in order to improve your spoken fluency' },
    { name: 'Speech recognition', all: true, tooltip: 'Voice recognition software so you can check the clarity of your own pronunciation' },
    { name: 'Progress tracking & feedback (tests)', all: true, tooltip: 'End-of-lesson tests to track your progress and show you which sections of the lesson you must revise' },
    { name: 'WhatsApp Conversation Practice Group', all: true, tooltip: 'Connect with your peers for regular conversation practice' },
    { name: 'Exclusive video lessons (45)', bronze: false, silver: true, gold: true, tooltip: 'Additional video lessons to review the more challenging grammar and pronunciation topics...' },
    { name: 'Offline study', bronze: false, silver: true, gold: true, tooltip: 'Option to download video lessons, audio recordings, and pdfs for offline access' },
    { name: 'Initial level test', bronze: false, silver: false, gold: true, tooltip: 'A 30-minute Zoom call with Minoo to discover your exact level...' },
  ];

  const getPrice = (plan) => {
    const amount = period === 'monthly' ? plan.price.monthly : plan.price.sixMonths;
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
    return `${symbol}${amount.toFixed(2)}`;
  };

  const getPeriodText = () => {
<<<<<<< HEAD
    return period === "monthly" ? "per month" : "for 6 months";
=======
    return period === 'monthly' ? 'per month' : 'for 6 months';
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {pageContent.header?.heading || "Choose Your Plan"}
          </h1>
          <p className="text-xl text-gray-600">
            {pageContent.header?.description || "Select the perfect plan for your learning goals"}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {/* Period */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                period === "monthly" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
=======

        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {/* Billing Period */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                period === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              }`}
            >
              Monthly
            </button>
            <button
<<<<<<< HEAD
              onClick={() => setPeriod("sixMonths")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all relative ${
                period === "sixMonths" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              6 Months
              {period === "sixMonths" && (
=======
              onClick={() => setPeriod('sixMonths')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all relative ${
                period === 'sixMonths'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              6 Months
              {period === 'sixMonths' && (
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  1 month free
                </span>
              )}
            </button>
          </div>

          {/* Currency */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
<<<<<<< HEAD
            {["USD", "EUR", "GBP"].map((cur) => (
=======
            {['USD', 'EUR', 'GBP'].map((cur) => (
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
<<<<<<< HEAD
                  currency === cur ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cur === "USD" ? "$ USD" : cur === "EUR" ? "EUR" : "GBP"}
=======
                  currency === cur ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cur === 'USD' ? '$ USD' : cur === 'EUR' ? '€ EUR' : '£ GBP'}
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
<<<<<<< HEAD
              <thead>
                <tr className="border-b">
                  <th className="p-6 font-bold text-4xl text-gray-800">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="p-6 text-center bg-gray-50">
                      <div className="text-2xl font-bold text-gray-800">{plan.name}</div>
                      <div className="text-3xl font-bold text-gray-800 mt-2">
=======
              {/* Table Header */}
              <thead>
                <tr className="border-b">
                  <th className="p-6 font-bold text-4xl text-gray-800 ">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className={`p-6 text-center ${plan.bg}`}>
                      <img
                        src={plan.icon}
                        alt={plan.name}
                        className="w-30 h-30 mx-auto mb-3 object-contain "
                      />
                      {/* {plan.popular && (
                        <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                          Most popular
                        </span>
                      )} */}
                      <div className="text-3xl font-bold text-gray-800">
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                        {getPrice(plan)}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{getPeriodText()}</p>
                      <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md transition">
                        Select
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

<<<<<<< HEAD
=======
              {/* Table Body */}
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                    <td className="p-4 text-gray-700 font-medium flex items-center gap-2">
                      {feature.name}
                      {feature.tooltip && (
                        <div className="group relative inline-block">
                          <HelpCircle className="w-4 h-4 text-blue-500 cursor-help" />
                          <div className="absolute hidden group-hover:block z-20 bg-gray-800 text-white text-xs p-3 rounded-lg max-w-xs -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap">
                            {feature.tooltip}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>
                      )}
                    </td>
                    {plans.map((plan) => (
<<<<<<< HEAD
                      <td key={plan.id} className="p-4 text-center bg-gray-50">
=======
                      <td
                        key={plan.id}
                        className={`p-4 text-center ${plan.bg}`}
                      >
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                        {feature.all || feature[plan.id] ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Hint */}
        <p className="text-center text-xs text-gray-500 mt-6 md:hidden">
          Swipe left/right to see all plans
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD
}

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Check, X, HelpCircle } from 'lucide-react';
//  


// export default function PricingPage() {
//   const [period, setPeriod] = useState('monthly');
//   const [currency, setCurrency] = useState('USD');
//   const [content, setContent] = useState(jsondata);
//   const [loading, setLoading] = useState(true);

//   // Fetch content.json once
//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch('/content.json', {
//           cache: 'no-store',
//         });
//         if (!res.ok) throw new Error('Failed to load content');
//         const data = await res.json();
//         setContent(data);
//       } catch (err) {
//         console.error('Content load error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContent();
//   }, []);

//   // Extract membership data safely
//   const pageContent = content.membership || {};

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-xl text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   // === SAFE: Ensure features is an array ===
//   const features = Array.isArray(pageContent.features) ? pageContent.features : [];

//   // === SAFE: Parse price from string like "$9.99" ===
//   const parsePrice = (priceStr) => {
//     if (typeof priceStr !== 'string') return 0;
//     return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
//   };

//   // === Build plans safely ===
//   const plans = [
//     {
//       id: 'free',
//       name: pageContent.plans?.free?.name || 'Free Plan',
//       price: {
//         monthly: parsePrice(pageContent.plans?.free?.price),
//         sixMonths: 0,
//       },
//       popular: false,
//     },
//     {
//       id: 'pro',
//       name: pageContent.plans?.pro?.name || 'Pro Plan',
//       price: {
//         monthly: parsePrice(pageContent.plans?.pro?.price),
//         sixMonths: parsePrice(pageContent.plans?.pro?.price) * 5,
//       },
//       popular: true,
//     },
//     {
//       id: 'premium',
//       name: pageContent.plans?.premium?.name || 'Premium Plan',
//       price: {
//         monthly: parsePrice(pageContent.plans?.premium?.price),
//         sixMonths: parsePrice(pageContent.plans?.premium?.price) * 5,
//       },
//       popular: false,
//     },
//   ];

//   // === Price formatting ===
//   const getPrice = (plan) => {
//     const amount = period === 'monthly' ? plan.price.monthly : plan.price.sixMonths;
//     const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? 'EUR' : 'GBP';
//     return `${symbol}${amount.toFixed(2)}`;
//   };

//   const getPeriodText = () => {
//     return period === 'monthly' ? 'per month' : 'for 6 months';
//   };

//   return (
//     <div className="min-h-screen bg-amber-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             {pageContent.header?.heading || 'Choose Your Plan'}
//           </h1>
//           <p className="text-xl text-gray-600">
//             {pageContent.header?.description || 'Select the perfect plan for your learning goals'}
//           </p>
//         </div>

//         {/* Controls */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
//           {/* Period */}
//           <div className="flex bg-gray-100 p-1 rounded-lg">
//             <button
//               onClick={() => setPeriod('monthly')}
//               className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
//                 period === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setPeriod('sixMonths')}
//               className={`px-6 py-2 rounded-md text-sm font-semibold transition-all relative ${
//                 period === 'sixMonths' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               6 Months
//               {period === 'sixMonths' && (
//                 <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
//                   1 month free
//                 </span>
//               )}
//             </button>
//           </div>

//           {/* Currency */}
//           <div className="flex bg-gray-100 p-1 rounded-lg">
//             {['USD', 'EUR', 'GBP'].map((cur) => (
//               <button
//                 key={cur}
//                 onClick={() => setCurrency(cur)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                   currency === cur ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {cur === 'USD' ? '$ USD' : cur === 'EUR' ? 'EUR' : 'GBP'}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Pricing Table */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px]">
//               <thead>
//                 <tr className="border-b">
//                   <th className="p-6 font-bold text-4xl text-gray-800">Features</th>
//                   {plans.map((plan) => (
//                     <th key={plan.id} className="p-6 text-center bg-gray-50">
//                       <div className="text-2xl font-bold text-gray-800">{plan.name}</div>
//                       <div className="text-3xl font-bold text-gray-800 mt-2">
//                         {getPrice(plan)}
//                       </div>
//                       <p className="text-sm text-gray-600 mt-1">{getPeriodText()}</p>
//                       <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md transition">
//                         Select
//                       </button>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody>
//                 {features.map((feature, idx) => (
//                   <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50 transition">
//                     <td className="p-4 text-gray-700 font-medium flex items-center gap-2">
//                       {feature.name}
//                       {feature.tooltip && (
//                         <div className="group relative inline-block">
//                           <HelpCircle className="w-4 h-4 text-blue-500 cursor-help" />
//                           <div className="absolute hidden group-hover:block z-20 bg-gray-800 text-white text-xs p-3 rounded-lg max-w-xs -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap">
//                             {feature.tooltip}
//                             <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
//                           </div>
//                         </div>
//                       )}
//                     </td>
//                     {plans.map((plan) => (
//                       <td key={plan.id} className="p-4 text-center bg-gray-50">
//                         {feature.all || feature[plan.id] ? (
//                           <Check className="w-6 h-6 text-green-600 mx-auto" />
//                         ) : (
//                           <X className="w-6 h-6 text-red-500 mx-auto" />
//                         )}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Mobile Hint */}
//         <p className="text-center text-xs text-gray-500 mt-6 md:hidden">
//           Swipe left/right to see all plans
//         </p>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Check, X, HelpCircle } from 'lucide-react';

// export default function PricingPage() {
//   const [period, setPeriod] = useState<'monthly' | 'sixMonths'>('monthly');
//   const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
//   const [contents, setContents] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   // ──────────────────────────────────────────────────────────────
//   // 1. FETCH content.json
//   // ──────────────────────────────────────────────────────────────
//   useEffect(() => {
//     fetch('/content.json')
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to load content.json');
//         return res.json();
//       })
//       .then((data) => {
//         setContents(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Content load error:', err);
//         setLoading(false);
//       });
//   }, []);

//   // ──────────────────────────────────────────────────────────────
//   // 2. LOADING / ERROR STATES
//   // ──────────────────────────────────────────────────────────────
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-amber-50">
//         <div className="text-xl text-gray-600">Loading pricing…</div>
//       </div>
//     );
//   }

//   if (!contents?.home?.memberships?.tabs) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-amber-50">
//         <div className="text-xl text-red-600">Pricing data not found</div>
//       </div>
//     );
//   }

//   const h = contents.home;
//   const tabs = h.memberships.tabs;

//   // ──────────────────────────────────────────────────────────────
//   // 3. BUILD PLANS FROM JSON
//   // ──────────────────────────────────────────────────────────────
//   const planOrder = ['bronze', 'silver', 'gold'];

//   const plans = planOrder.map((key) => ({
//     id: key,
//     name: tabs[key].title,
//     color: tabs[key].color,
//     gradient: tabs[key].gradient,
//     description: tabs[key].description,
//     // Prices are **only** in the JSON under a future `price` field.
//     // Until you add them, we fall back to sensible defaults.
//     price: {
//       monthly: tabs[key].price?.monthly ?? (key === 'bronze' ? 0 : key === 'silver' ? 9.99 : 19.99),
//       sixMonths:
//         tabs[key].price?.sixMonths ??
//         (key === 'bronze' ? 0 : key === 'silver' ? 49.95 : 99.95),
//     },
//     features: tabs[key].features, // [{ label: "...", active: true/false }]
//     popular: key === 'silver', // you can change this in JSON later
//   }));

//   // ──────────────────────────────────────────────────────────────
//   // 4. BUILD UNIQUE FEATURE LIST (with optional tooltips)
//   // ──────────────────────────────────────────────────────────────
//   const featureMap = new Map();

//   // You can extend the JSON later with a `tooltip` field per feature.
//   // For now we provide sensible defaults.
//   const defaultTooltips = {
//     Materials: 'Access to all PDFs, worksheets and e-books',
//     Videos: 'On-demand video lessons for every unit',
//     Exercises: 'Interactive exercises with instant feedback',
//     Speaking: 'AI-powered speaking practice + recordings',
//     Progress: 'Detailed progress dashboard & analytics',
//     'Live Classes': 'Weekly live workshops with Minoo',
//     Offline: 'Download lessons for offline study',
//     Support: 'Direct email support & 1-on-1 booking',
//   };

//   plans.forEach((plan) => {
//     plan.features.forEach((f) => {
//       if (!featureMap.has(f.label)) {
//         featureMap.set(f.label, { tooltip: defaultTooltips[f.label] });
//       }
//     });
//   });

//   const features = Array.from(featureMap.entries()).map(([name, extra]) => ({
//     name,
//     tooltip: extra.tooltip,
//   }));

//   // ──────────────────────────────────────────────────────────────
//   // 5. PRICE HELPERS
//   // ──────────────────────────────────────────────────────────────
//   const currencyRates = { USD: 1, EUR: 0.92, GBP: 0.79 };

//   const getPrice = (plan) => {
//     const base = period === 'monthly' ? plan.price.monthly : plan.price.sixMonths;
//     const rate = currencyRates[currency];
//     const amount = (base * rate).toFixed(2);
//     const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
//     return `${symbol}${amount}`;
//   };

//   const getPeriodText = () =>
//     period === 'monthly' ? '/month' : 'for 6 months';

//   // ──────────────────────────────────────────────────────────────
//   // 6. RENDER
//   // ──────────────────────────────────────────────────────────────
//   return (
//     <div className="min-h-screen bg-amber-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* ───── Header ───── */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Choose Your Learning Journey
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Pick the plan that fits your goals and budget.
//           </p>
//         </div>

//         {/* ───── Controls ───── */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">

//           {/* Billing Period */}
//           <div className="flex bg-gray-100 p-1 rounded-lg">
//             {(['monthly', 'sixMonths']).map((p) => (
//               <button
//                 key={p}
//                 onClick={() => setPeriod(p)}
//                 className={`relative px-6 py-2 rounded-md text-sm font-semibold transition-all ${
//                   period === p
//                     ? 'bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white'
//                     : 'text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {p === 'monthly' ? 'Monthly' : '6 Months'}
//                 {p === 'sixMonths' && period === 'sixMonths' && (
//                   <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
//                     Save 16.7%
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Currency */}
//           <div className="flex bg-gray-100 p-1 rounded-lg">
//             {(['USD', 'EUR', 'GBP'] ).map((c) => (
//               <button
//                 key={c}
//                 onClick={() => setCurrency(c)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                   currency === c
//                     ? 'bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white'
//                     : 'text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {c === 'USD' ? '$ USD' : c === 'EUR' ? 'EUR' : 'GBP'}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ───── Pricing Table ───── */}
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px]">
//               {/* Header */}
//               <thead>
//                 <tr className="border-b bg-gray-50">
//                   <th className="p-6 text-left font-bold text-xl text-gray-800">
//                     Features
//                   </th>
//                   {plans.map((plan) => (
//                     <th
//                       key={plan.id}
//                       className="p-6 text-center relative"
//                       style={{
//                         background: plan.popular
//                           ? `linear-gradient(135deg, ${plan.color}22, ${plan.color}11)`
//                           : 'transparent',
//                       }}
//                     >
//                       {plan.popular && (
//                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                           <span className="bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white text-xs px-3 py-1 rounded-full font-bold">
//                             Most Popular
//                           </span>
//                         </div>
//                       )}
//                       <div className="text-2xl font-bold text-gray-800">{plan.name}</div>
//                       <div className="text-3xl font-bold text-gray-800 mt-2">
//                         {getPrice(plan)}
//                       </div>
//                       <p className="text-sm text-gray-600 mt-1">{getPeriodText()}</p>

//                       <button
//                         className={`mt-4 w-full font-semibold py-2.5 rounded-md transition-all transform hover:scale-105 ${
//                           plan.id === 'bronze'
//                             ? 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-not-allowed'
//                             : 'bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white hover:shadow-lg'
//                         }`}
//                         disabled={plan.id === 'bronze'}
//                       >
//                         {plan.id === 'bronze' ? 'Free Plan' : 'Select Plan'}
//                       </button>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               {/* Body */}
//               <tbody>
//                 {features.map((feat, idx) => (
//                   <tr
//                     key={idx}
//                     className="border-b last:border-b-0 hover:bg-gray-50 transition"
//                   >
//                     <td className="p-4 text-gray-700 font-medium flex items-center gap-2">
//                       {feat.name}
//                       {feat.tooltip && (
//                         <div className="group relative inline-block">
//                           <HelpCircle className="w-4 h-4 text-[#7B68EE] cursor-help" />
//                           <div className="absolute hidden group-hover:block z-20 bg-gray-800 text-white text-xs p-3 rounded-lg max-w-xs -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap">
//                             {feat.tooltip}
//                             <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800" />
//                           </div>
//                         </div>
//                       )}
//                     </td>

//                     {plans.map((plan) => {
//                       const active = plan.features.find(
//                         (f) => f.label === feat.name
//                       )?.active;

//                       return (
//                         <td key={plan.id} className="p-4 text-center">
//                           {active ? (
//                             <Check className="w-6 h-6 text-green-600 mx-auto" />
//                           ) : (
//                             <X className="w-6 h-6 text-red-500 mx-auto" />
//                           )}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Mobile hint */}
//         <p className="text-center text-xs text-gray-500 mt-6 md:hidden">
//           Swipe left / right to see all plans
//         </p>
//       </div>
//     </div>
//   );
// }


// // 'use client';

// // import React, { useState } from 'react';
// // import { Check, X, HelpCircle } from 'lucide-react';
// // import { useContent, getPageContent } from '@/src/hooks/useContent';

// // export default function PricingPage() {
// //   const [period, setPeriod] = useState('monthly');
// //   const [currency, setCurrency] = useState('USD');
// //   const { content, loading } = useContent();
// //   const pageContent = getPageContent(content, 'membership');

// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen">
// //         <div className="text-xl text-gray-600">Loading...</div>
// //       </div>
// //     );
// //   }

// //   // Extract plans from JSON
// //   const plans = [
// //     {
// //       id: 'free',
// //       name: pageContent.plans?.free?.name,
// //       price: {
// //         monthly: parseFloat(pageContent.plans?.free?.price?.replace('$', '') || 0),
// //         sixMonths: 0
// //       },
// //       features: pageContent.plans?.free?.features || [],
// //       popular: false,
// //     },
// //     {
// //       id: 'pro',
// //       name: pageContent.plans?.pro?.name,
// //       price: {
// //         monthly: parseFloat(pageContent.plans?.pro?.price?.replace('$', '') || 9.99),
// //         sixMonths: parseFloat(pageContent.plans?.pro?.price?.replace('$', '') || 9.99) * 5
// //       },
// //       features: pageContent.plans?.pro?.features || [],
// //       popular: true,
// //     },
// //     {
// //       id: 'premium',
// //       name: pageContent.plans?.premium?.name,
// //       price: {
// //         monthly: parseFloat(pageContent.plans?.premium?.price?.replace('$', '') || 19.99),
// //         sixMonths: parseFloat(pageContent.plans?.premium?.price?.replace('$', '') || 19.99) * 5
// //       },
// //       features: pageContent.plans?.premium?.features || [],
// //       popular: false,
// //     },
// //   ];

// //   // Use features directly from JSON
// //   const features = pageContent.features || [];

// //   const getPrice = (plan) => {
// //     const amount = period === 'monthly' ? plan.price.monthly : plan.price.sixMonths;
// //     const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
// //     return `${symbol}${amount.toFixed(2)}`;
// //   };

// //   const getPeriodText = () => {
// //     return period === 'monthly' ? 'per month' : 'for 6 months';
// //   };

// //   return (
// //     <div className="min-h-screen bg-amber-50 py-12 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <h1 className="text-4xl font-bold text-gray-800 mb-4">
// //             {pageContent.header?.heading}
// //           </h1>
// //           <p className="text-xl text-gray-600">
// //             {pageContent.header?.description}
// //           </p>
// //         </div>

// //         {/* Header Controls */}
// //         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
// //           {/* Billing Period */}
// //           <div className="flex bg-gray-100 p-1 rounded-lg">
// //             <button
// //               onClick={() => setPeriod('monthly')}
// //               className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
// //                 period === 'monthly'
// //                   ? 'bg-blue-600 text-white'
// //                   : 'text-gray-700 hover:bg-gray-200'
// //               }`}
// //             >
// //               Monthly
// //             </button>
// //             <button
// //               onClick={() => setPeriod('sixMonths')}
// //               className={`px-6 py-2 rounded-md text-sm font-semibold transition-all relative ${
// //                 period === 'sixMonths'
// //                   ? 'bg-blue-600 text-white'
// //                   : 'text-gray-700 hover:bg-gray-200'
// //               }`}
// //             >
// //               6 Months
// //               {period === 'sixMonths' && (
// //                 <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
// //                   1 month free
// //                 </span>
// //               )}
// //             </button>
// //           </div>

// //           {/* Currency */}
// //           <div className="flex bg-gray-100 p-1 rounded-lg">
// //             {['USD', 'EUR', 'GBP'].map((cur) => (
// //               <button
// //                 key={cur}
// //                 onClick={() => setCurrency(cur)}
// //                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
// //                   currency === cur ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
// //                 }`}
// //               >
// //                 {cur === 'USD' ? '$ USD' : cur === 'EUR' ? 'EUR' : 'GBP'}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Pricing Table */}
// //         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //           <div className="overflow-x-auto">
// //             <table className="w-full min-w-[900px]">
// //               {/* Table Header */}
// //               <thead>
// //                 <tr className="border-b">
// //                   <th className="p-6 font-bold text-4xl text-gray-800">Features</th>
// //                   {plans.map((plan) => (
// //                     <th key={plan.id} className="p-6 text-center bg-gray-50">
// //                       <div className="text-2xl font-bold text-gray-800">{plan.name}</div>
// //                       <div className="text-3xl font-bold text-gray-800 mt-2">
// //                         {getPrice(plan)}
// //                       </div>
// //                       <p className="text-sm text-gray-600 mt-1">{getPeriodText()}</p>
// //                       <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md transition">
// //                         Select
// //                       </button>
// //                     </th>
// //                   ))}
// //                 </tr>
// //               </thead>

// //               {/* Table Body */}
// //               <tbody>
// //                 {features.map((feature, idx) => (
// //                   <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50 transition">
// //                     <td className="p-4 text-gray-700 font-medium flex items-center gap-2">
// //                       {feature.name}
// //                       {feature.tooltip && (
// //                         <div className="group relative inline-block">
// //                           <HelpCircle className="w-4 h-4 text-blue-500 cursor-help" />
// //                           <div className="absolute hidden group-hover:block z-20 bg-gray-800 text-white text-xs p-3 rounded-lg max-w-xs -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap">
// //                             {feature.tooltip}
// //                             <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
// //                           </div>
// //                         </div>
// //                       )}
// //                     </td>
// //                     {plans.map((plan) => (
// //                       <td
// //                         key={plan.id}
// //                         className="p-4 text-center bg-gray-50"
// //                       >
// //                         {feature.all || feature[plan.id] ? (
// //                           <Check className="w-6 h-6 text-green-600 mx-auto" />
// //                         ) : (
// //                           <X className="w-6 h-6 text-red-500 mx-auto" />
// //                         )}
// //                       </td>
// //                     ))}
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Mobile Hint */}
// //         <p className="text-center text-xs text-gray-500 mt-6 md:hidden">
// //           Swipe left/right to see all plans
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { Check, X, HelpCircle } from 'lucide-react';
// // // import { useContent, getPageContent } from '@/src/hooks/useContent';

// // // export default function PricingPage() {
// // //   const [period, setPeriod] = useState('monthly');
// // //   const [currency, setCurrency] = useState('USD');
// // //   const { content, loading } = useContent();
// // //   const pageContent = getPageContent(content, 'membership');

// // //   if (loading) {
// // //     return (
// // //       <div className="flex items-center justify-center min-h-screen">
// // //         <div className="text-xl text-gray-600">Loading...</div>
// // //       </div>
// // //     );
// // //   }

// // //   const plans = [
// // //     {
// // //       id: 'free',
// // //       name: pageContent.plans?.free?.name || 'Free Plan',
// // //       price: { monthly: parseFloat(pageContent.plans?.free?.price?.replace('$', '') || 0), sixMonths: 0 },
// // //       features: pageContent.plans?.free?.features || [],
// // //       popular: false,
// // //     },
// // //     {
// // //       id: 'pro',
// // //       name: pageContent.plans?.pro?.name || 'Pro Plan',
// // //       price: { monthly: parseFloat(pageContent.plans?.pro?.price?.replace('$', '') || 9.99), sixMonths: parseFloat(pageContent.plans?.pro?.price?.replace('$', '') || 9.99) * 5 },
// // //       features: pageContent.plans?.pro?.features || [],
// // //       popular: true,
// // //     },
// // //     {
// // //       id: 'premium',
// // //       name: pageContent.plans?.premium?.name || 'Premium Plan',
// // //       price: { monthly: parseFloat(pageContent.plans?.premium?.price?.replace('$', '') || 19.99), sixMonths: parseFloat(pageContent.plans?.premium?.price?.replace('$', '') || 19.99) * 5 },
// // //       features: pageContent.plans?.premium?.features || [],
// // //       popular: false,
// // //     },
// // //   ];

// // //   const features = [
// // //     { name: 'Personal study plan', all: true, tooltip: 'A step-by-step guide showing your performance in each lesson & which lesson to study next' },
// // //     { name: 'Video lessons (80+)', all: true, tooltip: 'A wide range of video lessons on pronunciation, grammar, vocabulary, conversation, including listening & speaking exercises' },
// // //     { name: 'Written material', all: true, tooltip: 'Written version of the video lessons with new example sentences to widen your range of vocabulary and expressions' },
// // //     { name: 'Written exercises', all: true, tooltip: 'Hundreds of written exercises to assimilate the structures and the vocabulary in order to improve your writing skills' },
// // //     { name: 'Oral exercises', all: true, tooltip: 'Voice recording of lessons and exercises to listen to and repeat in order to improve your spoken fluency' },
// // //     { name: 'Speech recognition', all: true, tooltip: 'Voice recognition software so you can check the clarity of your own pronunciation' },
// // //     { name: 'Progress tracking & feedback (tests)', all: true, tooltip: 'End-of-lesson tests to track your progress and show you which sections of the lesson you must revise' },
// // //     { name: 'WhatsApp Conversation Practice Group', all: true, tooltip: 'Connect with your peers for regular conversation practice' },
// // //     { name: 'Exclusive video lessons (45)', free: false, pro: true, premium: true, tooltip: 'Additional video lessons to review the more challenging grammar and pronunciation topics...' },
// // //     { name: 'Offline study', free: false, pro: true, premium: true, tooltip: 'Option to download video lessons, audio recordings, and pdfs for offline access' },
// // //     { name: 'Initial level test', free: false, pro: false, premium: true, tooltip: 'A 30-minute Zoom call with Minoo to discover your exact level...' },
// // //   ];

// // //   const getPrice = (plan) => {
// // //     const amount = period === 'monthly' ? plan.price.monthly : plan.price.sixMonths;
// // //     const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
// // //     return `${symbol}${amount.toFixed(2)}`;
// // //   };

// // //   const getPeriodText = () => {
// // //     return period === 'monthly' ? 'per month' : 'for 6 months';
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-amber-50 py-12 px-4">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <div className="text-center mb-12">
// // //           <h1 className="text-4xl font-bold text-gray-800 mb-4">{pageContent.header?.heading || 'Choose Your Plan'}</h1>
// // //           <p className="text-xl text-gray-600">{pageContent.header?.description || 'Select the perfect plan for your learning goals'}</p>
// // //         </div>

// // //         {/* Header Controls */}
// // //         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
// // //           {/* Billing Period */}
// // //           <div className="flex bg-gray-100 p-1 rounded-lg">
// // //             <button
// // //               onClick={() => setPeriod('monthly')}
// // //               className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
// // //                 period === 'monthly'
// // //                   ? 'bg-blue-600 text-white'
// // //                   : 'text-gray-700 hover:bg-gray-200'
// // //               }`}
// // //             >
// // //               Monthly
// // //             </button>
// // //             <button
// // //               onClick={() => setPeriod('sixMonths')}
// // //               className={`px-6 py-2 rounded-md text-sm font-semibold transition-all relative ${
// // //                 period === 'sixMonths'
// // //                   ? 'bg-blue-600 text-white'
// // //                   : 'text-gray-700 hover:bg-gray-200'
// // //               }`}
// // //             >
// // //               6 Months
// // //               {period === 'sixMonths' && (
// // //                 <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
// // //                   1 month free
// // //                 </span>
// // //               )}
// // //             </button>
// // //           </div>

// // //           {/* Currency */}
// // //           <div className="flex bg-gray-100 p-1 rounded-lg">
// // //             {['USD', 'EUR', 'GBP'].map((cur) => (
// // //               <button
// // //                 key={cur}
// // //                 onClick={() => setCurrency(cur)}
// // //                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
// // //                   currency === cur ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
// // //                 }`}
// // //               >
// // //                 {cur === 'USD' ? '$ USD' : cur === 'EUR' ? '€ EUR' : '£ GBP'}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Pricing Table */}
// // //         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // //           <div className="overflow-x-auto">
// // //             <table className="w-full min-w-[900px]">
// // //               {/* Table Header */}
// // //               <thead>
// // //                 <tr className="border-b">
// // //                   <th className="p-6 font-bold text-4xl text-gray-800 ">Features</th>
// // //                   {plans.map((plan) => (
// // //                     <th key={plan.id} className="p-6 text-center bg-gray-50">
// // //                       {/* {plan.popular && (
// // //                         <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
// // //                           Most popular
// // //                         </span>
// // //                       )} */}
// // //                       <div className="text-2xl font-bold text-gray-800">{plan.name}</div>
// // //                       <div className="text-3xl font-bold text-gray-800 mt-2">
// // //                         {getPrice(plan)}
// // //                       </div>
// // //                       <p className="text-sm text-gray-600 mt-1">{getPeriodText()}</p>
// // //                       <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md transition">
// // //                         Select
// // //                       </button>
// // //                     </th>
// // //                   ))}
// // //                 </tr>
// // //               </thead>

// // //               {/* Table Body */}
// // //               <tbody>
// // //                 {features.map((feature, idx) => (
// // //                   <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50 transition">
// // //                     <td className="p-4 text-gray-700 font-medium flex items-center gap-2">
// // //                       {feature.name}
// // //                       {feature.tooltip && (
// // //                         <div className="group relative inline-block">
// // //                           <HelpCircle className="w-4 h-4 text-blue-500 cursor-help" />
// // //                           <div className="absolute hidden group-hover:block z-20 bg-gray-800 text-white text-xs p-3 rounded-lg max-w-xs -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap">
// // //                             {feature.tooltip}
// // //                             <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
// // //                           </div>
// // //                         </div>
// // //                       )}
// // //                     </td>
// // //                     {plans.map((plan) => (
// // //                       <td
// // //                         key={plan.id}
// // //                         className="p-4 text-center bg-gray-50"
// // //                       >
// // //                         {feature.all || feature[plan.id] ? (
// // //                           <Check className="w-6 h-6 text-green-600 mx-auto" />
// // //                         ) : (
// // //                           <X className="w-6 h-6 text-red-500 mx-auto" />
// // //                         )}
// // //                       </td>
// // //                     ))}
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Hint */}
// // //         <p className="text-center text-xs text-gray-500 mt-6 md:hidden">
// // //           Swipe left/right to see all plans
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // } 
=======
} 
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
