import React from "react";
import Section6Layout from "../components/Section6Layout/Section6Layout";
import Title from "../components/Title/Title";
import {
  StyledSection6ContainerText,
  StyledSection6Icon,
  StyledSection6Map,
  StyledSection6Text,
  StyledSection6TextAndIcon,
  StyledSection6Title,
} from "../components/Section6Layout/Section6Layout.styles";
import { IoIosPhonePortrait, IoIosMail } from "react-icons/io";
import Container from "../components/Container/Container";

const Section6 = () => {
  return (
    <Section6Layout>
      <Container direction="row">
        <Section6Layout.Contacto>
          <StyledSection6Title>
            <Title size={"lg"} color={"white"} letterSpacing={1}>
              Contacto
            </Title>
          </StyledSection6Title>
          <StyledSection6TextAndIcon>
            <StyledSection6Icon>
              <IoIosPhonePortrait />
            </StyledSection6Icon>
            <StyledSection6ContainerText>
              <StyledSection6Text>+5493547575100</StyledSection6Text>
              <StyledSection6Text>+5493547575100</StyledSection6Text>
            </StyledSection6ContainerText>
          </StyledSection6TextAndIcon>
          <StyledSection6TextAndIcon>
            <StyledSection6Icon>
              <IoIosMail />
            </StyledSection6Icon>
            <StyledSection6ContainerText>
              <StyledSection6Text>
                zarate.turismo.ecuestre@gmail.com
              </StyledSection6Text>
            </StyledSection6ContainerText>
          </StyledSection6TextAndIcon>
          <StyledSection6TextAndIcon>
            <StyledSection6Icon>
              <IoIosMail />
            </StyledSection6Icon>
            <StyledSection6ContainerText>
              <StyledSection6Text>
                Alta Gracia - Córdoba - Argentina
              </StyledSection6Text>
            </StyledSection6ContainerText>
          </StyledSection6TextAndIcon>
        </Section6Layout.Contacto>
        <Section6Layout.Map>
          <StyledSection6Map
            title="Google Maps"
            src="https://maps.google.com/maps?hl=es&amp;q=+(Cabalgatas%20y%20dias%20de%20campo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></StyledSection6Map>
        </Section6Layout.Map>
      </Container>
    </Section6Layout>
  );
};

export default Section6;
