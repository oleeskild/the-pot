import preprocess from 'svelte-preprocess';
const netlify = require("@sveltejs/adapter-netlify");
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter:netlify
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
