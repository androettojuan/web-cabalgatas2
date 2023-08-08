import { styled } from "../../theme/styled";

export const StyledCarouselOpinions = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "40px 0 80px 0",
});

export const StyledCarouselOpinion = styled("div", {
  variants: {
    current: {
      true: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const StyledCarouselOpinionButton = styled("button", {
  fontSize: "18px",
  cursor: "pointer",
  borderRadius: "50%",
  zIndex: "2",
  "@media (max-width: 900px)": {
    width: "38px",
    height: "38px",
  },
  "@media (max-width: 700px)": {
    width: "34px",
    height: "34px",
  },
  variants: {
    color: {
      next: {
        backgroundColor: "$brown",
        color: "$white",
        border: "none",
        position: "absolute",
        top: "40%",
        transform: "translateY(-50%)",
        "@media (max-width: 900px)": {
          right: "-80px",
        },
        "@media (max-width: 600px)": {
          right: "-50px",
        },
      },
      back: {
        backgroundColor: "$brown",
        color: "$white",
        border: "none",
        position: "absolute",
        top: "40%",
        transform: "translateY(-50%)",
        "@media (max-width: 900px)": {
          left: "-80px",
        },
        "@media (max-width: 600px)": {
          left: "-50px",
        },
      },
    },
  },
});
