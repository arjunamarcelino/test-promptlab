"use client";
import { useEffect, useState } from "react";

export default function FooterCTA() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="footercta"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background text-white"
    >
    </section>
  );
}
