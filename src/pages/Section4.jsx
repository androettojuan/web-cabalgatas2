import React from "react";
import ButtonLogo from "../components/ButtonLogo/ButtonLogo";
import Paragraph from "../components/Paragraph/Paragraph";
import Section4Layout from "../components/Section4Layout/Section4Layout";
import Title from "../components/Title/Title";
import Container from "../components/Container/Container";

const Section4 = () => {
  return (
    <Section4Layout>
      <Section4Layout.Fondo src="/img/foto7.jpg" />
      <Container>
        <Section4Layout.Content>
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
              Estamos disponibles para desconectarte de la ciudad y reconectarte
              con la naturaleza
            </Paragraph>
          </Section4Layout.Text>
          <Section4Layout.Buttons>
            <ButtonLogo
              text="Whatsapp"
              icon={"/img/redes/whatsapp.jpg"}
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=5493547575100",
                  "_blank"
                )
              }
            ></ButtonLogo>
          </Section4Layout.Buttons>
        </Section4Layout.Content>
      </Container>
    </Section4Layout>
  );
};

export default Section4;
