const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    // tailwindcss: {},
    // autoprefixer: {},
  ],
});
