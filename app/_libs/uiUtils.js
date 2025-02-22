import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId) => {
  const scrollTo = () => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.getElementById("header")?.offsetHeight || 0;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  if (window.location.pathname === `/`) {
    scrollTo();
  } else {
    window.location.href = `/#${sectionId}`;
    window.addEventListener("load", scrollTo, { once: true });
  }
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy:", error);
    return false;
  }
};
