import React from "react";
import {
  StyledButtonLogo,
  StyledButtonLogoImg,
  StyledButtonLogoText,
} from "./ButtonLogo.styles";

const ButtonLogo = ({ text, icon, onClick }) => {
  return (
    <StyledButtonLogo onClick={onClick}>
      <StyledButtonLogoText>{text}</StyledButtonLogoText>
      <StyledButtonLogoImg src={icon} />
    </StyledButtonLogo>
  );
};

export default ButtonLogo;
