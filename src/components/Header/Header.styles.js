import { styled } from "../../theme/styled";

export const StyledHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  padding: "0 40px",
  height: "80px",
  backgroundColor: "$primary",
});

export const StyledHeaderLogo = styled("img", {
  width: "100px",
  objectFit: "contain",
});
