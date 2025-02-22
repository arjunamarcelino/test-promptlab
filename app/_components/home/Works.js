"use client";
import { useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Works() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="works"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background text-white px-[60px]"
    >
      <div className="flex flex-col bg-gradient-to-b from-[#10181E] to-[#0E1F25] rounded-3xl justify-center items-center py-10 w-full">
        <div className="w-[90%] max-w-[1200px] flex flex-col lg:flex-row items-center rounded-xl py-6">
          <div className="lg:w-1/2 text-white max-w-[522px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: "250" }}
              className="text-[56px] font-interDisplayMedium"
            >
              AI That Works the Way You Do
            </motion.h2>
            <p className="text-secondary-200 mt-4">
              PromptLab integrates with the best AI models, giving you the
              freedom to choose the right tool for the job.
            </p>
            <PrimaryButton className="mt-6 min-w-[135px]">
              Try It Now
            </PrimaryButton>
          </div>
          <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              <div className="absolute w-full h-full flex items-center justify-center rounded-full border border-gray-700">
                <span className="text-lg font-bold text-gray-300">
                  PromptLab
                </span>
              </div>
              <div className="absolute top-0 left-10">
                <Image
                  src="/icons/chatgpt.svg"
                  alt="ChatGPT"
                  width={40}
                  height={40}
                />
              </div>
              <div className="absolute bottom-0 left-5">
                <Image
                  src="/icons/claude.svg"
                  alt="Claude"
                  width={40}
                  height={40}
                />
              </div>
              <div className="absolute top-5 right-0">
                <Image
                  src="/icons/gemini.svg"
                  alt="Gemini"
                  width={40}
                  height={40}
                />
              </div>
              <div className="absolute bottom-5 right-5">
                <Image
                  src="/icons/nike.svg"
                  alt="Nike"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] max-w-[1200px] flex flex-col lg:flex-row justify-between mt-10">
          <div className="bg-gradient-to-b from-[#1A262E] to-[#16232D] rounded-lg p-2 flex items-center gap-4 w-full lg:w-[48%]">
            <div className="min-h-[150] min-w-[133px] rounded-lg px-4 bg-gradient-to-b from-[#000000] to-[#152D2E] flex justify-center items-center">
              <Image
                src="/images/img-works-openai.png"
                alt="ChatGPT"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h3 className="text-white text-lg">
                ChatGPT for code generation?
              </h3>
              <p className="text-secondary-300 text-sm">
                The go-to AI for code generation, debugging, and explanations.
              </p>
              <SecondaryButton className="mt-2 text-sm text-secondary-100 flex items-center gap-2">
                Try OpenAI <AiOutlineArrowRight />
              </SecondaryButton>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#1A262E] to-[#16232D] rounded-lg p-2 flex items-center gap-4 w-full lg:w-[48%]">
            <div className="min-h-[150] min-w-[133px] rounded-lg px-4 bg-gradient-to-b from-[#000000] to-[#152D2E] flex justify-center items-center">
              <Image
                src="/images/img-works-gemini.png"
                alt="ChatGPT"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h3 className="text-white text-lg">Gemini for deep reasoning?</h3>
              <p className="text-secondary-300 text-sm">
                Best for deep reasoning, structured coding, and research-heavy
                tasks.
              </p>
              <SecondaryButton className="mt-2 text-sm text-secondary-100 flex items-center gap-2">
                Try Gemini <AiOutlineArrowRight />
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
