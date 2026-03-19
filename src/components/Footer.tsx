export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F] px-6 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-base font-bold text-[#F5F5F5]">
            BP<span className="text-[#CC310E]">.</span>
          </span>
          <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
            © 2026 Bhanu Parmar
          </span>
        </div>
        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
          Built with{" "}
          <span className="text-[#CC310E]">Next.js</span>
          {" "}+{" "}
          <span className="text-[#CC310E]">Framer Motion</span>
          {" "}· Deployed on{" "}
          <span className="text-[#CC310E]">Vercel</span>
        </p>
      </div>
    </footer>
  );
}
