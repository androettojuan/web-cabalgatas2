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
        <Section7Layout.Icon src={"/img/redes/facebook.jpg"} />
        <Section7Layout.Icon src={"/img/redes/google-mas.jpg"} />
        <Section7Layout.Icon src={"/img/redes/tripadvisor.jpg"} />
        <Section7Layout.Icon src={"/img/redes/whatsapp.jpg"} />
        <Section7Layout.Icon src={"/img/redes/instagram.jpg"} />
      </Section7Layout.Icons>
    </Section7Layout>
  );
};

export default Section7;
