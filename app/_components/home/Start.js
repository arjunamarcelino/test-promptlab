"use client";
import { useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { motion } from "framer-motion";
import { copyToClipboard } from "../../_libs/uiUtils";

export default function Start() {
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  const command = "npm install promptlab";

  const handleCopy = async () => {
    const success = await copyToClipboard(command);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="start"
      className="relative w-full flex flex-col items-center justify-center bg-background text-white mt-[150px] mb-[80px]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", stiffness: "250" }}
        className="relative flex items-center justify-center z-30 pointer-events-none text-5xl font-interDisplayMedium"
      >
        Start Building with AI Now!
      </motion.h1>
      <p className="text-lg text-primary-100 mt-4">
        Type your prompt. Watch your code come to life.
      </p>

      <div className="relative flex items-center min-w-[489px] gap-3 px-5 py-3 mt-10 text-xl text-secondary-400 font-mPlusCodeLatinReguler border rounded-3xl bg-gradient-to-b from-[#10181E] to-[#0E1F25] border-[#1E3A47] shadow-md justify-between">
        <span className="tracking-wide">{command}</span>
        <MdOutlineContentCopy
          className="cursor-pointer hover:text-white transition"
          size={24}
          onClick={handleCopy} //
        />
        {copied && (
          <span className="absolute top-[-40px] right-0 text-sm text-white bg-gray-800 px-2 py-1 rounded">
            Copied!
          </span>
        )}
      </div>
      <div className="flex flex-row gap-3 mt-8">
        <PrimaryButton className="min-w-[135px]">Start Free</PrimaryButton>
        <SecondaryButton className="flex items-center justify-center min-w-[135px] pointer-events-none">
          <span className="rounded">
            <FaGithub className="text-white" size={16} />
          </span>
          <span className="flex items-center">2,092</span>
        </SecondaryButton>
      </div>
    </section>
  );
}
