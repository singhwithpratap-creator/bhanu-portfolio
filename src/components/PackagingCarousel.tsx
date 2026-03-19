"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState } from "react";
import type { PanInfo } from "framer-motion";

const ITEMS = [
  { src: "/images/Packaging/beer1.jpeg",      caption: "Craft beer - label design 01" },
  { src: "/images/Packaging/beer2.jpeg",      caption: "Craft beer - label design 02" },
  { src: "/images/Packaging/beer3.jpeg",      caption: "Craft beer - label design 03" },
  { src: "/images/Packaging/coffee.jpeg",     caption: "Specialty coffee - packaging 01" },
  { src: "/images/Packaging/coffee2.jpeg",    caption: "Specialty coffee - packaging 02" },
  { src: "/images/Packaging/vinyl-record.jpg",caption: "Vinyl record - sleeve design" },
  { src: "/images/Packaging/Candybox 01.png", caption: "Candy box - packaging 01" },
  { src: "/images/Packaging/Candybox 02.png", caption: "Candy box - packaging 02" },
  { src: "/images/Packaging/Candybox 03.png", caption: "Candy box - packaging 03" },
  { src: "/images/Packaging/Candybox 04.png", caption: "Candy box - packaging 04" },
  { src: "/images/Packaging/inno-book.jpg",   caption: "Publication - cover design" },
  { src: "/images/Packaging/book.jpeg",       caption: "Book cover - design 01" },
  { src: "/images/Packaging/book2.jpeg",      caption: "Book cover - design 02" },
  { src: "/images/Packaging/back.jpg",        caption: "Packaging - back panel" },
];

const CARD_W = 340;
const CARD_GAP = 16;
const STEP = CARD_W + CARD_GAP;
const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

export default function PackagingCarousel() {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);

  const goTo = (index: number) => {
    const looped = ((index % ITEMS.length) + ITEMS.length) % ITEMS.length;
    setActive(looped);
    animate(x, -looped * STEP, {
      type: "spring",
      stiffness: 280,
      damping: 32,
      mass: 0.9,
    });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) goTo(active + 1);
    else if (info.offset.x > 60) goTo(active - 1);
    else goTo(active);
  };

  return (
    <div className="mt-6">
      {/* Track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing select-none"
          style={{ x, gap: CARD_GAP }}
          drag="x"
          dragConstraints={{ left: -(ITEMS.length - 1) * STEP, right: 0 }}
          dragElastic={0.06}
          onDragEnd={handleDragEnd}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => goTo(i)}
              className="flex-shrink-0 overflow-hidden border cursor-pointer bg-[#111111]"
              style={{
                width: CARD_W,
                borderColor: active === i ? "#CC310E" : "#1F1F1F",
              }}
              animate={{
                scale: active === i ? 1.02 : 1,
                boxShadow:
                  active === i
                    ? "0 20px 56px rgba(204,49,14,0.14)"
                    : "0 0 0 rgba(0,0,0,0)",
              }}
              whileHover={{
                scale: 1.03,
                borderColor: "#CC310E",
                boxShadow: "0 24px 60px rgba(204,49,14,0.16)",
                zIndex: 10,
              }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="w-full bg-[#0d0d0d]" style={{ aspectRatio: "4/3" }}>
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
              </div>
              <p className="font-mono text-[9px] text-[#888888] uppercase tracking-widest text-center py-3 px-2 leading-relaxed">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dot indicators */}
        <div className="flex items-center gap-2 flex-wrap">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to item ${i + 1}`}
              style={{
                width: active === i ? 24 : 7,
                height: 7,
                borderRadius: "9999px",
                background: active === i ? "#CC310E" : "#2A2A2A",
                transition: "all 0.35s cubic-bezier(0.25,0.4,0.25,1)",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => goTo(active - 1)}
            whileHover={{ x: -2, borderColor: "#CC310E" }}
            whileTap={{ scale: 0.94 }}
            className="w-10 h-10 border border-[#1F1F1F] flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] font-mono transition-colors duration-200"
            style={{ transition: "border-color 0.2s, color 0.2s" }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={() => goTo(active + 1)}
            whileHover={{ x: 2, borderColor: "#CC310E" }}
            whileTap={{ scale: 0.94 }}
            className="w-10 h-10 border border-[#1F1F1F] flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] font-mono transition-colors duration-200"
            style={{ transition: "border-color 0.2s, color 0.2s" }}
          >
            →
          </motion.button>
        </div>
      </div>

      <p className="font-mono text-[10px] text-[#444444] uppercase tracking-widest mt-4">
        Drag to explore · Click to focus
      </p>
    </div>
  );
}
