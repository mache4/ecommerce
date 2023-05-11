/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            white: "#FFFFFF",
            black: "#000000",
            "dark-blue": "#253469",
            "light-blue": "#248BE5",
            "very-light-blue": "#F3FAFF",
            blue: "#3F3FA7",
            "light-grey": "#C9C9C9",
            "dark-grey": "#808080",
        },
        fontFamily: {
            "poppins": ['"Poppins"']
        }
    },
    plugins: [],
}