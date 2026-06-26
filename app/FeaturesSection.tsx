"use client";

import { useState, useEffect } from "react";
import type { ReactElement } from "react";
 
const icons: Record<string, ReactElement> = {
  chartPie: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </g>
    </svg>
  ),
  cog: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
      </g>
    </svg>
  ),
  trendUp: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  ),
};
 
const features = [
  { title: "Smart Analytics", desc: "Real-time dashboards that visualize your automation pipeline.", icon: "chartPie" },
  { title: "Automated Workflows", desc: "Configure once, let the engine handle the rest.", icon: "cog" },
  { title: "Performance Insights", desc: "Track growth and efficiency trends as they happen.", icon: "trendUp" },
  { title: "Seamless Integrations", desc: "Connect your existing tools in just a few clicks.", icon: "link" },
];
 
export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
 
  return (
    <section id="features" aria-label="Features" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="font-mono text-3xl font-bold text-oceanic-noir text-center mb-12">
        Features
      </h2>
 
      {!isMobile ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <article
              key={f.title}
              onMouseEnter={() => setActiveIndex(i)}
              className={`p-6 rounded-2xl border transition-all duration-200 ease-out cursor-pointer ${
                activeIndex === i
                  ? "bg-forsythia border-forsythia scale-105"
                  : "bg-white border-mystic-mint"
              }`}
            >
              <div className="text-nocturnal-expedition mb-3">{icons[f.icon]}</div>
              <h3 className="font-mono font-semibold text-lg text-nocturnal-expedition mb-2">
                {f.title}
              </h3>
              <p className="font-sans text-zinc-600 text-sm">{f.desc}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {features.map((f, i) => (
            <div key={f.title} className="border border-mystic-mint rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-4 bg-white font-mono font-semibold text-nocturnal-expedition"
              >
                <span className="flex items-center gap-3">
                  {icons[f.icon]}
                  {f.title}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                    activeIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
                </svg>
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: activeIndex === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="font-sans text-zinc-600 text-sm p-4 pt-0">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}