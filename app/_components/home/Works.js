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
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparant text-white px-[60px] mb-[100px]"
    >
      <div className="flex flex-col bg-gradient-to-b from-[#10181E] to-[#0E1F25] rounded-3xl justify-center items-center py-10 w-full">
        <div className="w-[90%] max-w-[1200px] flex flex-col lg:flex-row items-center rounded-xl py-6">
          <div className="lg:w-1/2 text-white max-w-[522px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: "250" }}
              className="text-[56px] font-interDisplayMedium"
            >
              AI That Works the Way You Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
              className="text-secondary-200 mt-4"
            >
              PromptLab integrates with the best AI models, giving you the
              freedom to choose the right tool for the job.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
            >
              <PrimaryButton className="mt-6 min-w-[135px]">
                Try It Now
              </PrimaryButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
            className="ml-40 lg:w-2/3 flex justify-center relative mt-10 lg:mt-0"
          >
            <Image
              src="/images/img-works-promptlab.png"
              alt="works-promptlab"
              width={350}
              height={350}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
          className="w-[90%] max-w-[1200px] flex flex-col lg:flex-row justify-between mt-10"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
