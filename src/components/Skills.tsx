"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  { label: "UX Research", desc: "Interviews · Synthesis · Journeys" },
  { label: "Interaction Design", desc: "Flows · Micro-interactions · States" },
  { label: "Design Systems", desc: "Tokens · Components · Documentation" },
  { label: "WCAG / AODA", desc: "Accessibility · Inclusive Design" },
  { label: "Figma", desc: "Auto-layout · Variants · Dev Mode" },
  { label: "Usability Testing", desc: "Moderated · Remote · Unmoderated" },
  { label: "Workshop Facilitation", desc: "FigJam · IBM Design Thinking" },
  { label: "Information Architecture", desc: "Card Sorting · Site Maps · IA" },
  { label: "Prototyping", desc: "Hi-fi · Interactive · Principle" },
  { label: "Midjourney", desc: "Visual Ideation · Concept Direction" },
  { label: "Claude AI", desc: "Design Strategy · Research Synthesis" },
  { label: "Figma AI", desc: "Generative UI · Auto-complete" },
  { label: "Agile Collaboration", desc: "Sprint Planning · Handoff" },
  { label: "Enterprise Platforms", desc: "IBM Carbon · Complex Systems" },
  { label: "Design Leadership", desc: "Critique · Mentorship · Vision" },
  { label: "Developer Handoff", desc: "Zeplin · Inspect · Specs" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate for seamless loop
  const items = [...capabilities, ...capabilities];

  return (
    <section
      id="skills"
      className="py-24 border-y border-[#1F1F1F] overflow-hidden"
      ref={ref}
      aria-label="Capabilities"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="px-6 lg:px-12 max-w-7xl mx-auto mb-12"
      >
        <p className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.3em] mb-3">
          [ 03 - Capabilities ]
        </p>
        <h2
          className="font-display font-bold text-[#F5F5F5]"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          Skills that ship.
        </h2>
      </motion.div>

      {/* Horizontal scroll strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden py-3">
          <motion.div
            className="flex gap-3 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((cap, i) => (
              <div
                key={i}
                className="group flex-shrink-0 border border-[#1F1F1F] bg-[#111111] hover:border-[#CC310E]/40 hover:bg-[#111111] transition-all duration-300 px-5 py-4 min-w-[200px]"
              >
                <p className="font-mono text-xs text-[#F5F5F5] uppercase tracking-[0.15em] mb-1 group-hover:text-[#CC310E] transition-colors duration-200">
                  {cap.label}
                </p>
                <p className="font-mono text-[10px] text-[#888888] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - reverse */}
        <div className="overflow-hidden py-3">
          <motion.div
            className="flex gap-3 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((cap, i) => (
              <div
                key={i}
                className="group flex-shrink-0 border border-[#1F1F1F] bg-[#111111] hover:border-[#CC310E]/40 transition-all duration-300 px-5 py-4 min-w-[200px]"
              >
                <p className="font-mono text-xs text-[#888888] uppercase tracking-[0.15em] mb-1 group-hover:text-[#F5F5F5] transition-colors duration-200">
                  {cap.label}
                </p>
                <p className="font-mono text-[10px] text-[#888888]/50 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
