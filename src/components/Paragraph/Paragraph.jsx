import React from "react";
import { StyledParagraph } from "./Paragraph.styles";

const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
