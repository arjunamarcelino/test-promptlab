"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Connect() {
  //   const [isMounted, setIsMounted] = useState(false);

  //   useEffect(() => {
  //     setIsMounted(true);
  //   }, []);

  //   if (!isMounted) return null;

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
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background text-white"
    >
      <h2 className="text-4xl font-semibold text-center">
        Connect with Your Favorite Tools
      </h2>
      <p className="text-lg text-primary-100 mt-2 text-center">
        Type your prompt. Watch your code come to life.
      </p>

      {/* Tabs */}
      <div className="flex space-x-6 mt-8 border-b border-[#1E3A47] pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full transition-all duration-200 ${
              activeTab === tab
                ? "bg-gradient-to-b from-[#00D1FF] to-[#007B9F] text-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="mt-10 w-full max-w-5xl bg-gradient-to-b from-[#10181E] to-[#0E1F25] rounded-xl p-8 flex flex-col md:flex-row items-center shadow-lg">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold">GitHub & GitLab</h3>
          <p className="text-gray-400 mt-4">
            Push, pull, and manage your repositories with built-in GitHub and
            GitLab integration. Track changes, collaborate with teams, and
            commit updates directly from PromptLab—no extra setup required.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/images/github-gitlab.png" // Ganti dengan path gambar yang sesuai
            alt="GitHub & GitLab"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
