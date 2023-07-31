import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Title from "../components/Title/Title";
import Section2Layout from "../components/Section2Layout/Section2Layout";
import Button from "../components/Button/Button";

const images = [
  {
    src: "img/foto1.jpg",
  },
  {
    src: "img/foto2.jpg",
  },
  {
    src: "img/foto3.jpg",
  },
  {
    src: "img/foto4.jpg",
  },
  {
    src: "img/foto5.jpg",
  },
  {
    src: "img/foto6.jpg",
  },
];

const Section2 = () => {
  return (
    <Section2Layout>
      <Section2Layout.Title>
        <Title size="lg" color="white" shadow="2" letterSpacing="2">
          ELEGÍ TU AVENTURA
        </Title>
      </Section2Layout.Title>
      <Carousel images={images} />
      <Section2Layout.Button>
        <Button color="primary" size="md">
          MÁS DETALLES
        </Button>
      </Section2Layout.Button>
    </Section2Layout>
  );
};

export default Section2;
