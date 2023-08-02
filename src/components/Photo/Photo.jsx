import React from "react";
import { PhotoContainer, PhotoImage, PhotoTitle } from "./Photo.styles";

const Photo = ({ src, text }) => {
  return (
    <PhotoContainer>
      <PhotoImage src={src} />
      <PhotoTitle>{text}</PhotoTitle>
    </PhotoContainer>
  );
};

export default Photo;
