"use client";
import { useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { motion } from "framer-motion";
import { copyToClipboard } from "../../_libs/uiUtils";
import { useRouter } from "next/navigation";

export default function Start() {
  const router = useRouter();
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
      className="relative w-full flex flex-col items-center justify-center text-white mt-[100px] mb-[50px] px-4 sm:px-6"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        className="text-center z-30 pointer-events-none font-interDisplayMedium
          text-[clamp(1.8rem,4vw,3rem)]"
      >
        Start Building with AI Now!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        className="text-primary-100 text-center mt-4 text-[clamp(0.9rem,2vw,1.2rem)]"
      >
        Type your prompt. Watch your code come to life.
      </motion.p>

      {/* Command Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        className="relative flex items-center w-full max-w-[489px] gap-3 px-4 sm:px-5 py-3 mt-10 text-lg sm:text-xl
          text-secondary-400 font-mPlusCodeLatinReguler border rounded-3xl bg-gradient-to-b from-[#10181E] to-[#0E1F25] border-[#1E3A47]
          shadow-md justify-between overflow-x-auto whitespace-nowrap"
      >
        <span className="tracking-wide">{command}</span>
        <MdOutlineContentCopy
          className="cursor-pointer hover:text-white transition"
          size={24}
          onClick={handleCopy}
        />
        {copied && (
          <span className="absolute top-[-40px] right-0 text-sm text-white bg-gray-800 px-2 py-1 rounded">
            Copied!
          </span>
        )}
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        className="flex flex-wrap justify-center gap-3 mt-6 w-full max-w-[400px]"
      >
        <PrimaryButton
          className="w-full sm:w-auto min-w-[135px]"
          onClick={() => router.push("/product")}
        >
          Start Free
        </PrimaryButton>
        <SecondaryButton className="w-full sm:w-auto flex items-center justify-center min-w-[135px]">
          <span className="rounded">
            <FaGithub className="text-white" size={16} />
          </span>
          <span className="flex items-center ml-2">2,092</span>
        </SecondaryButton>
      </motion.div>
    </section>
  );
}
