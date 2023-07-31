import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children, color, size, onClick }) => {
  return (
    <StyledButton color={color} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
