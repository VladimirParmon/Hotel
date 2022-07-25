import { NavigationOptions, NavigationLinks } from "../../constants/enums";
import { NavLink } from "react-router-dom";

export function NavigationMenu() {
  const navigationOptions = [
    {
      name: NavigationOptions.APARTMENTS,
      link: NavigationLinks.APARTMENTS,
    },
    {
      name: NavigationOptions.SERVICES,
      link: NavigationLinks.SERVICES,
    },
    {
      name: NavigationOptions.OFFERS,
      link: NavigationLinks.OFFERS,
    },
    {
      name: NavigationOptions.JOBS,
      link: NavigationLinks.JOBS,
    },
    {
      name: NavigationOptions.UPDATES,
      link: NavigationLinks.UPDATES,
    },
    {
      name: NavigationOptions.TERMS,
      link: NavigationLinks.TERMS,
    },
  ];
  return (
    <div id="navigationMenu">
      {navigationOptions.map((option) => {
        return (
          <NavLink to={option.link} className="navigationOption" key={option.link}>
            {option.name.toUpperCase()}
          </NavLink>
        );
      })}
    </div>
  );
}
