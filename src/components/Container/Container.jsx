import React from "react";
import { StyledContainer } from "./Container.styles";

const Container = ({ children, direction = "column" }) => {
  return <StyledContainer direction={direction}>{children}</StyledContainer>;
};

export default Container;
