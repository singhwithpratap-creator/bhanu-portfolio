import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "QuickSilver 2.0 KPI Dashboard - Bhanu Parmar",
  description:
    "Owned end-to-end UX for Sanofi's enterprise dashboard redesign — extracting business insights from 100+ stakeholders to transform an 11-page data warehouse into a decision-first tool, plus Mercury, an AI assistant layer.",
};

/* ── tiny reusable blocks ── */

function StatGrid({ stats }: { stats: { value: string; label: string; sub?: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1F1F1F] my-8">
      {stats.map((s, i) => (
        <div key={i} className="bg-[#111111] p-6 text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-1">{s.value}</p>
          <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest leading-relaxed">{s.label}</p>
          {s.sub && <p className="font-mono text-[9px] text-[#555555] mt-1">{s.sub}</p>}
        </div>
      ))}
    </div>
  );
}

function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="font-mono text-[10px] text-[#CC310E] bg-[#CC310E]/10 border border-[#CC310E]/20 px-2 py-1 shrink-0 mt-0.5">{num}</span>
      <div>
        <p className="text-[#F5F5F5] text-sm font-bold mb-1">{title}</p>
        <p className="text-[#888888] text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function PrincipleCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-[#111111] border border-[#1F1F1F] p-5">
      <p className="text-lg mb-2">{icon}</p>
      <p className="text-[#F5F5F5] text-sm font-bold mb-1">{title}</p>
      <p className="text-[#888888] text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

function ShotGrid({ shots, cols = 2 }: { shots: { src: string; caption: string }[]; cols?: 2 | 3 | 4 }) {
  const colClass = cols === 4 ? "grid-cols-2 md:grid-cols-4" : cols === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";
  return (
    <div className={`grid gap-3 my-6 ${colClass}`}>
      {shots.map((s, i) => (
        <div key={i}>
          <div className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden" style={{ aspectRatio: "3/2" }}>
            <Image src={s.src} alt={s.caption} fill className="object-contain" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center">{s.caption}</p>
        </div>
      ))}
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-[#888888] leading-relaxed mb-4">{children}</p>;
}

function ConceptNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest border-l-2 border-[#CC310E] pl-3 my-6 leading-relaxed">
      {children}
    </p>
  );
}

const M = "/images/cs05/mercury";

export default function QuickSilverPage() {
  return (
    <CaseStudyLayout
      number="CS 05"
      title="QuickSilver 2.0"
      subtitle="KPI Dashboard Redesign — Sanofi US Vaccines"
      year="2026"
      role="UX & Product Designer (Sole Designer)"
      tools={["Figma", "FigJam", "Power BI", "Snowflake", "Claude AI", "AI / LLM UX"]}
      heroImage="/images/cs05/cover-territory-hub.png"
      overview="As the sole UX designer, I took full ownership of transforming Sanofi's 11-page Power BI dashboard into a focused hub-and-spoke decision tool. I extracted business insights from 100+ stakeholders through facilitated workshops, contextual inquiry, and brainstorming sessions — then translated them into personas, user journeys, business questions, and a new information architecture grounded in progressive disclosure, mental model alignment, and cognitive load reduction. On top of the new structure, I designed Mercury — an AI assistant that answers territory questions in plain language, shows where every number came from, and carries the same answer from desk to phone."
      challenge="An 11-page, 69-KPI data warehouse with no hierarchy, no progressive disclosure, and pages organized by database tables instead of user tasks. SAMs spent 26 manual steps every month assembling a critical customer document because the dashboard wasn't designed around their real workflow."
      metrics={[
        { value: "100+", label: "Stakeholders Consulted" },
        { value: "58%", label: "Fewer PRT Steps" },
        { value: "64%", label: "Fewer Clicks" },
        { value: "7/9", label: "Tasks on Arrival" },
      ]}
      richSections={[
        /* ───────── OWNERSHIP & PROCESS ───────── */
        {
          label: "01 — My Process: Extracting Business Insights",
          highlight: "I built the research practice from scratch and facilitated every session myself.",
          customContent: (
            <div className="flex flex-col gap-5 mt-4 mb-8">
              <ProcessStep num="01" title="Facilitated Workshops & Brainstorming" desc="Cross-functional sessions with SAMs, regional directors, product owners, data engineers, and the Sapphire contract tool team." />
              <ProcessStep num="02" title="Contextual Inquiry with 100+ Users" desc="Observed SAMs navigating QuickSilver 1.0 during real customer prep — not in a lab, in their actual workflow." />
              <ProcessStep num="03" title="Business Question Extraction" desc="Distilled hundreds of data requests into 3 core questions every SAM visit revolves around." />
              <ProcessStep num="04" title="Comprehensive KPI Audit" desc="Cataloged all 69 KPIs across 7 screens — 14 repeating, 2 missing, 4 infeasible." />
              <ProcessStep num="05" title="User Journey Mapping" desc="Mapped end-to-end PRT assembly workflow, revealing the 26-step pain point that became the project's success metric." />
              <ProcessStep num="06" title="Persona & IA Development" desc="Built the primary SAM persona, defined the hub-and-spoke information architecture around how users actually think." />
            </div>
          ),
        },

        /* ───────── THREE BUSINESS QUESTIONS ───────── */
        {
          label: "02 — Three Questions That Drive Every Visit",
          highlight: "I extracted these from workshops — they weren't documented anywhere.",
          customContent: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1F1F1F] my-6">
              <div className="bg-[#111111] p-6">
                <p className="font-mono text-[10px] text-[#CC310E] tracking-widest mb-2">Q1 — ANALYZE</p>
                <p className="text-[#F5F5F5] text-sm font-bold mb-2">&ldquo;What has been the account performance?&rdquo;</p>
                <p className="text-[#888888] text-xs">→ Performance Overview</p>
              </div>
              <div className="bg-[#111111] p-6">
                <p className="font-mono text-[10px] text-[#CC310E] tracking-widest mb-2">Q2 — MONETIZE</p>
                <p className="text-[#F5F5F5] text-sm font-bold mb-2">&ldquo;What has the customer saved on contract?&rdquo;</p>
                <p className="text-[#888888] text-xs">→ Contract & Eligibility</p>
              </div>
              <div className="bg-[#111111] p-6">
                <p className="font-mono text-[10px] text-[#CC310E] tracking-widest mb-2">Q3 — PLAN</p>
                <p className="text-[#F5F5F5] text-sm font-bold mb-2">&ldquo;What&rsquo;s the seasonal pre-book vs in-season picture?&rdquo;</p>
                <p className="text-[#888888] text-xs">→ Market & Seasonality</p>
              </div>
            </div>
          ),
        },

        /* ───────── PROBLEM: SCREENS ───────── */
        {
          label: "03 — The Problem: Information Overload",
          highlight: "5 of 8 pages exceed one screen. The landing page has zero data.",
          image: "/images/cs05/problem-screens.png",
          imageAlt: "Page height audit",
          imageCaption: "Page height audit: Ops & Risk alone is 5.5 screens. The landing page carries 0 numbers.",
        },

        /* ───────── PROBLEM: PRT ───────── */
        {
          label: "04 — The Problem: Broken Workflows",
          highlight: "26 manual steps to assemble 4 PRT pages. Every month. For every SAM.",
          image: "/images/cs05/problem-prt.png",
          imageAlt: "PRT assembly step comparison",
          imageCaption: "Each dot = one manual step. Purple = steps in 2.0. 26 → 11 steps, 58% reduction.",
        },

        /* ───────── UX PRINCIPLES ───────── */
        {
          label: "05 — UX Strategy: How I Solved It",
          customContent: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
              <PrincipleCard icon="◎" title="Progressive Disclosure" desc="Summary → detail → drill-down. Users control their depth at every level." />
              <PrincipleCard icon="◈" title="Mental Model Alignment" desc="Pages organized by user questions (ANALYZE, MONETIZE, PLAN), not database tables." />
              <PrincipleCard icon="◇" title="Information Overload Reduction" desc="69 KPIs → 52 unique. Strict no-repetition rule: each KPI lives on exactly one page." />
              <PrincipleCard icon="◆" title="Hub-and-Spoke Navigation" desc="Territory Hub as daily entry point. Child pages for deep dives. Nothing buried." />
            </div>
          ),
          image: "/images/cs05/solution-architecture.png",
          imageAlt: "Hub-and-spoke architecture",
          imageCaption: "One hub, four children, each owns one question. Global filter on every page.",
        },

        /* ───────── TERRITORY HUB ───────── */
        {
          label: "06 — Territory Hub: Your Morning Dashboard",
          highlight: "From \"where do I go?\" to \"here's what's happening\" — zero clicks to your first number.",
          image: "/images/cs05/territory-hub.png",
          imageAlt: "Territory Hub",
          imageCaption: "Four hero KPI cards (each linking to its child page), Top 5 accounts, Active Alerts, Flu Pre-Book status.",
        },

        /* ───────── BEFORE/AFTER HUB ───────── */
        {
          label: "07 — Before → After: Territory Hub",
          highlight: "2 pages before your first number → 0. Three new measures that didn't exist anywhere in live.",
          image: "/images/cs05/before-after-hub.png",
          imageAlt: "Before vs After Territory Hub",
          imageCaption: "Left: Live (1 click, 4 tiles). Right: Proposed (0 clicks, 8 figures, Top 5 table, Alerts donut).",
        },

        /* ───────── PERFORMANCE OVERVIEW ───────── */
        {
          label: "08 — Performance Overview",
          highlight: "5 clicks + scroll → 2 clicks, no scroll. Two overlapping pages merged into one.",
          image: "/images/cs05/performance-overview.png",
          imageAlt: "Performance Overview",
          imageCaption: "Account revenue, doses, product mix donut, revenue by month with category chip filters.",
        },

        /* ───────── BEFORE/AFTER PERFORMANCE ───────── */
        {
          label: "09 — Before → After: Performance Overview",
          image: "/images/cs05/before-after-performance.png",
          imageAlt: "Before vs After Performance Overview",
          imageCaption: "Left: 3.7 screens tall, 5 clicks. Right: fits one viewport, 2 clicks, peak season annotated.",
        },

        /* ───────── CONTRACT ───────── */
        {
          label: "10 — Contract & Eligibility",
          highlight: "Summary + link-out to Sapphire — respecting the tool ecosystem, not rebuilding it.",
          image: "/images/cs05/contract-eligibility.png",
          imageAlt: "Contract & Eligibility",
          imageCaption: "Savings, spend breakdown, price-per-dose treemap, and contract performance table.",
        },

        /* ───────── MARKET ───────── */
        {
          label: "11 — Market & Seasonality",
          highlight: "INVEST / WATCH / DEFEND / PROTECT — the most strategic visualization on the dashboard.",
          image: "/images/cs05/market-seasonality.png",
          imageAlt: "Market & Seasonality",
          imageCaption: "Pre-book rate, market share, competitive scatter plot with strategic quadrants, seasonal trends.",
        },

        /* ───────── OPS + ROSTER ───────── */
        {
          label: "12 — Operations & Risk + Membership Roster",
          highlight: "4 pages → 1 risk-first view. 24 columns → 6, expiry-action-first.",
          images: ["/images/cs05/operations-risk.png", "/images/cs05/membership-roster.png"],
          imageCaptions: [
            "Operations: $373K at risk surfaced immediately across 6 consolidated cards.",
            "Roster: 4 urgency tiles, 6-column table, 7 system IDs moved to detail panel.",
          ],
        },

        /* ───────── MERCURY: AI LAYER ───────── */
        {
          label: "13 — Mercury: An AI Assistant Inside the Dashboard",
          highlight: "The redesign cut the clicks. Mercury cuts the stitching — one question, answered from the same numbers the dashboard shows.",
          customContent: (
            <div className="mb-6">
              <BodyText>
                Even after the redesign, a SAM preparing for a customer meeting still visited several pages and pieced the story together in their head. I designed Mercury, QuickSilver&rsquo;s AI assistant, so a SAM can ask a question the way they would say it — and get an answer grounded in their own territory data, with every number traced back to its page.
              </BodyText>
              <BodyText>
                I told the design as one story in two acts: <span className="text-[#F5F5F5]">Act 1</span>, Jason at his desk; <span className="text-[#F5F5F5]">Act 2</span>, Jason on his phone ten minutes before meeting Ascension Health. A 9-step guided prototype walks reviewers through it.
              </BodyText>
              <ConceptNote>Concept · Illustrative data reused from the Territory Hub and Performance Overview mockups. PRT fields and alert details shown as placeholders.</ConceptNote>
            </div>
          ),
          image: `${M}/01-meet-mercury.png`,
          imageAlt: "Territory Hub with the Ask Mercury button and the first step of the guided walkthrough",
          imageCaption: "Step 1 of 9: Ask Mercury lives next to Feedback on every page.",
        },

        {
          label: "14 — Act 1 · Ask in Plain Language, Check the Work",
          highlight: "Three rules shaped the chat panel: start from the user's filters, never show a blank box, always show the work.",
          customContent: (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
                <PrincipleCard icon="◎" title="Start From Their Filters" desc="A chip reads “Using your filters: Columbus OH · Jan – Sep 2023”. Mercury never guesses the territory or date range." />
                <PrincipleCard icon="◈" title="No Blank Box" desc="Quick starters map to the core SAM business questions — accounts needing attention, year-over-year, flu pre-book." />
                <PrincipleCard icon="◆" title="Show the Work" desc="Every answer opens with “How I read your request” and ends with source chips that link back to the page." />
              </div>
              <ShotGrid shots={[
                { src: `${M}/02-ask-plain-language.png`, caption: "Quick starters + free-text question" },
                { src: `${M}/03-answer-with-sources.png`, caption: "Answer with its reading, a table and sources" },
              ]} />
            </>
          ),
        },

        {
          label: "15 — Designing the Wait",
          highlight: "A spinner tells you nothing. Mercury shows each check it runs, then streams the answer in.",
          customContent: (
            <>
              <BodyText>
                AI answers take a few seconds. I designed two states for that gap, and reused them everywhere the AI works: a <span className="text-[#F5F5F5]">thinking</span> state that lists real steps (&ldquo;Applied your filters → Checked Top 5 Health Systems → Checking Active Alerts&rdquo;), and a <span className="text-[#F5F5F5]">streaming</span> state where the reading appears first and the answer fills in. Users see the answer is built from their data — not invented.
              </BodyText>
              <ShotGrid shots={[
                { src: `${M}/03a-thinking.png`, caption: "Chat · thinking steps" },
                { src: `${M}/03b-streaming.png`, caption: "Chat · streaming reply" },
                { src: `${M}/05a-generating.png`, caption: "Insights · generating with skeleton" },
                { src: `${M}/05b-streaming.png`, caption: "Insights · rows streaming in" },
              ]} />
            </>
          ),
        },

        {
          label: "16 — Act 1 · Account Insights Where the Data Lives",
          highlight: "One click adds an AI summary on the account page — so the SAM doesn't piece it together across five pages.",
          customContent: (
            <>
              <ul className="space-y-3 mb-6">
                {[
                  "Status and confidence labels up front (Growing · Confidence: medium) — the AI says how sure it is.",
                  "A two-to-three sentence account summary in plain language.",
                  "What's driving it: five insights, each tagged with its source page.",
                  "Suggested next steps, ranked by priority, each linking to the page where the SAM can act.",
                  "A footer reminder to check each insight against its source before sharing.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#888888] leading-relaxed">
                    <span className="text-[#CC310E] mt-1 shrink-0">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <ShotGrid shots={[
                { src: `${M}/04-insights-entry.png`, caption: "Generate account insights entry point" },
                { src: `${M}/05-account-insights.png`, caption: "Summary, sourced drivers, ranked next steps" },
              ]} />
            </>
          ),
        },

        {
          label: "17 — From Insight to Action: Into the PRT",
          highlight: "This is where AI meets the 26-step problem. Add to PRT draft drops the summary, insights and next steps in with one click.",
          content:
            "AI-written sections are marked in the draft so reviewers can tell them apart from what the SAM wrote. Everything else stays with the SAM to complete. A toast confirms the change and offers Undo — the AI never edits work silently. The draft opens in place or exports to PowerPoint.",
          image: `${M}/06-insight-to-prt.png`,
          imageAlt: "PRT draft panel with three AI sections marked Added and an undo toast",
          imageCaption: "AI sections marked as Added; other PRT sections left To complete; Undo always available.",
        },

        {
          label: "18 — Act 2 · From Desk to Customer Meeting",
          highlight: "Ten minutes before the meeting, the same assistant on his phone. Two numbers, three bullets, one story across devices.",
          customContent: (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
                <PrincipleCard icon="◎" title="Starters Fit the Moment" desc="On mobile they change to: recap an account, any open issues, show my PRT draft." />
                <PrincipleCard icon="◈" title="Messy Typing Is Fine" desc="“meeting ascension in 10 min, quick recap?” works. Nobody types perfectly on a phone." />
                <PrincipleCard icon="◇" title="Same Story Everywhere" desc="The recap reuses the PRT draft insights and the same confidence label, so desk and phone never disagree." />
                <PrincipleCard icon="◆" title="Follow-ups Keep Context" desc="“whats the alert about” needs no account name — and returns the alert plus a suggested talking point." />
              </div>
              <ShotGrid cols={3} shots={[
                { src: `${M}/07-mobile-start.png`, caption: "Meeting-focused quick starters" },
                { src: `${M}/08-mobile-recap.png`, caption: "Quick recap that fits a phone" },
                { src: `${M}/09-mobile-alert.png`, caption: "Open alert + talking point" },
              ]} />
              <ShotGrid cols={4} shots={[
                { src: `${M}/08a-mobile-thinking.png`, caption: "Recap · thinking" },
                { src: `${M}/08b-mobile-streaming.png`, caption: "Recap · streaming" },
                { src: `${M}/09a-mobile-thinking.png`, caption: "Follow-up · thinking" },
                { src: `${M}/09b-mobile-streaming.png`, caption: "Follow-up · streaming" },
              ]} />
              <p className="font-display text-lg font-bold text-[#F5F5F5] leading-snug mt-6">
                Jason walks in knowing the numbers, the open issue and a talking point — without opening five dashboard pages.
              </p>
            </>
          ),
        },

        {
          label: "19 — Trust Rules I Designed Into the AI",
          highlight: "In a pharma sales tool, a confident wrong number is worse than no number. Every rule below makes the AI checkable.",
          customContent: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1F1F1F] my-6">
              {[
                ["Use the user's own filters", "Filter chip on every panel and answer"],
                ["Show how the question was read", "“How I read your request” block"],
                ["Every number has a source", "Source chips + links to the page"],
                ["Say how sure it is", "Status and confidence labels"],
                ["Never edit work silently", "AI sections marked in the PRT, Undo"],
                ["Remind before sharing", "Disclaimer under the input and in insights"],
              ].map(([rule, how], i) => (
                <div key={i} className="bg-[#111111] p-5">
                  <p className="text-[#F5F5F5] text-sm font-bold mb-1">{rule}</p>
                  <p className="text-[#888888] text-xs leading-relaxed">{how}</p>
                </div>
              ))}
            </div>
          ),
        },

        /* ───────── CLICK COMPARISON ───────── */
        {
          label: "20 — Impact: Task-by-Task Comparison",
          highlight: "7 of 9 daily tasks answered on arrival. 2 tasks that were impossible now exist.",
          image: "/images/cs05/click-comparison.png",
          imageAlt: "Click comparison",
          imageCaption: "9 common SAM tasks measured. Clicks down 64%. Fill rate and active accounts: new capabilities.",
          customContent: (
            <StatGrid stats={[
              { value: "26→11", label: "PRT Steps / Month", sub: "58% reduction" },
              { value: "11→4", label: "Clicks Across Tasks", sub: "64% reduction" },
              { value: "0", label: "Clicks to First Number", sub: "Was 2 pages" },
              { value: "3", label: "New Measures Created", sub: "Fill rate, Active accts, Rev at risk" },
            ]} />
          ),
        },

        /* ───────── CONSTRAINTS ───────── */
        {
          label: "21 — Designing Within Enterprise Constraints",
          highlight: "Every interaction maps to a Power BI native capability.",
          content: [
            "Bookmarks for navigation, field parameters for dynamic columns, drillthrough for detail views, tooltip pages for hover detail — all Power BI native.",
            "Applied Sanofi's visual analytics style guide: brand purples, categorical palette, Segoe UI, sentiment colors reserved for +/- indicators only.",
          ],
          image: "/images/cs05/design-vision.png",
          imageAlt: "Design vision",
          imageCaption: "Less but clearer. An instinctive journey. Built for everyone.",
        },

        /* ───────── STRUCTURE ───────── */
        {
          label: "22 — Nothing Is Deleted",
          highlight: "Every live page has an owner, a route, and a preview on the hub.",
          image: "/images/cs05/new-structure.png",
          imageAlt: "New structure mapping",
          imageCaption: "11 pages → Hub + 4 children + Roster. Reorganized around how users actually think.",
        },
      ]}
      nextHref="/work/ibm-conference"
      nextTitle="IBM TechXchange Conference"
    />
  );
}
