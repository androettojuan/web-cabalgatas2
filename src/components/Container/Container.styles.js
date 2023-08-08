import { styled } from "../../theme/styled";

export const StyledContainer = styled("div", {
  maxWidth: "1200px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      },
      column: {
        flexDirection: "column",
      },
    },
  },
});
