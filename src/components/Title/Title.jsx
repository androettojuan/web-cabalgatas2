import React from "react";
import { StyledTitle } from "./Title.styles";

const Title = ({ children, color, size, shadow, letterSpacing }) => {
  return (
    <StyledTitle
      color={color}
      size={size}
      shadow={shadow}
      letterSpacing={letterSpacing}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
