import { styled } from "../../theme/styled";

export const StyledSection3Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "768px",
  borderTop: "1px solid $brown",
  borderBottom: "1px solid $primary",
  backgroundColor: "$litebrown",
});

export const StyledSection3Fondo1 = styled("div", {
  width: "380px",
  backgroundColor: "$primary",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%)",
});

export const StyledSection3Fondo2 = styled("div", {
  width: "440px",
  height: "280px",
  backgroundColor: "$litebrown",
  position: "absolute",
  top: "100px",
  left: "50%",
  transform: "translateX(-56%)",
});

export const StyledSection3Img = styled("img", {
  width: "440px",
  height: "280px",
  objectFit: "cover",
  zIndex: "1",
  position: "absolute",
  top: "80px",
  left: "50%",
  transform: "translateX(-50%)",
});

export const StyledSection3Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "2",
  textAlign: "center",
  width: "480px",
  marginTop: "400px",
});
