import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AppHeader = styled(AppBar)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 15px;
  position: relative;
  flex: 0 1 auto;
  cursor: pointer;
  gap: 20px;
`;

export const Logo = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    font-family: "Great Vibes", cursive;
    font-size: 2.3rem;
    white-space: nowrap;
  }
`;

export const NavigationMenuComponent = styled("div", {
  shouldForwardProp: (prop) => prop !== "inHeader",
})<{ inHeader: boolean }>(
  ({ inHeader, theme }) => `
  ${inHeader ? "display: flex" : "display: none"};
  ${`${theme.breakpoints.down("wideScreen")} {
    display: ${inHeader ? "none" : "flex"};
  }`}
  background-color:${inHeader ? "none" : theme.palette.primary.main};
  justify-content: center;
  align-items: center;
  gap: 20px;
`
);

export const NavigationOption = styled(NavLink)(
  ({ theme }) => `
  text-decoration: none;
  font-family: "Cormorant SC", serif;
  font-weight: 500;
  white-space: nowrap;

  &:link,
  &:visited {
    color: ${theme.palette.primary.contrastText};
  }

  &:hover {
    color: ${theme.palette.secondary.dark};
  }
`
);

export const ProfileFaciaContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Greeting = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    white-space: nowrap;
  }
`;
