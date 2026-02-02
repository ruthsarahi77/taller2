import flowbitePlugin from 'flowbite/plugin'

export default {
content: [
    "./index.html",                
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin
  ],
}