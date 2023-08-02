import React from "react";
import Opinion from "../components/Opinion/Opinion";
import Section5Layout from "../components/Section5Layout/Section5Layout";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";

const Section5 = () => {
  return (
    <Section5Layout>
      <Section5Layout.Fondo src="/img/foto8.jpg" />
      <Section5Layout.Title>
        <Title size="xl" color="white" shadow="2" letterSpacing="0">
          TESTIMONIOS
        </Title>
      </Section5Layout.Title>
      <Section5Layout.Subtitle>
        <Paragraph color="white_brown" size="xl">
          Palabras de las personas que nos visitaron y Disfrutaron de la
          Experiencia a caballo en las sierras cordobesas
        </Paragraph>
      </Section5Layout.Subtitle>
      <Section5Layout.Opinions>
        <Opinion
          opinion={
            "Sin dudas una experiencia que conecta con la naturaleza, los aromas y el paisaje. Los animales bellos, bien mansos y cuidados, ideal para una tarde con la familia. Los guias excelentes, muy amables y cuidadosos. No veo las horas de volver!!!!"
          }
          icon={"/img/redes/facebook.jpg"}
          name={"Opiniones Facebook"}
        />
        <Opinion
          opinion={
            "Hermoso día de cabalagata. Fuimos un grupo de mas de 30 personas y nos esperaron con todos los caballos, ayuda para los más pequeños e inexpertos del grupo, muy atentos en todo momento. Paseo recomendable!!"
          }
          icon={"/img/redes/tripadvisor.jpg"}
          name={"Opiniones Tripadvisor"}
        />
        <Opinion
          opinion={
            "Excelente lugar, super recomendable. Fuimos en familia con dos niños y los guías los cuidaron todo el camino. Los caballos cuidados y súper amigables. Una experiencia hermosa en medio del paisaje serrano."
          }
          icon={"/img/redes/google-mas.jpg"}
          name={"Opiniones Google+"}
        />
      </Section5Layout.Opinions>
    </Section5Layout>
  );
};

export default Section5;
