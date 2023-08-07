import { styled } from "../../theme/styled";

export const StyledHomeLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const StyledHomeLayoutFondo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderTop: "1px solid $litebrown",
});

export const StyledHomeLayoutFondoOscuro = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "$dark",
  opacity: 0.2,
  zIndex: 10,
});

export const StyledHomeLayoutImg = styled("img", {
  width: "100%",
});

export const StyledTitle = styled("div", {
  position: "absolute",
  top: "110px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 20,
  margin: "18px 0",
  "@media (min-width: 1200px) and (max-width: 1599px)": {
    top: "68px",
  },
  "@media (min-width: 900px) and (max-width: 1199px)": {
    top: "46px",
  },
  "@media (max-width: 899px)": {
    top: "38px",
  },
  "@media (max-width: 600px)": {
    top: "30px",
  },
});

export const StyledMainTitle = styled("div", {
  position: "absolute",
  top: "42%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "1400px",
  userSelect: "none",
});