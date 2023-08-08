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
  "@media (max-width: 1600px)": {
    width: "46px",
    height: "46px",
  },
  "@media (max-width: 1200px)": {
    width: "42px",
    height: "42px",
  },
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
        right: "240px",
        top: "50%",
        transform: "translateY(-50%)",
        "@media (max-width: 1600px)": {
          right: "200px",
        },
        "@media (max-width: 1200px)": {
          right: "160px",
        },
        "@media (max-width: 900px)": {
          right: "140px",
        },
        "@media (max-width: 700px)": {
          right: "270px",
        },
      },
      back: {
        backgroundColor: "$brown",
        color: "$white",
        border: "none",
        position: "absolute",
        left: "240px",
        top: "50%",
        transform: "translateY(-50%)",
        "@media (max-width: 1600px)": {
          left: "200px",
        },
        "@media (max-width: 1200px)": {
          left: "160px",
        },
        "@media (max-width: 900px)": {
          left: "120px",
        },
        "@media (max-width: 700px)": {
          left: "270px",
        },
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
  "@media (max-width: 1600px)": {
    margin: "40px 0",
  },
  "@media (max-width: 1200px)": {
    margin: "20px 0",
  },
  "@media (max-width: 900px)": {
    margin: "20px 0",
  },
  "@media (max-width: 700px)": {
    margin: "20px 0",
  },
});

export const StyledCarouselContentPhoto = styled("img", {
  width: "460px",
  height: "400px",
  objectFit: "cover",
  border: "1px solid $grey",
  "@media (max-width: 1600px)": {
    width: "420px",
    height: "360px",
  },
  "@media (max-width: 1200px)": {
    width: "380px",
    height: "320px",
  },
  "@media (max-width: 900px)": {
    width: "300px",
    height: "240px",
  },
  "@media (max-width: 700px)": {
    width: "300px",
    height: "240px",
  },
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
        "@media (max-width: 1600px)": {
          width: "420px",
          height: "360px",
          margin: "0",
        },
        "@media (max-width: 1200px)": {
          width: "380px",
          height: "320px",
          margin: "0",
        },
        "@media (max-width: 900px)": {
          width: "300px",
          height: "240px",
          margin: "0",
        },
        "@media (max-width: 700px)": {
          width: "300px",
          height: "240px",
          margin: "0",
        },
      },
      false: {
        opacity: "0.5",
        transition: "opacity 0.4s ease-in-out",
        width: "380px",
        height: "340px",
        margin: "0 160px",
        "@media (max-width: 1600px)": {
          width: "340px",
          height: "300px",
          margin: "0 140px",
        },
        "@media (max-width: 1200px)": {
          width: "300px",
          height: "260px",
          margin: "0 120px",
        },
        "@media (max-width: 900px)": {
          width: "240px",
          height: "200px",
          margin: "0 100px",
        },

        "@media (max-width: 700px)": {
          visibility: "hidden",
          opacity: "0",
          margin: "0 100px",
        },
      },
      none: {
        display: "none",
      },
    },
  },
});

// "@media (max-width: 1600px)": {},
// "@media (max-width: 1200px)": {},
// "@media (max-width: 899px)": {},
// "@media (max-width: 600px)": {},
