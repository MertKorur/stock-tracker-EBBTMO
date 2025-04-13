// This file fetches saved stocks from the server when the page loads
export async function load({ fetch }) {
	const res = await fetch('/api/stocks');
	const stocks = await res.json();

	return { stocks };
}
