import { styled } from "../../theme/styled";

export const StyledCatalogLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$white",
  width: "100%",
  paddingBottom: "20px",
  cursor: "pointer",
});

export const StyledCatalogLayoutTitle = styled("div", {
  marginBottom: "60px",
  width: "800px",
  "@media (max-width: 900px)": {
    width: "300px",
  },
});

export const StyledCatalogLayoutContent = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  maxWidth: "800px",
  gap: "30px",
  "@media (max-width: 900px)": {
    gap: "10px",
    maxWidth: "600px",
  },
});
