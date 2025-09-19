import { useEffect, useRef, useState } from 'react';
import type { Trade } from '../types/trade';
import { tradingPairs, type TradingPair } from '../config/pairs';

export function useMultiWebSocket() {
  const [trades, setTrades] = useState<Record<TradingPair, Trade | null>>(() => 
    Object.fromEntries(tradingPairs.map(pair => [pair, null])) as Record<TradingPair, Trade | null>
  );
  
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const connect = () => {
      // Using the combined streams endpoint
      ws.current = new WebSocket('wss://stream.binance.com:9443/ws');

      ws.current.onopen = () => {
        if (ws.current?.readyState === WebSocket.OPEN) {
          // Subscribe to multiple streams using a single message
          const subscribeMsg = {
            method: 'SUBSCRIBE',
            params: tradingPairs.map(pair => `${pair}@trade`),
            id: 1
          };
          ws.current.send(JSON.stringify(subscribeMsg));
        }
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        
        // Skip subscription responses
        if (data.result === undefined) {
          const symbol = data.s?.toLowerCase();
          if (symbol && tradingPairs.includes(symbol as TradingPair)) {
            setTrades(prev => ({
              ...prev,
              [symbol]: data
            }));
          }
        }
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.current.onclose = () => {
        console.log('WebSocket connection closed. Reconnecting...');
        setTimeout(connect, 3000);
      };
    };

    connect();

    return () => {
      if (ws.current?.readyState === WebSocket.OPEN) {
        const unsubscribeMsg = {
          method: 'UNSUBSCRIBE',
          params: tradingPairs.map(pair => `${pair}@trade`),
          id: 1
        };
        ws.current.send(JSON.stringify(unsubscribeMsg));
      }
      ws.current?.close();
    };
  }, []);

  return trades;
}