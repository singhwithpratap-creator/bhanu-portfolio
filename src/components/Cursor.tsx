"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Pixel art cursor — 1 = filled pink square, 0 = empty
// Classic arrow cursor shape in pixel grid
const PIXEL_SIZE = 3;
const PINK = "#FF2D8B";
const GRID = [
  [1,0,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,0,0,0,0],
  [1,1,1,1,1,0,0,0,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0],
  [1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0],
  [1,1,0,1,1,1,1,0,0,0,0],
  [1,0,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,0,1,1,1,1,0,0],
  [0,0,0,0,0,0,1,1,1,1,0],
  [0,0,0,0,0,0,0,1,1,1,1],
];

const W = 11 * PIXEL_SIZE;
const H = GRID.length * PIXEL_SIZE;

function PixelCursor({ isPointer }: { isPointer: boolean }) {
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      style={{
        transform: isPointer ? "scale(1.2)" : "scale(1)",
        transition: "transform 0.15s ease",
        imageRendering: "pixelated",
      }}
    >
      {GRID.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              x={x * PIXEL_SIZE}
              y={y * PIXEL_SIZE}
              width={PIXEL_SIZE}
              height={PIXEL_SIZE}
              fill={PINK}
            />
          ) : null
        )
      )}
    </svg>
  );
}

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch/mobile devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(isTouch);
    if (isTouch) return;

    // Hide the native cursor
    document.body.style.cursor = "none";

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
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{
        x: position.x,
        y: position.y,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        damping: 35,
        stiffness: 350,
        mass: 0.4,
      }}
    >
      <PixelCursor isPointer={isPointer} />
    </motion.div>
  );
}
