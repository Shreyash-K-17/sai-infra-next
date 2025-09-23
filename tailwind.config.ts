import type { Config } from "tailwindcss";


const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    md: "2rem",
                },
            },
            screens: {
                // This will set the 'lg' breakpoint at 801px
                'lg': '801px',
            },
        },
    },
    plugins: [],
};
export default config;