export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out forwards',
      },
      backgroundImage: {
        'home': "url('/background.png')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        lightgreen: "#DFF1EE",
        mediumteal: "#71B2AB",
        lightteal: '#B2D3CF',
      },
    },
  },
  plugins: [],
};