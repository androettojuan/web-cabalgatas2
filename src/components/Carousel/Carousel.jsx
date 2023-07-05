import React from "react";
import {
  StyledButtonBackAndNext,
  StyledButtonBackIcon,
  StyledButtonNextIcon,
  StyledCarouselContainer,
  StyledPhoto,
  StyledPhotoContainer,
  StyledPhotoDescription,
  StyledPhotosContainer,
} from "./Carousel.styles";

const photos = [
  { id: 1, src: "img/foto1.jpg", description: "Cabalgata Mini" },
  { id: 2, src: "img/foto1.jpg", description: "Cabalgata Mini2" },
  { id: 3, src: "img/foto1.jpg", description: "Cabalgata Mini3" },
  { id: 4, src: "img/foto1.jpg", description: "Cabalgata Mini4" },
  { id: 5, src: "img/foto1.jpg", description: "Cabalgata Mini5" },
  { id: 6, src: "img/foto1.jpg", description: "Cabalgata Mini6" },
  { id: 7, src: "img/foto1.jpg", description: "Cabalgata Mini7" },
  { id: 8, src: "img/foto1.jpg", description: "Cabalgata Mini8" },
];

const Carousel = () => {
  const [currentPhotos, setCurrentPhotos] = React.useState(0);

  return (
    <StyledCarouselContainer>
      <StyledButtonBackAndNext>
        <StyledButtonBackIcon
          onClick={() => {
            if (currentPhotos > 0) {
              setCurrentPhotos(currentPhotos - 1);
              if (currentPhotos === 0) {
                setCurrentPhotos(photos.length - 3);
              }
            }
          }}
        />
      </StyledButtonBackAndNext>
      <StyledPhotosContainer>
        {photos.map((photo, index) => {
          if (index >= currentPhotos && index < currentPhotos + 3) {
            return (
              <StyledPhotoContainer key={photo.id}>
                <StyledPhoto src={photo.src} alt={photo.description} />
                <StyledPhotoDescription>
                  {photo.description}
                </StyledPhotoDescription>
              </StyledPhotoContainer>
            );
          }
          return null;
        })}
      </StyledPhotosContainer>
      <StyledButtonBackAndNext>
        <StyledButtonNextIcon
          onClick={() => {
            if (currentPhotos < photos.length - 1) {
              setCurrentPhotos(currentPhotos + 1);
              if (currentPhotos === photos.length - 3) {
                setCurrentPhotos(0);
              }
            }
          }}
        />
      </StyledButtonBackAndNext>
    </StyledCarouselContainer>
  );
};

export default Carousel;
