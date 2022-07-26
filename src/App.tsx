import React, { useState } from "react";
import Header from "./app/layouts/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./app/pages/welcomePage";
import { PaletteMode } from "./app/constants/models";
import { createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./app/material/theme";
import { NavigationLinks } from "app/constants/enums";
import ApartmentsPage from "app/pages/apartmentsPage";

const ColorModeToggleContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);
  return (
    <React.Fragment>
      <ColorModeToggleContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path={NavigationLinks.APARTMENTS} element={<ApartmentsPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeToggleContext.Provider>
    </React.Fragment>
  );
}

export default App;
