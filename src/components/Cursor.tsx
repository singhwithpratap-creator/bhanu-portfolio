"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const RED     = "#CC310E";
const OUTLINE = "#2A0500";

// Clean pixel-art arrow cursor
// 0 = transparent, 1 = dark outline, 2 = red fill
// Hotspot is top-left (0,0)
const GRID = [
  [1,0,0,0,0,0,0],
  [1,1,0,0,0,0,0],
  [1,2,1,0,0,0,0],
  [1,2,2,1,0,0,0],
  [1,2,2,2,1,0,0],
  [1,2,2,2,2,1,0],
  [1,2,2,2,2,2,1],
  [1,2,2,2,2,2,1],
  [1,2,2,2,1,1,0],
  [1,2,2,1,0,0,0],
  [1,2,1,0,0,0,0],
  [1,1,0,0,0,0,0],
];

const PX = 5; // size of each pixel block
const CW  = 7 * PX;
const CH  = GRID.length * PX;

function PixelArrow({ isPointer }: { isPointer: boolean }) {
  return (
    <svg
      width={CW}
      height={CH}
      viewBox={`0 0 ${CW} ${CH}`}
      style={{
        transform: isPointer ? "scale(1.15)" : "scale(1)",
        transition: "transform 0.15s ease",
      }}
      shapeRendering="crispEdges"
    >
      {GRID.map((row, y) =>
        row.map((cell, x) => {
          if (!cell) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x * PX}
              y={y * PX}
              width={PX}
              height={PX}
              fill={cell === 1 ? OUTLINE : RED}
            />
          );
        })
      )}
    </svg>
  );
}

export default function Cursor() {
  const [isMobile, setIsMobile]   = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden]   = useState(true);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Very smooth spring — high damping, medium stiffness
  const x = useSpring(rawX, { stiffness: 260, damping: 38, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 260, damping: 38, mass: 0.25 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(isTouch);
    if (isTouch) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsHidden(false);
      const t = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(t).cursor === "pointer" ||
        t.tagName === "A" || t.tagName === "BUTTON" ||
        !!t.closest("a") || !!t.closest("button")
      );
    };

    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x, y, opacity: isHidden ? 0 : 1 }}
    >
      <PixelArrow isPointer={isPointer} />
    </motion.div>
  );
}
