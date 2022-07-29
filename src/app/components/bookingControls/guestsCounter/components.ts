import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const CounterContainer = styled("div")`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const Input = styled("input")`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
  font-size: 1rem !important;
  all: unset;
  padding: 5px;
  width: 40px;
  height: 20px;
  background: none;
  border: none;
  outline: none;
  text-align: center;
`;

export const CounterButton = styled(Button)`
  &.MuiButton-root {
    width: 30px;
    min-height: 30px;
    border-radius: 50%;
    min-width: 30px;
  }
`;
