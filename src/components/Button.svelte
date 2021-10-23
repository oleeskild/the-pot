<script>
  import {createEventDispatcher} from "svelte";
  let dispath = createEventDispatcher();
function click(e){
  dispath("click")
}
</script>
<button class="w-1/2 py-3 flex items-center justify-center bg-yellow-400 text-black border border-black shadow-offset-black" type="submit" on:click={click}><slot/></button>