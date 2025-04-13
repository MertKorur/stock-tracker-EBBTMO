import type { StockResponse } from '$lib/types';
import { toast } from '@zerodevx/svelte-toast';
import { stocks } from '$lib/store/stocks';

function addToStore(ticker: string, data: StockResponse, source: 'db' | 'api') {
	let exists = false;

	stocks.update(current => {
		if (current.find(s => s.ticker === ticker)) {
			exists = true;
			return current;
		}
		return [...current, { ...data, ticker }];
	});

	if (exists) {
		toast.push(`Ticker '${ticker}' already exists!`);
	} else {
		toast.push(`Ticker '${ticker}' added from '${source}'!`);
	}
}


export async function fetchStock(ticker: string) {
	try {

		//Try from db first
		const localRes = await fetch(`/api/stocks/${ticker}`);
		if (localRes.ok) {
			const localData: StockResponse = await localRes.json();
			addToStore(ticker, localData, 'db');
			return;
		}


		//If not in local db
		const res = await fetch(
			`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?apiKey=${import.meta.env.VITE_POLYGON_API_KEY}`
		);

		if (!res.ok) {toast.push(`API failed to fetch!`); return;}

		const data: StockResponse = await res.json();

		//Check if valid
		if (!data || data.status !== "OK" || !data.results || data.results.length === 0) {
			toast.push(`Ticker '${ticker}' not found!`);
			return;
		}

		addToStore(ticker, data, 'api')

	} catch (err) {
		toast.push(`Something went wrong fetching the stock`);
		console.error(err);
	}
}