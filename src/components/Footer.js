"use client";

<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Facebook, Youtube, Globe, X, Mail, Send } from 'lucide-react';

// Simple animation component
=======
import { useState, useEffect } from "react";
import { Facebook, Youtube, Globe, X, Mail, Send } from "lucide-react";

// Simple fade-in animation
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
const FadeInDiv = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
<<<<<<< HEAD
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
=======
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-[#4169E1] via-[#2d5aad] to-[#1a3a7a] text-white relative overflow-hidden">
<<<<<<< HEAD
      {/* Decorative Background Pattern */}
=======
      {/* Decorative Background */}
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Main Content */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-6 py-16 pt-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          
          {/* Left Section - Brand */}
          <FadeInDiv className="flex flex-col items-center md:items-start space-y-6 flex-1" delay={100}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.5" cy="27.5" r="27.5" fill="#FFF7AE"/>
                <text x="27.5" y="35" fontSize="24" fontWeight="bold" fill="#4169E1" textAnchor="middle">AL</text>
              </svg>
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center gap-2 text-[#FFF7AE] group cursor-pointer">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <p className="text-lg font-medium group-hover:text-white transition-colors">
                  office@anglo-link.com
                </p>
              </div>
              
              <button className="w-full md:w-auto border-2 border-[#7B68EE] text-[#FFF7AE] px-6 py-3 rounded-xl hover:bg-[#7B68EE] hover:text-white transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pt-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
          {/* Left Section */}
          <FadeInDiv
            className="flex flex-col items-center md:items-start space-y-6 flex-1 w-full"
            delay={100}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27.5" cy="27.5" r="27.5" fill="#FFF7AE" />
                <text
                  x="27.5"
                  y="35"
                  fontSize="24"
                  fontWeight="bold"
                  fill="#4169E1"
                  textAnchor="middle"
                >
                  AL
                </text>
              </svg>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#FFF7AE] group cursor-pointer flex-wrap">
                <Mail
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <p className="text-sm sm:text-lg font-medium group-hover:text-white transition-colors break-all">
                  office@anglo-link.com
                </p>
              </div>

              <button className="w-full md:w-auto border-2 border-[#7B68EE] text-[#FFF7AE] px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-[#7B68EE] hover:text-white transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                Contact Us
              </button>
            </div>
          </FadeInDiv>

<<<<<<< HEAD
          {/* Decorative Divider */}
=======
          {/* Divider (hidden on small screens) */}
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          <div className="hidden md:block relative">
            <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#7B68EE]/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7B68EE] rounded-full"></div>
          </div>

<<<<<<< HEAD
          {/* Middle Section - Links */}
          <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={200}>
            <h3 className="text-2xl font-bold text-[#FFF7AE] mb-4">More</h3>
            <ul className="space-y-3">
              {['About', 'Acceptable Use Policy', 'Privacy & Cookie Policy', 'Terms of Use'].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-[#FFF7AE] hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative"
=======
          {/* Middle Section */}
          <FadeInDiv
            className="flex-1 text-center md:text-left space-y-5 w-full"
            delay={200}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFF7AE] mb-2 sm:mb-4">
              More
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "About",
                "Acceptable Use Policy",
                "Privacy & Cookie Policy",
                "Terms of Use",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-[#FFF7AE] hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative text-sm sm:text-base"
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFF7AE] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeInDiv>

<<<<<<< HEAD
          {/* Decorative Divider */}
=======
          {/* Divider */}
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          <div className="hidden md:block relative">
            <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#7B68EE]/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7B68EE] rounded-full"></div>
          </div>

<<<<<<< HEAD
          {/* Right Section - Social */}
          <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={300}>
            <h3 className="text-2xl font-bold text-[#FFF7AE] mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { Icon: Facebook, color: 'hover:text-[#1877F2]' },
                { Icon: Youtube, color: 'hover:text-[#FF0000]' },
                { Icon: Globe, color: 'hover:text-[#FFF7AE]' },
                { Icon: X, color: 'hover:text-[#FFFFFF]' }
=======
          {/* Right Section */}
          <FadeInDiv
            className="flex-1 text-center md:text-left space-y-5 w-full"
            delay={300}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFF7AE] mb-2 sm:mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
              {[
                { Icon: Facebook, color: "hover:text-[#1877F2]" },
                { Icon: Youtube, color: "hover:text-[#FF0000]" },
                { Icon: Globe, color: "hover:text-[#FFF7AE]" },
                { Icon: X, color: "hover:text-[#FFFFFF]" },
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              ].map(({ Icon, color }, idx) => (
                <a
                  key={idx}
                  href="#"
<<<<<<< HEAD
                  className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl ${color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg group`}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-[#7B68EE]/30">
              <p className="text-sm text-[#FFF7AE] mb-3">Stay updated with our latest news</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 bg-white/10 border border-[#7B68EE]/30 rounded-lg text-white placeholder-[#7B68EE]/50 focus:outline-none focus:border-[#FFF7AE] transition-all"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#4169E1] to-[#7B68EE] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
=======
                  className={`bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-xl ${color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg group`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-4 sm:mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-[#7B68EE]/30">
              <p className="text-xs sm:text-sm text-[#FFF7AE] mb-2 sm:mb-3">
                Stay updated with our latest news
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 sm:px-4 py-2 bg-white/10 border border-[#7B68EE]/30 rounded-lg text-white placeholder-[#7B68EE]/50 focus:outline-none focus:border-[#FFF7AE] transition-all text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#4169E1] to-[#7B68EE] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex justify-center">
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
                  <Send size={18} />
                </button>
              </div>
            </div>
          </FadeInDiv>
        </div>

        {/* Decorative Line */}
<<<<<<< HEAD
        <div className="mt-12 mb-8 relative">
=======
        <div className="mt-10 sm:mt-12 mb-6 sm:mb-8 relative">
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#7B68EE]/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-[#4169E1] to-[#1a3a7a] px-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#7B68EE] rounded-full animate-pulse"></div>
<<<<<<< HEAD
                <div className="w-2 h-2 bg-[#4169E1] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-[#FFF7AE] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
=======
                <div
                  className="w-2 h-2 bg-[#4169E1] rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#FFF7AE] rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
<<<<<<< HEAD
        <FadeInDiv className="text-center space-y-3 mb-8" delay={400}>
          <h4 className="text-2xl font-bold text-[#FFF7AE]">VirHom</h4>
          <p className="text-[#FFF7AE] italic">Your journey to English fluency starts here</p>
=======
        <FadeInDiv className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8" delay={400}>
          <h4 className="text-xl sm:text-2xl font-bold text-[#FFF7AE]">VirHom</h4>
          <p className="text-[#FFF7AE] italic text-sm sm:text-base">
            Your journey to English fluency starts here
          </p>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
        </FadeInDiv>
      </div>

      {/* Bottom Bar */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-[#1a3a7a] via-[#152d63] to-[#1a3a7a] py-5 text-center relative border-t border-[#7B68EE]/20">
        <div className="relative z-10">
          <p className="text-[#7B68EE] text-sm font-medium">
            VirHom Languages © 2025 All Rights Reserved
          </p>
          <p className="text-[#4169E1] text-xs mt-1">
=======
      <div className="bg-gradient-to-r from-[#1a3a7a] via-[#152d63] to-[#1a3a7a] py-4 sm:py-5 text-center relative border-t border-[#7B68EE]/20">
        <div className="relative z-10 px-2">
          <p className="text-[#7B68EE] text-xs sm:text-sm font-medium">
            VirHom Languages © 2025 All Rights Reserved
          </p>
          <p className="text-[#4169E1] text-[10px] sm:text-xs mt-1">
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
            Crafted with passion for language learners worldwide
          </p>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFF7AE] to-transparent"></div>
    </div>
  );
}


<<<<<<< HEAD
=======
// "use client";

// import { useState, useEffect } from 'react';
// import { Facebook, Youtube, Globe, X, Mail, Send } from 'lucide-react';

// // Simple animation component
// const FadeInDiv = ({ children, className, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default function Footer() {
//   return (
//     <div className="bg-gradient-to-br from-[#4169E1] via-[#2d5aad] to-[#1a3a7a] text-white relative overflow-hidden">
//       {/* Decorative Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
//                            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
//           }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16 pt-20 relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          
//           {/* Left Section - Brand */}
//           <FadeInDiv className="flex flex-col items-center md:items-start space-y-6 flex-1" delay={100}>
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
//               <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="27.5" cy="27.5" r="27.5" fill="#FFF7AE"/>
//                 <text x="27.5" y="35" fontSize="24" fontWeight="bold" fill="#4169E1" textAnchor="middle">AL</text>
//               </svg>
//             </div>
            
//             <div className="space-y-3 text-center md:text-left">
//               <div className="flex items-center gap-2 text-[#FFF7AE] group cursor-pointer">
//                 <Mail size={20} className="group-hover:scale-110 transition-transform" />
//                 <p className="text-lg font-medium group-hover:text-white transition-colors">
//                   office@anglo-link.com
//                 </p>
//               </div>
              
//               <button className="w-full md:w-auto border-2 border-[#7B68EE] text-[#FFF7AE] px-6 py-3 rounded-xl hover:bg-[#7B68EE] hover:text-white transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
//                 <Send size={18} className="group-hover:translate-x-1 transition-transform" />
//                 Contact Us
//               </button>
//             </div>
//           </FadeInDiv>

//           {/* Decorative Divider */}
//           <div className="hidden md:block relative">
//             <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#7B68EE]/50 to-transparent"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7B68EE] rounded-full"></div>
//           </div>

//           {/* Middle Section - Links */}
//           <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={200}>
//             <h3 className="text-2xl font-bold text-[#FFF7AE] mb-4">More</h3>
//             <ul className="space-y-3">
//               {['About', 'Acceptable Use Policy', 'Privacy & Cookie Policy', 'Terms of Use'].map((item, idx) => (
//                 <li key={idx}>
//                   <a 
//                     href="#" 
//                     className="text-[#FFF7AE] hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative"
//                   >
//                     <span className="relative z-10">{item}</span>
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFF7AE] group-hover:w-full transition-all duration-300"></span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </FadeInDiv>

//           {/* Decorative Divider */}
//           <div className="hidden md:block relative">
//             <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#7B68EE]/50 to-transparent"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7B68EE] rounded-full"></div>
//           </div>

//           {/* Right Section - Social */}
//           <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={300}>
//             <h3 className="text-2xl font-bold text-[#FFF7AE] mb-4">Connect With Us</h3>
//             <div className="flex justify-center md:justify-start gap-4">
//               {[
//                 { Icon: Facebook, color: 'hover:text-[#1877F2]' },
//                 { Icon: Youtube, color: 'hover:text-[#FF0000]' },
//                 { Icon: Globe, color: 'hover:text-[#FFF7AE]' },
//                 { Icon: X, color: 'hover:text-[#FFFFFF]' }
//               ].map(({ Icon, color }, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl ${color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg group`}
//                 >
//                   <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
//                 </a>
//               ))}
//             </div>
            
//             {/* Newsletter Signup */}
//             <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-[#7B68EE]/30">
//               <p className="text-sm text-[#FFF7AE] mb-3">Stay updated with our latest news</p>
//               <div className="flex gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="flex-1 px-4 py-2 bg-white/10 border border-[#7B68EE]/30 rounded-lg text-white placeholder-[#7B68EE]/50 focus:outline-none focus:border-[#FFF7AE] transition-all"
//                 />
//                 <button className="px-4 py-2 bg-gradient-to-r from-[#4169E1] to-[#7B68EE] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
//                   <Send size={18} />
//                 </button>
//               </div>
//             </div>
//           </FadeInDiv>
//         </div>

//         {/* Decorative Line */}
//         <div className="mt-12 mb-8 relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-[#7B68EE]/30"></div>
//           </div>
//           <div className="relative flex justify-center">
//             <div className="bg-gradient-to-br from-[#4169E1] to-[#1a3a7a] px-4">
//               <div className="flex gap-2">
//                 <div className="w-2 h-2 bg-[#7B68EE] rounded-full animate-pulse"></div>
//                 <div className="w-2 h-2 bg-[#4169E1] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
//                 <div className="w-2 h-2 bg-[#FFF7AE] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tagline */}
//         <FadeInDiv className="text-center space-y-3 mb-8" delay={400}>
//           <h4 className="text-2xl font-bold text-[#FFF7AE]">VirHom</h4>
//           <p className="text-[#FFF7AE] italic">Your journey to English fluency starts here</p>
//         </FadeInDiv>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-gradient-to-r from-[#1a3a7a] via-[#152d63] to-[#1a3a7a] py-5 text-center relative border-t border-[#7B68EE]/20">
//         <div className="relative z-10">
//           <p className="text-[#7B68EE] text-sm font-medium">
//             VirHom Languages © 2025 All Rights Reserved
//           </p>
//           <p className="text-[#4169E1] text-xs mt-1">
//             Crafted with passion for language learners worldwide
//           </p>
//         </div>
//       </div>

//       {/* Bottom Decorative Element */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFF7AE] to-transparent"></div>
//     </div>
//   );
// }


>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef






// "use client";
// import React, { useState, useEffect } from 'react';
// import { Facebook, Youtube, Globe, X, Mail, Send } from "lucide-react";

// // Simple animation component
// const FadeInDiv = ({ children, className, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`transition-all duration-700 ease-out ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// function Footer() {
//   return (
//     <div className="bg-gradient-to-br from-[#6B4F4F] via-[#5d4343] to-[#4a3535] text-white relative overflow-hidden">
//       {/* Decorative Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
//                            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`
//         }}></div>
//       </div>

//       {/* Top Decorative Wave
//       <div className="absolute top-0 left-0 right-0">
//         <svg
//           viewBox="0 0 1440 60"
//           className="w-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#F5F1ED"
//             d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,0L0,0Z"
//           ></path>
//         </svg>
//       </div> */}

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16 pt-20 relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          
//           {/* Left Section - Brand */}
//           <FadeInDiv className="flex flex-col items-center md:items-start space-y-6 flex-1" delay={100}>
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
//               <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="27.5" cy="27.5" r="27.5" fill="#DCC7AA"/>
//                 <text x="27.5" y="35" fontSize="24" fontWeight="bold" fill="#6B4F4F" textAnchor="middle">AL</text>
//               </svg>
//             </div>
            
//             <div className="space-y-3 text-center md:text-left">
//               <div className="flex items-center gap-2 text-[#DCC7AA] group cursor-pointer">
//                 <Mail size={20} className="group-hover:scale-110 transition-transform" />
//                 <p className="text-lg font-medium group-hover:text-white transition-colors">
//                   office@anglo-link.com
//                 </p>
//               </div>
              
//               <button className="w-full md:w-auto border-2 border-[#CBB59D] text-[#DCC7AA] px-6 py-3 rounded-xl hover:bg-[#CBB59D] hover:text-[#6B4F4F] transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
//                 <Send size={18} className="group-hover:translate-x-1 transition-transform" />
//                 Contact Us
//               </button>
//             </div>
//           </FadeInDiv>

//           {/* Decorative Divider */}
//           <div className="hidden md:block relative">
//             <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#CBB59D]/50 to-transparent"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#CBB59D] rounded-full"></div>
//           </div>

//           {/* Middle Section - Links */}
//           <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={200}>
//             <h3 className="text-2xl font-bold text-[#DCC7AA] mb-4">More</h3>
//             <ul className="space-y-3">
//               {['About', 'Acceptable Use Policy', 'Privacy & Cookie Policy', 'Terms of Use'].map((item, idx) => (
//                 <li key={idx}>
//                   <a 
//                     href="#" 
//                     className="text-[#CBB59D] hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative"
//                   >
//                     <span className="relative z-10">{item}</span>
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DCC7AA] group-hover:w-full transition-all duration-300"></span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </FadeInDiv>

//           {/* Decorative Divider */}
//           <div className="hidden md:block relative">
//             <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#CBB59D]/50 to-transparent"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#CBB59D] rounded-full"></div>
//           </div>

//           {/* Right Section - Social */}
//           <FadeInDiv className="flex-1 text-center md:text-left space-y-5" delay={300}>
//             <h3 className="text-2xl font-bold text-[#DCC7AA] mb-4">Connect With Us</h3>
//             <div className="flex justify-center md:justify-start gap-4">
//               {[
//                 { Icon: Facebook, color: 'hover:text-[#1877F2]' },
//                 { Icon: Youtube, color: 'hover:text-[#FF0000]' },
//                 { Icon: Globe, color: 'hover:text-[#DCC7AA]' },
//                 { Icon: X, color: 'hover:text-[#000000]' }
//               ].map(({ Icon, color }, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl ${color} transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg group`}
//                 >
//                   <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
//                 </a>
//               ))}
//             </div>
            
//             {/* Newsletter Signup */}
//             <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-[#CBB59D]/30">
//               <p className="text-sm text-[#DCC7AA] mb-3">Stay updated with our latest news</p>
//               <div className="flex gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="flex-1 px-4 py-2 bg-white/10 border border-[#CBB59D]/30 rounded-lg text-white placeholder-[#CBB59D]/50 focus:outline-none focus:border-[#DCC7AA] transition-all"
//                 />
//                 <button className="px-4 py-2 bg-gradient-to-r from-[#A27B5C] to-[#8B7355] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
//                   <Send size={18} />
//                 </button>
//               </div>
//             </div>
//           </FadeInDiv>
//         </div>

//         {/* Decorative Line */}
//         <div className="mt-12 mb-8 relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-[#CBB59D]/30"></div>
//           </div>
//           <div className="relative flex justify-center">
//             <div className="bg-gradient-to-br from-[#6B4F4F] to-[#4a3535] px-4">
//               <div className="flex gap-2">
//                 <div className="w-2 h-2 bg-[#CBB59D] rounded-full animate-pulse"></div>
//                 <div className="w-2 h-2 bg-[#A27B5C] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
//                 <div className="w-2 h-2 bg-[#DCC7AA] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tagline */}
//         <FadeInDiv className="text-center space-y-3 mb-8" delay={400}>
//           <h4 className="text-2xl font-bold text-[#DCC7AA]">Anglo-Link</h4>
//           <p className="text-[#CBB59D] italic">Your journey to English fluency starts here</p>
//         </FadeInDiv>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-gradient-to-r from-[#4a3535] via-[#3d2f2f] to-[#4a3535] py-5 text-center relative border-t border-[#CBB59D]/20">
//         <div className="relative z-10">
//           <p className="text-[#CBB59D] text-sm font-medium">
//             Anglo-Link Languages Ltd © 2025 All Rights Reserved
//           </p>
//           <p className="text-[#A27B5C] text-xs mt-1">
//             Crafted with passion for language learners worldwide
//           </p>
//         </div>
//       </div>

//       {/* Bottom Decorative Element */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DCC7AA] to-transparent"></div>
//     </div>
//   );
// }

// export default Footer;




// import React from 'react'
// import Image from "next/image";
// import { Facebook, Youtube,Globe ,X } from "lucide-react";
// function Footer() {
//   return (
//     <div className="bg-[#414146] text-white">
//         {/* Top Section */}
//         <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 relative">
//           {/* Left Section */}
//           <div className="flex flex-col items-center md:items-start space-y-4 flex-1">
//             <Image
//               src="https://anglo-link.com/images/anglolink_logo_white_comma.svg"
//               alt="Anglo-Link Logo"
//               width={55}
//               height={55}
//             />
//             <p className="text-lg font-semibold">office@anglo-link.com</p>
//             <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-[#414146] transition">
//               Contact Us
//             </button>
//           </div>

//           {/* Vertical Divider */}
//           <div className="hidden md:block w-px bg-gray-500 h-32 mx-4"></div>

//           {/* Middle Section */}
//           <div className="flex-1 text-center md:text-left space-y-3">
//             <h3 className="text-lg font-semibold">More</h3>
//             <ul className="space-y-2 text-gray-300">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Acceptable Use Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Privacy & Cookie Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Terms of Use
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section */}
//           <div className="flex-1 text-center md:text-left space-y-3">
//             <h3 className="text-lg font-semibold">Social</h3>
//             <div className="flex justify-center md:justify-start gap-4 text-gray-400">
//               <a href="#" className="hover:text-white">
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <Youtube className="w-6 h-6" />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <Globe className="w-6 h-6" />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <X className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="bg-[#3b3b3f] py-4 text-center text-gray-300 text-sm">
//           Anglo-Link Languages Ltd © 2025 All Rights Reserved
//         </div>
//       </div>
//   )
// }

// export default Footer