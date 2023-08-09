import React from "react";
import Photo from "../components/Photo/Photo";
import CatalogLayout from "../components/CatalogLayout/CatalogLayout";
import Title from "../components/Title/Title";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

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

const CatalogPage = () => {
  return (
    <CatalogLayout>
      <Header />
      <Container>
        <CatalogLayout.Title>
          <Title size={"xxl"} color={"primary"}>
            Elegí tu Aventura!
          </Title>
        </CatalogLayout.Title>
        <CatalogLayout.Content>
          {catalogo.map((item) => (
            <Photo key={item.id} src={item.src} text={item.text} />
          ))}
        </CatalogLayout.Content>
      </Container>
    </CatalogLayout>
  );
};

export default CatalogPage;
