
<script>
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function newCoffee() {
		dispatch('newCoffee', {});
	}
</script>
<div on:click="{newCoffee}" class="flex justify-center p-6 font-mono shadow-lg bg-black scale-90 transition duration-500 ease-in-out hover:bg-red-500 hover:scale-100 cursor-pointer">
<div class="text-9xl text-yellow-400">
  <div>+</div>
  <div>NEW COFFEE</div>
</div>
  </div>