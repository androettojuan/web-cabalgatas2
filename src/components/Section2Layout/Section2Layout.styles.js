import { styled } from "../../theme/styled";

export const StyledSection2 = styled("div", {
  backgroundColor: "$primary",
  borderTop: "1px solid $litebrown",
});

export const StyledSection2Title = styled("div", {
  textAlign: "center",
  padding: "40px 0 30px 0",
  "@media (max-width: 700px)": {
    marginBottom: "100px",
  },
});

export const StyledSection2Button = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 0 40px 0",
  "@media (max-width: 700px)": {
    marginTop: "100px",
  },
});
