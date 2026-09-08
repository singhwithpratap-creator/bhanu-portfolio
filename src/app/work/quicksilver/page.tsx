import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "QuickSilver 2.0 KPI Dashboard - Bhanu Parmar",
  description:
    "Owned end-to-end UX for Sanofi's enterprise dashboard redesign — extracting business insights from 100+ stakeholders to transform an 11-page data warehouse into a decision-first tool.",
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

export default function QuickSilverPage() {
  return (
    <CaseStudyLayout
      number="CS 05"
      title="QuickSilver 2.0"
      subtitle="KPI Dashboard Redesign — Sanofi US Vaccines"
      year="2026"
      role="UX & Product Designer (Sole Designer)"
      tools={["Figma", "FigJam", "Power BI", "Snowflake", "Claude AI"]}
      heroImage="/images/cs05/cover-territory-hub.png"
      overview="As the sole UX designer, I took full ownership of transforming Sanofi's 11-page Power BI dashboard into a focused hub-and-spoke decision tool. I extracted business insights from 100+ stakeholders through facilitated workshops, contextual inquiry, and brainstorming sessions — then translated them into personas, user journeys, business questions, and a new information architecture grounded in progressive disclosure, mental model alignment, and cognitive load reduction."
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

        /* ───────── CLICK COMPARISON ───────── */
        {
          label: "13 — Impact: Task-by-Task Comparison",
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
          label: "14 — Designing Within Enterprise Constraints",
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
          label: "15 — Nothing Is Deleted",
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
