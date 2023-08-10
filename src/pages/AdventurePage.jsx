import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdventureLayout from "../components/AdventureLayout/AdventureLayout";
import Header from "../components/Header/Header";
import ContainerApp from "../components/ContainerApp/ContainerApp";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";
import Item from "../components/Item/Item";
import { GiHorseshoe } from "react-icons/gi";
import { BiTimeFive, BiUserVoice } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import Button from "../components/Button/Button";

const catalogo = [
  {
    id: 1,
    src: "/img/foto1.jpg",
    text: "Cabalgata Mini",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description:
      "Es una experiencia ideal para que los niños tengan su primer encuentro con los caballos. Esta actividad de corta duración está pensanda para ofrecerles a los más pequeños la oportunidad de experimentar la emoción de montar a caballo sin importar su edad.¡Solo necesitas estar dispuesto a vivir el momento y disfrutarlo al máximo!",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
  {
    id: 2,
    src: "/img/foto2.jpg",
    text: "Cabalgata Corta",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description: "Cabalgata Corta",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
  {
    id: 3,
    src: "/img/foto3.jpg",
    text: "Dia de Campo",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description: "Dia de Campo",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
  {
    id: 4,
    src: "/img/foto4.jpg",
    text: "Al Río!",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description: "Al Río!",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
  {
    id: 5,
    src: "/img/foto5.jpg",
    text: "Por las Alturas",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description: "Por las Alturas",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
  {
    id: 6,
    src: "/img/foto6.jpg",
    text: "De 2 dias",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description: "De 2 dias",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
  {
    id: 7,
    src: "/img/foto7.jpg",
    text: "Promo Grupal",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description: "Promo Grupal",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
  {
    id: 8,
    src: "/img/foto8.jpg",
    text: "Especiales",
    photo1: "/img/foto1.jpg",
    photo2: "/img/foto2.jpg",
    description: "Especiales",
    items: [
      {
        id: 1,
        icon: <BiTimeFive />,
        title: "Duración",
        subtitle: "1 hora",
      },
      {
        id: 2,
        icon: <GiHorseshoe />,
        title: "Edad",
        subtitle: "A partir de 3 años",
      },
      {
        id: 3,
        icon: <BiUserVoice />,
        title: "Nivel",
        subtitle: "Principiantes",
      },
      {
        id: 4,
        icon: <BsFillPeopleFill />,
        title: "Grupo",
        subtitle: "Máximo 4 personas",
      },
    ],
  },
];

const AdventurePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

        {catalogo.map((item) => {
          if (item.id === parseInt(id)) {
            return (
              <AdventureLayout.Photos key={item.id}>
                <AdventureLayout.Photo src={item.photo1} />
                <AdventureLayout.Photo src={item.photo2} />
              </AdventureLayout.Photos>
            );
          }
          return null;
        })}
        <AdventureLayout.Description>
          {catalogo.map((item) => {
            if (item.id === parseInt(id)) {
              return <Paragraph color="brown">{item.description}</Paragraph>;
            }
            return null;
          })}
        </AdventureLayout.Description>
        <AdventureLayout.Items>
          {catalogo.map((item) => {
            if (item.id === parseInt(id)) {
              return item.items.map((item) => (
                <Item
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ));
            }
            return null;
          })}
        </AdventureLayout.Items>
        <AdventureLayout.Button>
          <Button color="secondary" size="xl" onClick={() => navigate("/catalogo")}>
            Explorar más aventuras
          </Button>
        </AdventureLayout.Button>
      </AdventureLayout>
    </ContainerApp>
  );
};

export default AdventurePage;
