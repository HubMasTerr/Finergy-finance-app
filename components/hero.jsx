// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       } else {
//         imageElement.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="pt-40 pb-20 px-4">
//       <div className="container mx-auto text-center">
//         <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
//           Organize Your Transactions <br /> with Intelligence
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//           An AI-powered financial management platform that helps you track,
//           analyze, and optimize your spending with real-time insights.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>
//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src="/banner.jpeg"
//               width={1280}
//               height={720}
//               alt="Dashboard Preview"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null); // ✅ JS-compatible

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const threshold = 100;

//       if (imageRef.current) {
//         if (scrollPosition > threshold) {
//           imageRef.current.classList.add("scrolled");
//         } else {
//           imageRef.current.classList.remove("scrolled");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-white to-blue-50">
//       <div className="container mx-auto grid lg:grid-cols-2 items-center gap-12">
//         {/* Left: Text Content */}
//         <div className="space-y-6 text-center lg:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
//             Smarter Financial Tracking <br /> with AI at Your Fingertips
//           </h1>
//           <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
//             Experience intelligent transaction management that learns from your habits and helps you make smarter financial decisions.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <Link href="/dashboard">
//               <Button size="lg" className="px-8">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Right: Image with scroll effect */}
//         <div
//           ref={imageRef}
//           className="transition-transform duration-500 ease-in-out transform"
//         >
//           <Image
//             src="/banner.jpeg"
//             alt="Financial Dashboard"
//             width={720}
//             height={480}
//             className="rounded-2xl shadow-2xl border-4 border-white mx-auto"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;









// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement?.classList.add("scrolled");
//       } else {
//         imageElement?.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="pt-32 pb-20 px-4 bg-white">
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//         {/* Left Content */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl md:text-7xl font-bold gradient-title leading-tight mb-6">
//             Organize Your <br /> Transactions with Intelligence
//           </h1>
//           <p className="text-lg text-gray-600 mb-8 max-w-xl">
//             An AI-powered financial management platform to track, analyze, and optimize your spending with real-time insights.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <Link href="/dashboard">
//               <Button size="lg" className="px-8">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="hero-image-wrapper mt-10 lg:mt-0">
//           <div ref={imageRef} className="hero-image transition-all duration-500 ease-in-out">
//             <Image
//               src="/banner.jpeg"
//               width={1280}
//               height={720}
//               alt="Dashboard Preview"
//               className="rounded-xl shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { motion, useAnimation } from "framer-motion";

// const HeroSection = () => {
//   const imageContainerRef = useRef(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const threshold = 100;

//       if (imageContainerRef.current) {
//         if (scrollY > threshold) {
//           controls.start({ scale: 0.95, opacity: 0.9 });
//         } else {
//           controls.start({ scale: 1, opacity: 1 });
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls]);

//   return (
//     <section className="relative pt-28 pb-20 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//       <div className="container mx-auto grid lg:grid-cols-2 items-center gap-12 relative z-10">
//         {/* Text Content */}
//         <motion.div
//           className="space-y-6 text-center lg:text-left"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
//             Smarter Financial Tracking <br /> with AI at Your Fingertips
//           </h1>
//           <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
//             Experience intelligent transaction management that learns from your habits and helps you make smarter financial decisions.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <Link href="/dashboard">
//               <Button size="lg" className="px-8">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Image with Animated Blob Behind */}
//         <div className="relative">
//           {/* Gradient Blob */}
//           <motion.div
//             className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 rounded-full opacity-30 blur-3xl z-0 animate-pulse"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{
//               repeat: Infinity,
//               repeatType: "mirror",
//               duration: 6,
//               ease: "easeInOut",
//             }}
//           />

//           {/* Image Container */}
//           <motion.div
//             ref={imageContainerRef}
//             animate={controls}
//             initial={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative z-10 transition-transform duration-500 ease-in-out transform"
//           >
//             <Image
//               src="/banner.jpeg"
//               alt="Financial Dashboard"
//               width={720}
//               height={480}
//               className="rounded-2xl shadow-2xl border-4 border-white mx-auto"
//               priority
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-28 px-6 md:px-20 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold leading-tight tracking-tight text-left text-[var(--foreground)]">
          Organize your <br /> finances with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700">
            Intelligence.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl text-left">
          Finergy is your AI-powered financial assistant — track, analyze, and optimize your spending with actionable insights and automation.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/dashboard">
            <Button className="text-lg px-8 py-5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
