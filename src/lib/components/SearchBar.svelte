<script lang="ts">
	import { fetchStock } from "$lib/api/polygon"
	let ticker = "";
	let loading = false;

	async function searchStock() {
		if (!ticker) return;
		loading = true;
		await fetchStock(ticker.toUpperCase())
		loading = false;
		ticker = "";
	}

</script>

<div class="search-container">
	<input type="text"
				 bind:value={ticker}
				 class="search-bar"
				 placeholder="Enter stock ticker (e.g., AAPL)"
				 onkeydown={(e) => e.key === 'Enter' && searchStock()}
				 disabled={loading}
	/>
</div>




<style lang="scss">
	.search-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px;
	}

	.search-bar {
    width: 250px;
    padding: 10px 15px;
    border-radius: 30px;
    border: 2px solid #ddd;
    font-size: 16px;
	}
</style>
