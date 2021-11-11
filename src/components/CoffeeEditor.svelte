<script>
  import TextInput from "./TextInput.svelte"
  import SliderInput from "./SliderInput.svelte"
  import Button from "./Button.svelte"
  import {createEventDispatcher} from "svelte";

  let dispatch = createEventDispatcher();
  let rating = {name:"", aroma:1, taste:1, type:"Arabica", brand:"Kaffebrenneriet"};

  function setName({detail}){
    rating.name=detail.text;
    console.log(rating);
  }
  function setAroma({detail}){
    rating.aroma=detail.score;
    console.log(rating);
  }
  function setTaste({detail}){
    rating.taste=detail.score;
    console.log(rating);
  }
  function save(){
    dispatch("save", rating);
  }

  function close(){
    dispatch("close");
  }

</script>
<div class="fixed top-0 right-0 bg-red-500 w-6/12 h-screen font-mono">
  <div class="flex flex-col m-6">
    <div class="flex justify-between">
      <h1 class="text-yellow-400 text-6xl">NEW COFFEE RATING</h1>
      <div class="cursor-pointer text-white text-6xl" on:click={close}>X</div>
    </div>
    <div class="w-1/2 h-1 my-2 bg-yellow-400"></div>
    <form class="flex flex-col my-5 w-6/12">
        <TextInput id="username" label="NAME" on:change={setName}/>
        <SliderInput id="aroma" label="AROMA" on:change={setAroma}/>
        <SliderInput id="taste" label="TASTE" on:change={setTaste}/>
        <Button on:click={save}>SAVE</Button>
      </form>
  </div>
</div>