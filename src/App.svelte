<script>
  	import Calendar from './Calendar.svelte';
 
</script>

<main>
	<h1>Chris D cal</h1>
 	<Calendar  />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 90vh;
		min-height: 500px;
	}

	h1 {
		color: #00aa55;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (max-width: 639px) {
		h1 {
			font-size: 3rem;
			margin: 0.4rem 0 0.8rem;
		}
		main {
			padding: 0;
		}
	}
 
</style>