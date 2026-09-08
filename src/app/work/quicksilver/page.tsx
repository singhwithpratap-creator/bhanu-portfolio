import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "QuickSilver 2.0 KPI Dashboard - Bhanu Parmar",
  description:
    "Owned end-to-end UX for Sanofi's enterprise dashboard redesign — extracting business insights from 100+ stakeholders through workshops and research to transform an 11-page data warehouse into a decision-first tool.",
};

export default function QuickSilverPage() {
  return (
    <CaseStudyLayout
      number="CS 05"
      title="QuickSilver 2.0"
      subtitle="KPI Dashboard Redesign — Sanofi US Vaccines"
      year="2026"
      role="UX & Product Designer (Sole Designer)"
      tools={["Figma", "FigJam", "Power BI", "Snowflake", "Claude AI", "PowerPoint"]}
      heroImage="/images/cs05/cover-territory-hub.png"
      overview="As the sole UX designer on QuickSilver 2.0, I took full ownership of transforming Sanofi's enterprise Power BI dashboard from a scattered 11-page data warehouse into a focused decision tool. I extracted business insights from 100+ stakeholders — SAMs, regional directors, data engineers, and cross-functional partners — through facilitated workshops, brainstorming sessions, contextual inquiry, and structured feedback rounds. I then translated those insights into user personas, business questions, user journeys, and a completely new information architecture built on UX/CX best practices: progressive disclosure, mental model alignment, information overload reduction, and hub-and-spoke navigation."
      challenge="QuickSilver 1.0 had grown into an 11-page, 69-KPI data warehouse with 14 repeating metrics, 5 of 8 pages too tall to fit one screen, and a landing page with zero data. The core UX failures were information overload (69 KPIs with no hierarchy), broken mental models (pages organized by data type, not by how users think), no progressive disclosure (everything shown at once), and a manual PRT assembly process that took 26 steps every month because the dashboard wasn't designed around real workflows."
      metrics={[
        { value: "100+", label: "Stakeholders Interviewed" },
        { value: "58%", label: "Fewer PRT Assembly Steps" },
        { value: "64%", label: "Fewer Clicks Across Tasks" },
        { value: "7/9", label: "Tasks Answered on Arrival" },
      ]}
      richSections={[
        {
          label: "01 — Taking Ownership: Research & Discovery",
          highlight: "I didn't wait for a brief — I built the research practice from scratch and facilitated every session myself.",
          content: [
            "Facilitated workshops and brainstorming sessions with cross-functional stakeholders — SAMs, regional directors, product owners, data engineers, and the Sapphire contract tool team — to surface the real business questions behind the data.",
            "Conducted contextual inquiry with 100+ users across multiple territories, observing SAMs navigating QuickSilver 1.0 during actual customer prep work — not in a lab, but in their real workflow.",
            "Created structured research discussion guides and led feedback sessions (July 8 and July 14, 2026), gathering direct input on reorganization proposals and validating design direction in real time.",
            "Analyzed actual SAM workbooks to understand how data flows from dashboard to customer-facing documents — this revealed the PRT assembly pain point that became the project's strongest success metric.",
            "Built the primary SAM persona with a jargon/acronym reference — grounding every design decision in who the user actually is, not assumptions.",
          ],
        },
        {
          label: "02 — Defining Business Questions",
          highlight: "Every SAM visit is driven by one of three fundamental questions. I extracted these from workshops — they weren't documented anywhere.",
          content: [
            "Through facilitated brainstorming sessions, I distilled hundreds of data requests into three core business questions that every SAM visit revolves around.",
            "Q1 — ANALYZE: \"What has been the account performance for all vaccine products by health system?\" This question drives daily territory management.",
            "Q2 — MONETIZE: \"How has the account performed contractually? What has the customer saved?\" This is the value story SAMs bring to customer meetings.",
            "Q3 — PLAN: \"For Flu products, what has been the seasonal lens on pre-book vs in-season orders?\" This drives forward-looking seasonal strategy.",
            "These three questions became the acceptance criteria for every screen — if a design decision didn't help SAMs answer one of these faster, it didn't ship.",
          ],
        },
        {
          label: "03 — The Problem: Information Overload",
          highlight: "Screens read like reports, not dashboards. 5 of 8 pages exceed one screen.",
          content: [
            "I conducted a comprehensive design audit cataloging all 69 KPIs across 7 screens — identifying 14 repeating KPIs, 2 missing KPIs, and 4 infeasible ones. This audit became the evidence base for every restructuring decision.",
            "The dashboard violated core UX principles: no information hierarchy (all KPIs treated equally), no progressive disclosure (everything dumped on one scroll), and broken mental models (pages organized by data tables, not by user tasks).",
            "The landing page carried zero data — just buttons and paragraphs. Operational Execution & Risk alone was 5.5 screens tall. Users were forced to hold context across 11 flat-navigation pages with no sense of priority.",
            "14 KPIs appeared on multiple pages with inconsistent values — the same metric showed different numbers depending on which page you viewed, eroding trust in the data.",
          ],
          image: "/images/cs05/problem-screens.png",
          imageAlt: "Page height audit showing 5 of 8 pages exceed one screen",
          imageCaption: "The problem quantified: 5 of 8 pages exceed one screen. The landing page has 0 numbers.",
        },
        {
          label: "04 — The Problem: Broken Workflows",
          highlight: "26 manual steps to build 4 PRT pages. Every month. For every SAM.",
          content: [
            "I mapped the end-to-end user journey for PRT (Partnership Review Template) assembly — the most critical and most painful SAM workflow. This journey mapping revealed the true cost of the dashboard's design failures.",
            "SAMs had two cognitive tasks: DIGEST (reconcile 8 pages and determine which numbers matter for this customer) and CATER (reshape that into a narrative a director can follow). The dashboard supported neither.",
            "Numbers didn't reconcile across pages: market share read higher on Seasonality than on Market & Competitive Context because they counted different vaccine categories. Building the PRT meant guessing which figure was right.",
            "This wasn't a data problem — it was a UX problem. The information architecture forced users into a manual assembly process that could be eliminated by organizing content around their actual workflow.",
          ],
          image: "/images/cs05/problem-prt.png",
          imageAlt: "PRT assembly step count comparison",
          imageCaption: "Four PRT sections take 26 manual steps today — reduced to 11 with QuickSilver 2.0.",
        },
        {
          label: "05 — UX Strategy: Mental Model Alignment",
          highlight: "The hub is a page, not a signpost. Three levels, not two. Nothing is deleted.",
          content: [
            "I designed the information architecture around how SAMs actually think — question-driven, not data-driven. Pages map to verbs: ORIENT (Hub), ANALYZE (Performance), MONETIZE (Contracts), PLAN (Seasonality), ACT (Operations), REFERENCE (Roster).",
            "Applied progressive disclosure at every level: Territory Hub shows summary metrics → child pages show account-level detail → drill-downs show transaction-level data. Users control their depth.",
            "Solved information overload with a strict \"no KPI repetition\" rule: each of the 52 unique KPIs lives on exactly one page. The Hub shows navigational summary cards that link TO child pages, not copies of child-page data.",
            "Reduced cognitive load by consolidating 4 operational pages (Orders, Billing, Reservations, Returns) into a single risk-first view — matching the SAM's mental model of \"what needs my attention\" rather than the database's model of \"what table stores this.\"",
            "Used a gated approval process: Hub + Performance Overview designed and validated with SAMs first, before investing in Children 02-04. This prevented wasted effort and built stakeholder confidence incrementally.",
          ],
          image: "/images/cs05/solution-architecture.png",
          imageAlt: "Hub-and-spoke architecture diagram",
          imageCaption: "One main page, four sub-pages, each child owns one question. Global filter on every page.",
        },
        {
          label: "06 — Territory Hub: Progressive Disclosure in Action",
          highlight: "From \"where do I go?\" to \"here's what's happening\" — zero clicks to your first number.",
          content: [
            "The Territory Hub demonstrates progressive disclosure at the page level: personalized greeting → four hero KPI cards (each linking to its child page) → Top 5 accounts table → Active Alerts → Flu Pre-Book status.",
            "Four hero KPI cards serve dual purpose — data display AND navigation. This aligns with the mental model: users see the number first, then decide if they need to investigate deeper.",
            "Top 5 Health Systems table with Revenue, YoY change, Market Share, Doses, and Alerts. Clicking a row drills into Performance Overview for that account — progressive disclosure from territory to account.",
            "Three new measures that didn't exist anywhere in the live product: Fill Rate, Active Accounts, Revenue at Risk. These emerged from my workshop findings — SAMs were calculating them by hand.",
          ],
          image: "/images/cs05/territory-hub.png",
          imageAlt: "QuickSilver 2.0 Territory Hub",
          imageCaption: "Territory Hub: four hero KPI cards, Top 5 accounts, Active Alerts, and Flu Pre-Book status.",
        },
        {
          label: "07 — Before vs. After: Territory Hub",
          highlight: "Live needs 2 pages to reach your first number. The proposed Hub shows 8 figures on arrival.",
          image: "/images/cs05/before-after-hub.png",
          imageAlt: "Side-by-side comparison of live Territory Health vs proposed Territory Hub",
          imageCaption: "Left: Live (after 1 click) — 4 tiles, equal weight. Right: Proposed (0 clicks) — 8 figures, Top 5 table, Alerts donut.",
        },
        {
          label: "08 — Performance Overview",
          highlight: "Two overlapping pages merged into one focused view: \"What's driving this account?\"",
          content: [
            "Account-level context in the header — aligning with the SAM mental model where every question starts with \"which account am I looking at?\"",
            "Product Mix donut with 8 vaccine categories and category chip filters — progressive disclosure of product-level detail without leaving the page.",
            "Peak Season annotation on the monthly chart contextualizes seasonal spikes. The live dashboard annotated nothing — users had to hold seasonal context in their heads.",
            "Reduced from 5 clicks + scroll (3.7 screens) to 2 clicks, no scroll. Every element fits on one 16:9 viewport.",
          ],
          image: "/images/cs05/performance-overview.png",
          imageAlt: "Performance Overview screen",
          imageCaption: "Performance Overview: account revenue, doses, product mix, and revenue by month with category chips.",
        },
        {
          label: "09 — Before vs. After: Performance Overview",
          image: "/images/cs05/before-after-performance.png",
          imageAlt: "Side-by-side comparison of live Customer Page vs proposed Performance Overview",
          imageCaption: "Left: Live (5 clicks + scroll, 3.7 screens). Right: Proposed (2 clicks, no scroll, peak season annotated).",
        },
        {
          label: "10 — Contract & Eligibility",
          highlight: "Summary + link-out: respecting the existing tool ecosystem instead of rebuilding it.",
          content: [
            "Through stakeholder workshops, I discovered the full contract entity view already existed in Sapphire (another Sanofi tool). Rather than duplicating it, I designed a summary + link-out pattern — reducing scope while respecting cross-tool mental models.",
            "Price per Dose treemap uses visual size encoding to make expensive brands immediately obvious — applying the UX principle that spatial relationships communicate faster than numbers in a table.",
            "Contract Savings by Product Family with drill-down: progressive disclosure from product family → brand-level breakdown on demand.",
            "Spending by Contract Status as a proportional bar (76% Contracted / 24% Non-Contract) — answering the question at a glance instead of forcing calculation.",
          ],
          image: "/images/cs05/contract-eligibility.png",
          imageAlt: "Contract & Eligibility screen",
          imageCaption: "Contract & Eligibility: savings, spend breakdown, price-per-dose treemap, and contract performance.",
        },
        {
          label: "11 — Market & Seasonality",
          highlight: "IQVIA market data + seasonal flu lens merged into one strategic page.",
          content: [
            "Market Share by Category scatter plot with INVEST/WATCH/DEFEND/PROTECT quadrants — the most strategic visualization. It answers \"where should I focus competitive efforts?\" in a single glance, aligning with how SAMs mentally categorize their portfolio.",
            "Pre-book Rate (Flu) as the lead KPI — surfaced from workshops as the most time-sensitive metric SAMs check daily during flu season.",
            "Flu Doses Shipped season-over-season and Revenue by Competitor horizontal bars provide the competitive context SAMs need for customer conversations.",
          ],
          image: "/images/cs05/market-seasonality.png",
          imageAlt: "Market & Seasonality screen",
          imageCaption: "Market & Seasonality: pre-book rate, market share donut, competitive scatter plot, and seasonal trends.",
        },
        {
          label: "12 — Operations & Risk + Membership Roster",
          highlight: "4 operational pages → 1 risk-first view. 24-column table → 6 columns, expiry-action-first.",
          content: [
            "Operations & Risk consolidates 4 pages into one view organized by urgency — matching the SAM mental model of \"what needs my attention right now\" instead of the database model of separate billing, orders, and returns tables.",
            "Membership Roster applies progressive disclosure: 4 expiry summary tiles (urgency-first) → 6-column focused table → docked detail panel with field picker → drill to Contract & Eligibility for full economics.",
            "7 system IDs demoted from the main table to the detail panel — solving the screenshot-safety problem (SAMs share screens in customer meetings) while keeping IDs accessible when needed.",
            "RAG status indicators with dot + label + days count — accessible design that doesn't rely on color alone, following WCAG best practices.",
          ],
          images: ["/images/cs05/operations-risk.png", "/images/cs05/membership-roster.png"],
          imageCaptions: ["Operations & Risk: risk-first hierarchy with total $ at risk.", "Membership Roster: expiry tiles, 6-column table, and detail panel."],
        },
        {
          label: "13 — Measurable Impact",
          highlight: "9 common SAM tasks measured: 7 answered on arrival, clicks down 64%.",
          content: [
            "I measured 9 common SAM tasks end-to-end, comparing click counts and workflow steps between the live dashboard and the redesign.",
            "Territory revenue, top accounts, flu pre-book, contract savings, and operational alerts — all answered on arrival with zero clicks. Previously each required at least one navigation step.",
            "Fill rate (how much ordered actually shipped) was previously calculated by hand. Active accounts count didn't exist at all. Both are now on the Territory Hub — capabilities the business didn't know were missing until workshops surfaced them.",
            "PRT assembly: 26 steps → 11 steps (58% reduction) across 4 key sections. This is monthly time saved for every SAM in the organization.",
          ],
          image: "/images/cs05/click-comparison.png",
          imageAlt: "Task-by-task click comparison chart",
          imageCaption: "9 common SAM tasks: 7 on arrival, clicks down 64%, 2 previously impossible tasks now available.",
        },
        {
          label: "14 — Designing Within Enterprise Constraints",
          highlight: "Every interaction maps to a Power BI native capability — enterprise design, not greenfield.",
          content: [
            "Power BI has significant limitations compared to custom web dashboards — no custom animations, limited interactive patterns, no native slide-in drawers. I mapped every design interaction to a Power BI capability: bookmarks for navigation, field parameters for dynamic columns, drillthrough for detail views, tooltip pages for hover detail.",
            "Categorized every data gap as a design gap (solvable in UI) vs BLOCKED — SOURCE NOT CONNECTED (upstream Snowflake issues outside design's control). This framework gave stakeholders clarity on what design could solve vs what needed data engineering.",
            "Applied Sanofi's visual analytics style guide consistently — brand purples, categorical palette, Segoe UI typography, sentiment colors reserved exclusively for positive/negative indicators.",
            "Used Claude AI as a design thinking partner for KPI analysis, information architecture exploration, and design system documentation — demonstrating how AI tools can accelerate enterprise UX work without replacing design judgment.",
          ],
          image: "/images/cs05/design-vision.png",
          imageAlt: "Design vision: less but clearer, instinctive journey, built for everyone",
          imageCaption: "Less but clearer. An instinctive journey. Built for everyone.",
        },
        {
          label: "15 — New Structure",
          highlight: "Every live page has an owner, a route, and a preview on the hub. Nothing is deleted — just reorganized around how users actually think.",
          image: "/images/cs05/new-structure.png",
          imageAlt: "New structure mapping showing how all 11 original pages map to the new architecture",
          imageCaption: "Every live page reorganized around the questions SAMs actually ask.",
        },
      ]}
      nextHref="/work/ibm-conference"
      nextTitle="IBM TechXchange Conference"
    />
  );
}
