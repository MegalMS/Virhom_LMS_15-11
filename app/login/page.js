"use client";
import React, { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { signIn, getSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthError from "@/src/components/AuthError";
import { useSession, signOut } from "next-auth/react";
<<<<<<< HEAD
import { useContent, getPageContent } from "@/src/hooks/useContent";
=======
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef



const FadeInDiv = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
<<<<<<< HEAD
  const { data: session, status } = useSession();
  const { content, loading: contentLoading } = useContent();
  const pageContent = getPageContent(content, "login");
=======
    const { data: session, status } = useSession();
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef



      useEffect(() => {
    if (status === "loading") return;
    
    if (session) {
      console.log("User already logged in, redirecting to dashboard...");
      router.push("/dashboard");
    }
  }, [session, status, router]);


   if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbeb]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"></div>
          <p className="mt-4 text-[#6B4F4F]">Checking authentication...</p>
        </div>
      </div>
    );
  }


  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbeb]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"></div>
          <p className="mt-4 text-[#6B4F4F]">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log("Login attempt:", { email, password });
      // Add your email/password login logic here
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const handleGoogleLogin = async () => {
  setGoogleLoading(true);
  try {
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  } catch (error) {
    console.error("Google login error:", error);
  } finally {
    setGoogleLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffbeb] relative overflow-hidden p-6">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-64 h-64 bg-[#DCC7AA]/25 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        <div
          className="absolute bottom-20 right-12 w-72 h-72 bg-[#6B4F4F]/20 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Card Container */}
      <FadeInDiv className="w-full max-w-md z-10" delay={200}>
        <div className="bg-white/90 backdrop-blur-md shadow-[0_12px_35px_rgba(107,79,79,0.15)] border border-[#EADCCF] rounded-xl p-10">
          {/* Error Display */}
          <AuthError />

          {/* Logo & Heading */}
          <FadeInDiv delay={300} className="flex flex-col items-center mb-6">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-lg shadow-md"
              style={{
                background: "linear-gradient(135deg, #6B4F4F 0%, #A27B5C 80%)",
              }}
            >
              <Sparkles className="text-white w-8 h-8" />
            </div>

            <h1
              className="mt-5 text-3xl font-semibold text-[#3E2723]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
<<<<<<< HEAD
              {pageContent.header?.heading || "Welcome Back"}
            </h1>
            <p className="mt-2 text-sm text-[#8B7355] text-center max-w-[20rem] leading-relaxed">
              {pageContent.header?.description || "Sign in to your account to continue."}
=======
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-[#8B7355] text-center max-w-[20rem] leading-relaxed">
              Sign in to your account to continue.
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
            </p>
          </FadeInDiv>

          {/* Form */}
          <form onSubmit={handleEmailLogin} className="mt-6 space-y-5">
            {/* Email */}
            <FadeInDiv delay={400}>
              <label className="block text-sm font-medium text-[#6B4F4F] mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                    focusedInput === "email"
                      ? "text-[#A27B5C]"
                      : "text-[#CBB59D]"
                  } transition-colors`}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  required
<<<<<<< HEAD
                  placeholder={pageContent.form?.email_placeholder || "you@domain.com"}
=======
                  placeholder="you@domain.com"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
                />
              </div>
            </FadeInDiv>

            {/* Password */}
            <FadeInDiv delay={500}>
              <label className="block text-sm font-medium text-[#6B4F4F] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                    focusedInput === "password"
                      ? "text-[#A27B5C]"
                      : "text-[#CBB59D]"
                  } transition-colors`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput(null)}
                  required
<<<<<<< HEAD
                  placeholder={pageContent.form?.password_placeholder || "Enter your password"}
=======
                  placeholder="Enter your password"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                  className="w-full pl-10 pr-10 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B7355] hover:text-[#6B4F4F]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </FadeInDiv>

            {/* Submit */}
            <FadeInDiv delay={600}>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-semibold text-white rounded-md transition-transform duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(90deg,#A27B5C 0%, #6B4F4F 100%)",
                  boxShadow: "0 6px 15px rgba(107,79,79,0.15)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
<<<<<<< HEAD
                  <span>{loading ? "Signing in..." : (pageContent.form?.sign_in || "Login to Account")}</span>
=======
                  <span>{loading ? "Signing in..." : "Login to Account"}</span>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                  {!loading && <ArrowRight size={18} />}
                </div>
              </button>
            </FadeInDiv>
          </form>

          {/* Divider */}
          <FadeInDiv delay={700} className="relative mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#CBB59D]/30" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white/90 text-[#8B7355]">
                Or continue with
              </span>
            </div>
          </FadeInDiv>

          {/* Google Button */}
          <FadeInDiv delay={800}>
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              className="w-full py-3 bg-white border border-[#E9DCCF] rounded-md shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
                  1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
                  3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 
                  7.28-2.66l-3.57-2.77c-.98.66-2.23 
                  1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
                  20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
                  8.55 1 10.22 1 12s.43 3.45 1.18 
                  4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 
                  4.21 1.64l3.15-3.15C17.45 
                  2.09 14.97 1 12 1 7.7 1 3.99 3.47 
                  2.18 7.07l3.66 2.84c.87-2.6 
                  3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm text-[#6B4F4F] font-medium">
                {googleLoading ? "Signing in..." : "Continue with Google"}
              </span>
            </button>
          </FadeInDiv>
        </div>
      </FadeInDiv>
    </div>
  );
}
// "use client";
// import React, { useState, useEffect } from "react";
// import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";

// const FadeInDiv = ({ children, className = "", delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`transition-all duration-700 ease-out ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [focusedInput, setFocusedInput] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login attempt:", { email, password });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fffbeb] relative overflow-hidden p-6">
//       {/* Subtle background effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-24 left-12 w-64 h-64 bg-[#DCC7AA]/25 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
//         <div
//           className="absolute bottom-20 right-12 w-72 h-72 bg-[#6B4F4F]/20 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]"
//           style={{ animationDelay: "1.5s" }}
//         />
        
//       </div>

//       {/* Card Container */}
//       <FadeInDiv className="w-full max-w-md z-10" delay={200}>
//         <div className="bg-white/90 backdrop-blur-md shadow-[0_12px_35px_rgba(107,79,79,0.15)] border border-[#EADCCF] rounded-xl p-10">
//           {/* Logo & Heading */}
//           <FadeInDiv delay={300} className="flex flex-col items-center mb-6">
//             <div
//               className="w-16 h-16 flex items-center justify-center rounded-lg shadow-md"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #6B4F4F 0%, #A27B5C 80%)",
//               }}
//             >
//               <Sparkles className="text-white w-8 h-8" />
//             </div>

//             <h1
//               className="mt-5 text-3xl font-semibold text-[#3E2723]"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Welcome Back
//             </h1>
//             <p className="mt-2 text-sm text-[#8B7355] text-center max-w-[20rem] leading-relaxed">
//               Sign in to your account to continue.
//             </p>
//           </FadeInDiv>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//             {/* Email */}
//             <FadeInDiv delay={400}>
//               <label className="block text-sm font-medium text-[#6B4F4F] mb-2">
//                 Email address
//               </label>
//               <div className="relative">
//                 <Mail
//                   size={18}
//                   className={`absolute left-3 top-1/2 -translate-y-1/2 ${
//                     focusedInput === "email"
//                       ? "text-[#A27B5C]"
//                       : "text-[#CBB59D]"
//                   } transition-colors`}
//                 />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onFocus={() => setFocusedInput("email")}
//                   onBlur={() => setFocusedInput(null)}
//                   required
//                   placeholder="you@domain.com"
//                   className="w-full pl-10 pr-4 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
//                 />
//               </div>
//             </FadeInDiv>

//             {/* Password */}
//             <FadeInDiv delay={500}>
//               <label className="block text-sm font-medium text-[#6B4F4F] mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock
//                   size={18}
//                   className={`absolute left-3 top-1/2 -translate-y-1/2 ${
//                     focusedInput === "password"
//                       ? "text-[#A27B5C]"
//                       : "text-[#CBB59D]"
//                   } transition-colors`}
//                 />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onFocus={() => setFocusedInput("password")}
//                   onBlur={() => setFocusedInput(null)}
//                   required
//                   placeholder="Enter your password"
//                   className="w-full pl-10 pr-10 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B7355] hover:text-[#6B4F4F]"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </FadeInDiv>

//             {/* Submit */}
//             <FadeInDiv delay={600}>
//               <button
//                 type="submit"
//                 className="w-full py-3 font-semibold text-white rounded-md transition-transform duration-200 hover:scale-[1.02]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg,#A27B5C 0%, #6B4F4F 100%)",
//                   boxShadow: "0 6px 15px rgba(107,79,79,0.15)",
//                 }}
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <span>Login to Account</span>
//                   <ArrowRight size={18} />
//                 </div>
//               </button>
//             </FadeInDiv>
//           </form>

//           {/* Divider */}
//           <FadeInDiv delay={700} className="relative mt-8 mb-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-[#CBB59D]/30" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-3 bg-white/90 text-[#8B7355]">
//                 Or continue with
//               </span>
//             </div>
//           </FadeInDiv>

//           {/* Google Button */}
//           <FadeInDiv delay={800}>
//             <button
//               type="button"
//               onClick={() => console.log("https://anglo-link.")}
//               className="w-full py-3 bg-white border border-[#E9DCCF] rounded-md shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
//             >
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill="#4285F4"
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
//                   1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
//                   3.28-4.74 3.28-8.09z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M12 23c2.97 0 5.46-.98 
//                   7.28-2.66l-3.57-2.77c-.98.66-2.23 
//                   1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
//                   20.53 7.7 23 12 23z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
//                   8.55 1 10.22 1 12s.43 3.45 1.18 
//                   4.93l2.85-2.22.81-.62z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M12 5.38c1.62 0 3.06.56 
//                   4.21 1.64l3.15-3.15C17.45 
//                   2.09 14.97 1 12 1 7.7 1 3.99 3.47 
//                   2.18 7.07l3.66 2.84c.87-2.6 
//                   3.3-4.53 6.16-4.53z"
//                 />
//               </svg>
//               <span className="text-sm text-[#6B4F4F] font-medium">
//                 Continue with Google
//               </span>
//             </button>
//           </FadeInDiv>
//         </div>
//       </FadeInDiv>
//     </div>
//   );
// }
