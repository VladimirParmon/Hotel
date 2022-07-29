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
`;

export const Filling = styled("div")`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
`;

export const Outline = styled(StarBorderIcon)`
  position: absolute;
  width: 100% !important;
  height: auto !important;
`;
