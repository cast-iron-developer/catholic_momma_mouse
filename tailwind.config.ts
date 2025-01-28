import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	important: true,
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		},
		extend: {
			screens: {
				// additional media queries because I like flexibility
				'only-sm': { min: '640px', max: '767px' },
				// => @media (min-width: 640px and max-width: 767px) { ... }

				'only-md': { min: '768px', max: '1023px' },
				// => @media (min-width: 768px and max-width: 1023px) { ... }

				'only-lg': { min: '1024px', max: '1279px' },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }

				'only-xl': { min: '1280px', max: '1535px' },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }

				// additional media queries because I like flexibility
				'to-xs': { max: '639px' },
				// => @media (max-width: 639px) { ... }

				'to-sm': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'to-md': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'to-lg': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'to-xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				// Starting the inverse of the standard tailwind media queries bc i hate them.
				'from-xs': { min: '640px' },
				// => @media (max-width: 640px) { ... }

				'from-sm': { min: '768px' },
				// => @media (max-width: 768px) { ... }

				'from-md': { min: '1024px' },
				// => @media (max-width: 1024px) { ... }

				'from-lg': { min: '1280px' },
				// => @media (max-width: 1280px) { ... }

				'from-xl': { min: '1536px' }
				// => @media (max-width: 1536px) { ... }
			},
			dropShadow: {
				light: '0 0 .75rem rgba(255, 255, 255, .7)',
				dark: '0 0 .75rem rgba(0, 0, 0, .7)'
			},
			textShadowWhite: {
				sm: '0 1px 2px #eee',
				DEFAULT: '1px 2px #eee',
				lg: '0 8px 16px #eee'
			},
			colors: {
				primary: {
					DEFAULT: '#1e3888',
					100: '#060b1c',
					200: '#0c1737',
					300: '#122253',
					400: '#182e6e',
					500: '#1e3888',
					600: '#2b50c2',
					700: '#5778da',
					800: '#8fa5e6',
					900: '#c7d2f3'
				},
				secondary: {
					DEFAULT: '#6b759e',
					100: '#151720',
					200: '#2a2e40',
					300: '#3f4660',
					400: '#545d80',
					500: '#6b759e',
					600: '#8991b2',
					700: '#a6acc5',
					800: '#c4c8d8',
					900: '#e1e3ec'
				},
				tertiary: {
					DEFAULT: '#8797af',
					100: '#191e25',
					200: '#323c4b',
					300: '#4b5a70',
					400: '#647795',
					500: '#8797af',
					600: '#a0acbf',
					700: '#b7c1cf',
					800: '#cfd6df',
					900: '#e7eaef'
				},
				quarternary: {
					DEFAULT: '#a393d5',
					100: '#1c1434',
					200: '#382968',
					300: '#553d9c',
					400: '#7960c1',
					500: '#a393d5',
					600: '#b7aade',
					700: '#c9bfe6',
					800: '#dbd4ee',
					900: '#edeaf7'
				},
				quinary: {
					DEFAULT: '#3a567d',
					100: '#0c1119',
					200: '#172232',
					300: '#23344b',
					400: '#2e4565',
					500: '#3a567d',
					600: '#4e75aa',
					700: '#7997c1',
					800: '#a6bad6',
					900: '#d2dcea'
				},
				white: {
					DEFAULT: '#eee'
				},
				black: {
					DEFAULT: '#333'
				}
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 200ms ease-in-out'
			}
		}
	},

	plugins: [daisyui, typography, forms, containerQueries]
} satisfies Config;
