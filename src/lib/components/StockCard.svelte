<script lang="ts">
	import { success, error } from '$lib/toast'

	import { removeStock, removeStockFromSaved } from '$lib/store/stocks';
	import { formatCurrency } from '$lib/utils/utils.js';

	export let stock: any;
	export let fromSavedPage: boolean = false;

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
			success(`Successfully saved: ${stock.ticker}`);
			saved = true;
		} else {
			error(`Failed to save stock: ${stock.ticker}`);
		}
		saving = false;
	}


	async function removeStockFromDb() {
		const res = await fetch(`/api/stocks/${stock.ticker}`, {
			method: 'DELETE',
		});

		if (res.ok) {
			removeStockFromSaved(stock.ticker);
		} else {
			error(`Failed to delete stock: ${stock.ticker}`);
		}
	}

</script>

<div class="stock-card">
	<h3>{data.T}</h3>
	<p>Opening: {formatCurrency(data.o)}$</p>
	<p>High: {formatCurrency(data.h)}$ | Low: {formatCurrency(data.l)}$</p>
	<p>Closing: {formatCurrency(data.c)}$</p>
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


<style lang="scss">
  .stock-card {
    border: 1px black solid;
    border-radius: 10px;
    padding: 20px;
    width: 220px;
    background: white;
  }

  button {
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px 10px;
    cursor: pointer;
  }
</style>