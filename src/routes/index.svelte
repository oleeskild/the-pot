<script>
  import CoffeeCard from "../components/CoffeeCard.svelte";
  import Grid from "../components/Grid.svelte"
  import Header from "../components/Header.svelte"
  import NewItem from "../components/NewItem.svelte"
  import CoffeeEditor from "../components/CoffeeEditor.svelte"
  import {onMount} from "svelte";

  let baseUrl = "https://oleeskild-coffee.builtwithdark.com";

  let coffeeRatings = [];

  let editCoffee =false;
  function newCoffee(){
    editCoffee = true; 
  }
  onMount(async()=>{
    await getRatings();
  })

  async function getRatings(){

    coffeeRatings = await (await fetch(`${baseUrl}/coffeeratings`)).json();
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
  {#each coffeeRatings as coffeeRating}
  <CoffeeCard coffeeRating={coffeeRating}/>
  {:else}
  LASTER!
  {/each}

</Grid>
{#if editCoffee}
  <CoffeeEditor on:save={saveCoffee}/>
{/if}
