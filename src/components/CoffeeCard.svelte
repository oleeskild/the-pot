<script>
	export let coffeeRating = {}; //{name:"Høstkaffe", aroma:2, taste:3, type:"Arabica", brand:"Kaffebrenneriet"}
	import ProgressBar from './ProgressBar.svelte';
</script>

<div class="flex p-6 font-mono shadow-lg">
	<div class="flex-none w-40 relative">
		<img
			src="kaffi.jpg"
			alt=""
			class="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-yellow-400"
		/>
	</div>
	<form class="flex-auto pl-6">
		<div
			class="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black text-white"
		>
			<h1 class="w-full flex-none text-2xl leading-7 mb-2 font-bold">
				{coffeeRating.name}
			</h1>
			<div class="text-2xl leading-7 font-bold">
				{coffeeRating.type}
			</div>
			<div class="text-sm font-medium ml-3 text-yellow-400">
				{coffeeRating.brand}
			</div>
		</div>
		<div class="flex items-baseline py-8">
			<div
				class="flex flex-col justify-start items-start text-sm leading-none font-bold text-gray-500"
			>
				<div class="flex w-full justify-start m-4">
					<span class="pr-5">Aroma </span><ProgressBar score={coffeeRating.aroma} />
				</div>
				<div class="flex w-full justify-start m-4">
					<span class="pr-5">Taste </span><ProgressBar score={coffeeRating.taste} />
				</div>
			</div>
		</div>
		<div class="flex space-x-3 text-sm font-bold uppercase mb-4">
			<div class="flex-auto flex space-x-3">
				<button
					class="w-1/2 flex items-center justify-center bg-yellow-400 text-black border border-black shadow-offset-black"
					>Buy now</button
				>
				<button
					class="flex-none flex items-center justify-center w-9 h-9 border border-black"
					type="button"
					aria-label="like"
				>
					<svg width="20" height="20" fill="currentColor">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</form>
</div>
