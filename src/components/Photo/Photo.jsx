import React from "react";
import { PhotoContainer, PhotoImage, PhotoTitle } from "./Photo.styles";

const Photo = ({ src, text, onClick }) => {
  return (
    <PhotoContainer onClick={onClick}>
      <PhotoImage src={src} />
      <PhotoTitle>{text}</PhotoTitle>
    </PhotoContainer>
  );
};

export default Photo;
