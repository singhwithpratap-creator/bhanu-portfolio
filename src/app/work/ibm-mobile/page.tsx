import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IBM TechXchange Mobile App - Bhanu Parmar",
  description:
    "iOS event companion app for IBM TechXchange — a 20-week end-to-end UX engagement designing for 5,000+ attendees across sessions, scheduling, and on-site navigation.",
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
    <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center leading-relaxed">
      {caption}
    </p>
  </div>
);

const HMWCard = ({ statement }: { statement: string }) => (
  <div className="border border-[#CC310E]/20 bg-[#CC310E]/5 px-5 py-4">
    <span className="font-mono text-[10px] text-[#CC310E] uppercase tracking-widest block mb-1.5">
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
    <p className="font-mono text-[10px] text-[#CC310E] uppercase tracking-widest mb-1.5">
      {area}
    </p>
    <p className="text-[#888888] text-sm leading-relaxed">{description}</p>
  </div>
);

export default function IBMMobilePage() {
  return (
    <CaseStudyLayout
      number="CS 03"
      title="IBM TechXchange Mobile App"
      subtitle="iOS Event App — End-to-End Product Design"
      year="2025"
      role="Product Designer · UX Researcher · UI/UX · Brand & Governance"
      tools={["Figma", "Mural", "Photoshop", "IBM Carbon Design System"]}
      heroImage="/images/cs02-hero.png"
      overview="The IBM TechXchange mobile app is the primary on-site companion for a global technical conference — enabling session scheduling, personalized agenda management, QR check-in, and real-time conference navigation across a multi-track, multi-day event with 5,000+ attendees. Over a 20-week engagement, I led end-to-end product design: from stakeholder research, journey mapping, and problem definition through cross-functional ideation, interaction design, IBM Carbon-compliant component system, and full developer handoff. The outcome was an app designed to be fast, focused, and usable under real conference conditions — crowded halls, loud environments, and users toggling between app and conversations."
      challenge="A conference with 5,000+ attendees, 200+ sessions, and 4 simultaneous tracks across multiple venues produces overwhelming information density. The previous app experience buried the schedule, buried session details, and created friction at the exact moment attendees needed clarity most — the morning of each conference day. The real challenge was not a UI refresh: it was a systemic IA failure that needed to be solved through rigorous research, cross-functional collaboration, and deliberate problem framing before a single screen was designed."
      richSections={[
        {
          label: "01 — Discovery & Multi-Method Research",
          highlight:
            "Research revealed a systemic information architecture failure — not a design polish issue.",
          content: [
            "Conducted structured stakeholder interviews with IBM conference operations, marketing, and technical platform teams during the first 4 weeks to align on business objectives, event KPIs, attendee growth targets, and technical constraints of the existing mobile platform.",
            "Facilitated Mural-based virtual journey-mapping workshops with 12 cross-functional stakeholders — operations leads, community managers, and past speakers — to build a high-fidelity end-to-end attendee journey across 6 phases: pre-registration, arrival, orientation, active conference days, networking, and post-event reflection.",
            "Analyzed 200+ qualitative feedback submissions from the previous year's app using affinity mapping in Mural. Three systemic themes emerged with near-unanimous consistency: inability to access personal schedules quickly, deep session discovery friction, and notification irrelevance.",
            "Shadowed 8 attendees during a pre-conference dry-run event to observe authentic mobile behaviour in a live conference setting. Critical behavioural insight: 80% of all app interactions occurred in the first 90 minutes of each conference morning — the 'orientation window' when attendees plan their day.",
            "Benchmarked the experience against 6 comparable enterprise event apps (Salesforce Dreamforce, AWS re:Invent, Microsoft Ignite) to identify scheduling conventions, navigation patterns, and engagement mechanics that set baseline expectations for technical conference attendees.",
          ],
        },
        {
          label: "02 — Problem Identification",
          highlight:
            "The app was not failing at features. It was failing at moments.",
          content: [
            "Synthesizing all research methods revealed a consistent pattern: the app had the right features but surfaced them at the wrong moments in the attendee journey. The failure points were predictable, recurring, and resolvable.",
            "Pain Point 1 — The Lost Schedule: Attendees could not locate their personal agenda within 3 taps. Without immediate schedule access during the morning rush, attendees defaulted to paper programs or conference staff — eroding trust in the digital product before Day 1 was over.",
            "Pain Point 2 — Buried Session Detail: Session information required 4–5 taps from the home screen. By the time attendees reached a session detail page, they were already physically walking to the room — without key context: speaker background, remaining capacity, session prerequisites, or room number.",
            "Pain Point 3 — Notification Irrelevance: Push notifications were broadcast on a blanket schedule, not tied to each attendee's saved sessions or track preferences. This caused notification fatigue and high dismiss rates — meaning time-critical alerts (session starting, room change, capacity warning) were ignored as noise.",
            "Pain Point 4 — Check-in Buried in Settings: QR code check-in was three levels deep in account settings — the inverse of where it needed to be at a physical venue, where check-in happens at a session room door, in a moving crowd, under time pressure.",
            "Pain Point 5 — One Architecture, Three Personas: The same flat experience was served to three fundamentally different user types: the Technical Specialist stacking 6 sessions per day, the Networker prioritizing community events, and the Executive needing keynote highlights and summary views. No persona's primary needs were fully met.",
          ],
        },
        {
          label: "03 — Problem Definition",
          highlight:
            "From pain points to design mandates: reframing every problem as an opportunity.",
          customContent: (
            <div className="space-y-8 mt-2">
              <div>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-4">
                  How Might We Statements
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <HMWCard statement="Make the attendee's personal schedule the single first thing they see each conference morning — without requiring any navigation?" />
                  <HMWCard statement="Surface critical session information (capacity, speaker, prerequisites) within the natural discovery flow, before an attendee commits to walking across a venue?" />
                  <HMWCard statement="Make QR check-in feel like an expected first action — not a setting buried three levels deep?" />
                  <HMWCard statement="Personalize the notification experience to each attendee's saved agenda, eliminating broadcast noise and restoring trust in time-critical alerts?" />
                  <HMWCard statement="Design an IA that serves all three persona types within one coherent architecture — without fragmenting the experience into separate modes?" />
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-4">
                  Jobs to Be Done
                </p>
                <div className="space-y-3">
                  <div className="border-l-2 border-[#CC310E] pl-5 py-2">
                    <p className="text-[#F5F5F5] text-sm leading-relaxed">
                      <span className="text-[#CC310E] font-mono text-[10px] uppercase tracking-widest block mb-1">
                        JTBD 01 — Morning Orientation
                      </span>
                      When I open the conference app on the morning of Day 1, I want to immediately see my personal schedule so I can navigate to my first session without confusion or delay — even if I haven&apos;t touched the app since registration.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#CC310E] pl-5 py-2">
                    <p className="text-[#F5F5F5] text-sm leading-relaxed">
                      <span className="text-[#CC310E] font-mono text-[10px] uppercase tracking-widest block mb-1">
                        JTBD 02 — In-the-Moment Session Decision
                      </span>
                      When I discover a new session in the schedule between talks, I want to evaluate it quickly (speaker credibility, remaining capacity, content depth) so I can make a confident go/no-go decision before I start walking across the venue.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#CC310E] pl-5 py-2">
                    <p className="text-[#F5F5F5] text-sm leading-relaxed">
                      <span className="text-[#CC310E] font-mono text-[10px] uppercase tracking-widest block mb-1">
                        JTBD 03 — Frictionless Check-In
                      </span>
                      When I arrive at a session room, I want to check in immediately by showing my QR code — without hunting through menus while the person behind me is waiting and the session is about to start.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-4">
                  Opportunity Areas
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <OpportunityCard
                    area="IA Restructure"
                    description="Rebuild information hierarchy entirely around the Golden Path: Open → Today's Schedule → Next Session → Check In. Every other surface organized from this core flow."
                  />
                  <OpportunityCard
                    area="Profile as Hub"
                    description="Elevate QR check-in and personal schedule to primary actions on the profile surface — not buried in settings or secondary flows."
                  />
                  <OpportunityCard
                    area="Persona-Aware Navigation"
                    description="Design a drawer hierarchy that naturally serves all three persona types (Specialist, Networker, Executive) within one coherent architecture."
                  />
                  <OpportunityCard
                    area="Notification Personalization"
                    description="Tie push notifications to saved agenda items rather than blanket event timelines — restoring trust in time-critical alerts by eliminating noise."
                  />
                </div>
              </div>
            </div>
          ),
        },
        {
          label: "04 — Cross-functional Collaboration & Ideation",
          highlight:
            "The best design decisions came from a room with operations, engineering, and marketing — not from a single designer's desk.",
          content: [
            "Facilitated a structured 2-day design sprint in Mural with stakeholders from IBM conference operations, the mobile engineering team, IBM marketing, and community leads. The sprint focused on rapid ideation around the 'Golden Path' and generated 140+ distinct concept directions in 4 hours of structured sketching.",
            "Ran a 'Crazy Eights' sketching session with 8 cross-functional participants, including non-designers. A key insight emerged from the operations team — not a designer: QR check-in at physical venues always happens at the door, in motion, often one-handed. That single operational observation elevated check-in from a utility to a primary profile action.",
            "Conducted a card-sorting exercise with 20 conference attendees (recruited from the previous year's participant pool) to validate the proposed navigation taxonomy. The sort produced a clear frequency hierarchy that directly informed the final drawer structure: My Event, Schedule, Favorites, Surveys, Notifications, Event Guide.",
            "Led weekly design reviews with the IBM Carbon design system team to ensure component choices and interaction patterns were consistent with IBM's enterprise design language — establishing a shared component vocabulary before high-fidelity work began, reducing handoff ambiguity and accelerating engineering velocity.",
            "Aligned with conference operations on the technical feasibility of real-time session capacity data — a requirement surfaced in research as a critical attendee need. Operations confirmed that venue sensors could feed live counts to the app backend, enabling the 'seats remaining' feature that directly resolved the 'wasted walk' pain point identified in research.",
          ],
        },
        {
          label: "05 — Navigation Architecture",
          highlight:
            "My Event. Schedule. Favorites. Surveys. Notifications. Event Guide.",
          content:
            "The navigation architecture was rebuilt around a persistent side drawer — replacing the previous tab bar that mixed high-frequency and low-frequency actions indiscriminately. The drawer exposed six primary destinations in strict frequency order, validated by the card-sorting research. This meant the two things attendees needed most — their personal agenda and the full session catalog — were always one swipe from any screen in the app. Low-frequency utility links (feedback, support, settings) moved to secondary levels, reducing visual noise in the primary space and shortening the decision path at the most critical moments.",
          customContent: (
            <div className="space-y-4 mt-4">
              <p className="text-[#888888] leading-relaxed">
                The navigation architecture was rebuilt around a persistent side
                drawer — replacing the previous tab bar that mixed high-frequency
                and low-frequency actions indiscriminately. The drawer exposed six
                primary destinations in strict frequency order, validated by the
                card-sorting research. Attendees could reach their personal agenda
                or the full session catalog in one swipe from any screen. Low-
                frequency links moved to secondary levels, reducing primary-space
                noise.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <MobileScreen
                  src="/images/cs02-screen-02.png"
                  caption="Navigation drawer — My Event, Schedule, Favorites, Surveys, Notifications"
                />
                <MobileScreen
                  src="/images/cs02-screen-03.png"
                  caption="Session catalog — filtering by track, day, and format"
                />
              </div>
            </div>
          ),
        },
        {
          label: "06 — Profile & Identity",
          highlight: "Your identity is the key — literally.",
          customContent: (
            <div className="space-y-4 mt-2">
              <p className="text-[#888888] leading-relaxed">
                The profile screen served a dual purpose: personal identity hub
                and conference access credential. The QR Code Check-In tile was
                designed as a primary action — not buried in settings — because
                physical check-in at session rooms was the most frequent
                in-person interaction attendees had with the app. The profile
                surface also exposed quick access to Notes, Session Catalog, and
                Explore, creating a personal base camp attendees returned to
                throughout the day. Avatar, name, and designation were prominent,
                reinforcing a personalized — not generic — conference experience.
              </p>
              <div className="flex justify-center mt-4">
                <MobileScreen
                  src="/images/cs02-screen-01.png"
                  caption="Profile screen — QR Code Check-In, Notes, Session Catalog, Explore"
                />
              </div>
            </div>
          ),
        },
        {
          label: "07 — Schedule & Agenda Management",
          highlight: "Monday, October 6. Your day, structured.",
          customContent: (
            <div className="space-y-4 mt-2">
              <ul className="space-y-3">
                {[
                  "The Schedule view was the highest-frequency screen in the entire app — designed to give attendees a clear, scannable view of the current day the moment they opened it, with zero navigation required.",
                  "Each session card surfaced: time block, session title, location, track tag, and an 'Add to Schedule' CTA — visible without tapping into session detail. This reduced the decision loop from 4 taps to 2.",
                  "Sessions already in the attendee's personal agenda displayed a filled 'Added' state. Conflicting sessions triggered a visual warning before confirming, preventing the frustration of double-booking a time block.",
                  "Live capacity data — validated with operations during the ideation phase — appeared on session cards for high-demand talks, enabling attendees to make informed routing decisions before committing to a walk across the venue.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#888888] leading-relaxed">
                    <span className="text-[#CC310E] mt-1 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4">
                <MobileScreen
                  src="/images/cs02-screen-05.png"
                  caption="Schedule view — Monday October 6 agenda with Add to Schedule CTAs"
                />
              </div>
            </div>
          ),
        },
        {
          label: "08 — Session Detail & Discovery",
          highlight: "From 'maybe' to 'added' in two taps.",
          customContent: (
            <div className="space-y-4 mt-2">
              <p className="text-[#888888] leading-relaxed">
                Session detail pages balanced depth with scannability — speaker
                with role and photo, session abstract, track tag, room location,
                and live capacity indicator. Capacity was surfaced here
                specifically because it was the final decision gate before an
                attendee started walking to a room. The{" "}
                <span className="text-[#F5F5F5]">&apos;Add to Schedule&apos;</span> CTA
                remained fixed at the bottom of the page regardless of scroll
                depth, ensuring conversion was never blocked by content length.
                This addressed the JTBD identified in research: in-the-moment
                session decisions had to be fast, confident, and irreversible.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <MobileScreen
                  src="/images/cs02-screen-04.png"
                  caption="Session detail — speaker, abstract, capacity, and Add to Schedule"
                />
                <MobileScreen
                  src="/images/cs02-screen-06.png"
                  caption="Conference features — on-site navigation and live updates"
                />
              </div>
            </div>
          ),
        },
        {
          label: "09 — Conference Experience in the Field",
          highlight: "Designed for the real event — not a demo environment.",
          customContent: (
            <div className="space-y-4 mt-2">
              <p className="text-[#888888] leading-relaxed">
                Every interaction in the app was designed to function under
                actual conference conditions: bright ambient lighting, crowded
                hallways, one-handed use, and intermittent connectivity. All tap
                targets exceeded 44×44pt. Text contrast met WCAG AA at minimum
                across all screens. The IBM Carbon design system ensured
                component consistency and reduced engineering rework during
                handoff. The app launch experience communicated TechXchange
                brand identity while loading the attendee&apos;s personalized data —
                setting the tone for a conference that felt curated, not
                generic. Post-event metrics confirmed the design decisions held
                under real conditions: a 4.63/5 session satisfaction rating and
                832 digital badges earned reflected genuine attendee engagement,
                not passive participation.
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex justify-center">
                  <MobileScreen
                    src="/images/cs02-leadspace-02.png"
                    caption="App launch experience — TechXchange branded onboarding"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      src: "/images/cs02-user-01.png",
                      caption: "In-field usage — conference hall environment",
                    },
                    {
                      src: "/images/cs02-user-02.png",
                      caption: "Attendee navigation — real event conditions",
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
                      <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center leading-relaxed">
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
