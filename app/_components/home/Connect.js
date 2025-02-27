"use client";
import { useState } from "react";
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
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparant text-white px-6 md:px-[60px] mb-[120px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 250 }}
        className="text-4xl md:text-5xl font-semibold text-center"
      >
        Connect with Your Favorite Tools
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
        className="text-lg text-primary-100 mt-4 text-center"
      >
        Type your prompt. Watch your code come to life.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 mt-6 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 md:px-5 md:py-3 rounded-full transition-all duration-200 text-sm md:text-base ${
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

      <div className="min-h-[400px] md:min-h-[547px] mt-10 w-full bg-gradient-to-b from-[#10181E] to-[#0E1F25] rounded-xl flex flex-col md:flex-row items-center shadow-lg py-6 pl-6 md:py-12 md:pl-12 ">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
            className="text-2xl md:text-5xl font-semibold pr-6 md:pr-12"
          >
            {activeTab}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
            className="text-base md:text-lg text-secondary-200 mt-4 max-w-full md:max-w-[490px] pr-6 md:pr-12"
          >
            {activeTab === "Github & Gitlab"
              ? "Push, pull, and manage your repositories with built-in GitHub and GitLab integration. Track changes, collaborate with teams, and commit updates directly from PromptLab—no extra setup required."
              : activeTab === "VS Code"
              ? "Seamless integration with VS Code allows you to edit and debug your code in real time. Experience a unified development workflow."
              : activeTab === "API & Database"
              ? "Connect with APIs and databases effortlessly. Manage, query, and analyze data directly within PromptLab."
              : "Deploy your projects effortlessly to the cloud or local hosting services with minimal configuration."}
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
