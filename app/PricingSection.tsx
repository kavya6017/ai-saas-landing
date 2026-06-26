"use client";

import { useRef, useState } from "react";
import {
  calculatePrice,
  currencySymbols,
  Currency,
  BillingCycle,
  Tier,
} from "./pricingData";

const tiers: Tier[] = ["starter", "pro", "enterprise"];
const currencies: Currency[] = ["INR", "USD", "EUR"];

export default function PricingSection() {
  // Refs used to mutate text nodes directly, bypassing React re-render
  const priceRefs = useRef<Record<Tier, HTMLSpanElement | null>>({
    starter: null,
    pro: null,
    enterprise: null,
  });
  const periodRefs = useRef<Record<Tier, HTMLSpanElement | null>>({
    starter: null,
    pro: null,
    enterprise: null,
  });

  // These are only used for button highlight styling, not for the price text itself
  const [cycleLabel, setCycleLabel] = useState<BillingCycle>("monthly");
  const [currencyLabel, setCurrencyLabel] = useState<Currency>("INR");

  // Mutable refs holding the "real" current values, read by the DOM-update function
  const cycleRef = useRef<BillingCycle>("monthly");
  const currencyRef = useRef<Currency>("INR");

  function updatePrices() {
    const cycle = cycleRef.current;
    const currency = currencyRef.current;
    tiers.forEach((tier) => {
      const priceEl = priceRefs.current[tier];
      const periodEl = periodRefs.current[tier];
      if (priceEl) {
        priceEl.textContent = `${currencySymbols[currency]}${calculatePrice(
          tier,
          cycle,
          currency
        )}`;
      }
      if (periodEl) {
        periodEl.textContent = cycle === "monthly" ? "/mo" : "/yr";
      }
    });
  }

  function handleCycleChange(cycle: BillingCycle) {
    cycleRef.current = cycle;
    setCycleLabel(cycle); // only re-renders the toggle buttons, not price text (text is set via ref above)
    updatePrices();
  }

  function handleCurrencyChange(currency: Currency) {
    currencyRef.current = currency;
    setCurrencyLabel(currency);
    updatePrices();
  }

  return (
    <section id="pricing" aria-label="Pricing" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="font-mono text-3xl font-bold text-oceanic-noir text-center mb-8">
        Pricing
      </h2>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <div className="flex bg-mystic-mint rounded-full p-1">
          <button
            onClick={() => handleCycleChange("monthly")}
            className={`px-5 py-2 rounded-full font-sans text-sm font-semibold transition-colors duration-150 ease-out ${
              cycleLabel === "monthly" ? "bg-forsythia text-oceanic-noir" : "text-oceanic-noir"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handleCycleChange("annual")}
            className={`px-5 py-2 rounded-full font-sans text-sm font-semibold transition-colors duration-150 ease-out ${
              cycleLabel === "annual" ? "bg-forsythia text-oceanic-noir" : "text-oceanic-noir"
            }`}
          >
            Annual (-20%)
          </button>
        </div>

        <select
          value={currencyLabel}
          onChange={(e) => handleCurrencyChange(e.target.value as Currency)}
          className="bg-mystic-mint rounded-full px-5 py-2 font-sans text-sm font-semibold text-oceanic-noir border-none"
        >
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <article
            key={tier}
            className="bg-white p-8 rounded-2xl border border-mystic-mint text-center"
          >
            <h3 className="font-mono font-semibold text-xl text-nocturnal-expedition mb-4 capitalize">
              {tier}
            </h3>
            <p className="font-sans text-4xl font-bold text-oceanic-noir">
              <span
                ref={(el) => {
                  priceRefs.current[tier] = el;
                }}
              >
                {currencySymbols.INR}
                {calculatePrice(tier, "monthly", "INR")}
              </span>
              <span
                className="text-base font-normal text-zinc-500"
                ref={(el) => {
                  periodRefs.current[tier] = el;
                }}
              >
                /mo
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}