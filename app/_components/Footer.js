"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
      className="w-full flex flex-col lg:flex-row items-center justify-between p-6 lg:px-20 lg:h-24 mb-20"
    >
      <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        <Image
          src="/images/img-promptlab-logo.png"
          alt="PromptLab logo"
          width={600}
          height={600}
          priority
          className="w-32 h-32 object-contain"
        />
        <div className="w-full flex justify-between items-center">
          <span className="text-gray-400 mt-2">
            © {currentYear} Promptlabs Inc. All Rights Reserved.
          </span>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-600">
            ↑
          </button>
        </div>
      </div>

      {/* Scroll Button */}
    </motion.footer>
  );
}
