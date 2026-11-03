import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import MercuryDemo from "@/components/MercuryDemo";
import React from "react";

export const metadata: Metadata = {
  title: "QuickSilver 2.0 KPI Dashboard - Bhanu Parmar",
  description:
    "How I redesigned Sanofi's 11-page Power BI dashboard into a simple decision tool, working with 100+ stakeholders, and added Mercury, an AI assistant that answers questions in plain language.",
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

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-[#888888] leading-relaxed mb-4">{children}</p>;
}

export default function QuickSilverPage() {
  return (
    <CaseStudyLayout
      number="CS 05"
      title="QuickSilver 2.0"
      subtitle="KPI Dashboard Redesign · Sanofi US Vaccines"
      year="2026"
      role="UX & Product Designer (Sole Designer)"
      tools={["Figma", "FigJam", "Power BI", "Snowflake", "Claude AI", "AI / LLM UX"]}
      heroImage="/images/cs05/cover-territory-hub.png"
      overview="I was the only designer on this project. Sanofi's sales teams had an 11-page Power BI dashboard that was hard to use, so I sat down with more than 100 people who use it, ran workshops, and watched them work. From that, I built personas, journeys and a new structure: one home page with four focused pages around it, each showing just what you need first. Then I designed Mercury, an AI assistant you can ask questions in plain words. It shows where every number comes from, and it works the same on your desk and on your phone."
      challenge="The old dashboard had 11 pages and 69 KPIs, with no clear order. Pages followed how the database was built, not how people work. Every month, each account manager (SAM) took 26 manual steps just to put together one key customer document, because the dashboard didn't fit their real day."
      metrics={[
        { value: "100+", label: "Stakeholders Consulted" },
        { value: "58%", label: "Fewer PRT Steps" },
        { value: "64%", label: "Fewer Clicks" },
        { value: "7/9", label: "Tasks on Arrival" },
      ]}
      richSections={[
        /* ───────── OWNERSHIP & PROCESS ───────── */
        {
          label: "01 · How I found what mattered",
          highlight: "There was no research to start from, so I set it up and ran every session myself.",
          customContent: (
            <div className="flex flex-col gap-5 mt-4 mb-8">
              <ProcessStep num="01" title="Workshops and brainstorming" desc="I brought SAMs, regional directors, product owners, data engineers and the Sapphire contract team into the same room." />
              <ProcessStep num="02" title="Watching 100+ people work" desc="I watched SAMs use QuickSilver 1.0 while they prepared for real customer meetings. Not in a lab, at their desks." />
              <ProcessStep num="03" title="Finding the real questions" desc="Hundreds of data requests came down to 3 questions that every customer visit is built around." />
              <ProcessStep num="04" title="Auditing every KPI" desc="I listed all 69 KPIs across 7 screens. 14 were repeated, 2 were missing and 4 couldn't be built." />
              <ProcessStep num="05" title="Mapping the monthly report" desc="I mapped how SAMs build their PRT each month. The 26-step pain point became how we measured success." />
              <ProcessStep num="06" title="Persona and structure" desc="I built the main SAM persona and a hub-and-spoke layout that matches how people actually think." />
            </div>
          ),
        },

        /* ───────── THREE BUSINESS QUESTIONS ───────── */
        {
          label: "02 · Three questions behind every visit",
          highlight: "These came out of the workshops. Nobody had written them down before.",
          customContent: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1F1F1F] my-6">
              <div className="bg-[#111111] p-6">
                <p className="font-mono text-[10px] text-[#CC310E] tracking-widest mb-2">Q1 · ANALYZE</p>
                <p className="text-[#F5F5F5] text-sm font-bold mb-2">&ldquo;How is this account doing?&rdquo;</p>
                <p className="text-[#888888] text-xs">→ Performance Overview</p>
              </div>
              <div className="bg-[#111111] p-6">
                <p className="font-mono text-[10px] text-[#CC310E] tracking-widest mb-2">Q2 · MONETIZE</p>
                <p className="text-[#F5F5F5] text-sm font-bold mb-2">&ldquo;How much has the customer saved on contract?&rdquo;</p>
                <p className="text-[#888888] text-xs">→ Contract & Eligibility</p>
              </div>
              <div className="bg-[#111111] p-6">
                <p className="font-mono text-[10px] text-[#CC310E] tracking-widest mb-2">Q3 · PLAN</p>
                <p className="text-[#F5F5F5] text-sm font-bold mb-2">&ldquo;What does pre-book vs in-season look like?&rdquo;</p>
                <p className="text-[#888888] text-xs">→ Market & Seasonality</p>
              </div>
            </div>
          ),
        },

        /* ───────── PROBLEM: SCREENS ───────── */
        {
          label: "03 · The problem: too much on every page",
          highlight: "5 of 8 pages didn't fit on one screen, and the home page showed no numbers at all.",
          image: "/images/cs05/problem-screens.png",
          imageAlt: "Page height audit",
          imageCaption: "Page height audit: Ops & Risk alone is 5.5 screens tall. The home page has 0 numbers.",
        },

        /* ───────── PROBLEM: PRT ───────── */
        {
          label: "04 · The problem: a painful monthly report",
          highlight: "26 manual steps to build 4 PRT pages. Every month, for every SAM.",
          image: "/images/cs05/problem-prt.png",
          imageAlt: "PRT assembly step comparison",
          imageCaption: "Each dot is one manual step. Purple shows the steps left in 2.0: 26 down to 11, 58% fewer.",
        },

        /* ───────── UX PRINCIPLES ───────── */
        {
          label: "05 · How I solved it",
          customContent: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
              <PrincipleCard icon="◎" title="Show a little, then more" desc="Summary first, then detail, then drill-down. People choose how deep to go." />
              <PrincipleCard icon="◈" title="Match how people think" desc="Pages follow the three questions (Analyze, Monetize, Plan), not database tables." />
              <PrincipleCard icon="◇" title="Less noise" desc="69 KPIs became 52. One simple rule: every KPI lives on exactly one page." />
              <PrincipleCard icon="◆" title="One home, four rooms" desc="Territory Hub is where you start each day. Each child page goes deep on one question." />
            </div>
          ),
          image: "/images/cs05/solution-architecture.png",
          imageAlt: "Hub-and-spoke architecture",
          imageCaption: "One hub, four child pages, each owning one question. The same filter works on every page.",
        },

        /* ───────── TERRITORY HUB ───────── */
        {
          label: "06 · Territory Hub: your morning dashboard",
          highlight: "From \"where do I go?\" to \"here's what's happening\", with your first number on screen right away.",
          image: "/images/cs05/territory-hub.png",
          imageAlt: "Territory Hub",
          imageCaption: "Four main KPI cards (each opens its page), top 5 accounts, active alerts and flu pre-book status.",
        },

        /* ───────── BEFORE/AFTER HUB ───────── */
        {
          label: "07 · Before and after: Territory Hub",
          highlight: "You used to go 2 pages deep to see a number. Now it's 0. Plus three new measures that didn't exist before.",
          image: "/images/cs05/before-after-hub.png",
          imageAlt: "Before vs After Territory Hub",
          imageCaption: "Left: today (1 click, 4 tiles). Right: new (0 clicks, 8 figures, top 5 table, alerts chart).",
        },

        /* ───────── PERFORMANCE OVERVIEW ───────── */
        {
          label: "08 · Performance Overview",
          highlight: "5 clicks and a scroll became 2 clicks and no scroll. Two overlapping pages became one.",
          image: "/images/cs05/performance-overview.png",
          imageAlt: "Performance Overview",
          imageCaption: "Account revenue, doses, product mix and revenue by month, with quick category filters.",
        },

        /* ───────── BEFORE/AFTER PERFORMANCE ───────── */
        {
          label: "09 · Before and after: Performance Overview",
          image: "/images/cs05/before-after-performance.png",
          imageAlt: "Before vs After Performance Overview",
          imageCaption: "Left: 3.7 screens tall, 5 clicks. Right: fits on one screen, 2 clicks, peak season marked.",
        },

        /* ───────── CONTRACT ───────── */
        {
          label: "10 · Contract & Eligibility",
          highlight: "A clear summary with a link out to Sapphire. I didn't rebuild a tool people already use.",
          image: "/images/cs05/contract-eligibility.png",
          imageAlt: "Contract & Eligibility",
          imageCaption: "Savings, spend breakdown, price per dose and contract performance.",
        },

        /* ───────── MARKET ───────── */
        {
          label: "11 · Market & Seasonality",
          highlight: "Invest, watch, defend, protect. The most strategic view on the whole dashboard.",
          image: "/images/cs05/market-seasonality.png",
          imageAlt: "Market & Seasonality",
          imageCaption: "Pre-book rate, market share, a competitor chart split into four zones, and seasonal trends.",
        },

        /* ───────── OPS + ROSTER ───────── */
        {
          label: "12 · Operations & Risk + Membership Roster",
          highlight: "4 pages became 1 view that puts risk first. 24 columns became 6.",
          images: ["/images/cs05/operations-risk.png", "/images/cs05/membership-roster.png"],
          imageCaptions: [
            "Operations: $373K at risk, visible right away across 6 cards.",
            "Roster: 4 urgency tiles, a 6-column table, and system IDs moved into a detail panel.",
          ],
        },

        /* ───────── MERCURY ───────── */
        {
          label: "13 · Mercury, the AI assistant",
          highlight: "The redesign cut the clicks. Mercury cuts the guesswork: ask a question, get an answer from the same numbers the dashboard shows.",
          customContent: (
            <>
              <BodyText>
                Even with the new layout, a SAM getting ready for a meeting still jumped between pages to piece the story together. So I designed Mercury. You ask it something the way you&rsquo;d ask a colleague, and it answers from your own territory data, telling you which page each number came from.
              </BodyText>
              <BodyText>
                Try it below. Act 1 is Jason at his desk. Act 2 is Jason on his phone, ten minutes before he meets Ascension Health.
              </BodyText>
              <MercuryDemo />
              <p className="text-[#F5F5F5] text-sm font-bold mt-10 mb-3">The rules I designed it around</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1F1F1F]">
                {[
                  ["Start from your filters", "It always says which territory and dates it's using. It never guesses."],
                  ["Never a blank box", "Quick starters match the questions SAMs actually ask."],
                  ["Show the work", "Every answer says how it read your question and where each number came from."],
                  ["Say how sure it is", "Status and confidence labels sit right at the top."],
                  ["Show the thinking", "Instead of a spinner, you see each check it runs while you wait."],
                  ["Never change things quietly", "AI sections are marked in the PRT draft, and you can always undo."],
                ].map(([t, d]) => (
                  <div key={t} className="bg-[#111111] p-5">
                    <p className="text-[#F5F5F5] text-sm font-bold mb-1">{t}</p>
                    <p className="text-[#888888] text-xs leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest border-l-2 border-[#CC310E] pl-3 mt-6 leading-relaxed">
                Concept · The data is made up and reused from the dashboard mockups. PRT fields and alert details are placeholders.
              </p>
            </>
          ),
        },

        /* ───────── CLICK COMPARISON ───────── */
        {
          label: "14 · The impact, task by task",
          highlight: "7 of 9 daily tasks are answered the moment the page opens. 2 tasks that weren't possible before now are.",
          image: "/images/cs05/click-comparison.png",
          imageAlt: "Click comparison",
          imageCaption: "9 common SAM tasks measured. 64% fewer clicks. Fill rate and active accounts are brand new.",
          customContent: (
            <StatGrid stats={[
              { value: "26→11", label: "PRT Steps / Month", sub: "58% fewer" },
              { value: "11→4", label: "Clicks Across Tasks", sub: "64% fewer" },
              { value: "0", label: "Clicks to First Number", sub: "Was 2 pages" },
              { value: "3", label: "New Measures Created", sub: "Fill rate, Active accts, Rev at risk" },
            ]} />
          ),
        },

        /* ───────── CONSTRAINTS ───────── */
        {
          label: "15 · Designing within real limits",
          highlight: "Everything I designed can be built with features Power BI already has.",
          content: [
            "Bookmarks for navigation, field parameters for changing columns, drillthrough for detail views and tooltip pages for hover details. All built into Power BI.",
            "I followed Sanofi's visual style guide: brand purples, its chart colours, Segoe UI, and green and red only for up and down.",
          ],
          image: "/images/cs05/design-vision.png",
          imageAlt: "Design vision",
          imageCaption: "Less, but clearer. Easy to find your way. Built for everyone.",
        },

        /* ───────── STRUCTURE ───────── */
        {
          label: "16 · Nothing gets lost",
          highlight: "Every page from the old dashboard still has a home, a path to it, and a preview on the hub.",
          image: "/images/cs05/new-structure.png",
          imageAlt: "New structure mapping",
          imageCaption: "11 pages became a hub, 4 child pages and a roster, organised around how people think.",
        },
      ]}
      nextHref="/work/ibm-conference"
      nextTitle="IBM TechXchange Conference"
    />
  );
}
