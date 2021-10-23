<script>
	export let id, label;
	import {createEventDispatcher} from "svelte";
	let dispatch = createEventDispatcher();
	function change(e){
		let text = e.target.value;
		dispatch("change", {text});
	}
</script>

<div class="mb-10">
	<label class="block text-yellow-400 text-md font-bold mb-2" for={id}> {label} </label>
	<input
		class="shadow-offset-yellow-400 rounded-none appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		{id}
		type="text"
		placeholder="NAME"
		on:input={change}
	/>
</div>
