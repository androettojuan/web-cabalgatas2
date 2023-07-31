import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  StyledButton,
  StyledCarousel,
  StyledCarouselContent,
  StyledCarouselContentPhoto,
} from "./Carousel.styles";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const currenteImageRef = (current, index) => {
    if (current === index) {
      return true;
    }
    if (current === index + 1 || current === index - 1) {
      return false;
    }
    if (
      (current === 0 && index === images.length - 1) ||
      (current === images.length - 1 && index === 0)
    ) {
      return false;
    }
    return "none";
  };

  return (
    <StyledCarousel>
      <StyledButton
        color="next"
        aria-label="back"
        onClick={() => {
          setCurrentImage(
            currentImage === 0 ? images.length - 1 : currentImage - 1
          );
        }}
      >
        <IoIosArrowForward />
      </StyledButton>
      <StyledCarouselContent>
        {images.map((image, index) => (
          <StyledCarouselContentPhoto
            key={index}
            src={image.src}
            alt="carousel"
            current={currenteImageRef(currentImage, index)}
          />
        ))}
      </StyledCarouselContent>
      <StyledButton
        color="back"
        aria-label="next"
        onClick={() => {
          setCurrentImage(
            currentImage === images.length - 1 ? 0 : currentImage + 1
          );
        }}
      >
        <IoIosArrowBack />
      </StyledButton>
    </StyledCarousel>
  );
};

export default Carousel;
