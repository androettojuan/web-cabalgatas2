import { styled } from "../../theme/styled";

export const StyledTitle = styled("h1", {
  margin: 0,
  variants: {
    color: {
      secondary: { color: "$secondary" },
      white: {
        color: "$white",
        textShadow:
          "3px 3px 0px #865333, -3px -3px 0px #865333, 3px -3px 0px #865333, -3px 3px 0px #865333",
      },
      brown: { color: "$brown" },
      primary: {
        color: "$primary",
        textShadow:
          "2px 2px 0px #865233, -2px -2px 0px #8652, 2px -2px 0px #8652, -2px 2px 0px #865233",
      },
      dark: { color: "$dark" },
    },
    size: {
      xs: { fontSize: "18px" },
      sm: { fontSize: "28px" },
      md: { fontSize: "42px" },
      lg: { fontSize: "50px" },
      xl: { fontSize: "68px" },
    },
    shadow: {
      0: {},
      1: { textShadow: 1 },
      2: { textShadow: 2 },
    },
    letterSpacing: {
      0: {},
      1: { letterSpacing: "4px" },
      2: { letterSpacing: "8px" },
    },
  },
});
