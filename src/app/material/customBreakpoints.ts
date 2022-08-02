declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablets: true;
    doubleStackMenu: true;
    smallerDescription: true;
    expandableMenu: true;
    smallScreen: true;
    mediumScreen: true;
    wideScreen: true;
    welcome: true;
    fullscreen: true;
  }
}

export {};
