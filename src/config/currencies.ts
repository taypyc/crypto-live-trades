export const currencies = {
  USD: {
    symbol: '$',
    rate: 1,
  },
  USDT: {
    symbol: '₮',
    rate: 1,
  },
  INR: {
    symbol: '₹',
    rate: 83.12, // Fixed rate for demo, in production this should come from an API
  },
} as const;

export type Currency = keyof typeof currencies;