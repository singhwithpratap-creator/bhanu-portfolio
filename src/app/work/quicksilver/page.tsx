import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "QuickSilver 2.0 KPI Dashboard - Bhanu Parmar",
  description:
    "Redesigned Sanofi's 11-page Power BI dashboard into a hub-and-spoke decision tool — cutting clicks 64%, PRT assembly steps 58%, and surfacing 7 of 9 daily tasks on arrival.",
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
      overview="QuickSilver is Sanofi's internal Power BI dashboard used daily by 30+ Strategic Account Managers (SAMs) in the US Vaccines division. SAMs manage relationships with large health systems and use QuickSilver to track revenue, doses, market share, contract performance, and operational risks. I redesigned it from a scattered 11-page data warehouse into a focused hub-and-spoke decision tool — organized around the three questions SAMs actually ask."
      challenge="QuickSilver 1.0 had grown into an 11-page, 69-KPI data warehouse with 14 repeating metrics, 5 of 8 pages too tall to fit one screen, and a landing page with zero data. SAMs spent 26 manual steps assembling a critical customer-facing document (the PRT) every month — copying numbers page by page, with values that didn't reconcile across screens."
      metrics={[
        { value: "58%", label: "Fewer PRT Assembly Steps" },
        { value: "64%", label: "Fewer Clicks Across Tasks" },
        { value: "7/9", label: "Tasks Answered on Arrival" },
        { value: "11→6", label: "Pages Restructured" },
      ]}
      richSections={[
        {
          label: "01 — The Problem",
          highlight: "Screens read like reports, not dashboards. 5 of 8 pages exceed one screen.",
          content: [
            "The landing page carried zero data — just buttons and paragraphs of description. Every task started with a click that told you nothing.",
            "Operational Execution & Risk alone was 5.5 screens tall. A tall page buries the number that matters and scrolls active filters out of view.",
            "14 KPIs were duplicated across multiple pages, creating cognitive overload and inconsistent values — the same metric showed different numbers on different pages.",
            "Pages were organized by data type (billing, orders, returns) rather than by the questions SAMs ask.",
          ],
          image: "/images/cs05/problem-screens.png",
          imageAlt: "Page height audit showing 5 of 8 pages exceed one screen",
          imageCaption: "The problem quantified: 5 of 8 pages exceed one screen. The landing page has 0 numbers.",
        },
        {
          label: "02 — PRT Assembly Pain",
          highlight: "26 manual steps to build 4 PRT pages. Every month. For every SAM.",
          content: [
            "The Partnership Review Template (PRT) is a critical customer-facing document assembled by hand, page by page, every month.",
            "SAMs have two jobs: DIGEST (reconcile 8 pages and work out which numbers matter) and CATER (turn that into something a director can follow in a meeting).",
            "The numbers don't reconcile: the same KPI name shows different values page to page. Market share reads higher on Seasonality than on Market & Competitive Context because they count different vaccine categories.",
          ],
          image: "/images/cs05/problem-prt.png",
          imageAlt: "PRT assembly step count comparison",
          imageCaption: "Four PRT sections take 26 manual steps today — reduced to 11 with QuickSilver 2.0.",
        },
        {
          label: "03 — Research & User Understanding",
          highlight: "Every SAM visit is driven by one of three fundamental questions.",
          content: [
            "Conducted interviews and feedback sessions with 8+ SAMs across multiple territories, plus contextual inquiry observing real QuickSilver usage.",
            "Q1 — ANALYZE: \"What has been the account performance for all vaccine products by health system?\" → Maps to Performance Overview.",
            "Q2 — MONETIZE: \"How has the account performed contractually? What has the customer saved?\" → Maps to Contract & Eligibility.",
            "Q3 — PLAN: \"For Flu products, what has been the seasonal lens on pre-book vs in-season orders?\" → Maps to Market & Seasonality.",
            "These three questions became the acceptance criteria — every design decision was validated against whether it helped SAMs answer these questions faster.",
          ],
        },
        {
          label: "04 — Solution Architecture",
          highlight: "The hub is a page, not a signpost. Three levels, not two. Nothing is deleted.",
          content: [
            "Hub-and-spoke navigation: Territory Hub as daily entry point, child pages for deep dives into specific questions.",
            "Each child page maps to a specific verb — ORIENT (Hub), ANALYZE (Performance), MONETIZE (Contracts), PLAN (Seasonality), ACT (Operations), REFERENCE (Roster).",
            "Strict \"no KPI repetition\" rule: each of the 52 unique KPIs lives on exactly one page. The Hub shows summary cards that link TO child pages, not copies of them.",
            "Gated approval process: Hub + Performance Overview designed first, validated with SAMs before investing in Children 02-04.",
          ],
          image: "/images/cs05/solution-architecture.png",
          imageAlt: "Hub-and-spoke architecture diagram",
          imageCaption: "One main page, four sub-pages, each child owns one question. Global filter on every page.",
        },
        {
          label: "05 — Territory Hub",
          highlight: "From \"where do I go?\" to \"here's what's happening\" — zero clicks to your first number.",
          content: [
            "Personalized greeting with territory name creates ownership and confirms filter context.",
            "Four hero KPI cards act as both data display AND navigation — each card links to its relevant child page.",
            "Top 5 Health Systems table with Revenue, YoY change, Market Share, Doses, and Alerts. Clicking a row drills into Performance Overview for that account.",
            "Active Alerts donut (Order Blocks, Credit Holds, Overdue Invoices) with Revenue at Risk total — links to Operations & Risk.",
            "Three new measures that didn't exist in the live product: Fill Rate, Active Accounts, Revenue at Risk.",
          ],
          image: "/images/cs05/territory-hub.png",
          imageAlt: "QuickSilver 2.0 Territory Hub",
          imageCaption: "Territory Hub: four hero KPI cards, Top 5 accounts, Active Alerts, and Flu Pre-Book status.",
        },
        {
          label: "06 — Before vs. After: Territory Hub",
          highlight: "Live needs 2 pages to reach your first number. The proposed Hub shows 8 figures on arrival.",
          image: "/images/cs05/before-after-hub.png",
          imageAlt: "Side-by-side comparison of live Territory Health vs proposed Territory Hub",
          imageCaption: "Left: Live (after 1 click) — 4 tiles, equal weight. Right: Proposed (0 clicks) — 8 figures, Top 5 table, Alerts donut.",
        },
        {
          label: "07 — Performance Overview",
          highlight: "Two overlapping pages merged into one focused view: \"What's driving this account?\"",
          content: [
            "Account-level context in the header — SAMs always think account-first.",
            "Two hero KPI cards with inline sparklines showing trajectory, not just current values.",
            "Product Mix donut with 8 vaccine categories and category chip filters for quick filtering without opening a panel.",
            "Peak Season annotation on the monthly chart contextualizes seasonal spikes — live annotates nothing.",
            "5 clicks + scroll → 2 clicks, no scroll.",
          ],
          image: "/images/cs05/performance-overview.png",
          imageAlt: "Performance Overview screen",
          imageCaption: "Performance Overview: account revenue, doses, product mix, and revenue by month with category chips.",
        },
        {
          label: "08 — Before vs. After: Performance Overview",
          image: "/images/cs05/before-after-performance.png",
          imageAlt: "Side-by-side comparison of live Customer Page vs proposed Performance Overview",
          imageCaption: "Left: Live (5 clicks + scroll, 3.7 screens). Right: Proposed (2 clicks, no scroll, peak season annotated).",
        },
        {
          label: "09 — Contract & Eligibility",
          highlight: "Summary + link-out: show contract value in QuickSilver, deep-dive in Sapphire.",
          content: [
            "Spending by Contract Status as a proportional bar (76% Contracted / 24% Non-Contract) instantly communicates the ratio.",
            "Price per Dose treemap makes expensive brands immediately obvious — visual size encoding beats a data table.",
            "Contract Savings by Product Family with drill-down: clicking \"Flu\" expands to show brand-level breakdown.",
            "Link-out to Sapphire for entity deep dives rather than rebuilding existing capabilities — respecting the tool ecosystem.",
          ],
          image: "/images/cs05/contract-eligibility.png",
          imageAlt: "Contract & Eligibility screen",
          imageCaption: "Contract & Eligibility: savings, spend breakdown, price-per-dose treemap, and contract performance.",
        },
        {
          label: "10 — Market & Seasonality",
          highlight: "IQVIA market data + seasonal flu lens merged into one strategic page.",
          content: [
            "Pre-book Rate (Flu) as the lead KPI — the most time-sensitive seasonal metric for SAMs.",
            "Market Share by Category scatter plot with INVEST/WATCH/DEFEND/PROTECT quadrants — the most strategic visualization on the dashboard.",
            "Flu Doses Shipped season-over-season showing growth trends across 4 seasons.",
            "Revenue by Competitor horizontal bars with YoY change for competitive positioning.",
          ],
          image: "/images/cs05/market-seasonality.png",
          imageAlt: "Market & Seasonality screen",
          imageCaption: "Market & Seasonality: pre-book rate, market share donut, competitive scatter plot, and seasonal trends.",
        },
        {
          label: "11 — Operations & Risk",
          highlight: "4 separate operational pages consolidated into one risk-focused view.",
          content: [
            "Three red/warning hero cards immediately communicate total financial exposure ($373K at risk).",
            "Merged Orders/Shipments + Billing/Credit + Reservations + Returns into 6 self-contained cards.",
            "Invoice Aging stacked bar replaces the old \"Coming Soon\" placeholder — shows payment aging buckets in a single horizontal bar.",
            "Returns by month with product category color coding shows seasonal return patterns.",
          ],
          image: "/images/cs05/operations-risk.png",
          imageAlt: "Operations & Risk screen",
          imageCaption: "Operations & Risk: total $ at risk, order issues, billing, reservations, returns, and chargebacks.",
        },
        {
          label: "12 — Membership Roster",
          highlight: "24 columns → 6. No horizontal scroll. Expiry-action-first design.",
          content: [
            "Four expiry summary tiles organized by urgency (≤45 days / 45-90 / 90-120 / 120+), table sorted with most urgent first.",
            "RAG status indicators with dot + label + days count — accessible without relying on color alone.",
            "7 system IDs demoted to detail panel — screenshot-safe for customer meetings.",
            "Docked detail panel with field picker so SAMs choose which fields to show.",
          ],
          image: "/images/cs05/membership-roster.png",
          imageAlt: "Membership Roster screen",
          imageCaption: "Membership Roster: expiry tiles, focused 6-column table, and detail panel.",
        },
        {
          label: "13 — Click Comparison",
          highlight: "9 common SAM tasks measured: 7 answered on arrival, clicks down 64%.",
          content: [
            "\"What's my territory revenue?\" — was 1 click, now on arrival.",
            "Account performance in doses and sales by product category — was 5 clicks + scroll, now 2 clicks.",
            "\"What needs action today: blocks, holds, overdue invoices?\" — was 1 click across 4 pages, now consolidated on arrival.",
            "Fill rate (how much ordered actually shipped) — was calculated by hand, now on arrival. Active accounts count — didn't exist, now on arrival.",
          ],
          image: "/images/cs05/click-comparison.png",
          imageAlt: "Task-by-task click comparison chart",
          imageCaption: "9 common SAM tasks: 7 on arrival, clicks down 64%, 2 previously impossible tasks now available.",
        },
        {
          label: "14 — Design Within Constraints",
          highlight: "Every interaction maps to a Power BI native capability.",
          content: [
            "Designed for Power BI's limitations — bookmarks for navigation, field parameters for dynamic columns, drillthrough for detail views, tooltip pages for hover detail.",
            "Categorized data gaps as design gaps (solvable in UI) vs BLOCKED — SOURCE NOT CONNECTED (upstream Snowflake issues outside design's control).",
            "Applied Sanofi's visual analytics style guide consistently — brand purples, categorical palette, Segoe UI typography, sentiment colors reserved for positive/negative indicators.",
            "Used Claude AI as a design thinking partner for KPI analysis, IA exploration, and design system documentation.",
          ],
          image: "/images/cs05/design-vision.png",
          imageAlt: "Design vision: less but clearer, instinctive journey, built for everyone",
          imageCaption: "Less but clearer. An instinctive journey. Built for everyone.",
        },
        {
          label: "15 — New Structure",
          highlight: "Every live page has an owner, a route, and a preview on the hub. Nothing is deleted.",
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
