<script>
  import CoffeeCard from "../components/CoffeeCard.svelte";
  import Grid from "../components/Grid.svelte"
  import Header from "../components/Header.svelte"
  import NewItem from "../components/NewItem.svelte"
  import CoffeeEditor from "../components/CoffeeEditor.svelte"
  import {onMount} from "svelte";
  import {flip} from "svelte/animate"
  import { fade, fly, } from 'svelte/transition';


  let baseUrl = "https://oleeskild-demo2.builtwithdark.com";

  let coffeeRatings = [];

  let editCoffee =false;
  function newCoffee(){
    editCoffee = true; 
  }
  onMount(async()=>{
    await getRatings();
  })

  
  function closeEditor(){
    editCoffee = false;
  }

  async function getRatings(){

    coffeeRatings = [{name:"Høstkaffe", aroma:1, taste:3, type:"Arabica", brand:"Kaffebrenneriet"}]
    // coffeeRatings = await (await fetch(`${baseUrl}/coffeeratings`)).json();
  }


  async function saveCoffee(coffeeRating){
    editCoffee = false;
    console.log(coffeeRating.detail)
    await fetch(`${baseUrl}/coffeeratings`, {
      method: "POST",
      mode:"cors",
      body: JSON.stringify(coffeeRating.detail)
    });
    await getRatings();
  }
</script>
<Header title="{'THE POT'}"/>
<Grid>
  <NewItem on:newCoffee={newCoffee} />  
  {#each coffeeRatings as coffeeRating (coffeeRating.id)}
  <div animate:flip={{duration:400}} transisition:fly >
    <CoffeeCard coffeeRating={coffeeRating}/>
  </div>
  {:else}
  LASTER!
  {/each}

</Grid>
{#if editCoffee}
  <CoffeeEditor on:save={saveCoffee} on:close={closeEditor}/>
{/if}
