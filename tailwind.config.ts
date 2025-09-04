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
},
},
plugins: [],
};
export default config;