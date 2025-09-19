import { useEffect, useRef, useState } from 'react';
import type { Trade } from '../types/trade';

export function useBinanceWebSocket() {
  const [trade, setTrade] = useState<Trade | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const connect = () => {
      ws.current = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setTrade(data);
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
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  return trade;
}