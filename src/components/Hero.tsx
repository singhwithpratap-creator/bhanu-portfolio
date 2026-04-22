"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ParticleCanvas from "./ParticleCanvas";

const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.9, ease: EASE },
  },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Video opacity: full at top, fades out as you scroll away
  const videoOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0]);
  // Parallax: video drifts up as you scroll
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
      aria-label="Hero - Bhanu Parmar, Product Designer"
    >
      {/* Video background - decorative, hidden from screen readers */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          style={{ opacity: videoOpacity, y: videoY }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/leadspace.mp4" type="video/mp4" />
        </motion.video>

        {/* Gradient overlays - keep left text area dark, right side shows video */}
        {/* Bottom-to-top fade so page transition is smooth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
        {/* Hard left fade - text lives here, must be fully legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent" />
        {/* Top vignette for nav area */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080808] to-transparent" />

        {/* Particle system */}
        <ParticleCanvas />
      </div>

      {/* Floating accent lines */}
      <div
        className="absolute right-12 top-1/3 h-32 w-px bg-gradient-to-b from-transparent via-[#CC310E]/40 to-transparent hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-16 top-1/4 h-48 w-px bg-gradient-to-b from-transparent via-[#CC310E]/20 to-transparent hidden lg:block"
        aria-hidden="true"
      />

      {/* Content - z-10 above all overlays */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-16">

        {/* Glass text block — only this inner div gets the frosted bg in light mode */}
        <div className="hero-text-block">
          {/* Label */}
          <motion.p
            {...fadeUp(0.3)}
            className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.35em] mb-10"
          >
            Portfolio · 2026
          </motion.p>

          {/* Main headline — float wrapper starts after fade-in */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -12 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            <h1
              className="font-display font-bold leading-[0.88] tracking-tight text-[#F5F5F5]"
              style={{ fontSize: "clamp(72px, 11vw, 150px)" }}
            >
              <div className="overflow-hidden mb-1">
                <motion.span {...fadeUp(0.5)} className="block">Bhanu</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span {...fadeUp(0.65)} className="block">
                  Parmar<span className="text-[#CC310E]">.</span>
                </motion.span>
              </div>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div {...fadeUp(0.85)} className="mt-8 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#CC310E]" aria-hidden="true" />
              <p className="font-mono text-sm text-[#888888] tracking-wide">
                Senior User Experience Designer.{" "}
                <span className="text-[#F5F5F5]">AI-Native.</span>{" "}
                Systems Thinker.
              </p>
            </div>
            <div className="flex items-center gap-3 pl-9">
              <p className="font-mono text-xs text-[#888888]/70 tracking-widest uppercase">
                Toronto · 4× Industry Award Winner ★
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fadeUp(1.0)}
            className="flex flex-wrap items-center gap-6 mt-14"
          >
            <Link
              href="/#work"
              className="group flex items-center gap-3 px-8 py-4 bg-[#CC310E] text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#a8280c] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC310E]"
            >
              View Work
              <span className="group-hover:translate-x-1.5 transition-transform duration-200" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/#contact"
              className="group flex items-center gap-2 font-mono text-xs text-[#888888] uppercase tracking-[0.2em] hover:text-[#F5F5F5] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC310E]"
            >
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator — anchored to section (h-screen), not content div */}
      <motion.div
        {...fadeUp(1.2)}
        className="absolute bottom-10 left-6 lg:left-12 z-10 flex items-center gap-3"
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-[#CC310E] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
        <span className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.3em]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
