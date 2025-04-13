<script lang="ts">
	import SearchBar from '$lib/components/SearchBar.svelte';

	let open = false;
</script>

<nav class="navbar">
	<button class="hamburger" onclick={()=> open = !open}>
		☰
	</button>

	<div class="logo">
		<a href="/"> StockTracker</a>
	</div>

	<SearchBar />

	<div class="links" class:open={open}>
		<a href="/">Home</a>
		<a href="/my_stocks">My Stocks</a>
		<a href="/about">About</a>


	</div>
</nav>



<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
		border: black solid 1px;

    .logo a {
      text-decoration: none;
      font-size: 2rem;
      color: #222;
    }

    .hamburger {
      display: none;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    .links {
      display: flex;
      gap: 1.5rem;

      a {
        text-decoration: none;
        color: black;
      }
    }

    @media (max-width: 875px) {
      .hamburger {
        display: block;
      }

      .links {
        position: absolute;
        top: 64px;
        right: 2rem;
        background: white;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        display: none;

        &.open {
          display: flex;
					left: 2rem;
        }

        a {
          margin: 0.5rem 0;
        }
      }
    }
  }
</style>

