import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import PackagingCarousel from "@/components/PackagingCarousel";

export const metadata: Metadata = {
  title: "Candy Funhouse - Creative Advertising - Bhanu Parmar",
  description:
    "Multi-channel creative advertising for Candy Funhouse - campaign design spanning web banners, email assets, animated GIFs, seasonal campaigns, and celebrity collaborations.",
};

/* Renders an image at its natural aspect ratio — nothing cropped, nothing cut */
const Asset = ({ src, caption }: { src: string; caption: string }) => (
  <div>
    <div className="border border-[#1F1F1F] overflow-hidden bg-[#111111]">
      <img src={src} alt={caption} className="w-full h-auto block" />
    </div>
    <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2 text-center leading-relaxed">
      {caption}
    </p>
  </div>
);

export default function CreativeAdvertisingPage() {
  return (
    <CaseStudyLayout
      number="CS 04"
      title="Candy Funhouse"
      subtitle="Creative Advertising & Campaign Design"
      year="2024"
      role="Creative Designer · Art Director"
      tools={["Adobe Photoshop", "Midjourney", "Figma", "After Effects"]}
      heroImage="/images/cs04/holiday-nerd.gif"
      overview="Candy Funhouse is one of North America's leading online candy retailers - a brand built on joy, nostalgia, and the thrill of discovery. I designed and produced a wide range of multi-channel creative assets across web banners, email campaigns, social content, animated GIFs, and seasonal collections. The work spanned product launches (Australian candy, British candy), celebrity collaborations (Dolly Parton), and major seasonal moments (Christmas, Valentine's Day, New Year)."
      challenge="How do you make an online candy brand feel like a cultural moment rather than a product promotion? Every asset needed to stop the scroll, communicate abundance and joy, and drive both brand affinity and direct conversion - across formats ranging from full-page web banners to animated GIFs."
      richSections={[
        {
          label: "01 - Florida Campaign",
          customContent: (
            <div className="grid grid-cols-2 gap-3 mt-6">
              <Asset src="/images/cs04/florida-01.jpg" caption="Florida - campaign asset 01" />
              <Asset src="/images/cs04/florida-02.jpg" caption="Florida - campaign asset 02" />
            </div>
          ),
        },
        {
          label: "02 - Australian Candy Launch",
          highlight: "Arrivals: Australian Candy. Expand your flavour palate.",
          content:
            "The Australian candy launch used immersive AI-generated imagery - a candy jar spilling into the Great Barrier Reef - to communicate the 'exotic familiar' appeal of imported sweets. The campaign ran across website hero banners, mobile banners, and animated GIF versions for email and digital advertising.",
          customContent: (
            <div className="space-y-3 mt-6">
              {/* 2160×720 full-width landscape */}
              <Asset src="/images/cs04/aus-banner-web.jpg" caption="Australian Candy - website hero banner (static)" />
              <Asset src="/images/cs04/aus-banner-web.gif" caption="Australian Candy - web banner (animated)" />
              <div className="grid grid-cols-2 gap-3">
                {/* 1000×1000 square */}
                <Asset src="/images/cs04/aus-banner-mob.gif" caption="Australian Candy - mobile banner (animated)" />
              </div>
            </div>
          ),
        },
        {
          label: "03 - British Candy Collection",
          highlight: "Keep Calm & Chew On.",
          content:
            "The British candy launch leaned into iconic UK visual language - a red double-decker bus, Big Ben wrapped in candy-pink smoke, classic British sweets stacked in a market cart. The vertical format was designed for social and mobile-first placements.",
          customContent: (
            <div className="space-y-3 mt-6">
              {/* 1000×1810 portrait */}
              <div className="flex justify-center">
                <div style={{ maxWidth: "360px", width: "100%" }}>
                  <Asset src="/images/cs04/british-candy.jpg" caption="British Candy - social / mobile banner" />
                </div>
              </div>
              {/* 2160×720 landscape — below */}
              <Asset src="/images/cs04/british.jpg" caption="British Candy - web banner" />
            </div>
          ),
        },
        {
          label: "04 - Celebrity Collaboration: Dolly Parton",
          highlight: "Baking 9-5. Each bite is as sweet as the icon herself.",
          content:
            "The Dolly Parton baked goods collaboration called for a visual identity that was unmistakably Dolly - hot pink, bold, joyful, and a little over the top. The campaign used illustrated Dolly portraiture alongside real product photography, all wrapped in the brand's vivid palette.",
          customContent: (
            <div className="flex justify-center mt-6">
              {/* 1000×1810 portrait — centred with max-width so it doesn't stretch too wide */}
              <div style={{ maxWidth: "360px", width: "100%" }}>
                <Asset src="/images/cs04/dolly-parton.jpg" caption="Dolly Parton - Baking 9-5 campaign" />
              </div>
            </div>
          ),
        },
        {
          label: "05 - Seasonal: Christmas",
          highlight: "Unbox Merry Moments.",
          content:
            "The Christmas FunBox campaign centred on the unboxing moment - a fully loaded gift box surrounded by tree lights, pine, and holiday warmth. The campaign ran across website hero banners and email headers. A second strand - Nostalgic Christmas Candies - leaned into childhood memories of classic holiday sweets.",
          customContent: (
            <div className="space-y-3 mt-6">
              {/* 2160×720 landscape */}
              <Asset src="/images/cs04/xmas-funbox-web.jpg" caption="Christmas FunBox - web banner" />
              <div className="grid grid-cols-2 gap-3">
                {/* 1000×1000 square */}
                <Asset src="/images/cs04/xmas-funbox-email.jpg" caption="Christmas FunBox - email banner" />
                {/* 1080×1080 square */}
                <Asset src="/images/cs04/xmas-collection-email.jpg" caption="XMAS Candy Collection - email banner" />
              </div>
              {/* 2160×720 landscape */}
              <Asset src="/images/cs04/xmas-collection-web.jpg" caption="XMAS Candy Collection - web banner" />
              {/* 1000×1762 portrait */}
              <div className="flex justify-center">
                <div style={{ maxWidth: "420px", width: "100%" }}>
                  <Asset src="/images/cs04/xmas-nostalgic-email.jpg" caption="Nostalgic Christmas Candies - email asset" />
                </div>
              </div>
            </div>
          ),
        },
        {
          label: "06 - Seasonal: New Year & Valentine's",
          highlight: "From New Year countdowns to candy hearts.",
          content:
            "The New Year campaign ran parallel web and mobile banner formats. Valentine's Day assets included a conversational hearts product visual and a blog cover for 'Gifts for Him' - each calibrated to the platform and placement.",
          customContent: (
            <div className="space-y-3 mt-6">
              {/* 2160×720 landscape */}
              <Asset src="/images/cs04/newyear-web.jpg" caption="New Year - web banner" />
              <div className="grid grid-cols-2 gap-3">
                {/* 1000×1000 square */}
                <Asset src="/images/cs04/newyear-mob.jpg" caption="New Year - mobile banner" />
                <div className="space-y-3">
                  {/* 960×620 landscape */}
                  <Asset src="/images/cs04/valentines-hearts.jpg" caption="Valentine's - conversion hearts" />
                  <Asset src="/images/cs04/valentines-blog.png" caption="Valentine's - blog cover" />
                </div>
              </div>
            </div>
          ),
        },
        {
          label: "07 - Motion & Animated Assets",
          highlight: "Stop the scroll. Animated GIFs for web and email.",
          content:
            "Animated GIF assets extended every campaign into motion - looping animations optimised for web banners, email headers, and social stories. Each GIF was crafted to communicate the key message within the first two frames.",
          customContent: (
            <div className="space-y-3 mt-6">
              {/* 2160×720 landscape */}
              <Asset src="/images/cs04/web-banner-2.gif" caption="Web banner - animated (landscape)" />
              {/* 1000×1810 portrait */}
              <div className="flex justify-center">
                <div style={{ maxWidth: "420px", width: "100%" }}>
                  <Asset src="/images/cs04/email-banner.gif" caption="Email banner - animated" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* 1000×1810 portrait */}
                <Asset src="/images/cs04/super-saturday.gif" caption="Super Saturday GFC" />
                {/* 1080×1920 — 9:16 */}
                <Asset src="/images/cs04/christmas-story.gif" caption="Christmas story" />
              </div>
            </div>
          ),
        },
        {
          label: "08 - Packaging Design",
          highlight: "Form follows feeling. Packaging that earns its shelf space.",
          content:
            "Packaging is the first physical touchpoint a brand has with a customer - and the last chance to earn the sale before the hand reaches out. I have designed packaging across categories including craft beer, specialty coffee, skincare, vinyl records, and publication covers. Each project demanded a different sensibility: the raw tactility of a craft label, the premium restraint of a skincare line, the nostalgia of a vinyl sleeve. The common thread is intentional craft - typography, material consideration, structural hierarchy, and print-ready production.",
          customContent: <PackagingCarousel />,
        },
      ]}
      metrics={[
        { value: "7+", label: "Campaigns delivered" },
        { value: "40+", label: "Creative assets produced" },
        { value: "5+", label: "Packaging categories" },
        { value: "2.8×", label: "CTR vs category benchmark" },
      ]}
      nextHref="/work/ibm-conference"
      nextTitle="IBM TechXchange Conference"
    />
  );
}
