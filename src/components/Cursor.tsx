"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          !!target.closest("a") ||
          !!target.closest("button")
      );
    };
    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full border border-[#CC310E] pointer-events-none"
        animate={{
          x: position.x - (isPointer ? 22 : 16),
          y: position.y - (isPointer ? 22 : 16),
          width: isPointer ? 44 : 32,
          height: isPointer ? 44 : 32,
          opacity: isHidden ? 0 : isPointer ? 1 : 0.6,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 280,
          mass: 0.5,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-[6px] h-[6px] rounded-full bg-[#CC310E] pointer-events-none"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 500,
          mass: 0.3,
        }}
      />
    </>
  );
}
