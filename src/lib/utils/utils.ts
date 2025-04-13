export function formatDate(ms: number): string {
	let date = new Date(ms);
	return date.toLocaleString();
}

export function formatCurrency(value: number) {
	return value.toFixed(2);
}
