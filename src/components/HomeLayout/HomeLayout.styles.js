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
});
