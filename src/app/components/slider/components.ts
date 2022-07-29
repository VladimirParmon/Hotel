import { styled } from "@mui/material/styles";

export const SlickArrow = styled("button")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  outline: none;
  opacity: 1;
  transition: opacity 0.2s ease;
  cursor: pointer;
`;
