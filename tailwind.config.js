module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        d_peach: {
          500: "hsla(11, 72%, 66%, 1)",
        },
        d_black: {
          500: "hsla(270, 3%, 11%, 1)",
        },
        d_white: {
          500: "hsla(0, 100%, 100%, 1)",
        },
        d_light_peach: {
          500: "hsla(11, 100%, 80%, 1)",
        },
        d_dark_grey: {
          500: "hsla(264, 5%, 20%, 1)",
        },
        d_light_grey: {
          500: "hsla(210, 17%, 95%, 1)",
        },
      },
      fontSize: {
        h1: "3rem",
        h2: "2.5rem",
        h3: "1.25rem",
        body: "1rem",
        button: "0.9375rem",
        label: "0.9375rem",
        msg: "0.075rem",
      },
      fontFamily: {
        base: [
          "Jost",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
    plugins: [],
  },
};
