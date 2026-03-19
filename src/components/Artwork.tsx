"use client";

import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { PanInfo } from "framer-motion";

const SKETCHES = [
  "/images/Sketches/sketch-01.png",
  "/images/Sketches/sketch-02.png",
  "/images/Sketches/sketch-03.png",
  "/images/Sketches/sketch-04.png",
  "/images/Sketches/sketch-05.png",
  "/images/Sketches/sketch-06.png",
];

// Subtle handmade tilts — each card feels placed, not positioned
const TILTS = [-2.2, 1.6, -1.4, 2.0, -1.8, 2.6];

const CARD_W = 280;
const CARD_GAP = 16;
const STEP = CARD_W + CARD_GAP;

const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

export default function Artwork() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);

  const goTo = (index: number) => {
    const looped = ((index % SKETCHES.length) + SKETCHES.length) % SKETCHES.length;
    setActive(looped);
    animate(x, -looped * STEP, {
      type: "spring",
      stiffness: 280,
      damping: 32,
      mass: 0.9,
    });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) goTo(active + 1);
    else if (info.offset.x > 60) goTo(active - 1);
    else goTo(active);
  };

  return (
    <section
      id="artwork"
      className="py-28 border-b border-[#1F1F1F] bg-[#080808] overflow-hidden"
      ref={sectionRef}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: EASE }}
        className="px-6 lg:px-12 max-w-7xl mx-auto mb-16"
      >
        <p className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.3em] mb-3">
          [ 04 - Personal Artwork ]
        </p>
        <h2
          className="font-display font-bold text-[#F5F5F5] leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Art beyond the brief.
        </h2>
        <p className="text-[#888888] mt-4 max-w-lg leading-relaxed">
          Outside the grid system, I draw. Pencil and ink, anime characters,
          a lifelong obsession with the genre.
        </p>
      </motion.div>

      {/* ── Hero: Video left + Text right ── */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
          >
            <div className="relative overflow-hidden border border-[#1F1F1F] bg-[#0d0d0d]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full block"
                style={{ maxHeight: "420px", objectFit: "contain" }}
              >
                <source src="/videos/gohan-animation.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC310E] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CC310E]" />
                </span>
                <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                  Pencil Sketch · Animated with After Effects
                </span>
              </div>
            </div>
          </motion.div>

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
            className="flex flex-col gap-6 pt-2 lg:pt-0"
          >
            <p className="font-mono text-[10px] text-[#CC310E] uppercase tracking-[0.25em]">
              The origin story
            </p>

            <p className="font-display text-2xl lg:text-3xl font-bold text-[#F5F5F5] leading-snug">
              I drew before I ever wrote a line of code.
            </p>

            <div className="space-y-4 text-[#888888] leading-relaxed">
              <p>
                Growing up, I filled every notebook margin with anime characters. Gohan, Vegeta, Naruto. Pencil on paper, hours vanishing. Sketching was not a hobby; it was how I understood the world visually. Proportion, weight, expression, motion. All learned long before I knew what UX meant.
              </p>
              <p>
                I came into the industry through development. I could build things, but I kept noticing that the things we built felt wrong to use. Clunky flows, confusing hierarchies, interfaces that ignored the person on the other side. That frustration pulled me toward design. I wanted to close the gap between what was built and what actually worked for people.
              </p>
              <p>
                Turns out, years of drawing taught me exactly what software could not: how to see. Composition, negative space, visual rhythm. They translate directly into product design. The sketchbook was always the foundation.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="h-px flex-1 bg-[#1F1F1F]" />
              <span className="font-mono text-[10px] text-[#444444] uppercase tracking-widest">
                Dev → Design · 2018
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Sketch Carousel ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
        className="px-6 lg:px-12 max-w-7xl mx-auto"
      >
        {/* Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing select-none"
            style={{ x, gap: CARD_GAP }}
            drag="x"
            dragConstraints={{
              left: -(SKETCHES.length - 1) * STEP,
              right: STEP,
            }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
          >
            {SKETCHES.map((src, i) => (
              <motion.div
                key={i}
                onClick={() => goTo(i)}
                className="relative flex-shrink-0 overflow-hidden border bg-[#111111] cursor-pointer"
                style={{
                  width: CARD_W,
                  borderColor: active === i ? "#CC310E" : "#1F1F1F",
                }}
                initial={{ rotate: TILTS[i] }}
                animate={{
                  scale: active === i ? 1.04 : 1,
                  rotate: active === i ? 0 : TILTS[i],
                  boxShadow:
                    active === i
                      ? "0 24px 64px rgba(204,49,14,0.18)"
                      : "0 0 0 rgba(0,0,0,0)",
                }}
                whileHover={{
                  scale: 1.06,
                  rotate: 0,
                  borderColor: "#CC310E",
                  boxShadow: "0 28px 72px rgba(204,49,14,0.2)",
                  zIndex: 20,
                }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {/* Sketch image */}
                <img
                  src={src}
                  alt={`Sketch ${i + 1}`}
                  className="w-full h-auto block pointer-events-none"
                  draggable={false}
                />

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-4">
                  <p className="font-mono text-[9px] text-[#888888] uppercase tracking-widest">
                    Sketch {String(i + 1).padStart(2, "0")}
                  </p>
                  {active === i && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-mono text-[8px] text-[#CC310E] uppercase tracking-widest"
                    >
                      ● Active
                    </motion.span>
                  )}
                </div>

                {/* Corner accent on active */}
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-0 left-0 w-5 h-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #CC310E 50%, transparent 50%)",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation bar */}
        <div className="flex items-center justify-between mt-8">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {SKETCHES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to sketch ${i + 1}`}
                className="transition-all duration-400 rounded-full"
                style={{
                  width: active === i ? 28 : 7,
                  height: 7,
                  borderRadius: "9999px",
                  background: active === i ? "#CC310E" : "#2A2A2A",
                  transition: "all 0.35s cubic-bezier(0.25,0.4,0.25,1)",
                }}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <motion.button
              onClick={() => goTo(active - 1)}
              whileHover={{ x: -2, borderColor: "#CC310E" }}
              whileTap={{ scale: 0.94 }}
              className="w-10 h-10 border border-[#1F1F1F] flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 font-mono"
              style={{ transition: "border-color 0.2s, color 0.2s" }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => goTo(active + 1)}
              whileHover={{ x: 2, borderColor: "#CC310E" }}
              whileTap={{ scale: 0.94 }}
              className="w-10 h-10 border border-[#1F1F1F] flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 font-mono"
              style={{ transition: "border-color 0.2s, color 0.2s" }}
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-mono text-[10px] text-[#444444] uppercase tracking-widest mt-5"
        >
          Drag to explore · Click to focus
        </motion.p>
      </motion.div>
    </section>
  );
}
