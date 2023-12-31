import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        bleu: "#002743",
        rose: "#E62460",
        vert: "#00ACB0",
        jaune: "#FFCC38",
        gris: "#EBEBEB",
        black: "#000000",
      },
    },
    fonts: {
      body: "Adamina, sans-serif",
    },
    styles: {
      global: () => ({
        body: {
          bg: "#FFFFFF",
        },
      }),
    },
  },
  { breakpoints }
);

export default theme;
