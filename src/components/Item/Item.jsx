import React from "react";
import {
  StyledItem,
  StyledItemIcon,
  StyledItemText,
  StyledItemSubtitle,
  StyledItemTitle,
} from "./Item.styles";

const Item = ({ icon, subtitle, title }) => {
  return (
    <StyledItem>
        <StyledItemIcon>{icon}</StyledItemIcon>
      <StyledItemText>
        <StyledItemTitle>{title}</StyledItemTitle>
        <StyledItemSubtitle>{subtitle}</StyledItemSubtitle>
      </StyledItemText>
    </StyledItem>
  );
};

export default Item;
