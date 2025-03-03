/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    	colors: {
    		primary: "#FF9E04",
    	},
    	fontFamily: {
    		montserrat: ['Montserrat', 'sans-serif'],
    		'open-sans': ['Open Sans', 'sans-serif'],
    	},
    	keyframes: {
    		upDown: {
    			"0%, 100%": { transform: 'translateY(0)' },
    			'50%': { transform: 'translateY(-10px)' }
    		},
    		},
    		animation: {
    			'up-down': 'upDown 2s ease-in-out infinite',
    		},
    		screens: {
    			xs: "470px",
    		}
    },
  },
  plugins: [require('tailwindcss-motion')],
}