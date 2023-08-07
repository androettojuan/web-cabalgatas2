import { styled } from "../../theme/styled";

export const StyledTitle = styled("h1", {
  margin: 0,
  textAlign: "center",
  variants: {
    color: {
      secondary: { color: "$secondary" },
      white: {
        color: "$white",
        textShadow:
          "3px 3px 0px #865333, -3px -3px 0px #865333, 3px -3px 0px #865333, -3px 3px 0px #865333",
        "@media (max-width: 900px)": {
          textShadow:
            "2px 2px 0px #865333, -2px -2px 0px #865333, 2px -2px 0px #865333, -2px 2px 0px #865333",
        },
        "@media (max-width: 600px)": {
          textShadow:
            "1px 1px 0px #865333, -1px -1px 0px #865333, 1px -1px 0px #865333, -1px 1px 0px #865333",
        },
      },
      brown: { color: "$brown" },
      primary: {
        color: "$primary",
        textShadow:
          "2px 2px 0px #865233, -2px -2px 0px #8652, 2px -2px 0px #8652, -2px 2px 0px #865233",
        "@media (max-width: 900px)": {
          textShadow:
            "1px 1px 0px #865233, -1px -1px 0px #8652, 1px -1px 0px #8652, -1px 1px 0px #865233",
        },
      },
      dark: { color: "$dark" },
    },
    size: {
      xs: {
        fontSize: "18px",
        "@media (max-width: 1200px)": {
          fontSize: "16px",
        },
        "@media (max-width: 900px)": {
          fontSize: "14px",
        },
      },
      sm: {
        fontSize: "28px",
        "@media (max-width: 1200px)": {
          fontSize: "24px",
        },
        "@media (max-width: 900px)": {
          fontSize: "20px",
        },
      },
      md: {
        fontSize: "42px",
        "@media (max-width: 1200px)": {
          fontSize: "36px",
        },
        "@media (max-width: 900px)": {
          fontSize: "24px",
        },
      },
      lg: {
        fontSize: "50px",
        "@media (max-width: 1200px)": {
          fontSize: "44px",
        },
        "@media (max-width: 900px)": {
          fontSize: "30px",
        },
        "@media (max-width: 600px)": {
          fontSize: "24px",
        },
      },
      xl: {
        fontSize: "68px",
        "@media (max-width: 1200px)": {
          fontSize: "60px",
        },
        "@media (max-width: 900px)": {
          fontSize: "42px",
        },
        "@media (max-width: 600px)": {
          fontSize: "32px",
        },
      },
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
