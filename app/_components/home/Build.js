"use client";
import { useEffect, useState } from "react";
import { Icons } from "../icons/Icons";
import { BorderLogo } from "../ui/border-logo";
import { motion } from "framer-motion";
import { PrimaryButton } from "../ui/button";

export default function Build() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="build"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent text-white px-6 md:px-[60px] mb-[120px]"
    >
      <div className="flex flex-col bg-gradient-to-b from-[#101D1E] to-[#173038] rounded-3xl justify-center items-center py-[50px] md:py-[77px] w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
          className="text-shadow font-interDisplayMedium text-3xl md:text-[56px] leading-tight text-center"
        >
          Build Full-Stack Apps in Seconds
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
          className="text-secondary-200 mt-4 text-center px-4"
        >
          PromptLab integrates with the best AI models, giving you the freedom
          to choose the right tool for the job.
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px] mt-[40px] md:mt-[65px] w-[90%] max-w-[1200px]">
          {CARD_ITEMS.map((item, index) => (
            <Card
              key={index}
              logo={item.logo}
              title={item.title}
              desc={item.desc}
              index={index}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        >
          <PrimaryButton className="min-w-[160px] mt-8 md:mt-12">
            Try It Now
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ title, desc, logo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.3, type: "spring", stiffness: "250" }}
      className="flex flex-col md:flex-row items-center justify-center gap-4 bg-gradient-to-b from-[#1A262E] to-[#16232D] p-4 rounded-lg w-full"
    >
      <BorderLogo logo={logo} className="w-[60px] h-[60px]" />
      <div className="flex flex-col text-center md:text-left">
        <p className="text-white text-lg font-semibold">{title}</p>
        <span className="text-secondary-300 text-sm">{desc}</span>
      </div>
    </motion.div>
  );
};

const CARD_ITEMS = [
  {
    title: "Instant AI Coding",
    desc: "Describe what you need, and AI writes the code for you.",
    logo: <Icons.market />,
  },
  {
    title: "No Setup Required",
    desc: "Run frontend, backend, and APIs directly in your browser.",
    logo: <Icons.ai />,
  },
  {
    title: "AI-Powered Debugging",
    desc: "Get instant suggestions to fix and improve your code.",
    logo: <Icons.chat />,
  },
  {
    title: "Live Collaboration",
    desc: "Share projects and build together in real time.",
    logo: <Icons.notification />,
  },
];
