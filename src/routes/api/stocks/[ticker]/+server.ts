import { json } from '@sveltejs/kit';
import { getStock, deleteStock } from '$lib/database/stocks-sql';

//Return 1 specific stock
export async function GET({ params }) {
	const ticker = params.ticker.toUpperCase();
	const stock = getStock(ticker);

	if (!stock) return json({ error: "Not found" }, { status: 404 });

	return json(stock);
}

//Delete 1 specific stock
export async function DELETE({ params }) {
	const ticker = params.ticker.toUpperCase();

	if (!getStock(ticker)) return json({ error: "Not found" }, { status: 404 });

	deleteStock(ticker);
	return json({ success: true });
}
