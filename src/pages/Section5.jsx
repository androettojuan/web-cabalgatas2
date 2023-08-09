import React from "react";
import Opinion from "../components/Opinion/Opinion";
import Section5Layout from "../components/Section5Layout/Section5Layout";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";
import CorouselOpinions from "../components/CarouselOpinions/CorouselOpinions";

const opinions = [
  {
    opinion:
      "Sin dudas una experiencia que conecta con la naturaleza, los aromas y el paisaje. Los animales bellos, bien mansos y cuidados, ideal para una tarde con la familia. Los guias excelentes, muy amables y cuidadosos. No veo las horas de volver!!!!",
    icon: "/img/redes/facebook.jpg",
    name: "Opiniones Facebook",
    onclick: () => {
      window.open(
        "https://www.facebook.com/CabalgatasEnCordoba/reviews",
        "_blank"
      );
    },
  },
  {
    opinion:
      "Hermoso día de cabalagata. Fuimos un grupo de mas de 30 personas y nos esperaron con todos los caballos, ayuda para los más pequeños e inexpertos del grupo, muy atentos en todo momento. Paseo recomendable!!",
    icon: "/img/redes/tripadvisor.jpg",
    name: "Opiniones Tripadvisor",
    onclick: () => {
      window.open(
        "https://www.tripadvisor.com.ar/Attraction_Review-g312766-d12396006-Reviews-Cabalgatas_y_Dias_de_Campo-Alta_Gracia_Province_of_Cordoba_Central_Argentina.html"
      );
    },
  },
  {
    opinion:
      "Excelente lugar, super recomendable. Fuimos en familia con dos niños y los guías los cuidaron todo el camino. Los caballos cuidados y súper amigables. Una experiencia hermosa en medio del paisaje serrano.",
    icon: "/img/redes/google-mas.jpg",
    name: "Opiniones Google",
    onclick: () => {
      window.open(
        "https://www.google.com/maps/place/Cabalgatas+y+D%C3%ADas+de+Campo/@-31.6659755,-64.4704208,15z/data=!4m8!3m7!1s0x942d508cd6096141:0xef2a5ac5a5c6124b!8m2!3d-31.6659755!4d-64.4704208!9m1!1b1!16s%2Fg%2F11c2l130v8?entry=ttu"
      );
    },
  },
];

const Section5 = () => {
  return (
    <Section5Layout id="testimonios">
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
        {opinions.map((opinion, index) => (
          <Opinion
            key={index}
            opinion={opinion.opinion}
            icon={opinion.icon}
            name={opinion.name}
            onClick={opinion.onclick}
          />
        ))}
      </Section5Layout.Opinions>
      <Section5Layout.Carousel>
        <CorouselOpinions opinion={opinions} />
      </Section5Layout.Carousel>
    </Section5Layout>
  );
};

export default Section5;
