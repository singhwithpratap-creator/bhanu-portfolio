"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { src: "/videos/Animations/IBM_TXC25_Cube.gif",            label: "TXC Cube" },
  { src: "/videos/Animations/IBM_TXC25_Rocket.gif",          label: "Rocket" },
  { src: "/videos/Animations/IBM_TXC25_GlobeNetwork.gif",    label: "Globe Network" },
  { src: "/videos/Animations/Flemingo.gif",                   label: "Flemingo" },
  { src: "/videos/Animations/IBM_TXC25_Leader.gif",          label: "Leader" },
  { src: "/videos/Animations/RockAnimation2-ezgif.com-video-to-gif-converter.gif", label: "Rock Animation" },
  { src: "/videos/Animations/IBM_TXC25_NightClear.gif",      label: "Night Clear" },
  { src: "/videos/Animations/FaceAnimation2-ezgif.com-video-to-gif-converter.gif", label: "Face Animation" },
  { src: "/videos/Animations/IBM_TXC25_GlobeLocations.gif",  label: "Globe Locations" },
  { src: "/videos/Animations/Cuboid-4-face-3sec.gif",        label: "Cuboid" },
  { src: "/videos/Animations/IBM_TXC25_Integration.gif",     label: "Integration" },
  { src: "/videos/Animations/Robotblk-ezgif.com-video-to-gif-converter.gif", label: "Robot" },
  { src: "/videos/Animations/IBM_TXC25_Satellite_A.gif",     label: "Satellite" },
  { src: "/videos/Animations/IBM_TXC25_EaseofUse.gif",       label: "Ease of Use" },
  { src: "/videos/Animations/IBM_TXC25_ScientificComp.gif",  label: "Scientific Comp" },
  { src: "/videos/Animations/IBM_TXC25_SatelliteDish.gif",   label: "Satellite Dish" },
  { src: "/videos/Animations/Percentageslch-ezgif.com-video-to-gif-converter.gif", label: "Percentage" },
  { src: "/videos/Animations/Roadmapturn-ezgif.com-video-to-gif-converter.gif",    label: "Roadmap" },
  { src: "/videos/Animations/IBM_TXC25_Website.gif",         label: "Website" },
  { src: "/videos/Animations/Hill-ezgif.com-video-to-gif-converter.gif",           label: "Hill" },
  { src: "/videos/Animations/IBM_Champion_pictogram_black_productive_pos_RGB-ezgif.com-video-to-gif-converter.gif", label: "IBM Champion" },
];

// Duplicate for seamless infinite loop
const DOUBLED = [...ITEMS, ...ITEMS];

const CARD_W = 94;
const GAP = 12;
// Exact pixel width of one full set — used for perfectly seamless snap
const SET_W = ITEMS.length * (CARD_W + GAP);

export default function AnimationStrip() {
  return (
    <div className="relative overflow-hidden border-b border-[#1F1F1F] bg-[#080808] py-5" aria-hidden="true" role="presentation">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex"
        style={{ gap: GAP }}
        animate={{ x: [0, -SET_W] }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {DOUBLED.map((item, i) => (
          <div key={i} className="flex-shrink-0" style={{ width: CARD_W }}>
            {/* Fixed-proportion container — same size for every item */}
            <div
              className="bg-[#0d0d0d] border border-[#1F1F1F] overflow-hidden"
              style={{ width: CARD_W, height: CARD_W }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="font-mono text-[9px] text-[#555555] uppercase tracking-widest text-center mt-2 leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
