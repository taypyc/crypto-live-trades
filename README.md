# 🚀 Crypto Live Trades WebSocket

A real-time cryptocurrency trading dashboard that displays live trade data from Binance using WebSocket connections. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Real-time Data**: Live cryptocurrency trade updates via Binance WebSocket API
- **Multiple Pairs**: Track 8 popular trading pairs simultaneously:
  - BTC/USDT, ETH/USDT, BNB/USDT, XRP/USDT
  - ADA/USDT, DOGE/USDT, MATIC/USDT, SOL/USDT
- **Multi-Currency Support**: View prices in USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Animated Background**: Dynamic visual effects for enhanced user experience
- **Auto-Reconnection**: Robust WebSocket connection with automatic reconnection
- **Type-Safe**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support
- **WebSocket**: Native WebSocket API with Binance streams

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crypto-live-trades-websocket
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AnimatedBackground.tsx
│   ├── CurrencySelector.tsx
│   ├── Footer.tsx
│   ├── TradeCard.tsx
│   └── TradeGrid.tsx
├── config/             # Configuration files
│   ├── currencies.ts   # Supported currencies
│   └── pairs.ts       # Trading pairs
├── hooks/              # Custom React hooks
│   ├── useBinanceWebSocket.ts
│   ├── useCurrency.ts
│   └── useMultiWebSocket.ts
├── types/              # TypeScript type definitions
│   └── trade.ts
├── utils/              # Utility functions
│   └── formatters.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## 🔌 WebSocket Integration

The application connects to Binance's WebSocket API using the combined streams endpoint:
- **Endpoint**: `wss://stream.binance.com:9443/ws`
- **Streams**: Individual trade streams for each supported pair
- **Format**: `{symbol}@trade` (e.g., `btcusdt@trade`)

### WebSocket Features

- **Multi-stream Subscription**: Subscribe to multiple trading pairs with a single connection
- **Automatic Reconnection**: Handles connection drops with exponential backoff
- **Error Handling**: Comprehensive error handling and logging
- **Clean Disconnection**: Proper unsubscription and cleanup on component unmount

## 🎨 UI Components

### TradeGrid
Displays all trading pairs in a responsive grid layout with real-time updates.

### TradeCard
Individual card component showing:
- Trading pair symbol
- Current price
- Buy/sell indicator
- Trade quantity
- Timestamp

### CurrencySelector
Dropdown component for switching between different fiat currencies.

### AnimatedBackground
Dynamic background with floating elements for visual appeal.

## 🌍 Multi-Currency Support

The application supports price display in multiple currencies:
- USD (US Dollar) - Default
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- AUD (Australian Dollar)
- CAD (Canadian Dollar)
- CHF (Swiss Franc)
- CNY (Chinese Yuan)

*Note: Currency conversion rates are fetched from external APIs and may have slight delays.*

## 🔧 Configuration

### Adding New Trading Pairs

To add new trading pairs, edit `src/config/pairs.ts`:

```typescript
export const tradingPairs = [
  'btcusdt',
  'ethusdt',
  // Add new pairs here
  'newpairusdt',
] as const;
```

### Adding New Currencies

To add new currencies, edit `src/config/currencies.ts`:

```typescript
export const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  // Add new currencies here
  { code: 'NEW', symbol: '¤', name: 'New Currency' },
] as const;
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full grid layout with all features
- **Tablet**: Adapted grid with touch-friendly interactions
- **Mobile**: Stacked layout optimized for small screens

## 🚦 Performance

- **Efficient Updates**: Only re-renders components when trade data changes
- **Memory Management**: Proper cleanup of WebSocket connections
- **Optimized Rendering**: Uses React's built-in optimization techniques
- **Lazy Loading**: Components are loaded as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This application is for educational and informational purposes only. It displays real-time cryptocurrency data but should not be used as the sole basis for trading decisions. Always conduct your own research and consider consulting with financial advisors before making investment decisions.

## 🙏 Acknowledgments

- [Binance API](https://binance-docs.github.io/apidocs/) for providing real-time data
- [React](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
