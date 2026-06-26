export const pricingMatrix = {
  starter: {
    baseMonthly: { INR: 999, USD: 12, EUR: 11 },
  },
  pro: {
    baseMonthly: { INR: 2499, USD: 29, EUR: 27 },
  },
  enterprise: {
    baseMonthly: { INR: 7999, USD: 95, EUR: 88 },
  },
};

export const ANNUAL_DISCOUNT_MULTIPLIER = 0.8; // flat 20% discount

export type Currency = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";
export type Tier = "starter" | "pro" | "enterprise";

export const currencySymbols: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

export function calculatePrice(
  tier: Tier,
  cycle: BillingCycle,
  currency: Currency
): number {
  const base = pricingMatrix[tier].baseMonthly[currency];
  if (cycle === "monthly") {
    return base;
  }
  // Annual: monthly rate * 12 months * 20% discount
  return Math.round(base * 12 * ANNUAL_DISCOUNT_MULTIPLIER);
}