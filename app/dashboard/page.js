"use client";
<<<<<<< HEAD

import { useState } from "react";
import Image from "next/image";
import { useContent, getPageContent } from "@/src/hooks/useContent";

export default function Dashboard() {
  const { content, loading } = useContent();
  const [isLoading, setIsLoading] = useState(false);

  // Example static or mock user (you can replace this with your API data)
  const backendUser = {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    profileImage: "/default-profile.png",
  };

  if (loading || isLoading) {
=======
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status, update } = useSession(); // 👈 include update()
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  console.log("Dashboard session:", session);

  // ✅ Immediately refresh session after login
  useEffect(() => {
    if (status === "authenticated" && !session?.backendUser) {
      // Force call to /api/auth/session
      update();
    }
  }, [status, session, update]);

  // ✅ Redirect unauthenticated users
  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    if (session?.backendUser) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [session, status, router]);

  // ✅ Handle loading states
  if (status === "loading" || isLoading) {
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
    return (
      <div className="min-h-screen bg-[#fffbeb] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"></div>
          <p className="mt-4 text-[#6B4F4F]">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  const pageContent = getPageContent(content, "dashboard");
  const header = pageContent.header || {};
  const stats = pageContent.stats || {};
  const quickActions = pageContent.quick_actions || {};
=======
  if (!session) return null;

  const backendUser = session?.backendUser;
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef

  return (
    <div className="min-h-screen bg-[#fffbeb] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
<<<<<<< HEAD
          <h1 className="text-3xl font-bold text-[#3E2723] mb-2">{header.heading || "Dashboard"}</h1>
          <p className="text-[#6B4F4F] mb-6">{header.description}</p>

          <div className="bg-[#FFFDF6] border border-[#E9DCCF] rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-[#6B4F4F] mb-4">
              User Information
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {backendUser.name}
              </p>
              <p>
                <strong>Email:</strong> {backendUser.email}
              </p>
              <p>
                <strong>Role:</strong> {backendUser.role}
              </p>
              {backendUser.profileImage && (
                <Image
                  src={backendUser.profileImage}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="rounded-full mt-4"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
              <p className="text-sm text-[#6B4F4F]">{stats.lessons_completed}</p>
              <p className="text-2xl font-bold text-blue-600">24</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
              <p className="text-sm text-[#6B4F4F]">{stats.current_level}</p>
              <p className="text-2xl font-bold text-purple-600">B1</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
              <p className="text-sm text-[#6B4F4F]">{stats.streak}</p>
              <p className="text-2xl font-bold text-green-600">7 days</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
              <p className="text-sm text-[#6B4F4F]">{stats.points}</p>
              <p className="text-2xl font-bold text-orange-600">1,240</p>
            </div>
          </div>

          <button
            onClick={() => alert("Sign Out logic removed")}
=======
          <h1 className="text-3xl font-bold text-[#3E2723] mb-6">Dashboard</h1>

          {backendUser ? (
            <div className="bg-[#FFFDF6] border border-[#E9DCCF] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-[#6B4F4F] mb-4">User Information</h2>
              <div className="space-y-2">
                <p><strong>Name:</strong> {backendUser.name}</p>
                <p><strong>Email:</strong> {backendUser.email}</p>
                <p><strong>Role:</strong> {backendUser.role}</p>
                {backendUser.profileImage && (
                  <Image
                    src={backendUser.profileImage}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="rounded-full mt-4"
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800">
                User data is still loading. If this persists, please try refreshing the page.
              </p>
            </div>
          )}

          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
            className="bg-[#6B4F4F] text-white px-6 py-2 rounded-md hover:bg-[#5A4038] transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}


<<<<<<< HEAD

=======
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
// "use client";
// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Dashboard() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);

//   // ✅ Redirect unauthenticated users
//   useEffect(() => {
//     if (status === "loading") return;

//     if (!session) {
//       router.push("/login");
//       return;
//     }

//     // ✅ Wait for backendUser data to be available
//     if (session?.backendUser) {
//       setIsLoading(false);
//     } else {
//       // If backendUser is not available yet, wait a bit
//       const timer = setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [session, status, router]);

//   // ✅ Handle loading states
//   if (status === "loading" || isLoading) {
//     return (
//       <div className="min-h-screen bg-[#fffbeb] flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"></div>
//           <p className="mt-4 text-[#6B4F4F]">Loading your dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Handle unauthenticated
//   if (!session) {
//     return null;
//   }

//   const backendUser = session?.backendUser;

//   return (
//     <div className="min-h-screen bg-[#fffbeb] p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <h1 className="text-3xl font-bold text-[#3E2723] mb-6">Dashboard</h1>

//           {backendUser ? (
//             <div className="bg-[#FFFDF6] border border-[#E9DCCF] rounded-lg p-6 mb-6">
//               <h2 className="text-xl font-semibold text-[#6B4F4F] mb-4">
//                 User Information
//               </h2>
//               <div className="space-y-2">
//                 <p>
//                   <strong>Name:</strong> {backendUser.name}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {backendUser.email}
//                 </p>
//                 <p>
//                   <strong>Role:</strong> {backendUser.role}
//                 </p>
//                 {backendUser.profileImage && (
//                   <Image
//                     src={backendUser.profileImage}
//                     alt="Profile Image"
//                     width={100}
//                     height={100}
//                     className="rounded-full mt-4"
//                   />
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
//               <p className="text-yellow-800">
//                 User data is still loading. If this persists, please try refreshing the page.
//               </p>
//             </div>
//           )}

//           <button
//             onClick={() => signOut({ callbackUrl: "/login" })}
//             className="bg-[#6B4F4F] text-white px-6 py-2 rounded-md hover:bg-[#5A4038] transition-colors"
//           >
//             Sign Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }