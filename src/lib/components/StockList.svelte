<script lang="ts">
	import { stocks } from "$lib/store/stocks";
	import StockCard from '$lib/components/StockCard.svelte';
</script>

<div class="stock-list">
	<h3>Saved Stocks:</h3>

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
    padding: 20px;
  }

  .stock-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  p {
    text-align: center;
  }
</style>