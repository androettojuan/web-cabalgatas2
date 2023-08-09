import { styled } from "../../theme/styled";

export const PhotoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$secondary",
  width: "220px",
  padding: "6px 6px 16px 6px",
  "@media (max-width: 900px)": {
    width: "150px",
  },
});

export const PhotoImage = styled("img", {
  width: "200px",
  height: "220px",
  objectFit: "cover",
  "@media (max-width: 900px)": {
    width: "130px",
    height: "150px",
  },
});

export const PhotoTitle = styled("span", {
    fontSize: "24px",
    fontWeight: "700",
    color: "$brown2",
    marginTop: "12px",
    textAlign: "center",
    "@media (max-width: 900px)": {
      fontSize: "18px",
    },
});
