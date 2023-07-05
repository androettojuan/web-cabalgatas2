import { styled } from "../../theme/styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const StyledCarouselContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  margin: "40px 0px",
});

export const StyledButtonBackAndNext = styled("div", {
  borderRadius: "50%",
  backgroundColor: "#fff",
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "0px 20px",
});

export const StyledButtonBackIcon = styled(IoIosArrowBack, {
  fontSize: "24px",
  color: "$brown",
});

export const StyledButtonNextIcon = styled(IoIosArrowForward, {
  fontSize: "24px",
  color: "$brown",
});

export const StyledPhotosContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  margin: "20px 0",
  userSelect: "none",
});

export const StyledPhotoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  shadow: 1,
  backgroundColor: "#fff",
});

export const StyledPhoto = styled("img", {
  height: "280px",
  width: "280px",
  objectFit: "cover",
});

export const StyledPhotoDescription = styled("span", {
  fontSize: "22px",
  fontWeight: "bold",
  color: "$brown",
  marginTop: "10px",
});
