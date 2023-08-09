import React, { useState } from "react";
import {
  StyledSidebar,
  StyledSidebarIcon,
  StyledSidebarMenuButton,
  StyledSidebarMenuButtonLink,
  StyledSidebarMenuContainer,
} from "./Sidebar.styles";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledSidebar>
      <StyledSidebarIcon onClick={() => setIsOpen(!isOpen)} />
      <StyledSidebarMenuContainer isOpen={isOpen}>
        <StyledSidebarMenuButton onClick={() => navigate("/")}>Inicio</StyledSidebarMenuButton>
        <StyledSidebarMenuButton onClick={() => navigate("/catalogo")}>Elegí tu aventura</StyledSidebarMenuButton>
        <StyledSidebarMenuButtonLink as="a" href="#testimonios">Testimonios</StyledSidebarMenuButtonLink>
        <StyledSidebarMenuButtonLink as="a" href="#contacto">Contactos</StyledSidebarMenuButtonLink>
      </StyledSidebarMenuContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
