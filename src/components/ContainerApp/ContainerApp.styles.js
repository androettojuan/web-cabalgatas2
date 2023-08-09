import { styled } from "../../theme/styled";

export const StyledContainerApp = styled("div", {
  boxShadow: "2px 2px 60px rgba(0, 0, 0, 0.8)",
  margin: "0 auto",
  " @media (min-width: 1800px)": {
    maxWidth: "1600px",
  },
  " @media (max-width: 1600px)": {
    maxWidth: "1200px",
  },
  " @media (max-width: 1200px)": {
    maxWidth: "1000px",
  },
  " @media (max-width: 600px)": {
    maxWidth: "100%",
  },
});
