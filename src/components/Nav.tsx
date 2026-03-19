"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-[#1F1F1F]"
          : ""
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
          <Image
            src="/images/favicon-logo.png"
            alt="Bhanu Parmar"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs text-[#888888] uppercase tracking-[0.15em]">
          <Link
            href="/#work"
            className="hover:text-[#F5F5F5] transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="hover:text-[#F5F5F5] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-[#F5F5F5] transition-colors duration-200"
          >
            Contact
          </Link>
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

        {/* Mobile menu */}
        <div className="md:hidden">
          <a
            href="/#contact"
            className="font-mono text-xs text-[#CC310E] uppercase tracking-widest"
          >
            Menu
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
