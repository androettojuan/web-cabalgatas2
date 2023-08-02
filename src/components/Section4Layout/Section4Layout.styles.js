import { styled } from "../../theme/styled";

export const StyledSection4Layout = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    borderBottom: "1px solid $primary",
    width: "100%",
    padding: "40px 0",
});

export const StyledSection4Fondo = styled("img", {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    zIndex: -1,
    opacity: 0.7,
});

export const StyledSection4Text = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "560px",
    textAlign: "center",
    margin: "100px 0 100px 40px",
});

export const StyledSection4Buttons = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "360px",
});
