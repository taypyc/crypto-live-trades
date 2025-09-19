import React, { useState } from 'react';
import { LineChart } from 'lucide-react';
import { useMultiWebSocket } from './hooks/useMultiWebSocket';
import { TradeGrid } from './components/TradeGrid';
import { CurrencySelector } from './components/CurrencySelector';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CurrencyContext } from './hooks/useCurrency';
import type { Currency } from './config/currencies';

export default function App() {
  const trades = useMultiWebSocket();
  const [currency, setCurrency] = useState<Currency>('USD');

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <div className="min-h-screen flex flex-col relative">
        <AnimatedBackground />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center mb-8">
              <LineChart className="w-8 h-8 text-blue-500 mr-3" />
              <h1 className="text-2xl font-bold text-gray-800 mr-4">
                Crypto Live Trades
              </h1>
              <CurrencySelector />
            </div>

            <TradeGrid trades={trades} />
          </div>
        </main>
        <Footer />
      </div>
    </CurrencyContext.Provider>
  );
}