<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { SvelteToast } from "@zerodevx/svelte-toast"
	import type {Snippet} from "svelte";


	let {children}: {children: Snippet} = $props();
</script>

<main>

	<NavBar />


	{@render children()}


	<Footer />

</main>

<SvelteToast />

<style lang="scss">
	@use "../styles/global.scss";

	main {
		border: 1px solid black;
	}
</style>