import { styled } from "../../theme/styled";

export const StyledButtonLogo = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "10px 24px",
  backgroundColor: "$secondary",
  borderRadius: "36px",
  maxWidth: "260px",
  opacity: 1,
  cursor: "pointer",
  border: "1px solid $primary",
  "@media (max-width: 1200px)": {
    maxWidth: "200px",
  },
});

export const StyledButtonLogoImg = styled("img", {
  width: "56px",
  height: "56px",
  objectFit: "cover",
  "@media (max-width: 1200px)": {
    width: "40px",
    height: "40px",
  },
});

export const StyledButtonLogoText = styled("span", {
  fontSize: "24px",
  fontWeight: "600",
  color: "$brown",
  textAlign: "center",
  "@media (max-width: 1200px)": {
    fontSize: "18px",
  },
});
