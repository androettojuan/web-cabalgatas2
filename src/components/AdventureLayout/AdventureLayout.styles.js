import { styled } from "../../theme/styled";

export const StyledAdventureLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$white",
});

export const StyledAdventureLayoutTitle = styled("div", {
  margin: "40px 0 100px 0",
});

export const StyledAdventureLayoutPhotos = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
  "@media only screen and (max-width: 768px)": {
    gap: "20px",
  },
});

export const StyledAdventureLayoutPhoto = styled("img", {
  width: "420px",
  height: "420px",
  objectFit: "cover",
  borderRadius: "24px",
  "@media only screen and (max-width: 768px)": {
    width: "300px",
    height: "300px",
  },
});

export const StyledAdventureLayoutDescription = styled("div", {
  backgroundColor: "$litebrown2",
  padding: "30px 20px",
  maxWidth: "1000px",
  borderRadius: "36px",
  margin: "60px auto",
  textAlign: "center",
});

export const StyledAdventureLayoutItems = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "80px",
  "@media only screen and (max-width: 1200px)": {
    gap: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  "@media only screen and (max-width: 768px)": {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "40px",
  },
});

export const StyledAdventureLayoutButton = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  margin: "100px 0 40px 0",
});
