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
  width: "fit-content",
  userSelect: "none",
  "@media (max-width: 600px)": {
    padding: "12px 18px",
  },
});

export const StyledSection7LayoutButtonText = styled("span", {
  color: "$primary",
  fontSize: "36px",
  textShadow:
    "1px 1px 0px #865233, -1px -1px 0px #8652, 1px -1px 0px #8652, -1px 1px 0px #865233",
  "@media (max-width: 600px)": {
    fontSize: "30px",
  },
});

export const StyledSection7Logo = styled("img", {
  width: "400px",
  marginTop: "26px",
  "@media (max-width: 600px)": {
    width: "300px",
  },
});

export const StyledSection7Icons = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  cursor: "pointer",
  marginTop: "24px",
  "@media (max-width: 600px)": {
    gap: "16px",
  },
});

export const StyledSection7Icon = styled("img", {
  width: "58px",
  "@media (max-width: 600px)": {
    width: "48px",
  },
});
