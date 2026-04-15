/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],

	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				grey: '#323232'
			},
			fontFamily: {
				sans: ['roboto', 'sans-serif'],
				league: ['League Spartan Variable', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				caveat: ['Caveat Variable', 'cursive'],
				roman: ['times-new-roman', 'serif']
			},
			screens: {
				/* the point where the logos in the topbar would begin to shrink on too small mobile devices */
				xs: '380px'
			}
		}
	}
};

export default config;
