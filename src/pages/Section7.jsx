import React from "react";
import Section7Layout from "../components/Section7Layout/Section7Layout";

const Section7 = () => {
  return (
    <Section7Layout>
      <Section7Layout.Button>
        <Section7Layout.ButtonText>VIVÍ LA AVENTURA</Section7Layout.ButtonText>
      </Section7Layout.Button>
      <Section7Layout.Logo src={"/img/logo.png"} />
      <Section7Layout.Icons>
        <Section7Layout.Icon
          src={"/img/redes/facebook.jpg"}
          onClick={() =>
            window.open(
              "https://www.facebook.com/CabalgatasEnCordoba",
              "_blank"
            )
          }
        />
        <Section7Layout.Icon
          src={"/img/redes/google-mas.jpg"}
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Cabalgatas+y+D%C3%ADas+de+Campo/@-31.6659755,-64.4704208,15z/data=!4m2!3m1!1s0x0:0xef2a5ac5a5c6124b?sa=X&ved=2ahUKEwihl66jotCAAxVVjZUCHcRmBPAQ_BJ6BAhKEAA&ved=2ahUKEwihl66jotCAAxVVjZUCHcRmBPAQ_BJ6BAhfEAg",
              "_blank"
            )
          }
        />
        <Section7Layout.Icon
          src={"/img/redes/tripadvisor.jpg"}
          onClick={() =>
            window.open(
              "https://www.tripadvisor.com.ar/Attraction_Review-g312766-d12396006-Reviews-Cabalgatas_y_Dias_de_Campo-Alta_Gracia_Province_of_Cordoba_Central_Argentina.html",
              "_blank"
            )
          }
        />
        <Section7Layout.Icon
          src={"/img/redes/whatsapp.jpg"}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5493547575100",
              "_blank"
            )
          }
        />
        <Section7Layout.Icon
          src={"/img/redes/instagram.jpg"}
          onClick={() =>
            window.open(
              "https://www.instagram.com/cabalgatas_diasdecampo/?hl=es",
              "_blank"
            )
          }
        />
      </Section7Layout.Icons>
    </Section7Layout>
  );
};

export default Section7;
