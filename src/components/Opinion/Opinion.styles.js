import { styled } from "../../theme/styled";
import { ImQuotesLeft } from "react-icons/im";


export const StyledOpinion = styled("div", {
    width: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
});


