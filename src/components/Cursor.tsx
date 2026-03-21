"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Classic arrow cursor drawn as a polygon at 1:1 scale
// then CSS-scaled 3× so it looks chunky and pixelated
//
// Points trace:  tip → down-left edge → V-split → tail tip →
//                tail back → junction → top-right → back to tip
const CURSOR_POINTS = "1,1 1,15 4,11 7,18 9,17 6,10 11,10";

function PixelArrow({ isPointer }: { isPointer: boolean }) {
  return (
    <svg
      width={11}
      height={18}
      viewBox="0 0 11 18"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        transform: `scale(${isPointer ? 3.6 : 3}) `,
        transformOrigin: "0 0",
        transition: "transform 0.15s ease",
        imageRendering: "pixelated",
      }}
    >
      {/* Dark outline — slightly expanded behind the fill */}
      <polygon
        points={CURSOR_POINTS}
        fill="none"
        stroke="#2A0500"
        strokeWidth={2.2}
        strokeLinejoin="miter"
      />
      {/* Red fill */}
      <polygon
        points={CURSOR_POINTS}
        fill="#CC310E"
        stroke="none"
      />
    </svg>
  );
}

export default function Cursor() {
  const [isMobile, setIsMobile]   = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden]   = useState(true);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const x = useSpring(rawX, { stiffness: 600, damping: 40, mass: 0.1 });
  const y = useSpring(rawY, { stiffness: 600, damping: 40, mass: 0.1 });

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
