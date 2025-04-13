import { type Writable, writable } from 'svelte/store';
import type { StockResponse } from '$lib/types';
import { toast } from '@zerodevx/svelte-toast';

export const stocks = writable<StockResponse[]>([]);
export const savedStocks = writable<StockResponse[]>([]);

function removeFromStore(store: Writable<StockResponse[]>,
												 ticker: string,
												 context = '') {
	store.update(list =>
		list.filter(s => s.ticker !== ticker));
	toast.push(`✅Ticker '${ticker}' removed from ${context}`);
}

export function removeStock(ticker: string) {
	removeFromStore(stocks, ticker, 'home')
}

export function removeStockFromSaved(ticker: string) {
	removeFromStore(savedStocks, ticker, 'saved')
}
