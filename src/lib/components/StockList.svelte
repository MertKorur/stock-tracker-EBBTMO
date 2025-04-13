<script lang="ts">
	import { stocks } from "$lib/store/stocks";
	import StockCard from '$lib/components/StockCard.svelte';
</script>

<div class="stock-list">
	<h3>Saved Stocks: </h3>

	{#if $stocks.length > 0}
		<div class="stock-cards">
			{#each $stocks as stock (stock.ticker)}
				<StockCard {stock} />
			{/each}
		</div>
	{:else}
		<p>No stocks to display. Try searching for one.</p>
	{/if}
</div>

<style lang="scss">
  .stock-list {
    margin: 0;
    padding: 2rem;
  }

  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .stock-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
  }
</style>