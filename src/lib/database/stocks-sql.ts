import db from '$lib/database/db';
import type { StockRow } from '$lib/types';

export function insertStock(ticker: string, rawJson: any) {
	const jsonStr = JSON.stringify(rawJson);
	db.prepare(`
			INSERT OR REPLACE INTO stocks (ticker, data)
			VALUES (?, ?) 
		`).run(ticker, jsonStr);
}


export function getStock(ticker: string) {
	const row = db.prepare(`
		SELECT * FROM stocks WHERE ticker = ?
		`).get(ticker) as StockRow;
	return row ? JSON.parse(row.data) : null;
}


export function getAllStocks() {
	const rows = db.prepare(`
		SELECT * FROM stocks
		`).all() as StockRow[];

	return rows.map(row => JSON.parse(row.data));
}


export function deleteStock(ticker: string) {
	db.prepare(`
		DELETE FROM stocks WHERE ticker = ?
		`).run(ticker);
}
