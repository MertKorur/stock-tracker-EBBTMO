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
    padding: 20px 40px;
		border: black solid 1px;

    .logo a {
      text-decoration: none;
      font-size: 30px;
      color: black;
    }

    .hamburger {
      display: none;
      font-size: 40px;
      background: none;
      border: none;
      cursor: pointer;
    }

    .links {
      display: flex;
      gap: 20px;

      a {
        text-decoration: none;
        color: black;
      }
    }

    @media (max-width: 900px) {
      .hamburger {
        display: block;
      }

      .links {
        position: absolute;
        top: 125px;
        background: white;
        flex-direction: column;
        padding: 15px;
        border: 1px solid black;
        border-radius: 5px;
        display: none;

        &.open {
          display: flex;
        }

        a {
          margin: 5px;
        }
      }
    }
  }
</style>

