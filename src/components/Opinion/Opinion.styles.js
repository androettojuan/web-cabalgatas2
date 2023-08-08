import { styled } from "../../theme/styled";
import { ImQuotesLeft } from "react-icons/im";

export const StyledOpinion = styled("div", {
  width: "340px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 1200px)": {
    width: "260px",
  },
  "@media (max-width: 900px)": {
    width: "300px",
  },
  "@media (max-width: 600px)": {
    width: "240px",
  },
});

export const StyledComillas = styled(ImQuotesLeft, {
  fontSize: "36px",
  color: "$white",
  alignSelf: "flex-start",
});

export const StyledOpinionText = styled("span", {
  textAlign: "center",
  display: "block",
  fontSize: "20px",
  fontWeight: "500",
  color: "$white",
  margin: "20px 0 40px 0",
  height: "200px",
  "@media (max-width: 1200px)": {
    fontSize: "18px",
  },

  "@media (max-width: 600px)": {
    fontSize: "18px",
    height: "240px",
  },
});
