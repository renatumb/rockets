/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens:{
                'widescreen' : { 'raw':'(min-aspect-ratio:3/2)'},
                'tallscreen' : { 'raw':'(min-aspect-ratio:1/2)'}
            },
            keyframes: {
                'open-menu':{
                    '0%'  : { transform: 'scaleY(0)'},
                    '20%' : { transform: 'scaleY(2)'},
                    '40%' : { transform: 'scaleY(0.2)'},
                    '60%' : { transform: 'scaleY(1.7)'},
                    '80%' : { transform: 'scaleY(0.5)'},
                    '100%': { transform: 'scaleY(1)'},
                }
            },
            animation: {
                'open-menu' : 'open-menu .5s ease-in-out forwards'
            }
        },
    },
    plugins: [],
    darkMode: 'selector',
}

