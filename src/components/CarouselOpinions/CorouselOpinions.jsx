import React, { Fragment } from "react";
import {
  StyledCarouselOpinion,
  StyledCarouselOpinionButton,
  StyledCarouselOpinions,
} from "./CorouselOpinions.styles";
import Opinion from "../Opinion/Opinion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CorouselOpinions = ({ opinion }) => {
  const [currentOpinion, setCurrentOpinion] = React.useState(0);

  const currenteOpinionRef = (current, index) => {
    if (current === index) {
      return true;
    }
    if (current === index + 1 || current === index - 1) {
      return false;
    }
    if (
      (current === 0 && index === opinion.length - 1) ||
      (current === opinion.length - 1 && index === 0)
    ) {
      return false;
    }
    return "none";
  };

  return (
    <StyledCarouselOpinions>
      {opinion.map((opinion, index) => (
        <Fragment key={index}>
          <StyledCarouselOpinionButton
            color={"back"}
            onClick={() => {
              setCurrentOpinion(currentOpinion === 0 ? 2 : currentOpinion - 1);
            }}
          >
            <IoIosArrowBack />
          </StyledCarouselOpinionButton>
          <StyledCarouselOpinion
            current={currenteOpinionRef(currentOpinion, index)}
          >
            <Opinion
              icon={opinion.icon}
              name={opinion.name}
              opinion={opinion.opinion}
            />
          </StyledCarouselOpinion>
          <StyledCarouselOpinionButton
            color={"next"}
            onClick={() => {
              setCurrentOpinion(
                currentOpinion === 2 ? 0 : currentOpinion + 1
              );
            }}
          >
            <IoIosArrowForward />
          </StyledCarouselOpinionButton>
        </Fragment>
      ))}
    </StyledCarouselOpinions>
  );
};

export default CorouselOpinions;
