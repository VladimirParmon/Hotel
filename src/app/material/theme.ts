import { PaletteMode } from "../constants/models";

const lightTheme = {
  palette: {
    primary: {
      main: "#f5ebe7",
      light: "#ffffff",
      dark: "#c2b9b5",
    },
    secondary: {
      main: "#0eb2d0",
      light: "#63e4ff",
      dark: "#00829f",
    },
  },
};

const darkTheme = {
  palette: {
    primary: {
      main: "#2D3142",
      light: "#565a6d",
      dark: "#04081c",
    },
    secondary: {
      main: "#f1ebd6",
      light: "#ffffff",
      dark: "#beb9a5",
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  ...(mode === "light" ? lightTheme : darkTheme),
});

// #F9E0D9
// #2D3142
// #829399
// #F26430
// #C20114
