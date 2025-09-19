import { currencies, type Currency } from '../config/currencies';

export function formatPrice(price: number, currency: Currency): string {
  const { symbol, rate } = currencies[currency];
  const convertedPrice = price * rate;
  return `${symbol}${convertedPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
}

export function formatQuantity(quantity: number): string {
  return quantity.toLocaleString(undefined, { minimumFractionDigits: 8 });
}

export function formatSymbol(symbol: string): string {
  const base = symbol.slice(0, -4);
  const quote = symbol.slice(-4);
  return `${base.toUpperCase()}/${quote.toUpperCase()}`;
}