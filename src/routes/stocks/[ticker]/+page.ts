import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`/api/stocks/${params.ticker}`);

	if (!res.ok) {
		return {
			status: res.status,
			error: new Error(`Could not load stock: ${params.ticker}`)
		};
	}

	const stock = await res.json();
	return { stock };
};
