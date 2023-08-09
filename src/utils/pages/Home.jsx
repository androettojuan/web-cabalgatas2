import React from "react";
import ContainerApp from "../../components/ContainerApp/ContainerApp";
import HomePage from "../../pages/HomePage";
import Section2 from "../../pages/Section2";
import Section3 from "../../pages/Section3";
import Section4 from "../../pages/Section4";
import Section5 from "../../pages/Section5";
import Section6 from "../../pages/Section6";
import Section7 from "../../pages/Section7";

const Home = () => {
  return (
    <ContainerApp>
      <HomePage />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </ContainerApp>
  );
};

export default Home;