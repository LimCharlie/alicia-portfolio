import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-green': '#094040',
        'secondary-green': '#127d7d',
        'tertiary-green': '#19b3b3',
        'primary-purple': '#b1b0d8',
        'secondary-purple': '#d7d6eb',
        'tertiary-purple': '#f2f1f8',
        'primary-yellow': '#fff5aa',
      }
    },
  },
  plugins: [],
}
export default config
