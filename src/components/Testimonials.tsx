"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "next-themes";

const testimonials = [
  {
    quote:
      "I had the pleasure of managing Bhanu during the IBM TechXchange program, where he consistently proved himself to be an incredibly reliable and dedicated designer. He follows creative direction thoughtfully, delivers high-quality work, and approaches every project with a strong desire to learn and grow. What stands out most about Bhanu is his mindset — he's proactive, curious, and always willing to support others on the team. I highly recommend him for teams that value collaboration, ownership, and continuous growth.",
    author: "Jenny Sanchez",
    title: "Design Lead, Creative Direction",
    company: "IBM",
    initials: "JS",
    accent: "#CC310E",
    linkedin: "https://www.linkedin.com/in/jennyhsiaosanchez/",
  },
  {
    quote:
      "Working with Bhanu while at IBM reminded me of my days working in creative agencies. He brings a thoughtful, professional demeanor you would expect at a company like IBM, but the creativity and risk-taking you usually have to seek from an external agency. His curiosity and natural drive to try new tools and techniques make him an asset for teams looking for fresh ideas and thinking. He's a great teammate — I hope to work with him again in the future!",
    author: "Nick Ferry",
    title: "Tech & B2B Marketing, Digital Strategy",
    company: "Ex-IBM",
    initials: "NF",
    accent: "#CC310E",
    linkedin: "https://www.linkedin.com/in/ndferry/",
  },
  {
    quote:
      "I've had the pleasure of working with Bhanu on several high intensity design projects, and he has consistently impressed me with his exceptional talent and dedication. Bhanu has a remarkable vision for design — he not only understands the creative brief but also grasps the deeper concept behind every project, bringing ideas to life with precision and originality. Beyond his technical and creative strengths, Bhanu stands out for his kindness, professionalism, and excellent communication skills. Collaborating with him is effortless.",
    author: "Sophia Antar",
    title: "Senior Operations & Program Leader",
    company: "SaaS / AI",
    initials: "SA",
    accent: "#CC310E",
    linkedin: "https://www.linkedin.com/in/sophiaantar/",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.84 7.68 0.16 11.28 0L12.48 2.16C9.92 2.8 7.96 4.08 6.6 6C5.32 7.84 4.68 9.92 4.68 12.24H9.6V24H0ZM19.2 24V14.4C19.2 10.56 20.16 7.28 22.08 4.56C24.08 1.84 26.88 0.16 30.48 0L31.68 2.16C29.12 2.8 27.16 4.08 25.8 6C24.52 7.84 23.88 9.92 23.88 12.24H28.8V24H19.2Z"
        fill="#CC310E"
        opacity="0.3"
      />
    </svg>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 border-b border-[#1F1F1F] overflow-hidden"
      aria-label="Testimonials"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.3em] mb-3">
            [ 04 — Testimonials ]
          </p>
          <h2
            className="font-display font-bold text-[#F5F5F5]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Words from the room.
          </h2>
        </motion.div>

        {/* Large featured quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quote area */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8"
          >
            {/* Active testimonial */}
            <div className="relative">
              {/* Red accent bar */}
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#CC310E] via-[#CC310E]/40 to-transparent" />

              <div className="pl-6">
                <QuoteIcon />

                <div className="mt-6 overflow-hidden" style={{ minHeight: 180 }}>
                  {testimonials.map((t, i) => (
                    <motion.blockquote
                      key={i}
                      initial={false}
                      animate={{
                        opacity: active === i ? 1 : 0,
                        y: active === i ? 0 : 12,
                        position: active === i ? "relative" : "absolute",
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className={active === i ? "block" : "absolute inset-0 pointer-events-none"}
                    >
                      <p
                        className="leading-relaxed font-light"
                        style={{ fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.7, color: isLight ? "#1A1A1A" : "#C8C8C8" }}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      <footer className="mt-8 flex items-center gap-4">
                        {/* Avatar */}
                        <div
                          className="w-10 h-10 flex-shrink-0 border border-[#CC310E]/40 flex items-center justify-center"
                          style={{ background: isLight ? "#E8E6E4" : "#1A1A1A" }}
                        >
                          <span className="font-mono text-xs text-[#CC310E] tracking-wider">
                            {t.initials}
                          </span>
                        </div>
                        <div>
                          <p className="font-mono text-sm tracking-wide" style={{ color: isLight ? "#0A0A0A" : "#F5F5F5" }}>
                            {t.author}
                          </p>
                          <p className="font-mono text-xs mt-0.5" style={{ color: isLight ? "#444444" : "#555555" }}>
                            {t.title} · {t.company}
                          </p>
                        </div>
                        {/* LinkedIn badge */}
                        <a
                          href={t.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto opacity-50 hover:opacity-100 transition-opacity duration-200"
                          aria-label={`${t.author} on LinkedIn`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="#0A66C2"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </footer>
                    </motion.blockquote>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Selector column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-3"
          >
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group text-left border transition-all duration-300 px-5 py-4 focus:outline-none"
                style={{
                  borderColor: active === i ? "#CC310E" : isLight ? "#D0CECC" : "#1F1F1F",
                  background: active === i
                    ? "rgba(204,49,14,0.06)"
                    : isLight ? "#EBEBEA" : "#0D0D0D",
                }}
              >
                <div className="flex items-center gap-3 mb-1">
                  {/* Dot indicator */}
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300"
                    style={{ background: active === i ? "#CC310E" : isLight ? "#AAAAAA" : "#333" }}
                  />
                  <p className="font-mono text-xs tracking-widest uppercase transition-colors duration-300"
                    style={{ color: active === i ? (isLight ? "#0A0A0A" : "#F5F5F5") : isLight ? "#555555" : "#555555" }}>
                    {t.author}
                  </p>
                </div>
                <p className="font-mono text-[10px] pl-4.5"
                  style={{ color: active === i ? (isLight ? "#444444" : "#888888") : isLight ? "#888888" : "#333333" }}>
                  {t.title} · {t.company}
                </p>
              </button>
            ))}

            <p className="font-mono text-[10px] text-[#666666] mt-4 leading-relaxed border-l border-[#333333] pl-3">
              Via LinkedIn · November 2025
            </p>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-20 h-px bg-gradient-to-r from-[#CC310E]/60 via-[#CC310E]/20 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
