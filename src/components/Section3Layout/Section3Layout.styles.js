import { styled } from "../../theme/styled";

export const StyledSection3Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "768px",
  borderTop: "1px solid $litebrown",
  borderBottom: "1px solid $litebrown",
  backgroundColor: "$litebrown",
  "@media (max-width: 600px)": {
    height: "480px",
    paddingBottom: "100px",
  },
});

export const StyledSection3Fondo1 = styled("div", {
  width: "380px",
  backgroundColor: "$primary",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%)",
  "@media (max-width: 1600px)": {
    width: "360px",
  },
  "@media (max-width: 1200px)": {
    width: "340px",
  },
  "@media (max-width: 900px)": {
    width: "320px",
  },
  "@media (max-width: 700px)": {
    width: "300px",
  },
  "@media (max-width: 600px)": {
    width: "280px",
  },
});

export const StyledSection3Fondo2 = styled("div", {
  width: "440px",
  height: "280px",
  backgroundColor: "$litebrown2",
  position: "absolute",
  top: "100px",
  left: "50%",
  transform: "translateX(-56%)",
  "@media (max-width: 1600px)": {
    width: "420px",
    height: "260px",
  },
  "@media (max-width: 1200px)": {
    width: "400px",
    height: "240px",
  },
  "@media (max-width: 900px)": {
    width: "380px",
    height: "220px",
  },
  "@media (max-width: 700px)": {
    width: "360px",
    height: "200px",
  },
  "@media (max-width: 600px)": {
    width: "340px",
    height: "180px",
  },
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
  "@media (max-width: 1600px)": {
    width: "420px",
    height: "260px",
  },
  "@media (max-width: 1200px)": {
    width: "400px",
    height: "240px",
  },
  "@media (max-width: 900px)": {
    width: "380px",
    height: "220px",
  },
  "@media (max-width: 700px)": {
    width: "360px",
    height: "200px",
  },
  "@media (max-width: 600px)": {
    width: "340px",
    height: "180px",
  },
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
  "@media (max-width: 1600px)": {
    width: "460px",
  },
  "@media (max-width: 1200px)": {
    width: "440px",
  },
  "@media (max-width: 900px)": {
    width: "420px",
  },
  "@media (max-width: 700px)": {
    width: "400px",
  },
  "@media (max-width: 600px)": {
    width: "380px",
  },
});
