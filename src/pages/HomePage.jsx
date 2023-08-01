import React from "react";
import Header from "../components/Header/Header";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import { StyledHomeLayoutImg } from "../components/HomeLayout/HomeLayout.styles";
import Title from "../components/Title/Title";

const HomePage = () => {
  return (
    <HomeLayout>
      <Header />
      <HomeLayout.Fondo>
        <HomeLayout.FondoOscuro />
        <StyledHomeLayoutImg src="img/portada.jpg" alt="portada" />
        <HomeLayout.Title>
          <Title size="sm" color="primary" shadow="2" letterSpacing="2">
            ES MOMENTO DE
          </Title>
        </HomeLayout.Title>
        <HomeLayout.MainTitle>
          <StyledHomeLayoutImg src="img/title-home.png" alt="main-title" />
        </HomeLayout.MainTitle>
      </HomeLayout.Fondo>
    </HomeLayout>
  );
};

export default HomePage;
