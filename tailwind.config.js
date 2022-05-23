module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#22d3ee",

          secondary: "#4f46e5",

          accent: "#359b18",

          neutral: "#2D3039",

          "base-100": "#ffffff",

          info: "#8EDCF6",

          success: "#22c55e",

          warning: "#facc15",

          error: "#dc2626",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
