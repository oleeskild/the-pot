<script>
  export let score = 5;
</script>
<div class="relative pt-1 w-40">
  <div class="overflow-hidden h-4 text-xs flex bg-black">
      <div style="width:{(score/6)*100}%"
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400">
      </div>
  </div>
</div>
<div class="mx-4">
  {score}
</div>      