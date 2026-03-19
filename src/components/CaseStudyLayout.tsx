"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import React from "react";

export interface RichSection {
  label: string;
  content?: string | string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  highlight?: string; // pull-quote or bold callout
  twoCol?: boolean; // two-column image grid
  images?: string[]; // multiple images in a row/grid
  imageCaptions?: string[];
  customContent?: React.ReactNode; // fully custom JSX for this section
}

interface CaseStudyProps {
  number: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tools: string[];
  heroImage: string;
  overview: string;
  challenge: string;
  metrics?: Array<{ value: string; label: string }>;
  richSections?: RichSection[];
  // Legacy props kept for backward compat
  sections?: Array<{ label: string; content: string | string[] }>;
  images?: string[];
  nextHref: string;
  nextTitle: string;
  prevHref?: string;
  children?: React.ReactNode;
}

export default function CaseStudyLayout(props: CaseStudyProps) {
  return (
    <>
      <main className="bg-[#080808] min-h-screen">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
          <div className="absolute inset-0 bg-[#0d0d0d]">
            <Image
              src={props.heroImage}
              alt={props.title}
              fill
              className="object-contain opacity-70"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]/50" />
          </div>

          <div className="relative z-10 h-full flex items-end pb-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-mono text-xs text-[#CC310E] uppercase tracking-[0.3em] mb-4"
              >
                {props.number} · {props.year}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                className="font-display font-bold text-[#F5F5F5] leading-tight"
                style={{ fontSize: "clamp(32px, 6vw, 80px)" }}
              >
                {props.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[#888888] text-lg mt-2 font-mono"
              >
                {props.subtitle}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Meta bar */}
        <div className="border-b border-[#1F1F1F] px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-10 py-8">
              <div>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-1.5">
                  Role
                </p>
                <p className="text-[#F5F5F5] text-sm">{props.role}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-1.5">
                  Tools
                </p>
                <p className="text-[#F5F5F5] text-sm">{props.tools.join(", ")}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-1.5">
                  Year
                </p>
                <p className="text-[#F5F5F5] text-sm">{props.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 lg:px-12 max-w-4xl mx-auto py-24">
          {/* Overview */}
          <section className="mb-20">
            <p className="font-mono text-[10px] text-[#CC310E] uppercase tracking-[0.25em] mb-4">
              Overview
            </p>
            <p className="text-[#888888] text-lg leading-relaxed">
              {props.overview}
            </p>
          </section>

          {/* Challenge - callout */}
          <section className="mb-20 pl-8 border-l-2 border-[#CC310E]">
            <p className="font-mono text-[10px] text-[#CC310E] uppercase tracking-[0.25em] mb-4">
              The Challenge
            </p>
            <p className="font-display text-2xl font-bold text-[#F5F5F5] leading-snug">
              {props.challenge}
            </p>
          </section>

          {/* Rich sections */}
          {props.richSections?.map((section, i) => (
            <section key={i} className="mb-20">
              {/* Section label */}
              <p className="font-mono text-[10px] text-[#CC310E] uppercase tracking-[0.25em] mb-3">
                {section.label}
              </p>

              {/* Highlight / pull-quote */}
              {section.highlight && (
                <p className="font-display text-xl lg:text-2xl font-bold text-[#F5F5F5] leading-snug mb-6">
                  {section.highlight}
                </p>
              )}

              {/* Custom JSX content */}
              {section.customContent && section.customContent}

              {/* Text content */}
              {!section.customContent && section.content &&
                (Array.isArray(section.content) ? (
                  <ul className="space-y-3 mb-8">
                    {section.content.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[#888888] leading-relaxed"
                      >
                        <span className="text-[#CC310E] mt-1 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#888888] leading-relaxed mb-8">
                    {section.content}
                  </p>
                ))}

              {/* Single image */}
              {section.image && !section.twoCol && (
                <div className="mb-3">
                  <div className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? section.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {section.imageCaption && (
                    <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center">
                      {section.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* Multi-image grid */}
              {section.images && section.images.length > 0 && (
                <div
                  className={`grid gap-3 ${
                    section.twoCol || section.images.length === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : section.images.length === 3
                      ? "grid-cols-1 md:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {section.images.map((img, j) => (
                    <div key={j}>
                      <div
                        className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <Image
                          src={img}
                          alt={
                            section.imageCaptions?.[j] ??
                            section.imageAlt ??
                            `Screen ${j + 1}`
                          }
                          fill
                          className="object-contain"
                        />
                      </div>
                      {section.imageCaptions?.[j] && (
                        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center">
                          {section.imageCaptions[j]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Legacy sections */}
          {props.sections?.map((section, i) => (
            <section key={i} className="mb-16">
              <h2 className="font-display text-xl font-bold text-[#F5F5F5] mb-5">
                {section.label}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-3">
                  {section.content.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[#888888] leading-relaxed"
                    >
                      <span className="text-[#CC310E] mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#888888] leading-relaxed">
                  {section.content}
                </p>
              )}
            </section>
          ))}

          {/* Metrics */}
          {props.metrics && props.metrics.length > 0 && (
            <section className="mb-20">
              <p className="font-mono text-[10px] text-[#CC310E] uppercase tracking-[0.25em] mb-8">
                Outcome
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1F1F1F]">
                {props.metrics.map((m, i) => (
                  <div key={i} className="bg-[#111111] p-8 text-center">
                    <p className="font-display text-4xl font-bold text-[#F5F5F5] mb-2">
                      {m.value}
                    </p>
                    <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest leading-relaxed">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Legacy images gallery */}
          {!props.richSections && props.images && props.images.length > 0 && (
            <section className="mb-20">
              <h2 className="font-display text-xl font-bold text-[#F5F5F5] mb-8">
                Design Screens
              </h2>
              <div className="flex flex-col gap-4">
                {props.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/9] bg-[#111111] border border-[#1F1F1F] overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Screen ${i + 1}`}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Children override */}
          {props.children}

          {/* Next project */}
          <div className="border-t border-[#1F1F1F] pt-16 mt-8">
            <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.25em] mb-6">
              Next Project
            </p>
            <Link href={props.nextHref} className="group flex items-center justify-between">
              <h3
                className="font-display font-bold text-[#F5F5F5] group-hover:text-[#CC310E] transition-colors duration-200"
                style={{ fontSize: "clamp(24px, 4vw, 48px)" }}
              >
                {props.nextTitle}
              </h3>
              <span className="text-2xl text-[#888888] group-hover:text-[#CC310E] group-hover:translate-x-2 transition-all duration-200">
                →
              </span>
            </Link>
          </div>

          {/* Back */}
          <div className="mt-12">
            <Link
              href="/#work"
              className="font-mono text-xs text-[#888888] uppercase tracking-widest hover:text-[#F5F5F5] transition-colors duration-200"
            >
              ← Back to Work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
