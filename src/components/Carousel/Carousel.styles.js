import { styled } from "../../theme/styled";

export const StyledCarousel = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "100%",
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
  "@media (max-width: 1280px)": {
    width: "42px",
    height: "42px",
  },
  "@media (max-width: 1100px)": {
    width: "38px",
    height: "38px",
  },
  "@media (max-width: 900px)": {
    width: "34px",
    height: "34px",
  },
  "@media (max-width: 760px)": {
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
        "@media (max-width: 1280px)": {
          right: "160px",
        },
        "@media (max-width: 1100px)": {
          right: "140px",
        },
        "@media (max-width: 900px)": {
          right: "120px",
        },
        "@media (max-width: 760px)": {
          right: "80px",
        },
        "@media (max-width: 500px)": {
          right: "40px",
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
        "@media (max-width: 1280px)": {
          left: "160px",
        },
        "@media (max-width: 1100px)": {
          left: "120px",
        },
        "@media (max-width: 900px)": {
          left: "100px",
        },
        "@media (max-width: 760px)": {
          left: "80px",
        },
        "@media (max-width: 500px)": {
          left: "40px",
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
  "@media (max-width: 1280px)": {
    margin: "20px 0",
  },
  "@media (max-width: 1100px)": {
    margin: "20px 0",
  },
  "@media (max-width: 900px)": {
    margin: "20px 0",
  },
  "@media (max-width: 760px)": {
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
  "@media (max-width: 1280px)": {
    width: "380px",
    height: "320px",
  },
  "@media (max-width: 1100px)": {
    width: "300px",
    height: "240px",
  },
  "@media (max-width: 900px)": {
    width: "280px",
    height: "220px",
  },
  "@media (max-width: 760px)": {
    width: "300px",
    height: "240px",
    shadow:2,
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
        "@media (max-width: 1280px)": {
          width: "380px",
          height: "320px",
          margin: "0",
        },
        "@media (max-width: 1100px)": {
          width: "300px",
          height: "240px",
          margin: "0",
        },
        "@media (max-width: 900px)": {
          width: "260px",
          height: "200px",
        },
        "@media (max-width: 760px)": {
          width: "280px",
          height: "220px",
          margin: "0px",
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
        "@media (max-width: 1280px)": {
          width: "300px",
          height: "260px",
          margin: "0 120px",
        },
        "@media (max-width: 1100px)": {
          width: "240px",
          height: "200px",
          margin: "0 100px",
        },
        "@media (max-width: 900px)": {
          width: "200px",
          height: "160px",
          margin: "0 80px",
        },

        "@media (max-width: 760px)": {
          display: "none",
        },
      },
      none: {
        display: "none",
      },
    },
  },
});

// "@media (max-width: 1600px)": {},
// "@media (max-width: 1280px)": {},
// "@media (max-width: 899px)": {},
// "@media (max-width: 600px)": {},
