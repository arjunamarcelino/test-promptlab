"use client";
import Image from "next/image";
import RiveComponentControls from "../home/RiveComponent";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] md:min-h-[150vh] overflow-hidden bg-transparant"
    >
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <RiveComponentControls
            play={true}
            playOnCanvas={true}
            fit="cover"
            alignment="start"
          />
        </div>
        <div className="absolute inset-0 w-full h-auto z-10 pointer-events-none">
          <Image
            src="/images/img-hero-highlight-2.png"
            alt="highlight"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
          />
        </div>
        <div className="absolute z-0 w-[200vw] mx-auto h-screen bg-[radial-gradient(circle,_rgba(5,18,21,0.8)_50%,_rgba(5,18,21,1)_100%)] pointer-events-none"></div>
        <div className="flex flex-col items-center justify-center max-w-[1210px] min-h-full px-6 lg:px-20 relative z-10 top-[-90px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: -1, scale: 1.05 }}
            transition={{ delay: 0.4, type: "spring", stiffness: "250" }}
            className="h-[200px] bg-gradient-to-r from-white via-gray-400 to-gray-500 text-transparent bg-clip-text text-shadow font-interDisplayMedium max-lg:text-5xl text-[200px] leading-[160px] text-center"
          >
            PromptLab
          </motion.h1>
        </div>
      </div>
      <div className="absolute flex items-center justify-center z-20 pointer-events-none bottom-0 md:bottom-16">
        <Spline scene="https://prod.spline.design/7Yvo70AVWpNRc7xj/scene.splinecode" />
      </div>
    </section>
  );
}
