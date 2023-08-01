import React from "react";
import ButtonLogo from "../components/ButtonLogo/ButtonLogo";
import Paragraph from "../components/Paragraph/Paragraph";
import Section4Layout from "../components/Section4Layout/Section4Layout";
import Title from "../components/Title/Title";

const Section4 = () => {
  return (
    <Section4Layout>
      <Section4Layout.Fondo src="/img/foto7.jpg" />
      <Section4Layout.Text>
        <Title size="xl" color="white" shadow="2" letterSpacing="0">
          Tu experiencia empieza aquí!
        </Title>
        <br />
        <br />
        <br />
        <Paragraph color="white_brown" size="xl">
          Pregúntanos lo que quieras o anímate a hacer una pre-reserva
        </Paragraph>
        <br />
        <Paragraph color="white_brown" size="xl">
          Estamos disponibles para desconectarte de la ciudad y reconectarte con
          la naturaleza
        </Paragraph>
      </Section4Layout.Text>
      <Section4Layout.Buttons>
        <ButtonLogo text="Whatsapp" icon={"/img/redes/whatsapp.jpg"}></ButtonLogo>
      </Section4Layout.Buttons>
    </Section4Layout>
  );
};

export default Section4;
