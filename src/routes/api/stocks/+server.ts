import { json } from '@sveltejs/kit';
import { insertStock, getAllStocks } from '$lib/stocks-sql';

//Get ALL stocks
export async function GET() {
	const data = getAllStocks();
	return json(data);
}

//Save a new stock
export async function POST({ request }) {
	const stock = await request.json();
	const ticker = stock.ticker || stock.results[0].T;

	if (!ticker) return json({ error: 'Missing ticker' }, { status: 400 });

	insertStock(ticker, stock);

	return json({ success: true });
}