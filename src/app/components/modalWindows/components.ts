import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const ModalWindow = styled("div")`
  z-index: 1200;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForm = styled("form")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100vw;
  max-width: 400px;
  min-width: 300px;
  background-color: ${theme.palette.background.paper};
  padding: 20px;
  max-height: 650px;
  overflow-y: auto;
`
);

export const Link = styled(NavLink)(
  ({ theme }) => `
  &:link,
  &:visited {
    color: ${theme.palette.primary.contrastText};
  }

  &:hover {
    color: ${theme.palette.secondary.dark};
  }
`
);
