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
        100: "#FFFFFF",
        200: "#7E72F2",
        300: "#BEE3F8",
        400: "#D6BCFA",
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
