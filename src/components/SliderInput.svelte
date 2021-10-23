<script>
  let score = 1;	
  export let id, label;
  import {createEventDispatcher} from "svelte";
  let dispatch = createEventDispatcher();
  function change(e){
    dispatch("change", {score})
  }
</script>

<div class="flex flex-col w-full mb-10">
 <label for={id} class="block text-yellow-400 text-md font-bold mb-2">{label}</label> 
 <div class="w-full flex items-center">
  <span class="text-yellow-400 text-4xl bg-black p-5 shadow-offset-yellow-400">
    {score}
  </span>
  <input id={id} on:change={change} type="range" class="slider flex-grow ml-5 text-red-500 rounded-none appearance-none h-10 p-2 shadow-offset-yellow-400" bind:value={score} step={1} max={6} min={1}/> 
 </div>
</div>

<style>
.slider::-webkit-slider-thumb  {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #FBBF24;   
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #FBBF24;   
  cursor: pointer; /* Cursor on hover */
  border-radius: 0;
  border: none;
}
</style>
