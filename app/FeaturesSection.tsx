"use client";

import { useState, useEffect } from "react";

const features = [
  { title: "Feature One", desc: "Placeholder description of this feature's value." },
  { title: "Feature Two", desc: "Placeholder description of this feature's value." },
  { title: "Feature Three", desc: "Placeholder description of this feature's value." },
  { title: "Feature Four", desc: "Placeholder description of this feature's value." },
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
                {f.title}
                <span
                  className={`transition-transform duration-300 ease-in-out ${
                    activeIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: activeIndex === i ? "1fr" : "0fr",
                }}
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