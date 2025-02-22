"use client";
import { useEffect, useState } from "react";

export default function Connect() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="connect"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background text-white"
    >
    </section>
  );
}
