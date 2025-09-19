import React from 'react';
import { TradeCard } from './TradeCard';
import type { Trade } from '../types/trade';
import { tradingPairs, type TradingPair } from '../config/pairs';

interface TradeGridProps {
  trades: Record<TradingPair, Trade | null>;
}

export function TradeGrid({ trades }: TradeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tradingPairs.map((pair) => (
        <TradeCard 
          key={pair}
          symbol={pair}
          trade={trades[pair]}
        />
      ))}
    </div>
  );
}