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
      className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between p-6 lg:px-20 lg:h-30 bg-background"
    >
      <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left bg-background">
        <Image
          src="/images/img-promptlab-logo.png"
          alt="PromptLab logo"
          width={600}
          height={600}
          priority
          className="w-32 h-32 object-contain"
        />
        <div className="w-full flex justify-between items-center">
          <span className="text-secondary-200 mt-2">
            © {currentYear} Promptlabs Inc. All Rights Reserved.
          </span>
          <button
            className="w-[78px] h-[78px] flex items-center justify-center rounded-full bg-[#071B20] border border-[#0F3937] text-white hover:bg-gray-600"
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/images/img-footer-arrow.png"
              alt="arrow-top-icon"
              width={600}
              height={600}
              priority
              className="w-[28px] h-[32px] object-contain"
            />
          </button>
        </div>
      </div>

      {/* Scroll Button */}
    </motion.footer>
  );
}
