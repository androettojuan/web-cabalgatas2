import { styled } from "../../theme/styled";

export const StyledTitle = styled("h1", {
  variants: {
    color: {
      secondary: { color: "$secondary" },
      white: { color: "$white" },
      brown: { color: "$brown" },
      primary: { color: "$brown" },
    },
    size: {
      sm: { fontSize: "28px" },
      md: { fontSize: "42px" },
      lg: { fontSize: "68px" },
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
