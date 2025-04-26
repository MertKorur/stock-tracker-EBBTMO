# Stock Tracker – Homework for Web Programming 2
Name: Mert Korur

Neptun: EBBTMO

---

## Project Information

A web application to monitor, save, and manage stock data using real-time external API and local database storage. Built with SvelteKit, SQLite and styled using SCSS.

---

## Purpose of the Project

1. Search and view stock market data
2. Save stocks for future reference
3. Manage a list of tracked stocks
4. Keep stock information in a local SQLite database

---

## Implementation Details

- The frontend was built with SvelteKit and the backend has lightweight server endpoints to handle POST, GET and DELETE operations for managing stock data.
- Uses Polygon.io API fo fetch real-time stock daya
- The database stores stock data locally in SQLite using a key-value model.
- Styled using SCSS and notifications using Toast on success or failure of operations.

---

## Codebase Structure

```bash
src/
├── lib/
│   ├── api/
│   │   └── polygon.ts          # API client for Polygon.io
│   ├── components/             # UI components
│   ├── database/
│   │   ├── db.ts               # Database setup
│   │   └── stocks-sql.ts       # SQL functions
│   ├── store/
│   │   └── stocks.ts           # Svelte stores for managing stocks
│   ├── utils/
│   │   └── utils.ts            # Utility functions
│   ├── index.ts
│   ├── toast.ts                # Svelte-toast
│   └── types.ts
│
├── routes/
│   ├── about/
│   │   └── +page.svelte        # About page
│   ├── api/
│   │   └── stocks/
│   │       ├── [ticker]/       # API for specific stock
│   │       │   └── +server.ts
│   │       └── +server.ts      # API for all stocks
│   ├── my_stocks/
│   │   ├── +page.svelte        # Saved stocks page
│   │   └── +page.ts            # Data loading logic
│   ├── stocks/
│   │   └── [ticker]/           # Detailed stock page
│   │       ├── +page.svelte
│   │       └── +page.ts
│   ├── +layout.svelte          # Layout
│   └── +page.svelte            # Home page
│
└── styles/
    └── global.scss             # Global styles

```

---

## API Descriptions

### Internal
1. **/api/stocks GET** – Fetch all stocks
2. **/api/stocks POST** – Save a stock
3. **/api/books/:ticker GET** – Fetch a stock by ticker
4. **/api/stocks/:ticker DELETE** – Remove a stock by ticker

### External:
1. **/v2/aggs/ticker/:ticker/prev** – Fetch stock data from Polygon.io API.

API key is stored in environment variables.

Example of request to external API:
```ts
fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?apiKey=${API_KEY}`);
```

---

## Description of Stored Data
SQLite database structure:
```sql
CREATE TABLE stocks (
  ticker TEXT PRIMARY KEY,
  data TEXT
);
```
ticker: Stock ticker symbol

data: JSON string of the stock data

---

## Communication between Components/Services
- Frontend components communicate with API routes through fetch() calls.
- Data fetched from APIs is stored in writable stores for reactive updates across pages.
- Toast notifications provide user feedback on actions such as saving or removing stocks.
- Database layer accessed through API routes.

---

## External Libraries Used
- Polygon.io: External stock data
- @zerodevx/svelte-toast: Toats notifications
- better-sqlite3: SQLite database operations

---

## How to Run the Project:

Clone the repository:
```bash
git clone https://github.com/MertKorur/stock-tracker-EBBTMO.git
cd stock-tracker-EBBTMO
npm install
npm run dev
```

---
   
