import React from "react";
import { StyledParagraph } from "./Paragraph.styles";

const Paragraph = ({ children, color="dark", size="lg" }) => {
  return <StyledParagraph color={color} size={size}>{children}</StyledParagraph>;
};

export default Paragraph;
