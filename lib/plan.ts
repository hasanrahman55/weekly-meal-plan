export interface Plan {
  name: string;
  amount: number;
  currency: string;
  interval: string;
  isPopular?: boolean;
  description: string;
  features: string[];
}

export const availablePlans: Plan[] = [
  {
    name: "Monthly Plan",
    amount: 9.99,
    currency: "USD",
    interval: "month",
    description:
      "Great if you want to try the service before committing longer.",
    features: [
      "Unlimited AI meal plans",
      "AI nutrition insights",
      "Cancel anytime",
    ],
  },
  {
    name: "Six Month Plan",
    amount: 39.99,
    currency: "USD",
    interval: "sixMonth",
    isPopular: true, // Marking this plan as the most popular
    description:
      "Perfect for ongoing, month-to-month meal planning and features.",
    features: [
      "Unlimited AI meal plans",
      "Priority AI support",
      "Cancel anytime",
    ],
  },
  {
    name: "Yearly Plan",
    amount: 79.99,
    currency: "USD",
    interval: "year",
    description:
      "Best value for those committed to improving their diet long-term.",
    features: [
      "Unlimited AI meal plans",
      "All premium features",
      "Cancel anytime",
    ],
  },
];

const priceIdMap: Record<string, string> = {
  month: process.env.STRIPE_PRICE_MONTHLY!,
  sixMonth: process.env.STRIPE_PRICE_EVERY_SIX_MONTH!,
  year: process.env.STRIPE_PRICE_YEARLY!,
};

export const getStripePriceID = (intervalId: string) => {
  return priceIdMap[intervalId];
};
