/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FA812F",
        secondary:"#FEF3E2",
        text:"#FAB12F",
        textDark:"#FA4032"
      },
      fontFamily:{
        HachiMaruPopfamily:['Hachi Maru Pop','sans-serif']
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

