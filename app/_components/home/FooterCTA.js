"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function FooterCTA() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="footercta"
      className="relative w-full h-auto flex flex-col items-center justify-center bg-transparant text-white px-6 md:px-[60px] mb-[120px]"
    >
      <div className="flex flex-col bg-[url('/images/img-cta-highlight.png')] md:bg-cover rounded-3xl justify-center items-center py-[77px] w-full">
        <div className="max-w-[636px] flex flex-col items-center text-center mx-auto gap-4 py-[100px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
            className="text-2xl md:text-5xl font-interDisplayMedium"
          >
            Ready to Code Smarter?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
            className="text-base md:text-lg px-8 text-primary-100"
          >
            The future of development is AI-powered, and it starts here. No more
            setup. No more roadblocks. Just pure innovation at your fingertips.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
            className="flex flex-row gap-[33px]"
          >
            <FaXTwitter className="text-white" size={32} />
            <LiaTelegram className="text-white" size={32} />
            <FaGithub className="text-white" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
