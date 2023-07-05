import React, { useState } from "react";
import {
  StyledSidebar,
  StyledSidebarIcon,
  StyledSidebarMenuButton,
  StyledSidebarMenuContainer,
} from "./Sidebar.styles";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledSidebar>
      <StyledSidebarIcon onClick={() => setIsOpen(!isOpen)} />
      <StyledSidebarMenuContainer isOpen={isOpen}>
        <StyledSidebarMenuButton>Inicio</StyledSidebarMenuButton>
        <StyledSidebarMenuButton>Elegí tu aventura</StyledSidebarMenuButton>
        <StyledSidebarMenuButton>Testimonios</StyledSidebarMenuButton>
        <StyledSidebarMenuButton>Contactos</StyledSidebarMenuButton>
      </StyledSidebarMenuContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
