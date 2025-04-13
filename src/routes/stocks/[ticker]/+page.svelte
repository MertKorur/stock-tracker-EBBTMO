<script lang="ts">
	import { formatDate, formatCurrency } from '$lib/utils/utils';

	export let data;
	const info = data.stock.results[0];
</script>

<h1>Details for {info.T}</h1>
<p><strong>Open:</strong> ${formatCurrency(info.o)}</p>
<p><strong>High:</strong> ${formatCurrency(info.h)}</p>
<p><strong>Low:</strong> ${formatCurrency(info.l)}</p>
<p><strong>Close:</strong> ${formatCurrency(info.c)}</p>
<p><strong>Volume:</strong> {info.v}</p>
<p><strong>Volume weighted average:</strong> {info.vw}</p>
<p><strong>Date since epoch:</strong> {formatDate(info.t)}</p>
<p><strong>Trades:</strong> {info.n}</p>