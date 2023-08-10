import React from "react";
import { useParams } from "react-router-dom";
import AdventureLayout from "../components/AdventureLayout/AdventureLayout";
import Header from "../components/Header/Header";
import ContainerApp from "../components/ContainerApp/ContainerApp";
import Title from "../components/Title/Title";

const catalogo = [
  {
    id: 1,
    src: "/img/foto1.jpg",
    text: "Cabalgata Mini",
  },
  {
    id: 2,
    src: "/img/foto2.jpg",
    text: "Cabalgata Corta",
  },
  {
    id: 3,
    src: "/img/foto3.jpg",
    text: "Dia de Campo",
  },
  {
    id: 4,
    src: "/img/foto4.jpg",
    text: "Al Río!",
  },
  {
    id: 5,
    src: "/img/foto5.jpg",
    text: "Por las Alturas",
  },
  {
    id: 6,
    src: "/img/foto6.jpg",
    text: "De 2 dias",
  },
  {
    id: 7,
    src: "/img/foto7.jpg",
    text: "Promo Grupal",
  },
  {
    id: 8,
    src: "/img/foto8.jpg",
    text: "Especiales",
  },
];

const AdventurePage = () => {
  const { id } = useParams();
  return (
    <ContainerApp>
      <AdventureLayout>
        <Header />
        <AdventureLayout.Title>
          <Title size={"xl"} color={"primary"}>
            {catalogo.map((item) => {
              if (item.id === parseInt(id)) {
                return item.text;
              }
              return null;
            })}
          </Title>
        </AdventureLayout.Title>
      </AdventureLayout>
    </ContainerApp>
  );
};

export default AdventurePage;
