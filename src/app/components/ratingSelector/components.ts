import { styled } from "@mui/material/styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const StarsContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const SingleStar = styled("div")`
  position: relative;
  cursor: pointer;
`;

export const Filling = styled("div")`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const Outline = styled(StarBorderIcon)`
  position: absolute;
  width: 100% !important;
  height: auto !important;
`;
