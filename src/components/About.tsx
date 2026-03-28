"use client";

import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];
import { useRef } from "react";
import Image from "next/image";

const aiTools = [
  { name: "Figma", role: "Design & Prototyping", icon: "◆" },
  { name: "Adobe Creative Cloud", role: "Illustration & Motion", icon: "◧" },
  { name: "Midjourney", role: "Visual Ideation", icon: "◈" },
  { name: "Claude", role: "Design Strategy", icon: "◉" },
  { name: "Gemini", role: "Research & Analysis", icon: "◎" },
];

const stats = [
  { value: "7+", label: "Years experience" },
  { value: "F100", label: "Enterprise clients" },
  { value: "4🏆", label: "Industry awards" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      ref={ref}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.3em] mb-16"
      >
        [ 02 - About ]
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left - Headshot */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative"
        >
          <div className="relative aspect-[3/4] bg-[#111111] border border-[#1F1F1F] overflow-hidden">
            <Image
              src="/images/Profile image.png"
              alt="Bhanu Parmar - Senior UX Designer"
              fill
              className="object-cover object-top"
              style={{ transform: "scaleX(-1)" }}
            />
            {/* Blue bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CC310E] via-[#d94a1f] to-transparent" />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-px bg-[#1F1F1F] mt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#111111] p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-[#F5F5F5]">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Design Tools */}
          <div className="mt-6">
            <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.25em] mb-3">
              Design Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma",
                "Adobe Illustrator",
                "Photoshop",
                "InDesign",
                "After Effects",
                "Premiere Pro",
                "Miro",
                "Mural",
                "SQL",
                "HTML",
                "CSS",
                "Pencil & Ink",
                "Claude",
              ].map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[10px] text-[#888888] border border-[#1F1F1F] bg-[#111111] px-3 py-1.5 uppercase tracking-widest hover:border-[#CC310E]/40 hover:text-[#F5F5F5] transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <div className="flex flex-col justify-start pt-2">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
            className="font-mono text-[10px] text-[#CC310E] uppercase tracking-[0.3em] mb-4"
          >
            Human insight · AI velocity
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-display font-bold text-[#F5F5F5] leading-tight mb-6"
            style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
          >
            I design systems.
            <br />
            I ship with{" "}
            <span className="text-[#CC310E]">AI.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#888888] leading-relaxed mb-5 text-base lg:text-lg"
          >
            Senior UX Designer with{" "}
            <span className="text-[#F5F5F5]">7+ years</span> shipping
            enterprise-grade AI and data products for Fortune 100 clients. My
            workflow pairs{" "}
            <span className="text-[#F5F5F5]">rigorous systems thinking</span>{" "}
            with an AI-native toolkit - Claude for strategy, Midjourney for
            visual ideation, Figma AI for velocity - so I spend my time on
            what machines can{"'"}t replicate:{" "}
            <span className="text-[#F5F5F5]">empathy and judgment.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#888888] leading-relaxed mb-5 text-base lg:text-lg"
          >
            At{" "}
            <span className="text-[#F5F5F5]">IBM TechXchange</span> I lead
            end-to-end UX for a global conference platform - from discovery
            workshops and WCAG-compliant component systems to shipped product.
            Previously designing at{" "}
            <span className="text-[#F5F5F5]">dbrand</span> and{" "}
            <span className="text-[#F5F5F5]">Dell Technologies</span>, where
            I earned{" "}
            <span className="text-[#F5F5F5]">two industry awards</span> for
            creative excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {[
              "IBM Entrepreneur Award ★ 2025",
              "Bronze Stevie Award ★ 2025",
              "Dell Silver Award ★ 2016",
              "Dell Bronze Award ★ 2015",
            ].map((award) => (
              <span
                key={award}
                className="font-mono text-[10px] text-[#CC310E] border border-[#CC310E]/30 bg-[#CC310E]/5 px-3 py-1 uppercase tracking-widest"
              >
                {award}
              </span>
            ))}
          </motion.div>

          {/* AI Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.25em] mb-4">
              AI + Design Stack
            </p>
            <div className="grid grid-cols-2 gap-2">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group border border-[#1F1F1F] bg-[#111111] p-4 hover:border-[#CC310E]/60 hover:bg-[#111111] transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#CC310E] text-xs" aria-hidden="true">
                      {tool.icon}
                    </span>
                    <p className="text-[#F5F5F5] font-semibold text-sm group-hover:text-[#CC310E] transition-colors duration-200">
                      {tool.name}
                    </p>
                  </div>
                  <p className="text-[#888888] text-xs">{tool.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
