"use client";

import { useState } from "react";
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
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <section id="pricing" aria-label="Pricing" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="font-mono text-3xl font-bold text-oceanic-noir text-center mb-8">
        Pricing
      </h2>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <div className="flex bg-mystic-mint rounded-full p-1">
          <button
            onClick={() => setCycle("monthly")}
            className={`px-5 py-2 rounded-full font-sans text-sm font-semibold transition-colors ${
              cycle === "monthly" ? "bg-forsythia text-oceanic-noir" : "text-oceanic-noir"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setCycle("annual")}
            className={`px-5 py-2 rounded-full font-sans text-sm font-semibold transition-colors ${
              cycle === "annual" ? "bg-forsythia text-oceanic-noir" : "text-oceanic-noir"
            }`}
          >
            Annual (-20%)
          </button>
        </div>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
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
              {currencySymbols[currency]}
              {calculatePrice(tier, cycle, currency)}
              <span className="text-base font-normal text-zinc-500">
                /{cycle === "monthly" ? "mo" : "yr"}
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}