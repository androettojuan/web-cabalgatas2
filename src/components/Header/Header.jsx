import React from "react";
import { StyledHeader, StyledHeaderLogo } from "./Header.styles";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo src="img/logo-blanco.png" alt="logo" />
      <Sidebar />
    </StyledHeader>
  );
};

export default Header;
