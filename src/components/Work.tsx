"use client";

import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Program Website: IBM TechXchange",
    subtitle: "Website Design & Experience",
    tags: ["UX Design", "Web", "Design System"],
    href: "/work/ibm-conference",
    image: "/images/cs01-thumb.gif",
    year: "2025",
    accent: "Enterprise Web",
  },
  {
    number: "02",
    title: "Creative Advertising",
    subtitle: "Visual Design and Campaigns",
    tags: ["Brand", "Advertising", "Midjourney"],
    href: "/work/creative-advertising",
    image: "/images/cs04/holiday-nerd.gif",
    year: "2024",
    accent: "Campaign",
    objectPosition: "center",
  },
  {
    number: "03",
    title: "Product Design: Enterprise Asset Management",
    subtitle: "Enterprise Asset Management Redesign",
    tags: ["UX Design", "Enterprise SaaS", "AI"],
    href: "/eam-casestudy.html",
    image: "/images/cs03-thumb.png",
    year: "2025",
    accent: "Enterprise",
    objectFit: "contain",
  },
  {
    number: "04",
    title: "Mobile Application: IBM TechXchange",
    subtitle: "Event App Design",
    tags: ["Product Design", "Mobile", "iOS"],
    href: "/work/ibm-mobile",
    image: "/images/cs04-thumb.png",
    year: "2025",
    accent: "Mobile App",
  },
];

type Project = (typeof projects)[0];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.13,
        ease: EASE,
      }}
    >
      <Link href={project.href} className="group block">
        <div className="relative overflow-hidden bg-[#111111] border border-[#1F1F1F] hover:border-[#CC310E]/30 transition-all duration-500">
          {/* Image area */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0d]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized={project.image.endsWith(".gif")}
              className={`transition-transform duration-700 group-hover:scale-[1.04] opacity-80 group-hover:opacity-100 ${"objectFit" in project && project.objectFit === "contain" ? "object-contain" : "object-cover"} ${"objectPosition" in project && project.objectPosition === "center" ? "object-center" : "object-top"}`}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#CC310E]/0 group-hover:bg-[#CC310E]/5 transition-colors duration-500" />
            {/* Red bottom border — matches About profile pic */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CC310E] via-[#d94a1f] to-transparent" />
            {/* Number badge */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#CC310E] bg-[#080808]/90 px-2.5 py-1 border border-[#CC310E]/20 tracking-widest">
              {project.number}
            </div>
            {/* Accent badge */}
            <div className="absolute top-4 right-4 font-mono text-[10px] text-[#888888] bg-[#080808]/90 px-2.5 py-1 border border-[#1F1F1F] tracking-widest uppercase">
              {project.accent}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 border-t border-[#1F1F1F]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display font-bold text-[#F5F5F5] mb-1 group-hover:text-[#CC310E] transition-colors duration-300 leading-snug" style={{ fontSize: project.title.length > 30 ? "0.9rem" : "1.125rem" }}>
                  {project.title}
                </h3>
                <p className="text-[#888888] text-sm font-mono">
                  {project.subtitle}
                </p>
              </div>
              <span className="text-[#888888] text-base group-hover:text-[#CC310E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 mt-1">
                ↗
              </span>
            </div>

            {/* Tags + Year */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[#888888] border border-[#1F1F1F] px-2 py-0.5 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[10px] text-[#888888] tracking-widest">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto" ref={ref}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-4">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.3em] mb-3"
          >
            [ 01 - Selected Work ]
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-[#F5F5F5] leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Work that earns
            <br />
            recognition.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-xs text-[#888888] max-w-xs leading-relaxed"
        >
          Selected case studies across product, mobile, AI workflows, and brand
          design.
        </motion.p>
      </div>

      {/* Grid - 2×2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}
