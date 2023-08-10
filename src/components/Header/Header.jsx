import React from "react";
import { StyledHeader, StyledHeaderLogo } from "./Header.styles";
import Sidebar from "../Sidebar/Sidebar";
import Container from "../Container/Container";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Container direction="row">
        <StyledHeaderLogo src="/img/logo-blanco.png" alt="logo" onClick={() => navigate("/")} />
        <Sidebar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
