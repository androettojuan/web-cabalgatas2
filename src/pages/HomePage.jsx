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
          <Title size="sm" color="secondary" shadow="2" letterSpacing="2">
            ES MOMENTO DE
          </Title>
        </HomeLayout.Title>
      </HomeLayout.Fondo>
    </HomeLayout>
  );
};

export default HomePage;
