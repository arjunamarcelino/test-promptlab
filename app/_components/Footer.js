"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { scrollToSection } from "../_libs/uiUtils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
      className="relative w-full flex flex-col items-center lg:flex-row justify-between px-6 md:px-12 lg:px-20 py-6 bg-background text-center lg:text-left"
    >
      <div className="w-full flex flex-col items-center lg:items-start">
        <Image
          src="/images/img-promptlab-logo.png"
          alt="PromptLab logo"
          width={600}
          height={600}
          priority
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-4">
          <span className="text-secondary-200 text-sm md:text-base">
            © {currentYear} Promptlabs Inc. All Rights Reserved.
          </span>
          <button
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#071B20] border border-[#0F3937] text-white hover:bg-gray-600 mt-4 md:mt-0"
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/images/img-footer-arrow.png"
              alt="arrow-top-icon"
              width={600}
              height={600}
              priority
              className="w-6 h-6 md:w-7 md:h-8 object-contain"
            />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
