export const tradingPairs = [
  'btcusdt',
  'ethusdt',
  'bnbusdt',
  'xrpusdt',
  'adausdt',
  'dogeusdt',
  'maticusdt',
  'solusdt',
] as const;

export type TradingPair = typeof tradingPairs[number];