import React from "react";
import Header from "../components/Header/Header";
import HomeLayout from "../components/HomeLayout/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <Header />
      <HomeLayout.Fondo src="img/portada.jpg" />
    </HomeLayout>
  );
};

export default HomePage;
