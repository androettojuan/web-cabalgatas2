import { styled } from "../../theme/styled";

export const StyledButton = styled("button", {
  borderRadius: "18px",
  border: "none",
  cursor: "pointer",
  fontWeight: "700",
  variants: {
    size: {
      xs: {
        fontSize: "12px",
        padding: "4px 10px",
      },
      sm: {
        fontSize: "14px",
        padding: "8px 14px",
      },
      md: {
        fontSize: "16px",
        padding: "12px 24px",
      },
      lg: {
        fontSize: "18px",
        padding: "16px 30px",
      },
      xl: {
        fontSize: "20px",
        padding: "20px 36px",
      },
    },
    color: {
      primary: {
        backgroundColor: "$brown",
        color: "$white",
      },
      secondary: {
        backgroundColor: "$litebrown2",
        color: "$brown",
      },
    },
  },
});
