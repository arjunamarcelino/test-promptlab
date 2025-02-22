"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading({ isLoading }) {
  return (
    <motion.section
      initial={{ opacity: 1, zIndex: 50 }}
      animate={{ opacity: isLoading ? 1 : 0, zIndex: isLoading ? 50 : -10 }}
      transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
      className="min-h-screen fixed bg-background inset-0 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{
          opacity: isLoading ? 1 : 0,
          y: isLoading ? 0 : 20,
          scale: isLoading ? 1 : 0,
        }}
        transition={{ delay: 0.3, type: "spring", stiffness: "250" }}
        className="h-10 w-fit"
      >
        <Image
          src={"/images/img-promptlab-logo.png"}
          alt="promptlab logo"
          width={700}
          height={700}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.section>
  );
}
