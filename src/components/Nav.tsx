"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "TXC Visual Identity ↗", href: "https://drive.google.com/file/d/1c3Il6Ds7Bd8CQFVrsdCrijjy3vR9M2gh/view?usp=drive_link", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#080808]/95 backdrop-blur-xl border-b border-[#1F1F1F]"
            : ""
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center hover:opacity-80 transition-opacity duration-200">
            <Image
              src="/images/favicon-logo.png"
              alt="Bhanu Parmar"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs text-[#888888] uppercase tracking-[0.15em]">
            <Link href="/#work" className="hover:text-[#F5F5F5] transition-colors duration-200">Work</Link>
            <Link href="/#about" className="hover:text-[#F5F5F5] transition-colors duration-200">About</Link>
            <Link href="/#contact" className="hover:text-[#F5F5F5] transition-colors duration-200">Contact</Link>
            <a
              href="https://drive.google.com/file/d/1c3Il6Ds7Bd8CQFVrsdCrijjy3vR9M2gh/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition-colors duration-200"
            >
              TXC Visual Identity ↗
            </a>
            <a
              href="/bhanu-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-[#CC310E] text-[#CC310E] hover:bg-[#CC310E] hover:text-white transition-all duration-200 text-xs"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] z-[60] relative"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block h-[1.5px] w-6 bg-[#F5F5F5] origin-center"
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-[1.5px] w-6 bg-[#F5F5F5] origin-center"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] w-6 bg-[#F5F5F5] origin-center"
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      className="font-display text-3xl font-bold text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={close}
                      className="font-display text-3xl font-bold text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Resume CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="pt-4 border-t border-[#1F1F1F]"
              >
                <a
                  href="/bhanu-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="inline-block px-6 py-3 border border-[#CC310E] text-[#CC310E] font-mono text-sm uppercase tracking-widest hover:bg-[#CC310E] hover:text-white transition-all duration-200"
                >
                  Resume ↗
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
