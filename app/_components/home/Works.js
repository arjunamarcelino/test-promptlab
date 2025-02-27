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
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent text-white px-6 md:px-[60px] mb-[120px]"
    >
      <div className="flex flex-col bg-gradient-to-b from-[#10181E] to-[#0E1F25] rounded-3xl justify-center items-center py-[50px] md:py-[77px] w-full">
        <div className="w-[90%] flex flex-col lg:flex-row items-center rounded-xl py-6">
          <div className="lg:w-1/2 text-white max-w-xl text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 250 }}
              className="text-3xl md:text-[56px] sm:text-4xl font-interDisplayMedium sm:leading-[1.2]"
            >
              AI That Works the Way You Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
              className="text-secondary-200 mt-4"
            >
              PromptLab integrates with the best AI models, giving you the
              freedom to choose the right tool for the job.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
            >
              <PrimaryButton className="min-w-[160px] mt-8 md:mt-12">
                Try It Now
              </PrimaryButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
            className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
          >
            <Image
              src="/images/img-works-promptlab.png"
              alt="works-promptlab"
              width={350}
              height={350}
              className="max-w-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
          className="w-[90%] flex flex-col lg:flex-row justify-between gap-6 mt-10"
        >
          {[
            {
              img: "/images/img-works-openai.png",
              title: "ChatGPT for code generation?",
              desc: "The go-to AI for code generation, debugging, and explanations.",
              btnText: "Try OpenAI",
            },
            {
              img: "/images/img-works-gemini.png",
              title: "Gemini for deep reasoning?",
              desc: "Best for deep reasoning, structured coding, and research-heavy tasks.",
              btnText: "Try Gemini",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1A262E] to-[#16232D] rounded-lg p-4 flex items-center gap-4 w-full lg:w-[48%]"
            >
              <div className="h-full w-40 md:w-24 rounded-lg flex justify-center items-center bg-gradient-to-b from-black to-[#152D2E]">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain flex-shrink-0"
                />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-secondary-300 text-sm mt-1">{item.desc}</p>
                <SecondaryButton className="mt-2 text-sm text-secondary-100 flex items-center gap-2">
                  {item.btnText} <AiOutlineArrowRight />
                </SecondaryButton>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
