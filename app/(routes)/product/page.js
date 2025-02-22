"use client";
import { useState } from "react";
import Image from "next/image";

export default function PromptLab() {
  const [selectedModel, setSelectedModel] = useState("OpenAI");

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A] to-black opacity-60 z-0"></div>

      {/* Navbar */}
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-xl font-semibold">PromptLab</h1>
      </div>

      {/* Read Docs Button */}
      <button className="absolute top-6 right-6 z-10 bg-white/10 px-4 py-2 rounded-full text-white text-sm hover:bg-white/20 transition">
        Read Docs
      </button>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">Create Your App in One Snap</h2>
        <p className="text-gray-300 mb-6">
          No setup, no hassle—just instant, AI-powered development at your
          fingertips.
        </p>

        {/* AI Model Selection */}
        <div className="flex justify-center space-x-4 bg-white/10 p-2 rounded-lg mb-4">
          {["Open AI", "Gemini", "Claude", "Lumo"].map((model) => (
            <button
              key={model}
              className={`px-4 py-2 rounded-md transition ${
                selectedModel === model
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-gray-300 hover:text-white"
              }`}
              onClick={() => setSelectedModel(model)}
            >
              {model}
            </button>
          ))}
        </div>

        {/* AI Chat Box */}
        <div className="bg-white/10 p-4 rounded-lg max-w-lg mx-auto text-left">
          <p className="text-gray-400 mb-2">Create to do list app</p>
          <p className="text-gray-500 text-sm">⚡ GPT 4.0</p>
        </div>

        {/* Example Prompts */}
        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {[
            "Build a simple blog App use react",
            "Analyze the CSV file and provide insights on sales trends.",
            "Optimize this SQL query to reduce execution time.",
            "Generate detailed API documentation for this Flask backend",
            "Create to do list app",
            "Design a dark-mode UI theme using CSS variables.",
          ].map((prompt, index) => (
            <button
              key={index}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
