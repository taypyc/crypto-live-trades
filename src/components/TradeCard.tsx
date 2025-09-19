import { ArrowDown, ArrowUp } from 'lucide-react';
import type { Trade } from '../types/trade';
import { formatPrice, formatQuantity, formatSymbol } from '../utils/formatters';
import { useCurrency } from '../hooks/useCurrency';

interface TradeCardProps {
  symbol: string;
  trade: Trade | null;
}

export function TradeCard({ symbol, trade }: TradeCardProps) {
  const { currency } = useCurrency();

  if (!trade) {
    return (
      <div className="animate-pulse bg-white rounded-lg shadow-lg p-6">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  const price = parseFloat(trade.p).toFixed(3);
  const quantity = parseFloat(trade.q).toFixed(3);
  const total = price * quantity;
  const isBuyerMaker = trade.m;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{formatSymbol(symbol)}</h2>
        <span className="text-sm text-gray-500">
          {new Date(trade.T).toLocaleTimeString()}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Price</span>
          <div className="flex items-center gap-2">
            {isBuyerMaker ? (
              <ArrowDown className="w-4 h-4 text-red-500" />
            ) : (
              <ArrowUp className="w-4 h-4 text-green-500" />
            )}
            <span className={`font-mono font-medium ${
              isBuyerMaker ? 'text-red-500' : 'text-green-500'
            }`}>
              {formatPrice(price, currency)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Quantity</span>
          <span className="font-mono">
            {formatQuantity(quantity)} {symbol.slice(0, -4).toUpperCase()}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <span className="text-gray-600">Total</span>
          <span className="font-mono font-semibold">
            {formatPrice(total, currency)}
          </span>
        </div>
      </div>
    </div>
  );
}