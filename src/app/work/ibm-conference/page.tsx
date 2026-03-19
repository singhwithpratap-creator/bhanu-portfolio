import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IBM TechXchange Conference - Bhanu Parmar",
  description:
    "Lead UX for IBM TechXchange 2025 - redesigning the flagship conference website to drive a 60% YTY registration increase and 7M+ page views.",
};

export default function IBMConferencePage() {
  return (
    <CaseStudyLayout
      number="CS 01"
      title="IBM TechXchange Conference"
      subtitle="Website Design & Experience - We are GO/"
      year="2025"
      role="Product Design, UX Research, UI/UX"
      tools={[
        "Figma",
        "Mural",
        "Photoshop",
        "After Effects",
        "IBM Carbon Design System",
      ]}
      heroImage="/images/cs01-hero.png"
      overview="IBM TechXchange is IBM's flagship annual technical learning conference - bringing together 7,900+ developers, AI engineers, infrastructure professionals, and business technologists across 1,500+ sessions and 80,000+ hours of training. Over 24 weeks I led end-to-end UX for the conference website: spanning UX/UI design, animation, 2D exploration, product design, and event experience. The challenge was transforming a platform that organized content by IBM's internal structure into one built entirely around how attendees actually think, search, and register."
      challenge="The existing site had eight compounding problems: unclear value proposition, information overload, low trust and excitement, poor agenda planning tools, unclear registration value, high drop-off during sign-up, visual stagnation, and accessibility gaps. Solving all eight simultaneously - while delivering a design that felt premium, energetic, and IBM-calibre - was the central design challenge."
      richSections={[
        {
          label: "01 - Research: User Personas",
          highlight:
            "Five distinct professionals. One website. Radically different needs.",
          customContent: (
            <div className="flex flex-col gap-px bg-[#1F1F1F] mt-2 border border-[#1F1F1F]">
              {[
                {
                  num: "01",
                  type: "Developer",
                  name: "Alex Rodriguez",
                  role: "Sr. Software Engineer · Financial Services",
                  share: "33%",
                  needs: ["Hands-on coding labs & Level 300/400 sessions", "Peer networking with practitioners"],
                  pain: "Can't filter agenda by 'Code Demo' or find advanced sessions easily",
                },
                {
                  num: "02",
                  type: "AI Specialist",
                  name: "Maya Singh",
                  role: "Data Scientist / AI Architect · Healthcare",
                  share: "6%",
                  needs: ["Generative AI & ML Ops deep-dives", "watsonx capability evaluation & ethical AI practices"],
                  pain: "Marketing content blocks access to technical documentation",
                },
                {
                  num: "03",
                  type: "Data Expert",
                  name: "Chris Lee",
                  role: "Database Administrator · Retail & E-commerce",
                  share: "8%",
                  needs: ["DB2 / Netezza migration guidance", "Database modernization & Meet-the-Expert access"],
                  pain: "Hard to separate 'Data Strategy' sessions from deep-dive technical talks",
                },
                {
                  num: "04",
                  type: "Business Tech",
                  name: "Sarah Chen",
                  role: "VP of IT Strategy & Planning · Manufacturing",
                  share: "34%",
                  needs: ["ROI proof & Digital Transformation sessions", "Business partner networking & pricing visibility"],
                  pain: "Needs a 'Business Value' agenda filter alongside product overviews",
                },
                {
                  num: "05",
                  type: "Infra Engineer",
                  name: "Omar Hassan",
                  role: "Infra & Operations Manager · Telecommunications",
                  share: "19%",
                  needs: ["IBM Z, Power Systems, Storage & disaster recovery", "Dedicated Ops & Core Infrastructure track"],
                  pain: "Too much app dev content; Ops track is nearly impossible to find",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="group grid grid-cols-[48px_1fr_1fr] bg-[#111111] hover:bg-[#161616] transition-colors duration-200"
                >
                  {/* Number column */}
                  <div className="flex items-stretch">
                    <div className="w-[3px] bg-transparent group-hover:bg-[#CC310E] transition-colors duration-200" />
                    <div className="flex items-center justify-center flex-1">
                      <span className="font-mono text-[10px] text-[#888888] group-hover:text-[#CC310E] transition-colors duration-200">
                        {p.num}
                      </span>
                    </div>
                  </div>

                  {/* Identity column */}
                  <div className="py-5 pr-6 border-r border-[#1F1F1F]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[9px] text-[#CC310E] uppercase tracking-[0.25em] bg-[#CC310E]/10 border border-[#CC310E]/20 px-2 py-0.5">
                        {p.type}
                      </span>
                      <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                        {p.share}
                      </span>
                    </div>
                    <p className="text-[#F5F5F5] font-semibold text-sm">{p.name}</p>
                    <p className="font-mono text-[10px] text-[#888888] mt-0.5 leading-relaxed">{p.role}</p>
                    <div className="mt-3 space-y-1.5">
                      {p.needs.map((n) => (
                        <p key={n} className="flex items-start gap-2 text-[#aaaaaa] text-xs leading-relaxed">
                          <span className="text-[#CC310E] shrink-0">+</span>
                          {n}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Pain point column */}
                  <div className="py-5 pl-6 pr-6 flex flex-col justify-center">
                    <p className="font-mono text-[9px] text-[#888888] uppercase tracking-[0.2em] mb-2">Pain Point</p>
                    <p className="text-[#aaaaaa] text-xs leading-relaxed italic">
                      &ldquo;{p.pain}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          label: "02 - Prioritization",
          highlight:
            "Business goal meets user need. The intersection is the product.",
          content:
            "Using a business goal intersected with user needs prioritization framework, I identified the core solution space: Conversion-Optimized Layout, High-Impact Visual Design, low-friction registration, and surfacing planning tools and value clarity. Business goals (increase revenue, maintain brand equity, reduce support costs, drive excitement) were mapped directly against user needs (registration decision-making, low friction, effective planning, staying informed) to define what the site had to solve - and in what order.",
        },
        {
          label: "03 - Information Architecture",
          highlight:
            "Five Level-2 destinations. Organized around attendees, not IBM org charts.",
          customContent: (
            <div className="mt-4 space-y-8">

              {/* Sitemap image */}
              <div>
                <div className="relative bg-white border border-[#1F1F1F] overflow-hidden w-full p-6">
                  <img
                    src="/images/cs01-sitemap.png"
                    alt="TechXchange site map - four-level information architecture"
                    className="w-full h-auto block"
                  />
                </div>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center">
                  Four-level IA - TechXchange Program / Training, Credentials, Conference, Community, Events / Sessions, Speakers, Participate, My Role, FAQ / Agenda, Community Day, Partner Experience, Awards, Student Dev Day, Call for Speakers
                </p>
              </div>

              {/* Wireframes */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/images/cs01-wireframe-01.png", caption: "Concept A - persistent nav, lead CTA, speaker grid" },
                  { src: "/images/cs01-wireframe-02.png", caption: "Concept B - pricing-forward, community emphasis" },
                  { src: "/images/cs01-wireframe-03.png", caption: "Concept C - track-first discovery, entertainment block" },
                ].map((w) => (
                  <div key={w.src}>
                    <div className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden" style={{ aspectRatio: "1/2.4" }}>
                      <img src={w.src} alt={w.caption} className="absolute inset-0 w-full h-full object-cover object-top" />
                    </div>
                    <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center leading-relaxed">{w.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          label: "04 - Concept Ideation",
          highlight:
            "All three concepts put the Register Now CTA above every other action.",
          content: [
            "Persistent Navigation: IBM logo and primary nav clear at top - immediate access to Agenda, Pricing, and Logistics, tying directly to the Information Architecture goal.",
            "Lead Banner & CTA: Top section dedicated to bold headline ('IBM's largest technical learning conference is coming to Orlando!') followed immediately by a prominent Register Now CTA - ensuring registration is the first action users see.",
            "Speakers section: Horizontal scrollable section for featured keynotes and prominent speakers. High-value headshots used to drive trust and excitement.",
            "Tracks section: Structured blocks showing core themes (AI, Cloud, Data, etc.) - allowing Developers and AI Specialists to immediately confirm their topic is covered.",
            "Entertainment section: Video content and social experiences with play button interaction - driving excitement and anticipation.",
            "Pricing section: Clear, comparative section showing different registration tiers. Simplifies the purchase decision, preventing drop-off from registration confusion.",
          ],
        },
        {
          label: "05 - Execution Highlights",
          highlight:
            "Dynamic. Modular. Carbon-compliant. Built for every scale.",
          content: [
            "High-Impact Visual Design: Developed a dynamic, modular design leveraging motion graphics and immersive digital media - including my directed event photography - to clearly showcase the conference's value and energy.",
            "Conversion-Optimized Layout: Updated visual hierarchy prioritizes key CTAs for registration, strategically placed above the fold and alongside high-value content blocks (featured speakers, track highlights).",
            "Design System Governance: Full adherence to IBM Carbon Design System across all UI components - guaranteeing visual consistency, accessibility compliance, and developer efficiency.",
            "Agenda Discovery: Designed a responsive, filtered agenda component allowing users to quickly view, save, and receive session updates based on their interests.",
            "Information Architecture: Streamlined content structure surfaces critical participant information clearly and intuitively - directly reducing support queries.",
          ],
        },
        {
          label: "06 - Hi-Fidelity: Conference Homepage",
          highlight:
            "GO/ further. 7.9k+ attendees. 1.5k+ sessions. One homepage.",
          content:
            "The homepage hero anchored the 'GO/ further' campaign - editorial, bold, motion-forward. Beneath the hero: live event stats (7.9k+ Attendees, 466 Classrooms, 1.5k+ Sessions, 80k+ Hours of training, 750+ Certifications completed), 'What a week!' post-event recap with main stage session replays, and Major Announcements (IBM and Anthropic partnership, Project Bob AI agent access). The Rewards section - 'Recognizing TechXchange's super users' - used gamification to drive community engagement via XP points, credentials, and leaderboard recognition.",
          customContent: (
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { src: "/images/cs01-hifi-homepage-02.png", caption: "Conference homepage - 'We are GO/' hero, speakers, sessions, sponsors" },
                { src: "/images/cs01-hifi-homepage-01.png", caption: "Post-conference homepage - 'GO/ further' recap, what a week, join us next year" },
              ].map((img) => (
                <div key={img.src}>
                  <div className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden" style={{ aspectRatio: "1/2.4" }}>
                    <img src={img.src} alt={img.caption} className="absolute inset-0 w-full h-full object-cover object-top" />
                  </div>
                  <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center leading-relaxed">{img.caption}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          label: "07 - Hi-Fidelity: Events & Developer Experiences",
          highlight:
            "def Build_Skills(); def Network(); def Win_Big();",
          content:
            "The Events section covered two distinct offerings designed with their own visual identity. Developer Events - Digital and In-Person, branded with {dev} - surfaced the full hackathon and bootcamp calendar in a terminal-native aesthetic. The Agentic AI Bootcamp featured the boldest CTA on the site: 'Your team. An agentic AI prototype. Under 48 hours.' The Hackathons page used code syntax as visual language, listing the Oct 23–Nov 3, 2025 'Orchestrate What's Next with AI Agents Hackathon' with inline registration. Student Dev Day - 'Exclusive access, no cost' - targeted students 18+ with a clear Tuesday, October 7 | 9:00 AM - 6:00 PM event block.",
          images: [
            "/images/cs01-hifi-04.png",
            "/images/cs01-hifi-05.png",
          ],
          imageCaptions: [
            "Agentic AI Bootcamp - 'An agentic AI prototype. Under 48 hours.'",
            "Hackathons - {hack} brand, code syntax hero, Oct 23–Nov 3 event",
          ],
          twoCol: true,
        },
        {
          label: "09 - Outcome & Impact",
          highlight:
            "60% registration increase. 7 million page views. The numbers tell the story.",
          content: [
            "Homepage-to-registration conversion reached 9K attendees - a 60% increase year-over-year.",
            "Certification exam completions increased 103% YTY - directly tied to the redesigned Training hub discoverability.",
            "90K unique page views October 6–9 - a 2.7× increase YTY across the live event window.",
            "Total session attendance: 67,516 across 1,500+ sessions.",
            "More than 7 million page views since January 2025 - driven by evergreen content architecture and improved SEO structure.",
          ],
          customContent: (
            <div className="mt-8 space-y-px border border-[#1F1F1F]">

              {/* Top KPIs */}
              <div className="grid grid-cols-3 gap-px bg-[#1F1F1F]">
                {[
                  { value: "60%", label: "Registration Increase YTY", sub: "2K → 6K → 10K attendees" },
                  { value: "7M+",  label: "Page Views",               sub: "Since January 2025" },
                  { value: "103%", label: "Cert Completions YTY",     sub: "Training hub redesign" },
                ].map((s) => (
                  <div key={s.value} className="bg-[#0d0d0d] px-6 py-8 text-center">
                    <p className="font-display text-5xl font-bold text-[#CC310E] mb-2">{s.value}</p>
                    <p className="font-mono text-[9px] text-[#F5F5F5] uppercase tracking-[0.2em] mb-1">{s.label}</p>
                    <p className="font-mono text-[9px] text-[#888888]">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Middle: bar chart + attendee mix */}
              <div className="grid grid-cols-2 gap-px bg-[#1F1F1F]">

                {/* Registration growth bars */}
                <div className="bg-[#0d0d0d] p-6">
                  <p className="font-mono text-[9px] text-[#CC310E] uppercase tracking-[0.25em] mb-5">Registration Growth</p>
                  <div className="flex items-end gap-4 h-28 mb-4">
                    {[
                      { year: "2023", pct: 20,  label: "2K",  accent: false },
                      { year: "2024", pct: 60,  label: "6K",  accent: false },
                      { year: "2025", pct: 100, label: "10K", accent: true  },
                    ].map((b) => (
                      <div key={b.year} className="flex flex-col items-center gap-1.5 flex-1 h-full">
                        <span className={`font-mono text-[10px] font-bold ${b.accent ? "text-[#CC310E]" : "text-[#888888]"}`}>{b.label}</span>
                        <div className="w-full flex items-end flex-1">
                          <div
                            className={`w-full transition-all ${b.accent ? "bg-[#CC310E]" : "bg-[#2a2a2a]"}`}
                            style={{ height: `${b.pct}%` }}
                          />
                        </div>
                        <span className="font-mono text-[9px] text-[#888888]">{b.year}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-[#1F1F1F]" />
                    <span className="font-mono text-[9px] text-[#888888] uppercase tracking-wider whitespace-nowrap">5× growth over 3 years</span>
                    <div className="flex-1 h-px bg-[#1F1F1F]" />
                  </div>
                </div>

                {/* Attendee mix */}
                <div className="bg-[#0d0d0d] p-6">
                  <p className="font-mono text-[9px] text-[#CC310E] uppercase tracking-[0.25em] mb-5">Attendee Mix</p>
                  <div className="space-y-3">
                    {[
                      { label: "Business Technologist", pct: 34, color: "#CC310E" },
                      { label: "Developer",             pct: 33, color: "#a8280c" },
                      { label: "Infra Engineer",        pct: 19, color: "#666666" },
                      { label: "Data Expert",           pct: 8,  color: "#444444" },
                      { label: "AI Engineer",           pct: 6,  color: "#2e2e2e" },
                    ].map((a) => (
                      <div key={a.label} className="flex items-center gap-3">
                        <div className="flex-1 bg-[#1a1a1a] h-4 overflow-hidden">
                          <div className="h-full" style={{ width: `${a.pct}%`, backgroundColor: a.color }} />
                        </div>
                        <span className="font-mono text-[9px] text-[#888888] w-7 text-right shrink-0">{a.pct}%</span>
                        <span className="font-mono text-[9px] text-[#888888] w-32 shrink-0 leading-tight">{a.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom: live event stats */}
              <div className="grid grid-cols-3 gap-px bg-[#1F1F1F]">
                {[
                  { value: "90K",    label: "Unique page views", sub: "Oct 6–9 · 2.7× YTY" },
                  { value: "67,516", label: "Session attendance", sub: "Across 1,500+ sessions" },
                  { value: "466",    label: "Classrooms",         sub: "80K+ training hours" },
                ].map((s) => (
                  <div key={s.value} className="bg-[#0d0d0d] px-6 py-5 flex items-center gap-4 border-t border-[#1F1F1F]">
                    <div>
                      <p className="font-display text-3xl font-bold text-[#F5F5F5]">{s.value}</p>
                      <p className="font-mono text-[9px] text-[#888888] uppercase tracking-wider mt-0.5">{s.label}</p>
                      <p className="font-mono text-[9px] text-[#888888] mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ),
        },
      ]}
      nextHref="/work/ibm-mobile"
      nextTitle="IBM TechXchange Mobile App"
    />
  );
}
