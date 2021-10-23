import colors from 'tailwindcss/colors';
const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {

		extend: {
			boxShadow: {
				'offset-yellow-400': '4px 4px #FBBF24',
				'offset-black': '4px 4px black'
			},
			colors: {
				lime: colors.lime
			},
		}
	},

	plugins: []
};

module.exports = config;
