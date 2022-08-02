import { Divider } from "@mui/material";
import { navigationOptions } from "app/constants/constants";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigationOption, NavigationMenuComponent, ExpandButton } from "./components";

import { CSSTransition } from "react-transition-group";

interface NavigationMenuProps {
  inHeader: boolean;
}

export function NavigationMenu({ inHeader }: NavigationMenuProps) {
  const currentPage = useLocation().pathname;
  const { topRow, bottomRow } = navigationOptions;
  const [isExpanded, setIsExpanded] = useState(false);
  const nodeRef = useRef(null);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <CSSTransition in={isExpanded} nodeRef={nodeRef} timeout={500} classNames="expandable-menu">
        <NavigationMenuComponent inHeader={inHeader} isExpanded={isExpanded} ref={nodeRef}>
          <div>
            {topRow.map((option) => {
              const isActive = currentPage === option.link;
              return (
                <NavigationOption to={option.link} key={option.link}>
                  {option.name.toUpperCase()}
                  {isActive && <Divider />}
                </NavigationOption>
              );
            })}
          </div>
          <div>
            {bottomRow.map((option) => {
              const isActive = currentPage === option.link;
              return (
                <NavigationOption to={option.link} key={option.link}>
                  {option.name.toUpperCase()}
                  {isActive && <Divider />}
                </NavigationOption>
              );
            })}
          </div>
        </NavigationMenuComponent>
      </CSSTransition>
      {!inHeader && (
        <ExpandButton isExpanded={isExpanded} onClick={handleExpansion}>
          <span>≫</span>
        </ExpandButton>
      )}
    </>
  );
}
