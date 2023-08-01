import { styled } from "../../theme/styled";

export const StyledParagraph = styled("p", {
  color: "$dark",
  fontWeight: "500",
  margin: 0,
  variants: {
    color: {
      dark: { color: "$dark" },
      white: { color: "$white" },
      white_brown: {
        color: "$white",
        textShadow:
          "1px 1px 0px #865333, -1px -1px 0px #865333, 1px -1px 0px #865333, -1px 1px 0px #865333",
      },
    },
    size: {
      xs: { fontSize: "14px" },
      sm: { fontSize: "16px" },
      md: { fontSize: "18px" },
      lg: { fontSize: "20px" },
      xl: { fontSize: "26px" },
    },
  },
});
