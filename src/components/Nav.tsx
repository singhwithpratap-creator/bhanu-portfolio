"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "TXC Visual Identity ↗", href: "https://drive.google.com/file/d/1c3Il6Ds7Bd8CQFVrsdCrijjy3vR9M2gh/view?usp=drive_link", external: true },
];

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active ? "#ffffff" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active ? "#ffffff" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[64px] h-[32px]" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center w-[64px] h-[32px] rounded-full border border-[#1F1F1F] bg-[#111111] p-[3px] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC310E]"
    >
      {/* Sliding highlight */}
      <motion.div
        className="absolute w-[26px] h-[26px] rounded-full bg-[#CC310E]"
        animate={{ x: isDark ? 3 : 29 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ borderRadius: "9999px" }}
      />

      {/* Moon — left */}
      <span className="relative z-10 w-[26px] h-[26px] flex items-center justify-center text-[#888888]">
        <MoonIcon active={isDark} />
      </span>

      {/* Sun — right */}
      <span className="relative z-10 w-[26px] h-[26px] flex items-center justify-center text-[#888888]">
        <SunIcon active={!isDark} />
      </span>
    </button>
  );
}

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
          <div className="hidden md:flex items-center gap-8 font-mono text-xs text-[#C8C8C8] uppercase tracking-[0.15em]">
            <Link href="/#work" className="nav-link hover:text-white transition-colors duration-200">Work</Link>
            <Link href="/#about" className="nav-link hover:text-white transition-colors duration-200">About</Link>
            <Link href="/#contact" className="nav-link hover:text-white transition-colors duration-200">Contact</Link>
            <a
              href="https://drive.google.com/file/d/1c3Il6Ds7Bd8CQFVrsdCrijjy3vR9M2gh/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link hover:text-white transition-colors duration-200"
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

            {/* Theme toggle — desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex flex-col items-center justify-center w-10 h-10 gap-[5px] z-[60] relative"
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
                      className="nav-link font-display text-3xl font-bold text-[#C8C8C8] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={close}
                      className="nav-link font-display text-3xl font-bold text-[#C8C8C8] hover:text-white transition-colors duration-200"
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
