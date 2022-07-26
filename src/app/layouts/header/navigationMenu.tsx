import { Divider } from "@mui/material";
import { navigationOptions } from "app/constants/constants";
import { NavLink, useLocation } from "react-router-dom";

export function NavigationMenu() {
  const currentPage = useLocation().pathname;

  return (
    <div id="navigationMenu">
      {navigationOptions.map((option) => {
        const isActive = currentPage === option.link;
        return (
          <NavLink to={option.link} className={"navigationOption"} key={option.link}>
            {option.name.toUpperCase()}
            {isActive && <Divider />}
          </NavLink>
        );
      })}
    </div>
  );
}
