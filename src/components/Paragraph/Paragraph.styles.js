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
      xs: {
        fontSize: "14px",
        "@media (max-width: 900px)": {
          fontSize: "10px",
        },
      },
      sm: {
        fontSize: "16px",
        "@media (max-width: 900px)": {
          fontSize: "12px",
        },
      },
      md: {
        fontSize: "18px",
        "@media (max-width: 900px)": {
          fontSize: "14px",
        },
      },
      lg: {
        fontSize: "20px",
        "@media (max-width: 900px)": {
          fontSize: "16px",
        },
      },
      xl: {
        fontSize: "26px",
        "@media (max-width: 900px)": {
          fontSize: "22px",
        },
      },
    },
  },
});
