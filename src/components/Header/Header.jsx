import React from "react";
import { StyledHeader, StyledHeaderLogo } from "./Header.styles";
import Sidebar from "../Sidebar/Sidebar";
import Container from "../Container/Container";

const Header = () => {
  return (
    <StyledHeader>
      <Container direction="row">
        <StyledHeaderLogo src="img/logo-blanco.png" alt="logo" />
        <Sidebar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
