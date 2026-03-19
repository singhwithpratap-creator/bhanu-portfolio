"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      ref={ref}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.3em] mb-12"
      >
        [ 05 - Let&apos;s Talk ]
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        className="font-display font-bold text-[#F5F5F5] leading-[0.9] mb-16"
        style={{ fontSize: "clamp(44px, 8vw, 110px)" }}
      >
        Ready to build
        <br />
        something{" "}
        <span className="text-[#CC310E]">exceptional?</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="mailto:bhanu99parmar@gmail.com"
          className="group flex items-center gap-3 px-8 py-4 bg-[#CC310E] text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#a8280c] transition-colors duration-200 w-fit"
        >
          Send Email
          <span className="group-hover:translate-x-1.5 transition-transform duration-200">
            →
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/bhanu-parmar/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 border border-[#1F1F1F] text-[#F5F5F5] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#CC310E] hover:text-[#CC310E] transition-all duration-200 w-fit"
        >
          LinkedIn
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
            ↗
          </span>
        </a>
      </motion.div>

      {/* Divider decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-24 h-px bg-gradient-to-r from-[#CC310E] via-[#1F1F1F] to-transparent origin-left"
      />
    </section>
  );
}
