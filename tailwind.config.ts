import type { Config } from 'tailwindcss'

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app/**/*.{js,vue,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            screens: {
                'xs': '360px',
            }
        },
    },
    plugins: [require("daisyui")],
    
} satisfies Config