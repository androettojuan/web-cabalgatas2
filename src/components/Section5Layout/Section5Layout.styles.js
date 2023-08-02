import { styled } from "../../theme/styled";

export const StyledSection5Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "40px 0 80px 0",
});

export const StyledSection5Fondo = styled("img", {
  position: "absolute",
  objectFit: "cover",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "-1",
  opacity: "0.9",
});

export const StyledSection5Title = styled("div", {
  margin: "40px 0 20px 0",
});

export const StyledSection5Subtitle = styled("div", {
  textAlign: "center",
  width: "800px",
  marginBottom: "80px",
});

export const StyledSection5Opinions = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  flexDirection: "row",
});
