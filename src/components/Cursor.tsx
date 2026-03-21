"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Polygon points for classic arrow cursor
// viewBox has 2px padding on all sides to prevent stroke clipping
const CURSOR_POINTS = "3,3 3,17 6,13 9,20 11,19 8,12 13,12";
const VB = "0 0 15 22"; // viewBox with padding
const NW = 15; // natural width
const NH = 22; // natural height
const SCALE = 2; // display scale

export default function Cursor() {
  const [isMobile, setIsMobile] = useState(true);

  // Use motion values for everything to avoid re-renders on mousemove
  const rawX    = useMotionValue(-300);
  const rawY    = useMotionValue(-300);
  const opacity = useMotionValue(0);

  // High stiffness + damping for fast, smooth tracking with no jitter
  const x = useSpring(rawX, { stiffness: 800, damping: 50, mass: 0.08 });
  const y = useSpring(rawY, { stiffness: 800, damping: 50, mass: 0.08 });

  const isPointerRef = useRef(false);
  const svgRef       = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(isTouch);
    if (isTouch) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      opacity.set(1);

      const t = e.target as HTMLElement;
      const ptr =
        window.getComputedStyle(t).cursor === "pointer" ||
        t.tagName === "A" || t.tagName === "BUTTON" ||
        !!t.closest("a") || !!t.closest("button");

      // Only update DOM if pointer state actually changed
      if (ptr !== isPointerRef.current) {
        isPointerRef.current = ptr;
        if (svgRef.current) {
          const s = ptr ? SCALE * 1.2 : SCALE;
          svgRef.current.style.width  = `${NW * s}px`;
          svgRef.current.style.height = `${NH * s}px`;
        }
      }
    };

    const onLeave  = () => opacity.set(0);
    const onEnter  = () => opacity.set(1);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY, opacity]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x, y, opacity }}
    >
      <svg
        ref={svgRef}
        width={NW * SCALE}
        height={NH * SCALE}
        viewBox={VB}
        shapeRendering="crispEdges"
        style={{ display: "block", transition: "width 0.15s ease, height 0.15s ease" }}
      >
        {/* Outline */}
        <polygon
          points={CURSOR_POINTS}
          fill="none"
          stroke="#2A0500"
          strokeWidth={1.5}
          strokeLinejoin="miter"
        />
        {/* Red fill */}
        <polygon
          points={CURSOR_POINTS}
          fill="#CC310E"
          stroke="none"
        />
      </svg>
    </motion.div>
  );
}
