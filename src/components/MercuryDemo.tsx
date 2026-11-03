"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   Mercury: scripted, interactive prototype of QuickSilver's
   AI assistant. No real model is called: answers are pre-written
   from the illustrative dashboard data, but the interaction
   (thinking steps, streaming, sources, follow-ups) behaves like
   the designed product.
   ───────────────────────────────────────────────────────────── */

type Mode = "desk" | "phone";

type Block =
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "badges"; items: { label: string; tone: "good" | "neutral" }[] }
  | { kind: "kpis"; items: { value: string; label: string }[] }
  | { kind: "bullets"; items: string[] }
  | { kind: "drivers"; items: { text: string; source: string }[] }
  | { kind: "steps"; items: { text: string; page: string }[] }
  | { kind: "alert"; rows: [string, string][] }
  | { kind: "talking"; text: string }
  | { kind: "note"; text: string };

interface Scenario {
  id: string;
  question: string;
  title?: string;
  thinking: string[];
  reading: string;
  answer: string;
  blocks: Block[];
  sources: string[];
  link?: string;
  followUps: string[];
}

const S: Record<string, Scenario> = {
  alerts: {
    id: "alerts",
    question: "Which of my health systems have open alerts right now?",
    thinking: ["Applied your filters: Columbus OH · Jan – Sep 2023", "Checked Top 5 Health Systems", "Checked Active Alerts"],
    reading:
      "Top 5 health systems in Columbus OH with at least one active alert (order blocks, credit holds or overdue invoices), Jan – Sep 2023, ranked by revenue.",
    answer:
      "4 of your top 5 health systems have open alerts, 7 in total. Providence St. Joseph has the most (3); Ascension Health is your largest account with 1.",
    blocks: [
      {
        kind: "table",
        head: ["Health system", "Alerts", "Revenue", "YoY"],
        rows: [
          ["Ascension Health", "1", "$840K", "+18%"],
          ["HCA Healthcare", "2", "$610K", "+9%"],
          ["Trinity Health", "1", "$480K", "+6%"],
          ["Providence St. Joseph", "3", "$390K", "+2%"],
        ],
      },
    ],
    sources: ["Territory Hub · Top 5 Health Systems", "Active Alerts"],
    link: "Open in Operations & Risk",
    followUps: ["How is Ascension Health performing vs prior year?", "What's the alert on Ascension about?"],
  },
  yoy: {
    id: "yoy",
    question: "How is Ascension Health performing vs prior year?",
    title: "Ascension Health: account insights",
    thinking: ["Read Performance Overview for Ascension Health", "Compared with prior year", "Checked alerts on Territory Hub"],
    reading: "Ascension Health, Columbus OH, Jan – Sep 2023 compared with the same period last year.",
    answer:
      "Ascension Health is growing. Revenue is $840K (+12% vs prior year) and doses delivered are up 8%. Flu is the largest part of the mix, and there is 1 open alert to resolve before your next conversation.",
    blocks: [
      { kind: "badges", items: [{ label: "Growing", tone: "good" }, { label: "Confidence: medium", tone: "neutral" }] },
      {
        kind: "drivers",
        items: [
          { text: "Revenue is $840K, up 12% vs prior year.", source: "Performance Overview" },
          { text: "Flu leads the mix (32%), then COVID (22%) and RSV (16%).", source: "Product Mix" },
          { text: "Revenue peaks in Sep – Nov, the flu season.", source: "Revenue by Month" },
        ],
      },
      {
        kind: "steps",
        items: [
          { text: "Resolve the open alert before the next call.", page: "Operations & Risk" },
          { text: "Review flu pre-book ahead of next season.", page: "Market & Seasonality" },
        ],
      },
    ],
    sources: ["Performance Overview", "Product Mix", "Territory Hub · Alerts"],
    link: "Add to PRT draft",
    followUps: ["What's the alert on Ascension about?", "How is my flu pre-book tracking?"],
  },
  prebook: {
    id: "prebook",
    question: "How is my flu pre-book tracking this season?",
    thinking: ["Applied your filters: Columbus OH · Jan – Sep 2023", "Checked Flu Pre-Book vs In-Season"],
    reading: "Share of flu orders placed as pre-book (Jan – Jul) vs in-season (Aug – Dec) across Columbus OH.",
    answer: "73% of your flu orders came in as pre-book and 27% in-season. Most of the season's volume is already locked in.",
    blocks: [
      { kind: "kpis", items: [{ value: "73%", label: "Pre-book (Jan – Jul)" }, { value: "27%", label: "In-season (Aug – Dec)" }] },
    ],
    sources: ["Territory Hub · Flu Pre-Book vs In-Season"],
    link: "Open in Market & Seasonality",
    followUps: ["Which of my health systems have open alerts right now?"],
  },
  recap: {
    id: "recap",
    question: "meeting ascension in 10 min, quick recap?",
    title: "Ascension Health: quick recap",
    thinking: ["Found Ascension Health", "Pulled your PRT draft insights"],
    reading: "A short recap of Ascension Health for a customer meeting, using the insights already in your PRT draft.",
    answer: "",
    blocks: [
      { kind: "badges", items: [{ label: "Growing", tone: "good" }, { label: "Confidence: medium", tone: "neutral" }] },
      { kind: "kpis", items: [{ value: "$840K", label: "Revenue · +12% vs PY" }, { value: "+8%", label: "Doses delivered vs PY" }] },
      {
        kind: "bullets",
        items: [
          "Flu leads the product mix (32%), then COVID (22%) and RSV (16%).",
          "Revenue peaks in Sep – Nov, the flu season.",
          "1 open operational alert, worth raising early.",
        ],
      },
      { kind: "note", text: "Same insights as your PRT draft for Ascension Health." },
    ],
    sources: ["PRT draft · Ascension Health"],
    link: "Open PRT draft",
    followUps: ["whats the alert about"],
  },
  alertDetail: {
    id: "alertDetail",
    question: "What's the alert on Ascension about?",
    thinking: ["Used the Ascension Health context", "Checked Operations & Risk"],
    reading: "The open operational alert on Ascension Health, from Operations & Risk.",
    answer: "There is 1 open alert on Ascension Health:",
    blocks: [
      {
        kind: "alert",
        rows: [
          ["Type", "[Order block / Credit hold / Overdue invoice]"],
          ["Amount", "[$ amount]"],
          ["Open since", "[Date]"],
        ],
      },
      { kind: "talking", text: "Raise the open alert early and agree on who resolves it, so it doesn't get in the way of the growth conversation." },
    ],
    sources: ["Operations & Risk"],
    link: "View in Operations & Risk",
    followUps: ["How is Ascension Health performing vs prior year?"],
  },
};

const STARTERS: Record<Mode, { label: string; id: string }[]> = {
  desk: [
    { label: "Which of my health systems need attention?", id: "alerts" },
    { label: "How is Ascension Health performing vs prior year?", id: "yoy" },
    { label: "How is my flu pre-book tracking this season?", id: "prebook" },
  ],
  phone: [
    { label: "Recap an account before a meeting", id: "recap" },
    { label: "Any open issues on this account?", id: "alertDetail" },
    { label: "How is my flu pre-book tracking?", id: "prebook" },
  ],
};

function matchScenario(q: string, lastId: string | null): Scenario | null {
  const t = q.toLowerCase();
  if (t.includes("alert") && (t.includes("about") || t.includes("what") || lastId === "recap")) {
    if (t.includes("which") || t.includes("health systems")) return S.alerts;
    return S.alertDetail;
  }
  if (t.includes("alert") || t.includes("attention") || t.includes("issue")) return t.includes("account") || lastId === "recap" ? S.alertDetail : S.alerts;
  if (t.includes("recap") || t.includes("meeting") || t.includes("prt")) return S.recap;
  if (t.includes("pre-book") || t.includes("prebook") || t.includes("pre book") || t.includes("flu") || t.includes("season")) return S.prebook;
  if (t.includes("ascension") || t.includes("prior year") || t.includes("perform") || t.includes("yoy") || t.includes("growing")) return S.yoy;
  return null;
}

type Msg =
  | { role: "user"; text: string }
  | { role: "ai"; scenario: Scenario; phase: "thinking" | "streaming" | "done"; stepsDone: number; words: number }
  | { role: "fallback" };

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

/* ── small visual pieces ── */

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M10 2l1.8 5.2L17 9l-5.2 1.8L10 16l-1.8-5.2L3 9l5.2-1.8L10 2zm8 10l.9 2.6 2.6.9-2.6.9L18 19l-.9-2.6-2.6-.9 2.6-.9L18 12z" />
    </svg>
  );
}

function Dots() {
  return (
    <span className="inline-flex gap-1 ml-2 align-middle" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#7A00E6] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </span>
  );
}

function SourceChip({ label }: { label: string }) {
  return <span className="text-[11px] text-[#3A3A3A] border border-[#D9D3E6] rounded-full px-2.5 py-0.5 bg-white">{label}</span>;
}

function BlockView({ b, phone }: { b: Block; phone: boolean }) {
  switch (b.kind) {
    case "table":
      return (
        <div className="border border-[#E6E1EF] rounded-lg overflow-hidden my-3 text-[12px]">
          <table className="w-full">
            <thead className="bg-[#F6F3FA] text-[#4A4A4A]">
              <tr>
                {b.head.map((h, i) => (
                  <th key={h} className={`py-2 px-3 font-medium ${i === 0 ? "text-left" : "text-right"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className={`border-t border-[#EEE9F5] ${i === 0 ? "bg-[#F1E8FD]" : ""}`}>
                  <td className="py-2 px-3 text-[#7A00E6]">{r[0]}</td>
                  <td className="py-2 px-3 text-right text-[#D0213A]">{r[1]}</td>
                  <td className="py-2 px-3 text-right text-[#222]">{r[2]}</td>
                  <td className="py-2 px-3 text-right text-[#138A4B]">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "badges":
      return (
        <div className="flex gap-2 my-3 flex-wrap">
          {b.items.map((x) => (
            <span key={x.label} className={`text-[11px] rounded-full px-2.5 py-1 ${x.tone === "good" ? "bg-[#E3F5EA] text-[#138A4B]" : "bg-[#EFEDF3] text-[#333]"}`}>
              {x.label}
            </span>
          ))}
        </div>
      );
    case "kpis":
      return (
        <div className="grid grid-cols-2 gap-2 my-3">
          {b.items.map((k) => (
            <div key={k.label} className="bg-[#F4F2F7] rounded-lg p-3">
              <p className={`font-semibold text-[#111] ${phone ? "text-xl" : "text-2xl"}`}>{k.value}</p>
              <p className="text-[11px] text-[#4A4A4A] mt-0.5">{k.label}</p>
            </div>
          ))}
        </div>
      );
    case "bullets":
      return (
        <ul className="my-3 space-y-1.5">
          {b.items.map((x) => (
            <li key={x} className="flex gap-2 text-[13px] text-[#222] leading-snug">
              <span className="text-[#7A00E6]">•</span>
              {x}
            </li>
          ))}
        </ul>
      );
    case "drivers":
      return (
        <div className="my-3">
          <p className="text-[12px] font-semibold text-[#222] mb-1.5">What&rsquo;s driving it</p>
          <div className="border border-[#E6E1EF] rounded-lg divide-y divide-[#EEE9F5]">
            {b.items.map((d) => (
              <div key={d.text} className="flex items-start justify-between gap-2 px-3 py-2">
                <span className="text-[12px] text-[#222] leading-snug">{d.text}</span>
                <SourceChip label={d.source} />
              </div>
            ))}
          </div>
        </div>
      );
    case "steps":
      return (
        <div className="my-3">
          <p className="text-[12px] font-semibold text-[#222] mb-1.5">Suggested next steps</p>
          <div className="border border-[#E6E1EF] rounded-lg divide-y divide-[#EEE9F5]">
            {b.items.map((s, i) => (
              <div key={s.text} className="flex items-center justify-between gap-2 px-3 py-2">
                <span className="flex items-center gap-2 text-[12px] text-[#222]">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-[#7A00E6] text-[#FFFFFF] text-[10px] flex items-center justify-center">{i + 1}</span>
                  {s.text}
                </span>
                <span className="text-[11px] text-[#7A00E6] whitespace-nowrap">{s.page} →</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "alert":
      return (
        <div className="border border-[#F2C9D0] rounded-lg overflow-hidden my-3 text-[12px]">
          <p className="bg-[#FCEBEE] text-[#D0213A] px-3 py-2 font-medium">● Open alert</p>
          {b.rows.map(([k, v]) => (
            <div key={k} className="flex gap-3 px-3 py-2 border-t border-[#F3E4E7]">
              <span className="w-20 shrink-0 text-[#575757]">{k}</span>
              <span className="text-[#222] font-medium">{v}</span>
            </div>
          ))}
        </div>
      );
    case "talking":
      return (
        <div className="border-l-4 border-[#7A00E6] bg-[#F4F2F7] rounded-r-lg px-3 py-2 my-3">
          <p className="text-[12px] font-semibold text-[#222]">Suggested talking point</p>
          <p className="text-[12px] text-[#333] leading-snug mt-0.5">{b.text}</p>
        </div>
      );
    case "note":
      return <p className="text-[11px] italic text-[#575757] my-2">{b.text}</p>;
  }
}

/* ── main component ── */

export default function MercuryDemo() {
  const [mode, setMode] = useState<Mode>("desk");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [openReading, setOpenReading] = useState<Record<number, boolean>>({});
  const runId = useRef(0);
  const scroller = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const autoplayed = useRef(false);
  const lastId = useRef<string | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  const reset = useCallback(() => {
    runId.current++;
    setMsgs([]);
    setInput("");
    setBusy(false);
    setOpenReading({});
    lastId.current = null;
  }, []);

  const ask = useCallback(async (text: string, forced?: Scenario) => {
    const q = text.trim();
    if (!q) return;
    const id = ++runId.current;
    const alive = () => runId.current === id;
    setBusy(true);
    setInput("");
    const sc = forced ?? matchScenario(q, lastId.current);
    setMsgs((m) => [...m, { role: "user", text: q }]);
    await wait(reduced.current ? 50 : 400);
    if (!alive()) return;

    if (!sc) {
      setMsgs((m) => [...m, { role: "fallback" }]);
      setBusy(false);
      return;
    }

    const idx = await new Promise<number>((res) =>
      setMsgs((m) => {
        res(m.length);
        return [...m, { role: "ai", scenario: sc, phase: "thinking", stepsDone: 0, words: 0 }];
      })
    );
    const update = (patch: Partial<Extract<Msg, { role: "ai" }>>) =>
      setMsgs((m) => m.map((x, i) => (i === idx && x.role === "ai" ? { ...x, ...patch } : x)));

    for (let s = 1; s <= sc.thinking.length; s++) {
      await wait(reduced.current ? 60 : 700);
      if (!alive()) return;
      update({ stepsDone: s });
    }
    await wait(reduced.current ? 60 : 450);
    if (!alive()) return;
    update({ phase: "streaming" });

    const total = sc.answer ? sc.answer.split(" ").length : 0;
    if (reduced.current) {
      update({ words: total });
    } else {
      for (let w = 1; w <= total; w++) {
        await wait(45);
        if (!alive()) return;
        update({ words: w });
      }
    }
    await wait(reduced.current ? 30 : 250);
    if (!alive()) return;
    update({ phase: "done" });
    lastId.current = sc.id;
    setBusy(false);
  }, []);

  /* Autoplay the first question once the demo scrolls into view */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      async ([e]) => {
        if (!e.isIntersecting || autoplayed.current) return;
        autoplayed.current = true;
        io.disconnect();
        const q = S.alerts.question;
        const id = runId.current;
        if (!reduced.current) {
          await wait(600);
          for (let i = 1; i <= q.length; i++) {
            if (runId.current !== id) return;
            setInput(q.slice(0, i));
            await wait(28);
          }
          await wait(350);
        }
        if (runId.current !== id) return;
        ask(q, S.alerts);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ask]);

  const switchMode = (m: Mode) => {
    if (m === mode) return;
    reset();
    setMode(m);
  };

  const phone = mode === "phone";
  const empty = msgs.length === 0;
  const lastMsg = msgs[msgs.length - 1];
  const followUps = !busy && lastMsg && lastMsg.role === "ai" && lastMsg.phase === "done" ? lastMsg.scenario.followUps : [];

  const panel = (
    <div
      className={`flex flex-col bg-white text-[#111] overflow-hidden ${phone ? "h-full" : "h-full border-l border-[#D9D3E6] shadow-[-12px_0_32px_rgba(35,0,76,0.18)]"}`}
      style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}
    >
      {/* Header */}
      <div className={`flex items-center justify-between px-4 ${phone ? "pt-9 pb-3" : "py-3"} bg-gradient-to-r from-[#23004C] to-[#5A00B4] text-[#FFFFFF]`}>
        <div className="flex items-center gap-2">
          <Sparkle className="w-5 h-5" />
          <span className="font-semibold text-[16px]">Mercury</span>
          <span className="text-[10px] font-bold border border-white/70 rounded px-1.5 py-px">AI</span>
        </div>
        <button onClick={reset} className="text-white/80 hover:text-[#FFFFFF] text-[12px] flex items-center gap-1" aria-label="Start a new conversation">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" />
          </svg>
          New chat
        </button>
      </div>
      <div className="px-4 py-2 bg-[#F1EFF4] text-[11px] text-[#444] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7A00E6]" />
        Using your filters: Columbus OH · Jan – Sep 2023
      </div>

      {/* Messages */}
      <div ref={scroller} className="flex-1 overflow-y-auto px-4 py-4 space-y-4" aria-live="polite">
        {empty && (
          <div>
            <p className="text-[11px] text-[#575757] flex items-center gap-1">
              <Sparkle className="w-3.5 h-3.5 text-[#7A00E6]" /> Mercury
            </p>
            <p className="font-semibold text-[17px] mt-2">Hi, Jason!</p>
            <p className="text-[14px] text-[#333] mt-0.5">{phone ? "What do you need before your next meeting?" : "What would you like to know about your territory?"}</p>
            <p className="text-[12px] font-semibold mt-4 mb-2">Quick starters</p>
            <div className="space-y-2">
              {STARTERS[mode].map((s) => (
                <button
                  key={s.id}
                  onClick={() => ask(s.id === "recap" ? S.recap.question : s.label, S[s.id])}
                  disabled={busy}
                  className="w-full text-left text-[13px] border border-[#DDD8E6] rounded-lg px-3 py-2.5 hover:border-[#7A00E6] hover:bg-[#FAF7FE] transition-colors flex justify-between items-center disabled:opacity-50"
                >
                  {s.label}
                  <span className="text-[#7A00E6]">▷</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {msgs.map((m, i) => {
          if (m.role === "user")
            return (
              <div key={i} className="flex flex-col items-end">
                <span className="text-[10px] text-[#5E5E5E] mb-1">You · just now</span>
                <div className="bg-[#EFEDF3] rounded-2xl rounded-tr-sm px-3.5 py-2 text-[13px] max-w-[85%]">{m.text}</div>
              </div>
            );
          if (m.role === "fallback")
            return (
              <div key={i} className="text-[13px] text-[#333]">
                <p className="text-[11px] text-[#575757] flex items-center gap-1 mb-1">
                  <Sparkle className="w-3.5 h-3.5 text-[#7A00E6]" /> Mercury
                </p>
                This prototype is scripted, so it answers a set of territory questions. Try one of these:
                <div className="flex flex-wrap gap-2 mt-2">
                  {STARTERS[mode].map((s) => (
                    <button key={s.id} onClick={() => ask(s.id === "recap" ? S.recap.question : s.label, S[s.id])} className="text-[11px] text-[#7A00E6] border border-[#D9C5F7] rounded-full px-2.5 py-1 hover:bg-[#FAF7FE]">
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          const sc = m.scenario;
          if (m.phase === "thinking")
            return (
              <div key={i} className="bg-[#F4F2F7] rounded-xl px-3.5 py-3">
                <p className="text-[13px] font-semibold flex items-center gap-1.5">
                  <Sparkle className="w-4 h-4 text-[#7A00E6]" /> Mercury is thinking <Dots />
                </p>
                <ul className="mt-2 space-y-1">
                  {sc.thinking.map((t, s) => (
                    <li key={t} className={`text-[12px] flex gap-2 ${s < m.stepsDone ? "text-[#444]" : s === m.stepsDone ? "text-[#7A00E6] font-medium" : "text-[#8A8A8A]"}`}>
                      <span className="w-3">{s < m.stepsDone ? <span className="text-[#138A4B]">✓</span> : s === m.stepsDone ? "…" : ""}</span>
                      {s === m.stepsDone ? t.replace(/^Checked/, "Checking").replace(/^Pulled/, "Pulling").replace(/^Read /, "Reading ").replace(/^Used/, "Using").replace(/^Compared/, "Comparing").replace(/^Applied/, "Applying").replace(/^Found/, "Finding") : t}
                    </li>
                  ))}
                </ul>
              </div>
            );
          const words = sc.answer.split(" ");
          return (
            <div key={i}>
              <p className="text-[11px] text-[#575757] flex items-center gap-1.5">
                <Sparkle className="w-3.5 h-3.5 text-[#7A00E6]" /> Mercury <span className="text-[#BBB]">|</span>
                <button onClick={() => setOpenReading((o) => ({ ...o, [i]: !o[i] }))} className="text-[#7A00E6] hover:underline" aria-expanded={openReading[i] ?? !phone}>
                  Reasoning {(openReading[i] ?? !phone) ? "▴" : "▾"}
                </button>
              </p>
              {(openReading[i] ?? !phone) && (
                <div className="border-l-4 border-[#7A00E6] bg-[#F4F2F7] rounded-r-lg px-3 py-2 mt-2">
                  <p className="text-[12px] font-semibold">How I read your request</p>
                  <p className="text-[12px] text-[#333] leading-snug mt-0.5">{sc.reading}</p>
                </div>
              )}
              {sc.title && <p className="font-semibold text-[15px] mt-3">{sc.title}</p>}
              {sc.answer && (
                <p className="text-[13px] leading-relaxed mt-2">
                  {words.slice(0, m.words).join(" ")}
                  {m.phase === "streaming" && <span className="inline-block w-1.5 h-3.5 bg-[#7A00E6] ml-0.5 align-middle animate-pulse" />}
                </p>
              )}
              {m.phase === "done" && (
                <div className="animate-[fadeIn_.4s_ease]">
                  {sc.blocks.map((b, j) => (
                    <BlockView key={j} b={b} phone={phone} />
                  ))}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    <span className="text-[11px] text-[#575757]">Source:</span>
                    {sc.sources.map((s) => (
                      <SourceChip key={s} label={s} />
                    ))}
                  </div>
                  {sc.link && <p className="text-[12px] text-[#7A00E6] font-medium mt-2">{sc.link} ↗</p>}
                </div>
              )}
            </div>
          );
        })}

        {followUps.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {followUps.map((f) => (
              <button key={f} onClick={() => ask(f)} className="text-[11px] text-[#7A00E6] border border-[#D9C5F7] rounded-full px-2.5 py-1 hover:bg-[#FAF7FE]">
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!busy) ask(input);
        }}
        className="border-t border-[#EEE] px-3 pt-3 pb-2"
      >
        <div className={`flex items-center gap-2 border rounded-full px-3.5 py-2 ${input ? "border-[#7A00E6]" : "border-[#D5D0DD]"}`}>
          <label htmlFor="mercury-input" className="sr-only">Ask Mercury</label>
          <input
            id="mercury-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={empty ? "Ask about your territory…" : "Ask a follow-up…"}
            className="flex-1 bg-transparent outline-none text-[13px] text-[#111] placeholder:text-[#6B6B6B]"
            disabled={busy}
            autoComplete="off"
          />
          <button type="submit" disabled={busy || !input.trim()} className="text-[#7A00E6] disabled:text-[#BBB]" aria-label="Send">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 12l16-8-6 16-2-7-8-1z" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] italic text-[#5E5E5E] mt-1.5 px-1">AI-generated answers can be inaccurate. Check the source page before sharing.</p>
      </form>
    </div>
  );

  return (
    <div ref={rootRef} className="my-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CC310E] mr-2 align-middle animate-pulse" />
          Interactive prototype · click a starter or type a question
        </p>
        <div className="flex border border-[#1F1F1F] text-[11px] font-mono uppercase tracking-widest" role="tablist" aria-label="Device">
          {(["desk", "phone"] as Mode[]).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => switchMode(m)}
              className={`px-3 py-1.5 ${mode === m ? "bg-[#CC310E] text-[#FFFFFF]" : "text-[#888888] hover:text-[#F5F5F5]"}`}
            >
              {m === "desk" ? "Act 1 · Desk" : "Act 2 · Phone"}
            </button>
          ))}
        </div>
      </div>

      {phone ? (
        <div className="flex justify-center bg-[#111111] border border-[#1F1F1F] py-8">
          <div className="relative w-[340px] max-w-full h-[680px] rounded-[44px] border-[10px] border-[#1A1A1A] bg-black overflow-hidden shadow-2xl">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-10" />
            {panel}
          </div>
        </div>
      ) : (
        <div className="relative h-[620px] overflow-hidden border border-[#1F1F1F] bg-[#F7F5FA]">
          {/* Territory Hub behind the assistant, blurred like the real panel-open state */}
          <Image
            src="/images/cs05/territory-hub.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover object-left-top scale-[1.03] blur-[2.5px] select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-[#FFFFFF]/25" aria-hidden="true" />
          <div className="absolute top-0 right-0 h-full w-full sm:w-[380px]">{panel}</div>
        </div>
      )}
      <p className="font-mono text-[10px] text-[#555555] mt-2 text-center">
        A scripted demo built on made-up dashboard data. No real AI model or customer data behind it.
      </p>
    </div>
  );
}
