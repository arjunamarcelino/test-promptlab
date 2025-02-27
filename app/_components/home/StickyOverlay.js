"use client";
import { useState } from "react";
import Image from "next/image";
import { Particles } from "../magicui/particles";

export default function StickyOverlay() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Image
        src="/images/img-hero-highlight-2.png"
        alt="highlight"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none"
      />
      <Particles
        className="absolute inset-0 z-2"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
