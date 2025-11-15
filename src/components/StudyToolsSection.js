import Image from "next/image";

export default function StudyToolsSection({ title, description, image }) {
  return (
    <section
      className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #7B68EE 0%, #4169E1 100%)",
      }}
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B68EE]/40 via-transparent to-[#4169E1]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Optional Image */}
        {/* {image && (
          <div className="mb-8 flex justify-center">
            <Image
              src={image}
              alt={title}
              width={140}
              height={140}
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        )} */}

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
          style={{ color: "#FFFFFF" }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium"
            style={{
              color: "#FFFFFF",
              opacity: 0.9,
            }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[3px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, #7B68EE 0%, #FFFFFF 50%, #4169E1 100%)",
        }}
      />
    </section>
  );
}






// import Image from "next/image";

// export default function StudyToolsSection({ title, description, image }) {
//   return (
//     <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       {/* <Image
//         src={image || "/default-bg.jpg"} // fallback image
//         alt={title}
//         fill
//         priority
//         className="object-cover brightness-90"
//       /> */}

//       {/* Overlay with brown tint */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#926F59]/80 via-[#A27B5C]/40 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#926F59] drop-shadow-md mb-4">
//           {title}
//         </h1>
//         {description && (
//           <p className="text-lg font-bold md:text-xl text-[#705350] max-w-3xl mx-auto">
//             {description}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }
