<script lang="ts">
	import StockCard from '$lib/components/StockCard.svelte';
	import { onMount } from 'svelte';
	import { toast } from '@zerodevx/svelte-toast';
	import { savedStocks } from '$lib/store/stocks.js';

	onMount(async () => {
		try {
			const res = await fetch("/api/stocks");

			if (!res.ok) toast.push("Failed to load stocks");

			const data = await res.json();
			savedStocks.set(data);
		} catch (err) {
			toast.push("Error loading saved stocks.");
		}
	});
</script>

<h2>My Stocks</h2>

{#if $savedStocks.length > 0}
	<div class="stock-list">
		{#each $savedStocks as stock (stock.ticker)}
			<StockCard {stock} fromSavedPage= { true } />
		{/each}
	</div>
{:else}
	<p>No stocks have been saved!</p>
{/if}

<style lang="scss">
  .stock-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
