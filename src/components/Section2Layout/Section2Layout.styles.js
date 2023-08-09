import { styled } from "../../theme/styled";

export const StyledSection2 = styled("div", {
  backgroundColor: "$primary",
  borderTop: "1px solid $litebrown",
  width: "100%",
});

export const StyledSection2Title = styled("div", {
  textAlign: "center",
  padding: "40px 0 30px 0",
  "@media (max-width: 760px)": {
    marginBottom: "100px",
  },
});

export const StyledSection2Button = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 0 40px 0",
  "@media (max-width: 760px)": {
    marginTop: "100px",
  },
});
