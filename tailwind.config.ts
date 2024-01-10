import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#00040f",
        'secondary': "#00f6ff",
        'dimWhite': "rgba(255, 255, 255, 0.7)",
        'dimBlue': "rgba(9, 151, 124, 0.1)",
      },
      fontSize: {
        'custom': '48px', // Example custom font size
      },
      screens: {
        'xs': '480px',
        'ss': "620px",
        'sm': "768px",
        'md': "1060px",
        'lg': "1200px",
        'dxl': "1700px",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
