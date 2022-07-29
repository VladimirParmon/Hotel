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

export const NavigationMenuComponent = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

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

// .navigationOption {
//   &:link {
//     color: #000;
//   }

//   &:visited {
//     color: #000;
//   }

//   &:hover {
//     color: red;
//   }
// }

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
`;
