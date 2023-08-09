import React from "react";
import {
  StyledComillas,
  StyledOpinion,
  StyledOpinionText,
} from "./Opinion.styles";
import ButtonLogo from "../ButtonLogo/ButtonLogo";

const Opinion = ({ opinion, icon, name, onClick }) => {
  return (
    <StyledOpinion onClick={onClick}>
      <StyledComillas />
      <StyledOpinionText>{opinion}</StyledOpinionText>
      <ButtonLogo text={name} icon={icon}></ButtonLogo>
    </StyledOpinion>
  );
};

export default Opinion;
