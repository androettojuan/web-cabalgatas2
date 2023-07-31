import React from "react";
import Section3Layout from "../components/Section3Layout/Section3Layout";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";

const Section3 = () => {
  return (
    <Section3Layout>
      <Section3Layout.Fondo1 />
      <Section3Layout.Fondo2 />
      <Section3Layout.Img src={"/img/foto2.jpg"} />
      <Section3Layout.Content>
        <Title size="md" color="dark">
          Disfrutá una Experiencia Inolvidable
        </Title>
        <Paragraph>
          Nuestras cabalgatas son una experiencia que cambia la vida, llena de
          paisajes, gastronomía, fotografías increíbles y recuerdos
          inolvidables. Creemos que las disfrutarás.
        </Paragraph>
      </Section3Layout.Content>
    </Section3Layout>
  );
};

export default Section3;
