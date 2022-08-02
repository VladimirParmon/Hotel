import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

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
  shouldForwardProp: (prop) => prop !== "inHeader" && prop !== "isExpanded",
})<{ inHeader: boolean; isExpanded: boolean }>(
  ({ inHeader, theme, isExpanded }) => `
  ${inHeader ? "display: flex" : "display: none"};
  ${`${theme.breakpoints.down("wideScreen")} {
    display: ${inHeader ? "none" : "flex"};
  }`}
  background-color:${inHeader ? "none" : theme.palette.primary.main};
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: 1s;

  ${theme.breakpoints.down("doubleStackMenu")} {
    flex-direction: column;
  }

  ${theme.breakpoints.down("expandableMenu")} {
    min-height: ${isExpanded ? "290px" : "0"};
    max-height: ${isExpanded ? "290px" : "0"};
  }

  div {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down("expandableMenu")} {
      flex-direction: column;
    }
  }
`
);

export const ExpandButton = styled("div", {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})<{ isExpanded: boolean }>(
  ({ theme, isExpanded }) => `
  display: none;
  width: 100%;
  max-height: 40px;
  background-color: ${theme.palette.secondary.dark};
  cursor: pointer;
  justify-content: center;

  span {
    transform: rotate(${isExpanded ? "-90deg" : "90deg"});
    user-select: none;
  }

  ${theme.breakpoints.down("expandableMenu")} {
    display: flex;
  }
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

export const ProfileFaciaContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  ${theme.breakpoints.down("expandableMenu")} {
    display: none;
  }
`
);

export const Greeting = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    white-space: nowrap;
  }
`;

export const SettingsContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${theme.breakpoints.down("expandableMenu")} {
    display: none;
  }
`
);

export const Settings = styled(SettingsIcon)(
  ({ theme }) => `
  font-size: 2rem;
  transition: 0.4s;
  &:hover {
    transform: rotate(180deg);
  }
  ${theme.breakpoints.up("expandableMenu")} {
    display: none;
  }
`
);
