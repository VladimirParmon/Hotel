import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const PageContainer = styled("div")`
  padding: 20px;
`;

export const Window = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Form = styled("form")(
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
