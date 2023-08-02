import { styled } from "../../theme/styled";

export const StyledCarousel = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const StyledButton = styled("button", {
  width: "50px",
  height: "50px",
  fontSize: "18px",
  cursor: "pointer",
  borderRadius: "50%",
  zIndex: "2",
  variants: {
    color: {
      next: {
        backgroundColor: "$brown",
        color: "$white",
        border: "none",
        position: "absolute",
        right: "240px",
        top: "50%",
        transform: "translateY(-50%)",
      },
      back: {
        backgroundColor: "$brown",
        color: "$white",
        border: "none",
        position: "absolute",
        left: "240px",
        top: "50%",
        transform: "translateY(-50%)",
      },
    },
  },
});

export const StyledCarouselContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  margin: "60px 0",
});

export const StyledCarouselContentPhoto = styled("img", {
  width: "460px",
  height: "400px",
  objectFit: "cover",
  border: "1px solid $grey",
  variants: {
    current: {
      true: {
        opacity: "1",
        zIndex: "1",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        transition: "none 0.5s ease-in-out",
        transitionProperty: "opacity, width, height",
      },
      false: {
        opacity: "0.5",
        transition: "opacity 0.4s ease-in-out",
        width: "380px",
        height: "340px",
        margin: "0 160px",
      },
      none: {
        display: "none",
      },
    },
  },
});
