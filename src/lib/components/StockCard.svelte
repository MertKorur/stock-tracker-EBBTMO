<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';

	export let stock: any;
	export let fromSavedPage: boolean = false;

	import { removeStock, removeStockFromSaved } from '$lib/store/stocks';
	import { formatCurrency } from '$lib/utils/utils.js';

	const data = stock.results[0];

	let saving = false;
	let saved = false;


	async function saveStockToDb() {
		saving = true;
		const res = await fetch('/api/stocks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(stock)
		});

		if (res.ok) {
			toast.push("Successfully saved:", stock);
			saved = true;
		} else toast.push("Failed to save stock.");
		saving = false;
	}


	async function removeStockFromDb() {
		const res = await fetch(`/api/stocks/${stock.ticker}`, {
			method: 'DELETE',
		});
		if (res.ok) {
			removeStockFromSaved(stock.ticker);
		} else toast.push("Failed to delete stock.");
	}

</script>

<div class="stock-card">
	<h3>{data.T}</h3>
	<p>Opening: {formatCurrency(data.o)}</p>
	<p>High: {formatCurrency(data.h)} | Low: {formatCurrency(data.l)}</p>
	<p>Closing: {formatCurrency(data.c)}</p>
	<p>Total Trades: {data.n}</p>

	{#if !fromSavedPage}
		<button onclick={()=>{saveStockToDb()}} disabled={saved}>
			{#if !saved}
				{saving ? 'Saving…' : 'SAVE'}
			{:else}
				Saved
			{/if}
		</button>

		<button onclick={()=>{removeStock(stock.ticker)}}>REMOVE</button>

	{:else if fromSavedPage}
		<button onclick={()=>{removeStockFromDb()}}>REMOVE from Saved</button>

		<a class="view-btn" href={`/stocks/${stock.ticker}`}>VIEW</a>
	{/if}
</div>
<br>


<style lang="scss">
  .stock-card {
    border: 1px black solid;
    border-radius: 10px;
    padding: 1rem;
    width: 200px;
    background: white;
  }

  button {
    background: none;
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 1rem;
  }
</style>