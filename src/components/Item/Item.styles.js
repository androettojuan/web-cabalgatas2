import { styled } from "../../theme/styled";

export const StyledItem = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
});

export const StyledItemText = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    
});

export const StyledItemTitle = styled("h1", {
    fontSize: "24px",
    margin: "0",
});

export const StyledItemSubtitle = styled("span", {
    fontSize: "16px",
});

export const StyledItemIcon = styled("div", {
    fontSize: "54px",
    color: "$primary",
});