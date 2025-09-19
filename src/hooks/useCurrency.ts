import { useState, createContext, useContext } from 'react';
import type { Currency } from '../config/currencies';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}