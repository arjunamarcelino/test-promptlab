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
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background text-white px-[60px] mb-[120px]"
    >
      <div className="flex flex-col bg-gradient-to-b from-[#101D1E] to-[#173038] rounded-3xl justify-center items-center py-[77px] w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: "250" }}
          className="text-shadow font-interDisplayMedium max-lg:text-5xl text-[56px] leading-[66px] text-center"
        >
          Build Full-Stack Apps in Seconds{" "}
        </motion.h1>
        <span className="text-secondary-200 mt-4">
          PromptLab integrates with the best AI models, giving you the freedom
          to choose the right tool for the job.
        </span>

        <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] mt-[65px]">
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
        <PrimaryButton className="min-w-[160px] mt-12">
          Try It Now
        </PrimaryButton>
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
      className="max-w-[515px] max-h-[112px] flex flex-row items-center justify-center gap-5"
    >
      <BorderLogo logo={logo} />
      <div className="flex flex-col">
        <p className="text-left text-shadow text-lg">{title}</p>
        <span className="text-left text-secondary-300 text-shadow text-lg bg-">
          {desc}
        </span>
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
