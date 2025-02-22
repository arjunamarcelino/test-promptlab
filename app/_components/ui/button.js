"use client";
import React from "react";
// import styled from 'styled-components';
import { motion } from "framer-motion";
import { cn } from "@/app/_libs/uiUtils";

export function PrimaryButton({ className, children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, originX: 0.3 }}
      transition={{ type: "spring", stiffness: 250 }}
      className={cn(
        "cursor-pointer px-[19px] py-[14px] min-w-[50px] min-h-[44px] text-white font-medium text-base rounded-full border-none shadow-lg",
        "bg-gradient-to-br from-[#146C76] via-[#01CEB2] to-[#146C76] bg-[length:280%_auto] transition-all duration-[0.8s]",
        "hover:bg-right-top focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600",
        "shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function SecondaryButton({ className, children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250 }}
      className={cn(
        "rounded-full px-[16px] py-[12px] gap-[10px] border border-[#3B3F56]",
        "bg-[#03161D] text-white font-medium text-base transition-all duration-300",
        "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
