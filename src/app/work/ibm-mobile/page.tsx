import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IBM TechXchange Mobile App - Bhanu Parmar",
  description:
    "iOS event companion app for IBM TechXchange - designed to guide 5,000+ attendees through sessions, scheduling, and conference navigation in real time.",
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

export default function IBMMobilePage() {
  return (
    <CaseStudyLayout
      number="CS 02"
      title="IBM TechXchange Mobile App"
      subtitle="iOS Event App Design"
      year="2025"
      role="Lead Product Designer"
      tools={["Figma", "Figma AI", "FigJam", "Principle", "IBM Carbon"]}
      heroImage="/images/cs02-hero.png"
      overview="The IBM TechXchange mobile app is the primary on-site companion for conference attendees - enabling session scheduling, personalized agenda management, QR check-in, and real-time conference navigation across a multi-track, multi-day event. I led end-to-end iOS product design: from research and journey mapping through interaction design, component system, and developer handoff. The app needed to be fast, focused, and usable under real conference conditions - crowded halls, loud environments, and users toggling between app and conversations."
      challenge="A conference with 10,000+ attendees, 200+ sessions, and 4 simultaneous tracks across multiple venues produces overwhelming information density. The previous app experience buried the schedule, buried session details, and created friction at the exact moment attendees needed clarity most - the morning of each conference day. I needed to redesign an experience where the right information was always one tap away."
      richSections={[
        {
          label: "01 - Research & Journey Mapping",
          highlight:
            "The 'Golden Path': Open → Today's schedule → Next session → Check in.",
          content: [
            "Analyzed 200+ feedback submissions from the previous year's app. Top three pain points: 'can't find my personal schedule', 'session details are buried', and 'notifications are irrelevant or late'.",
            "Shadowed attendees during a pre-conference dry-run to observe actual mobile behavior in a conference context. Key finding: 80% of all interactions happened in the first 90 minutes of each day - the morning 'orientation window'.",
            "Mapped three distinct user personas: the Technical Specialist (session-focused, wants to stack 6 talks per day), the Networker (prioritizes Community events and social sessions), and the Executive (needs summary views and keynote access). Each persona had a different primary path through the app.",
            "Defined a 'Golden Path' that would drive the core information architecture: open the app → see today's agenda → navigate to next session → tap in. Everything else was organized around this core flow.",
          ],
        },
        {
          label: "02 - Navigation Architecture",
          highlight:
            "My Event. Schedule. Favorites. Surveys. Notifications. Event Guide.",
          content:
            "The navigation architecture was rebuilt around a persistent side drawer - replacing the previous tab bar that mixed high-frequency and low-frequency actions. The drawer exposed six primary destinations in frequency order: My Event (home), Schedule (full agenda), Favorites (saved sessions), Surveys, Notifications, and Event Guide. This meant the two things attendees needed most - their personal agenda and the full session catalog - were always one swipe from any screen. Low-frequency utility links (feedback, support, settings) moved to secondary levels, cleaning up the primary space significantly.",
          customContent: (
            <div className="grid grid-cols-2 gap-6 mt-6">
              <MobileScreen
                src="/images/cs02-screen-02.png"
                caption="Navigation drawer - My Event, Schedule, Favorites, Surveys, Notifications"
              />
              <MobileScreen
                src="/images/cs02-screen-03.png"
                caption="Session catalog - filtering by track, day, and format"
              />
            </div>
          ),
        },
        {
          label: "03 - Profile & Identity",
          highlight: "Your identity is the key - literally.",
          content:
            "The profile screen served a dual purpose: personal identity hub and conference access credential. The QR Code Check-In tile was designed as a primary action, not buried in settings - because physical check-in at sessions was the most frequent in-person interaction attendees had with the app. The profile surface also exposed quick access to Notes, Session Catalog, and Explore, creating a personal base camp that attendees returned to throughout the day. Avatar, name, and designation were prominent, reinforcing the sense of a personalized - not generic - conference experience.",
          customContent: (
            <div className="flex justify-center mt-6">
              <MobileScreen
                src="/images/cs02-screen-01.png"
                caption="Profile screen - QR Code Check-In, Notes, Session Catalog, Explore"
              />
            </div>
          ),
        },
        {
          label: "04 - Schedule & Agenda Management",
          highlight: "Monday, October 6. Your day, structured.",
          content: [
            "The Schedule view was the highest-frequency screen in the entire app - designed to give attendees a clear, scannable view of the current day's agenda the moment they opened it.",
            "Each session card displayed: time block, session title, location, track tag, and an 'Add to Schedule' CTA - visible without tapping into the session detail. This reduced the decision loop from 4 taps to 2.",
            "The session list for Monday October 6 included community and partner sessions - 'Partner Day Kick Off: AI at Scale', 'Pre-Rally Kickoff for Community Day', and the 'IBM TechXchange 2025 Community Day Kickoff Rally' - each with distinct visual treatment to differentiate session types at a glance.",
            "Sessions already in the attendee's personal agenda showed a filled 'Added' state. Conflicting sessions were surfaced with a visual warning before confirming, preventing the frustration of arriving at a session that conflicts with a committed block.",
          ],
          customContent: (
            <div className="flex justify-center mt-6">
              <MobileScreen
                src="/images/cs02-screen-05.png"
                caption="Schedule view - Monday October 6 agenda with Add to Schedule CTAs"
              />
            </div>
          ),
        },
        {
          label: "05 - Session Detail & Discovery",
          highlight: "From 'maybe' to 'added' in two taps.",
          content:
            "Session detail pages balanced depth with scannability - speakers with role and photo, abstract, track tag, room location, and capacity indicator. Importantly, capacity was surfaced on session detail pages ('15 seats remaining') so attendees could make informed decisions about walking to a room rather than arriving to find it full. The 'Add to Schedule' CTA remained fixed at the bottom of the page regardless of scroll depth, ensuring conversion was never blocked by content length.",
          customContent: (
            <div className="grid grid-cols-2 gap-6 mt-6">
              <MobileScreen
                src="/images/cs02-screen-04.png"
                caption="Session detail - speaker, abstract, capacity, and Add to Schedule"
              />
              <MobileScreen
                src="/images/cs02-screen-06.png"
                caption="Conference features - on-site navigation and live updates"
              />
            </div>
          ),
        },
        {
          label: "06 - Conference Experience in the Field",
          highlight: "Designed for the real event - not a demo.",
          content:
            "The app was designed to function in conference conditions: bright ambient lighting, crowded hallways, one-handed use, and intermittent connectivity. All tap targets exceeded 44x44pt. Text contrast met WCAG AA at minimum. The leadspace and launch experience communicated the conference brand while loading the user's personalized data. User photography from the event (shown below) reflects the real environment the app was designed to serve.",
          customContent: (
            <div className="mt-6 space-y-4">
              {/* Leadspace - mobile portrait */}
              <div className="flex justify-center">
                <MobileScreen
                  src="/images/cs02-leadspace-02.png"
                  caption="App launch experience - TechXchange branded onboarding"
                />
              </div>
              {/* Event photos - landscape */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "/images/cs02-user-01.png", caption: "In-field usage - conference hall environment" },
                  { src: "/images/cs02-user-02.png", caption: "Attendee navigation - real event conditions" },
                ].map((img) => (
                  <div key={img.src}>
                    <div className="relative bg-[#111111] border border-[#1F1F1F] overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img src={img.src} alt={img.caption} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center leading-relaxed">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      ]}
      metrics={[
        { value: "4.6★", label: "App Store rating" },
        { value: "-28%", label: "Support tickets vs prior year" },
        { value: "35%", label: "Fewer session no-shows" },
        { value: "WCAG AA", label: "Full accessibility compliance" },
      ]}
      nextHref="/work/product-ai"
      nextTitle="AI Assisted Product Design"
    />
  );
}
