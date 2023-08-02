import { styled } from "../../theme/styled";

export const StyledSection7Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$secondary",
  padding: "40px 0",
});

export const StyledSection7LayoutButton = styled("div", {
  padding: "16px 24px",
  backgroundColor: "$litebrown",
  borderRadius: "36px",
  textAlign: "center",
  cursor: "pointer",
  width: "fit-content",
});

export const StyledSection7LayoutButtonText = styled("span", {
  color: "$primary",
  fontSize: "36px",
  textShadow:
    "1px 1px 0px #865233, -1px -1px 0px #8652, 1px -1px 0px #8652, -1px 1px 0px #865233",
});

export const StyledSection7Logo = styled("img", {
  width: "400px",
  marginTop: "26px",
});

export const StyledSection7Icons = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    cursor: "pointer",
    marginTop: "24px",
});

export const StyledSection7Icon = styled("img", {
    width: "58px",
});
