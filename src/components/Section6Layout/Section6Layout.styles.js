import { styled } from "../../theme/styled";

export const StyledSection6Layout = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$brown2",
  padding: "40px 0",
  gap: "200px",
  "@media (max-width: 1200px)": {
    gap: "100px",
  },
  "@media (max-width: 900px)": {
    gap: "60px",
  },
  "@media (max-width: 760px)": {
    flexDirection: "column",
    gap: "40px",
  },
});

// estilos de contactos

export const StyledSection6LayoutContact = styled("div", {
  padding: "24px",
  border: "2px solid $secondary",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "380px",
  height: "340px",
  "@media (max-width: 1200px)": {
    width: "300px",
    height: "260px",
  },
  "@media (max-width: 900px)": {
    width: "280px",
    height: "240px",
  },
  "@media (max-width: 760px)": {
    width: "280px",
    height: "240px",
  },
});

export const StyledSection6Title = styled("div", {
  margin: "0 auto",
  marginBottom: "24px",
});

export const StyledSection6TextAndIcon = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",
});

export const StyledSection6ContainerText = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const StyledSection6Text = styled("span", {
  color: "$secondary",
  fontSize: "18px",
  fontWeight: "700",
  "@media (max-width: 1200px)": {
    fontSize: "16px",
  },
  "@media (max-width: 900px)": {
    fontSize: "14px",
  },
  "@media (max-width: 760px)": {
    fontSize: "14px",
  },
});

export const StyledSection6Icon = styled("div", {
  color: "$secondary",
  fontSize: "48px",
  marginRight: "8px",
  "@media (max-width: 1200px)": {
    fontSize: "44px",
  },
  "@media (max-width: 760px)": {
    fontSize: "44px",
  },
});

// estilos de mapa

export const StyledSection6LayoutMap = styled("div", {
  padding: "24px",
  border: "2px solid $secondary",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "380px",
  height: "340px",
  "@media (max-width: 1200px)": {
    width: "300px",
    height: "260px",
  },
  "@media (max-width: 900px)": {
    width: "280px",
    height: "240px",
  },
  "@media (max-width: 760px)": {
    width: "280px",
    height: "240px",
  },
});

export const StyledSection6Map = styled("iframe", {
  width: "380px",
  height: "340px",
  "@media (max-width: 1200px)": {
    width: "300px",
    height: "260px",
  },
  "@media (max-width: 900px)": {
    width: "280px",
    height: "240px",
  },
  "@media (max-width: 760px)": {
    width: "280px",
    height: "240px",
  },
});
