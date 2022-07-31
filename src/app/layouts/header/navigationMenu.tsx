import { Divider } from "@mui/material";
import { navigationOptions } from "app/constants/constants";
import { useLocation } from "react-router-dom";
import { NavigationOption, NavigationMenuComponent } from "./components";

interface NavigationMenuProps {
  inHeader: boolean;
}

export function NavigationMenu({ inHeader }: NavigationMenuProps) {
  const currentPage = useLocation().pathname;

  return (
    <NavigationMenuComponent inHeader={inHeader}>
      {navigationOptions.map((option) => {
        const isActive = currentPage === option.link;
        return (
          <NavigationOption to={option.link} key={option.link}>
            {option.name.toUpperCase()}
            {isActive && <Divider />}
          </NavigationOption>
        );
      })}
    </NavigationMenuComponent>
  );
}
