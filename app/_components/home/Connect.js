"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Connect() {
  const [activeTab, setActiveTab] = useState("Github & Gitlab");

  const tabs = [
    "Github & Gitlab",
    "VS Code",
    "API & Database",
    "Cloud & Local Hosting",
  ];

  return (
    <section
      id="connect"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparant text-white px-[60px] mb-[171px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        className="text-4xl font-semibold text-center"
      >
        Connect with Your Favorite Tools
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        className="text-lg text-primary-100 mt-4 text-center"
      >
        Type your prompt. Watch your code come to life.
      </motion.p>

      <div className="flex space-x-6 mt-8 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-3 rounded-full transition-all duration-200 ${
              activeTab === tab
                ? "border border-[#5A879D] text-[#BBDCFF]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-[547px] mt-10 w-full bg-gradient-to-b from-[#10181E] to-[#0E1F25] rounded-xl flex flex-col md:flex-row items-center shadow-lg">
        <div className="w-full md:w-1/2 p-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
            className="text-5xl font-semibold"
          >
            GitHub & GitLab
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
            className="text-lg text-secondary-200 mt-4 max-w-[490]"
          >
            Push, pull, and manage your repositories with built-in GitHub and
            GitLab integration. Track changes, collaborate with teams, and
            commit updates directly from PromptLab—no extra setup required.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
          className="w-full h-full mb-[-18px] md:w-1/2 flex justify-center mt-6 md:mt-0"
        >
          <Image
            src="/images/img-connect-tools.png"
            alt="GitHub & GitLab"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
