import type { Config } from 'tailwindcss'
import flowbite from "flowbite-react/tailwind"

export default {
  // content: ['./app/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', flowbite.content()
  content: ['./app/**/*.{js,jsx,ts,tsx}', flowbite.content()
],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config

