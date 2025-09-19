import React from 'react';
import { currencies } from '../config/currencies';
import { useCurrency } from '../hooks/useCurrency';

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as keyof typeof currencies)}
      className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {Object.entries(currencies).map(([code]) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}