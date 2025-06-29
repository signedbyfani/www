"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useMousePosition from "@/app/_hooks/usemouseposition";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileDevice);
      if (!isMobileDevice) {
        document.body.style.cursor = "none";
        document.documentElement.classList.add("no-cursor");
      } else {
        document.body.style.cursor = "auto";
        document.documentElement.classList.remove("no-cursor");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Add event listeners for cursor type changes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("cursor-grab");
      setIsPointer(Boolean(isClickable));
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.style.cursor = "auto";
      document.documentElement.classList.remove("no-cursor");
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] pointer-events-none"
      animate={{
        x: (x ?? 0) - 2,
        y: (y ?? 0) - 2,
        opacity: isVisible ? 1 : 0,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        x: { duration: 0 },
        y: { duration: 0 },
        scale: { duration: 0.15 },
        opacity: { duration: 0.15 },
      }}
    >
      <Image
        src={isPointer ? "/cursors/pointer.svg" : "/cursors/cursor.svg"}
        alt="Cursor"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </motion.div>
  );
} 