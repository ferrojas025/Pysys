/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	theme: {
	  container: {
		center: true,
		padding: '2rem',
		screens: {
		  '2xl': '1400px',
		},
	  },
	  extend: {
		colors: {
		  border: '#D1BCE3',
		  input: '#EADCF1',
		  ring: '#D8B8F0',
		  background: '#F6ECF8', // lavanda claro
		  foreground: '#5A2B82', // púrpura
  
		  primary: {
			DEFAULT: '#5A2B82',
			foreground: '#FFFFFF',
		  },
		  secondary: {
			DEFAULT: '#D1BCE3',
			foreground: '#5A2B82',
		  },
		  destructive: {
			DEFAULT: '#DC2626',
			foreground: '#FFFFFF',
		  },
		  muted: {
			DEFAULT: '#EADCF1',
			foreground: '#5A2B82',
		  },
		  accent: {
			DEFAULT: '#D8B8F0',
			foreground: '#5A2B82',
		  },
		  popover: {
			DEFAULT: '#FFFFFF',
			foreground: '#5A2B82',
		  },
		  card: {
			DEFAULT: '#FFFFFF',
			foreground: '#5A2B82',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		keyframes: {
		  'accordion-down': {
			from: { height: 0 },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: 0 },
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  
  
