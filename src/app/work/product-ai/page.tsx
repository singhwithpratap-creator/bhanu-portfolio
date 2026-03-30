import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "AI Assisted Product Design - FinSight - Bhanu Parmar",
  description:
    "End-to-end AI-assisted product design: FinSight, a personal finance dashboard built from prompt to polished UI using Claude as a strategic design and build partner.",
};

export default function ProductAIPage() {
  return (
    <CaseStudyLayout
      number="CS 03"
      title="AI Assisted Product Design"
      subtitle="FinSight - Personal Finance Dashboard"
      year="2025"
      role="Product Designer + AI Collaborator"
      tools={["Claude Code", "Claude AI", "HTML / CSS / JS", "Chart.js"]}
      heroImage="/images/cs03/dashboard.png"
      overview="FinSight is a personal finance dashboard built entirely through an AI-assisted workflow - from the opening brief to the final polished UI. Using Claude as a strategic design and build partner, I compressed a typical multi-week design-and-build cycle into a single focused session, without sacrificing the depth or rigour of user-centered thinking. The project is a proof of concept for how designers should be working with AI: not as a generator of assets, but as a tireless, encyclopedic collaborator."
      challenge="Can a designer use AI as a genuine creative and technical partner - not just a code generator - to produce a production-quality fintech dashboard that balances data density with clarity, trust, and usability? And can the process itself be documented as a replicable design methodology?"
      richSections={[
        {
          label: "01 - It Started With a Prompt",
          highlight: "One sentence. Five files. A fully working dashboard.",
          content:
            "The entire project began with a single natural-language description: a personal finance dashboard for regular consumers, clean and minimal, no frameworks, all five sections. Claude translated this into a full project brief, a file architecture, a design system, and a phased build plan - before writing a single line of code.",
          customContent: (
            <div className="mt-6 border border-[#1F1F1F] bg-[#0d0d0d] p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#CC310E] via-[#888888] to-[#CC310E]" />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#CC310E] animate-pulse" />
                <span className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em]">Initial prompt to Claude</span>
              </div>
              <p className="text-[#aaaaaa] text-sm leading-relaxed font-mono">
                Build me a{" "}
                <span className="text-[#CC310E]">personal finance dashboard</span>{" "}
                for regular consumers. It should have{" "}
                <span className="text-[#CC310E]">5 sections</span>: net worth overview,
                investment portfolio, budget tracker, spending analytics, and linked accounts.
                Use{" "}
                <span className="text-[#CC310E]">HTML / CSS / JS only</span> - no frameworks,
                no build tools, no dependencies. Mock data only. Style it{" "}
                <span className="text-[#CC310E]">clean and minimal</span> - lots of whitespace,
                muted tones, simple charts. Apple/Linear aesthetic.
              </p>
            </div>
          ),
        },
        {
          label: "02 - Discovery: Claude Asked, I Answered",
          highlight: "Before code, alignment. Before design, decisions.",
          content:
            "Before writing anything, Claude entered a structured discovery phase - asking clarifying questions about tech stack, scope, data strategy, and design direction. This is the step most engineers skip. Treating the AI as a collaborator with questions, not a machine with commands, produced fundamentally better outputs.",
          customContent: (
            <div className="mt-6 grid grid-cols-2 gap-px bg-[#1F1F1F]">
              {[
                { q: "Tech Stack", a: "HTML / CSS / JS", detail: "Vanilla - no frameworks, no build tools, no dependencies" },
                { q: "Scope", a: "All Five Sections", detail: "Net worth, investments, budget, spending analytics, and accounts" },
                { q: "Data Strategy", a: "Mock Data Only", detail: "Realistic sample data for demo purposes - no backend needed" },
                { q: "Visual Style", a: "Clean & Minimal", detail: "Whitespace, muted tones, simple charts - Apple/Linear aesthetic" },
              ].map((item) => (
                <div key={item.q} className="bg-[#0d0d0d] p-6">
                  <p className="font-mono text-[9px] text-[#888888] uppercase tracking-[0.2em] mb-2">{item.q}</p>
                  <p className="text-[#F5F5F5] font-semibold text-base mb-1">{item.a}</p>
                  <p className="font-mono text-[10px] text-[#888888] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          label: "03 - Architecture: Planning Before Building",
          highlight: "Claude entered Plan Mode. Architecture first, code second.",
          content: [
            "File structure designed upfront: index.html (markup), css/style.css (design system), js/data.js (mock data), js/charts.js (Chart.js config), js/app.js (DOM rendering logic).",
            "Layout strategy: fixed sidebar navigation at 260px width, main content area with scrollable sections, CSS Grid for card layouts, Flexbox for nav and inline groupings.",
            "Data shapes defined before implementation - net worth trends (12-month array), portfolio allocations (6 asset classes), 10 budget categories, recent transactions table, 8 linked accounts.",
            "Chart configurations planned: line chart (net worth trend), horizontal bar (assets vs liabilities), doughnut (allocation), dual line (portfolio vs benchmark), doughnut (spending by category), bar (monthly spending).",
          ],
        },
        {
          label: "04 - Design System",
          highlight: "Every token defined. Every decision intentional.",
          content:
            "A complete design system was established using CSS custom properties before a single component was built. Primary accent: #0D9488 (teal). Typography: Inter, 28px/700 for hero numbers, 13px/500 for labels. Card radius: 12px. Status colours: green (#10B981) for gains, red (#EF4444) for losses, amber (#F59E0B) for warnings - calibrated to reduce anxiety compared to traditional trading app conventions.",
          customContent: (
            <div className="mt-6 grid grid-cols-3 gap-px bg-[#1F1F1F]">
              {[
                {
                  label: "Colour Tokens",
                  items: [
                    { swatch: "#0D9488", name: "Accent", hex: "#0D9488" },
                    { swatch: "#10B981", name: "Gain", hex: "#10B981" },
                    { swatch: "#EF4444", name: "Loss", hex: "#EF4444" },
                    { swatch: "#F59E0B", name: "Warning", hex: "#F59E0B" },
                  ],
                },
                {
                  label: "Typography",
                  items: [
                    { swatch: "#1F1F1F", name: "Hero Numbers", hex: "28px / 700" },
                    { swatch: "#1F1F1F", name: "Card Labels", hex: "12px / 600" },
                    { swatch: "#1F1F1F", name: "Body", hex: "14px / 400" },
                    { swatch: "#1F1F1F", name: "Mono Tags", hex: "11px / 600" },
                  ],
                },
                {
                  label: "Spacing & Radius",
                  items: [
                    { swatch: "#1F1F1F", name: "Card radius", hex: "12px" },
                    { swatch: "#1F1F1F", name: "Sidebar width", hex: "260px" },
                    { swatch: "#1F1F1F", name: "Card padding", hex: "24px" },
                    { swatch: "#1F1F1F", name: "Section gap", hex: "24px" },
                  ],
                },
              ].map((col) => (
                <div key={col.label} className="bg-[#0d0d0d] p-5">
                  <p className="font-mono text-[9px] text-[#CC310E] uppercase tracking-[0.25em] mb-4">{col.label}</p>
                  <div className="space-y-3">
                    {col.items.map((item) => (
                      <div key={item.name} className="flex items-center gap-2.5">
                        <div
                          className="w-4 h-4 shrink-0 border border-[#2a2a2a]"
                          style={{ backgroundColor: item.swatch }}
                        />
                        <span className="text-[#aaaaaa] text-xs flex-1">{item.name}</span>
                        <span className="font-mono text-[9px] text-[#888888]">{item.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          label: "05 - Build Timeline",
          highlight: "Six phases. Scaffold to shipped.",
          content: "The dashboard was built in six sequential phases, each completed before the next began. Claude tracked state across phases - referencing earlier decisions without being re-briefed.",
          customContent: (
            <div className="mt-6 space-y-px border border-[#1F1F1F]">
              {[
                {
                  num: "01",
                  title: "Scaffold HTML Structure",
                  desc: "Full page skeleton - sidebar navigation with SVG icons, 5 dashboard sections with semantic markup, canvas elements for charts.",
                },
                {
                  num: "02",
                  title: "Design System & CSS",
                  desc: "CSS custom properties for the entire theme, sidebar + main layout with flexbox, card system, grid layouts, progress bars, table styles, responsive breakpoints at 1024px / 768px / 480px.",
                },
                {
                  num: "03",
                  title: "Mock Data Layer",
                  desc: "Realistic financial data - net worth trends over 12 months, portfolio allocations across 6 asset classes, 10 budget categories, recent transactions, 8 linked accounts with Canadian institutions.",
                },
                {
                  num: "04",
                  title: "App Logic & DOM Rendering",
                  desc: "Currency formatter, time-based greeting, budget progress bars with colour coding, holdings table, transactions table, account cards, IntersectionObserver sidebar nav, mobile hamburger menu.",
                },
                {
                  num: "05",
                  title: "Chart.js Integration",
                  desc: "6 charts with shared tooltip styling - net worth trend (filled line), assets vs liabilities (horizontal bar), asset allocation (doughnut), portfolio vs benchmark (dual line), spending by category (doughnut), monthly spending (bar).",
                },
                {
                  num: "06",
                  title: "Preview, Test & Polish",
                  desc: "Local preview server, verified at 1440px / 768px / 375px. Tested navigation, hamburger menu, chart rendering, console errors. Fixed chart aspect ratios and differentiated nav icons.",
                },
              ].map((phase) => (
                <div key={phase.num} className="group flex items-start gap-0 bg-[#0d0d0d] hover:bg-[#111111] transition-colors duration-200">
                  <div className="flex items-stretch">
                    <div className="w-[3px] bg-transparent group-hover:bg-[#CC310E] transition-colors duration-200" />
                    <div className="flex items-center justify-center w-16 shrink-0 py-5">
                      <span className="font-mono text-base font-bold text-[#888888] group-hover:text-[#CC310E] transition-colors duration-200">{phase.num}</span>
                    </div>
                  </div>
                  <div className="py-5 pl-5 pr-6 border-l border-[#1F1F1F]">
                    <p className="text-[#F5F5F5] font-semibold text-sm mb-1">{phase.title}</p>
                    <p className="text-[#888888] text-xs leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          label: "06 - What Was Built",
          highlight: "Five sections. Six charts. Zero frameworks.",
          content: "A fully working personal finance dashboard covering the complete spectrum - from high-level net worth to individual transactions - with no external dependencies.",
          customContent: (
            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: "01", title: "Net Worth Overview", desc: "Total net worth with monthly change, assets vs liabilities horizontal bar, and a 12-month trend line with time range filters." },
                  { num: "02", title: "Investment Portfolio", desc: "Portfolio value with daily change, asset allocation doughnut, holdings table with live change %, and portfolio vs benchmark performance line." },
                  { num: "03", title: "Budget Tracker", desc: "Overall budget progress bar, 10 category cards with colour-coded progress (green / amber / red based on spend ratio), spent vs budget amounts." },
                  { num: "04", title: "Spending Analytics", desc: "Spending by category doughnut, monthly spending trends bar chart with current month highlighted, and a 10-row recent transactions table." },
                  { num: "05", title: "Accounts", desc: "8 linked account cards across bank, investment, credit, loan, and crypto - each with institution name, balance, and colour-coded type badge." },
                ].map((feature) => (
                  <div key={feature.num} className={`bg-[#0d0d0d] border border-[#1F1F1F] p-5 ${feature.num === "05" ? "col-span-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[9px] text-[#CC310E] border border-[#CC310E]/30 bg-[#CC310E]/8 px-2 py-0.5 uppercase tracking-widest">{feature.num}</span>
                      <p className="text-[#F5F5F5] font-semibold text-sm">{feature.title}</p>
                    </div>
                    <p className="text-[#888888] text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Dashboard screenshot */}
              <div className="border border-[#1F1F1F] overflow-hidden">
                <div className="bg-[#111111] px-4 py-2.5 flex items-center gap-2 border-b border-[#1F1F1F]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/60" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/60" />
                  </div>
                  <span className="font-mono text-[10px] text-[#888888] ml-2">finsight.local / dashboard</span>
                </div>
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <img
                    src="/images/cs03/dashboard.png"
                    alt="FinSight dashboard - net worth overview"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ),
        },
        {
          label: "07 - Live Product",
          highlight: "Not a prototype. A working dashboard.",
          content:
            "The FinSight dashboard below is fully interactive - all five sections functional, six live charts rendering, and responsive down to mobile. Built entirely through a single AI-assisted session with zero external dependencies.",
          customContent: (
            <div className="mt-6 border border-[#1F1F1F] overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-[#111111] px-4 py-2.5 flex items-center gap-2 border-b border-[#1F1F1F]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/60" />
                </div>
                <div className="flex-1 mx-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded px-3 py-1 text-center">
                  <span className="font-mono text-[10px] text-[#888888]">finsight / personal finance dashboard</span>
                </div>
              </div>
              <iframe
                src="/finsight/index.html"
                title="FinSight Personal Finance Dashboard"
                className="w-full border-0 block"
                style={{ height: "clamp(420px, 75vh, 860px)" }}
                loading="lazy"
              />
            </div>
          ),
        },
        {
          label: "08 - Human in the Loop",
          highlight: "AI accelerated every step. The designer made every decision.",
          content: [
            "Every Claude output - from the brief to the IA to the copy - was reviewed, challenged, and refined through designer judgment. This is not prompt-and-accept. It is prompt-evaluate-push back-refine.",
            "Claude flagged potential accessibility issues in the initial colour palette - muted green/red convention risks for colour-blind users - before I made the final call on the palette.",
            "The AI compressed research, architecture, and implementation work. The designer controlled the quality bar, the narrative logic, and the decisions that required taste.",
            "This is the future of the practice: AI as a tireless collaborator with encyclopedic knowledge. Designer as the one who knows what actually matters to humans.",
          ],
        },
      ]}
      metrics={[
        { value: "5", label: "Files created" },
        { value: "6", label: "Interactive charts" },
        { value: "0", label: "Frameworks used" },
        { value: "1", label: "Session to ship" },
      ]}
      nextHref="/work/creative-advertising"
      nextTitle="Creative Advertising"
    />
  );
}
