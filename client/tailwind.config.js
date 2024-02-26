/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#00233c',
					100: '#00070c',
					200: '#000e18',
					300: '#001525',
					400: '#001d31',
					500: '#00233c',
					600: '#005897',
					700: '#008cf1',
					800: '#4bb4ff',
					900: '#a5daff'
				},
				secondary: {
					DEFAULT: '#48beff',
					100: '#002a41',
					200: '#005583',
					300: '#007fc4',
					400: '#06a8ff',
					500: '#48beff',
					600: '#6cccff',
					700: '#91d8ff',
					800: '#b6e5ff',
					900: '#daf2ff'
				},
				tertiary: {
					DEFAULT: '#e5d1d0',
					100: '#39201f',
					200: '#71413e',
					300: '#a76360',
					400: '#c79b98',
					500: '#e5d1d0',
					600: '#ebdbda',
					700: '#f0e4e3',
					800: '#f5eded',
					900: '#faf6f6'
				},
				yellow_green: {
					DEFAULT: '#99c133',
					100: '#1f270a',
					200: '#3d4d15',
					300: '#5c741f',
					400: '#7b9b29',
					500: '#99c133',
					600: '#b0d257',
					700: '#c3de81',
					800: '#d7e9ab',
					900: '#ebf4d5'
				},
				myrtle_green: {
					DEFAULT: '#3d7068',
					100: '#0c1615',
					200: '#192d2a',
					300: '#25433f',
					400: '#315953',
					500: '#3d7068',
					600: '#559b91',
					700: '#7db7af',
					800: '#a8cfc9',
					900: '#d4e7e4'
				},
				white: {
					DEFAULT: '#eee'
				},
				black: {
					DEFAULT: '#333'
				}
			}
		}
	}
};
