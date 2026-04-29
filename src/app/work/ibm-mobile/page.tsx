import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IBM TechXchange Mobile App - Bhanu Parmar",
  description:
    "iOS event companion app for IBM TechXchange. A 20-week end-to-end UX engagement designing for 8,000+ attendees across sessions, scheduling, and on-site navigation.",
};

const MobileScreen = ({ src, caption }: { src: string; caption: string }) => (
  <div>
    <div
      className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden mx-auto"
      style={{ aspectRatio: "9/19", maxWidth: "280px" }}
    >
      <img
        src={src}
        alt={caption}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
    <p className="font-mono text-[11px] text-[#888888] uppercase tracking-widest mt-2 text-center leading-relaxed">
      {caption}
    </p>
  </div>
);

const HMWCard = ({ statement }: { statement: string }) => (
  <div className="border border-[#CC310E]/20 bg-[#CC310E]/5 px-5 py-4">
    <span className="font-mono text-[11px] text-[#CC310E] uppercase tracking-widest block mb-2">
      HMW
    </span>
    <p className="text-[#F5F5F5] text-sm leading-relaxed">{statement}</p>
  </div>
);

const OpportunityCard = ({
  area,
  description,
}: {
  area: string;
  description: string;
}) => (
  <div className="border border-[#1F1F1F] bg-[#111111] px-5 py-4">
    <p className="font-mono text-[11px] text-[#CC310E] uppercase tracking-widest mb-2">
      {area}
    </p>
    <p className="text-[#AAAAAA] text-sm leading-relaxed">{description}</p>
  </div>
);

// Process phase strip
const processPhases = [
  { phase: "Discover", weeks: "Wk 1–4", desc: "Research & Stakeholder Alignment" },
  { phase: "Define", weeks: "Wk 5–8", desc: "Problem Framing & HMW" },
  { phase: "Ideate", weeks: "Wk 9–12", desc: "Design Sprint & Co-Creation" },
  { phase: "Design", weeks: "Wk 13–18", desc: "IA, Interaction & Visual UI" },
  { phase: "Deliver", weeks: "Wk 19–20", desc: "Handoff & Field Testing" },
];

// Research stat cards
const researchStats = [
  { value: "200+", label: "Feedback\nSubmissions" },
  { value: "12", label: "Stakeholders\nInterviewed" },
  { value: "8", label: "Attendees\nShadowed" },
  { value: "6", label: "Apps\nBenchmarked" },
];

// Pain point cards
const painPoints = [
  {
    num: "01",
    title: "Lost Schedule",
    desc: "Personal agenda unreachable within 3 taps. Attendees defaulted to paper programs.",
  },
  {
    num: "02",
    title: "Buried Session Detail",
    desc: "4 to 5 taps to reach session info. Attendees were already walking before they had the context they needed.",
  },
  {
    num: "03",
    title: "Notification Noise",
    desc: "Blanket push alerts caused fatigue. Time-critical session alerts were dismissed as irrelevant.",
  },
  {
    num: "04",
    title: "Check-in in Settings",
    desc: "QR check-in was 3 levels deep in account settings: the opposite of where it needed to be at a session door.",
  },
  {
    num: "05",
    title: "One-Size Architecture",
    desc: "Three distinct personas (Specialist, Networker, Executive) were served by one flat, undifferentiated experience.",
  },
];

// Sprint activities
const sprintActivities = [
  { label: "2-Day Design Sprint", detail: "140+ concepts generated" },
  { label: "Crazy Eights", detail: "8 cross-functional participants" },
  { label: "Card Sorting", detail: "20 real attendees" },
  { label: "Carbon Design Review", detail: "Weekly · 6 sessions" },
  { label: "Ops Feasibility Check", detail: "Live capacity feature unlocked" },
];

export default function IBMMobilePage() {
  return (
    <CaseStudyLayout
      number="CS 03"
      title="IBM TechXchange Mobile App"
      subtitle="iOS Event App · End-to-End Product Design"
      year="2025"
      role="Product Designer · UX Researcher · UI/UX · Brand & Governance"
      tools={["Figma", "Mural", "Photoshop", "IBM Carbon Design System"]}
      heroImage="/images/cs02-hero.png"
      overview="The IBM TechXchange mobile app is the primary on-site companion for a global technical conference, enabling session scheduling, personalized agenda management, QR check-in, and real-time conference navigation across a multi-track, multi-day event with 8,000+ attendees. Over a 20-week engagement I led end-to-end product design: from stakeholder research, journey mapping, and problem definition through cross-functional ideation, interaction design, IBM Carbon-compliant component system, and full developer handoff."
      challenge="A conference with 8,000+ attendees, 200+ sessions, and 4 simultaneous tracks across multiple venues produces overwhelming information density. The previous app buried the schedule, buried session details, and created friction at the exact moment attendees needed clarity most. The real challenge was not a UI refresh. It was a systemic IA failure that needed rigorous research, cross-functional collaboration, and deliberate problem framing before a single screen was designed."
      richSections={[
        // ── PROCESS OVERVIEW ─────────────────────────────────────────────
        {
          label: "Design Process at a Glance",
          highlight: "20 weeks. 5 phases. End-to-end ownership.",
          customContent: (
            <div className="mt-4">
              <div className="grid grid-cols-5 gap-px bg-[#1F1F1F]">
                {processPhases.map((p, i) => (
                  <div key={p.phase} className="bg-[#111111] px-4 py-5 relative">
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 ${
                        i === 0
                          ? "bg-[#CC310E]"
                          : i === 1
                          ? "bg-[#CC310E]/60"
                          : i === 2
                          ? "bg-[#CC310E]/40"
                          : i === 3
                          ? "bg-[#CC310E]/25"
                          : "bg-[#CC310E]/15"
                      }`}
                    />
                    <p className="font-display font-bold text-[#F5F5F5] text-sm mb-0.5">
                      {p.phase}
                    </p>
                    <p className="font-mono text-[11px] text-[#CC310E] uppercase tracking-widest mb-2">
                      {p.weeks}
                    </p>
                    <p className="font-mono text-[11px] text-[#AAAAAA] leading-relaxed hidden sm:block">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },

        // ── 01 RESEARCH ──────────────────────────────────────────────────
        {
          label: "01 · Discovery & Multi-Method Research",
          highlight:
            "Research revealed a systemic IA failure, not a design polish issue.",
          customContent: (
            <div className="space-y-6 mt-2">
              {/* Research stat row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1F1F1F]">
                {researchStats.map((s) => (
                  <div key={s.value} className="bg-[#111111] px-5 py-5 text-center">
                    <p className="font-display font-bold text-[#CC310E] text-3xl mb-2">
                      {s.value}
                    </p>
                    <p className="font-mono text-[11px] text-[#AAAAAA] uppercase tracking-widest leading-relaxed whitespace-pre-line">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key findings */}
              <ul className="space-y-3">
                {[
                  "Conducted stakeholder interviews with IBM conference operations, marketing, and technical teams across weeks 1 to 4, aligning on business KPIs, attendee growth targets, and mobile platform constraints.",
                  "Facilitated Mural journey-mapping workshops with 12 cross-functional stakeholders to map the full attendee experience across 6 phases: pre-registration, arrival, orientation, active days, networking, and post-event.",
                  "Affinity-mapped 200+ qualitative feedback submissions from the prior year. Three systemic themes emerged: no fast schedule access, deep session discovery friction, and irrelevant push notifications.",
                  "Key behavioural insight from on-site shadowing: 80% of all app interactions happened in the first 90 minutes of each conference morning, the critical orientation window when attendees plan their day.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#AAAAAA] leading-relaxed text-sm">
                    <span className="text-[#CC310E] mt-1 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* 80% insight callout */}
              <div className="border border-[#CC310E]/20 bg-[#CC310E]/5 px-6 py-5">
                <p className="font-mono text-[11px] text-[#CC310E] uppercase tracking-widest mb-2">
                  Key Insight: The Orientation Window
                </p>
                <p className="font-display font-bold text-[#F5F5F5] text-2xl mb-2">
                  80% of interactions
                </p>
                <p className="text-[#AAAAAA] text-sm leading-relaxed">
                  happened in the first 90 minutes of each conference morning.
                  The app had to serve this window perfectly, or lose attendee
                  trust for the entire day.
                </p>
                {/* Visual bar chart */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#AAAAAA] w-28 shrink-0">
                      Morning (90 min)
                    </span>
                    <div className="flex-1 h-2.5 bg-[#1F1F1F] rounded-sm overflow-hidden">
                      <div className="h-full bg-[#CC310E] rounded-sm" style={{ width: "80%" }} />
                    </div>
                    <span className="font-mono text-[11px] text-[#CC310E] w-8 text-right font-bold">
                      80%
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#AAAAAA] w-28 shrink-0">
                      Rest of day
                    </span>
                    <div className="flex-1 h-2.5 bg-[#1F1F1F] rounded-sm overflow-hidden">
                      <div className="h-full bg-[#383838] rounded-sm" style={{ width: "20%" }} />
                    </div>
                    <span className="font-mono text-[11px] text-[#AAAAAA] w-8 text-right">
                      20%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },

        // ── 02 PROBLEM IDENTIFICATION ────────────────────────────────────
        {
          label: "02 · Problem Identification",
          highlight:
            "The app was not failing at features. It was failing at moments.",
          customContent: (
            <div className="space-y-4 mt-2">
              <p className="text-[#AAAAAA] text-sm leading-relaxed">
                Synthesizing all research revealed a consistent pattern: the right
                features surfaced at the wrong moments. Five predictable, recurring
                failure points mapped directly to attendee frustration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {painPoints.map((p) => (
                  <div
                    key={p.num}
                    className="border border-[#1F1F1F] bg-[#111111] px-5 py-4 flex gap-4"
                  >
                    <span className="font-display font-bold text-[#CC310E] text-2xl leading-none mt-0.5 shrink-0">
                      {p.num}
                    </span>
                    <div>
                      <p className="text-[#F5F5F5] font-semibold text-sm mb-1.5">
                        {p.title}
                      </p>
                      <p className="text-[#AAAAAA] text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },

        // ── 03 PROBLEM DEFINITION ────────────────────────────────────────
        {
          label: "03 · Problem Definition",
          highlight:
            "From pain points to design mandates: reframing every problem as an opportunity.",
          customContent: (
            <div className="space-y-8 mt-2">
              <div>
                <p className="font-mono text-[11px] text-[#AAAAAA] uppercase tracking-widest mb-4">
                  How Might We Statements
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <HMWCard statement="Make the attendee's personal schedule the single first thing they see each morning, with no extra navigation required?" />
                  <HMWCard statement="Surface critical session information (capacity, speaker, prerequisites) within the natural discovery flow, before an attendee commits to walking across a venue?" />
                  <HMWCard statement="Make QR check-in feel like an expected first action, not a setting buried three levels deep?" />
                  <HMWCard statement="Personalize notifications to each attendee's saved agenda, eliminating broadcast noise and restoring trust in time-critical alerts?" />
                  <HMWCard statement="Design an IA that serves all three persona types within one coherent architecture, without fragmenting the experience?" />
                </div>
              </div>

              <div>
                <p className="font-mono text-[11px] text-[#AAAAAA] uppercase tracking-widest mb-4">
                  Jobs to Be Done
                </p>
                <div className="space-y-3">
                  {[
                    {
                      id: "JTBD 01 · Morning Orientation",
                      text: "When I open the app on Day 1, I want to immediately see my schedule so I can reach my first session without confusion or delay.",
                    },
                    {
                      id: "JTBD 02 · In-the-Moment Decision",
                      text: "When I discover a new session between talks, I want to evaluate it quickly (capacity, speaker, depth) so I can make a confident go or no-go before I start walking.",
                    },
                    {
                      id: "JTBD 03 · Frictionless Check-In",
                      text: "When I arrive at a session room, I want to show my QR code immediately, without hunting through menus while the queue behind me grows.",
                    },
                  ].map((j) => (
                    <div key={j.id} className="border-l-2 border-[#CC310E] pl-5 py-2">
                      <span className="text-[#CC310E] font-mono text-[11px] uppercase tracking-widest block mb-1.5">
                        {j.id}
                      </span>
                      <p className="text-[#F5F5F5] text-sm leading-relaxed">{j.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[11px] text-[#AAAAAA] uppercase tracking-widest mb-4">
                  Opportunity Areas
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <OpportunityCard
                    area="IA Restructure"
                    description="Rebuild hierarchy around the Golden Path: Open, Today, Next Session, Check In."
                  />
                  <OpportunityCard
                    area="Profile as Hub"
                    description="Elevate QR check-in and personal schedule to primary profile actions, not settings."
                  />
                  <OpportunityCard
                    area="Persona-Aware Navigation"
                    description="One drawer hierarchy serving Specialist, Networker, and Executive coherently."
                  />
                  <OpportunityCard
                    area="Notification Personalization"
                    description="Tie alerts to saved agenda items, eliminating broadcast noise and restoring trust."
                  />
                </div>
              </div>
            </div>
          ),
        },

        // ── 04 CROSS-FUNCTIONAL IDEATION ─────────────────────────────────
        {
          label: "04 · Cross-functional Collaboration & Ideation",
          highlight:
            "The best decisions came from operations, engineering, and marketing. Not from one designer's desk.",
          customContent: (
            <div className="space-y-6 mt-2">
              {/* Sprint activity grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {sprintActivities.map((a) => (
                  <div
                    key={a.label}
                    className="border border-[#1F1F1F] bg-[#111111] px-4 py-4"
                  >
                    <p className="text-[#F5F5F5] font-semibold text-sm mb-1.5">
                      {a.label}
                    </p>
                    <p className="font-mono text-[11px] text-[#CC310E] uppercase tracking-widest">
                      {a.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key collaboration insight */}
              <div className="border border-[#CC310E]/20 bg-[#CC310E]/5 px-6 py-5">
                <p className="font-mono text-[11px] text-[#CC310E] uppercase tracking-widest mb-2">
                  Key Collaboration Insight
                </p>
                <p className="text-[#F5F5F5] text-sm leading-relaxed">
                  The most impactful design decision, elevating QR check-in to a
                  primary profile action, came not from the design team but from a
                  conference operations lead during a Crazy Eights session. Their
                  observation:{" "}
                  <span className="text-[#CC310E] font-medium">
                    &quot;Check-in happens at the door, in motion, in a crowd.&quot;
                  </span>{" "}
                  That single sentence reframed the entire profile IA.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Card sorting with 20 attendees validated the drawer structure: My Event, Schedule, Favorites, Surveys, Notifications, and Event Guide in exact frequency order.",
                  "Weekly IBM Carbon design reviews established a shared component vocabulary before high-fidelity work began, cutting engineering handoff ambiguity significantly.",
                  "Ops alignment unlocked real-time venue capacity data, enabling the seats remaining feature that resolved the wasted walk pain point surfaced in research.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#AAAAAA] leading-relaxed text-sm">
                    <span className="text-[#CC310E] mt-1 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },

        // ── 05 NAVIGATION ARCHITECTURE ──────────────────────────────────
        {
          label: "05 · Navigation Architecture",
          highlight:
            "My Event. Schedule. Favorites. Surveys. Notifications. Event Guide.",
          customContent: (
            <div className="space-y-4 mt-4">
              <p className="text-[#AAAAAA] leading-relaxed text-sm">
                The navigation was rebuilt around a persistent side drawer,
                replacing a tab bar that mixed high- and low-frequency actions
                without distinction. Six primary destinations in strict frequency
                order (validated by card sorting) meant the personal agenda and
                the full session catalog were always one swipe away. Low-frequency
                utility links moved to secondary levels, reducing noise at the
                most critical moments.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <MobileScreen
                  src="/images/cs02-screen-02.png"
                  caption="Navigation drawer · My Event, Schedule, Favorites, Surveys, Notifications"
                />
                <MobileScreen
                  src="/images/cs02-screen-03.png"
                  caption="Session catalog · filtering by track, day, and format"
                />
              </div>
            </div>
          ),
        },

        // ── 06 PROFILE ───────────────────────────────────────────────────
        {
          label: "06 · Profile & Identity",
          highlight: "Your identity is the key — literally.",
          customContent: (
            <div className="space-y-4 mt-2">
              <p className="text-[#AAAAAA] leading-relaxed text-sm">
                The profile screen served dual purpose: personal identity hub and
                conference access credential. QR Check-In was designed as a
                primary action rather than buried in settings, because physical
                check-in was the most frequent in-person app interaction.
                Avatar, name, and designation reinforced a personalized
                conference experience.
              </p>
              <div className="flex justify-center mt-4">
                <MobileScreen
                  src="/images/cs02-screen-01.png"
                  caption="Profile screen · QR Code Check-In, Notes, Session Catalog, Explore"
                />
              </div>
            </div>
          ),
        },

        // ── 07 SCHEDULE ──────────────────────────────────────────────────
        {
          label: "07 · Schedule & Agenda Management",
          highlight: "Monday, October 6. Your day, structured.",
          customContent: (
            <div className="space-y-4 mt-2">
              <ul className="space-y-3">
                {[
                  "The Schedule view was the highest-frequency screen, designed to show the current day's agenda the moment the app opened with zero navigation required.",
                  "Each session card showed the time block, title, location, track tag, and Add to Schedule action without tapping into detail. The decision loop went from 4 taps to 2.",
                  "Conflicting sessions triggered a visual warning before confirming, preventing double-booking. Live capacity appeared on high-demand sessions so attendees could route intelligently.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#AAAAAA] leading-relaxed text-sm">
                    <span className="text-[#CC310E] mt-1 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4">
                <MobileScreen
                  src="/images/cs02-screen-05.png"
                  caption="Schedule view · Monday October 6 agenda with Add to Schedule CTAs"
                />
              </div>
            </div>
          ),
        },

        // ── 08 SESSION DETAIL ────────────────────────────────────────────
        {
          label: "08 · Session Detail & Discovery",
          highlight: "From maybe to added in two taps.",
          customContent: (
            <div className="space-y-4 mt-2">
              <p className="text-[#AAAAAA] leading-relaxed text-sm">
                Session detail pages balanced depth with scannability: speaker
                photo and role, abstract, track tag, room location, and live
                capacity. Capacity appeared here as the final decision gate before
                an attendee started walking. The Add to Schedule action was fixed
                at the bottom of the page regardless of scroll depth, so conversion
                was never blocked by content length.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <MobileScreen
                  src="/images/cs02-screen-04.png"
                  caption="Session detail · speaker, abstract, capacity, and Add to Schedule"
                />
                <MobileScreen
                  src="/images/cs02-screen-06.png"
                  caption="Conference features · on-site navigation and live updates"
                />
              </div>
            </div>
          ),
        },

        // ── 09 FIELD ─────────────────────────────────────────────────────
        {
          label: "09 · Conference Experience in the Field",
          highlight: "Designed for the real event, not a demo environment.",
          customContent: (
            <div className="space-y-4 mt-2">
              {/* Quality chips */}
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  "44x44pt min tap targets",
                  "WCAG AA contrast",
                  "One-handed use",
                  "Offline-ready",
                  "IBM Carbon compliant",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[#AAAAAA] border border-[#1F1F1F] bg-[#111111] px-3 py-1.5 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[#AAAAAA] leading-relaxed text-sm">
                Every interaction was designed for real conference conditions:
                bright ambient lighting, crowded hallways, one-handed use, and
                intermittent connectivity. Post-event metrics confirmed the design
                decisions held. A 4.63/5 session satisfaction rating and 832
                digital badges earned reflected genuine engagement, not passive
                participation.
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex justify-center">
                  <MobileScreen
                    src="/images/cs02-leadspace-02.png"
                    caption="App launch experience · TechXchange branded onboarding"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      src: "/images/cs02-user-01.png",
                      caption: "In-field usage · conference hall environment",
                    },
                    {
                      src: "/images/cs02-user-02.png",
                      caption: "Attendee navigation · real event conditions",
                    },
                  ].map((img) => (
                    <div key={img.src}>
                      <div
                        className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden"
                        style={{ aspectRatio: "4/3" }}
                      >
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-mono text-[11px] text-[#AAAAAA] uppercase tracking-widest mt-2 text-center leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
      ]}
      metrics={[
        { value: "4.63/5", label: "Session satisfaction rating" },
        { value: "6.6", label: "Avg. tech labs per attendee" },
        { value: "832", label: "Digital badges earned" },
        { value: "4.6★", label: "App Store rating" },
      ]}
      nextHref="/work/creative-advertising"
      nextTitle="Creative Advertising & Visual Campaigns"
    />
  );
}
