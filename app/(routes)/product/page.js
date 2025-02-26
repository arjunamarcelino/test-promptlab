"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../../_components/ui/button";
import { useRouter } from "next/navigation";

export default function PromptLab() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Open AI");

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img-chat-highlight.png"
          alt="highlight"
          layout="fill"
          objectFit="fill"
          className="pointer-events-none mt-[-100px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: "100" }}
        className="fixed w-full top-6 lg:top-[10px] left-0 z-50 overflow-hidden pointer-events-none"
      >
        <header className="max-lg:hidden flex items-center justify-between px-4 mx-auto max-w-[1353px] sm:px-6 lg:px-8 h-16 lg:h-20 pr-3 pl-8 pointer-events-auto">
          <motion.button
            whileHover={{
              scale: 1.05,
              originX: 0.3,
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="h-[21px] w-[109px]"
            onClick={() => router.push("/")}
          >
            <Image
              src={"/images/img-promptlab-logo.png"}
              alt="promptlab logo"
              width={700}
              height={700}
              priority
              className="w-full h-full object-contain"
            />
          </motion.button>
          <PrimaryButton
            onClick={() => window.open()}
            className="max-w-[138px] w-[138px]"
          >
            Read Docs
          </PrimaryButton>
        </header>
      </motion.div>

      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-5xl mb-4">Create Your App in One Snap</h2>
        <p className="text-primary-100 mb-6">
          No setup, no hassle—just instant, AI-powered development at your
          fingertips.
        </p>

        <div className="flex flex-col max-w-[642px] justify-center items-center mx-auto border border-[#3E3E3E] rounded-2xl p-4">
          <div className="flex flex-row justify-between items-center w-full mb-4">
            <div className="flex items-center space-x-4">
              {["Open AI", "Gemini", "Claude", "Lumo"].map((model) => (
                <button
                  key={model}
                  className={`px-5 py-2 rounded-full transition-all duration-200 ${
                    activeTab === model
                      ? "border border-[#5A879D] text-[#BBDCFF]"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(model)}
                >
                  {model}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <a className="text-sm text-gray-400">API Key</a>
            </div>
          </div>

          <div className="border border-[#3E3E3E] p-4 rounded-3xl min-h-[134px] min-w-full max-w-lg text-left flex flex-col">
            <p className="text-gray-400 mb-2 flex-grow">
              Create to do list app
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-gray-500 text-sm">⚡ GPT 4.0</p>
              <p className="text-gray-500 text-sm">
                Use <span className="text-white">Shift + Return</span> a new
                line
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {[
            "Build a simple blog App use react",
            "Analyze the CSV file and provide insights on sales trends.",
            "Optimize this SQL query to reduce execution time.",
            "Generate detailed API documentation for this Flask backend",
            "Create to do list app",
            "Design a dark-mode UI theme using CSS variables.",
          ].map((prompt, index) => (
            <SecondaryButton
              key={index}
              className="bg-transparent px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
            >
              {prompt}
            </SecondaryButton>
          ))}
        </div>
      </div>
    </div>
  );
}
