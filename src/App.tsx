import React, { useState } from "react";
import Header from "./app/layouts/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./app/pages/welcomePage";
import { IFilters, PaletteMode } from "./app/constants/models";
import { createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./app/material/theme";
import { defaultFilters } from "app/constants/constants";

const ColorModeToggleContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const [currentFilters, setCurrentFilters] = useState<IFilters>(defaultFilters);
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
              <Route
                path="/"
                element={<WelcomePage filters={currentFilters} setFilters={setCurrentFilters} />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeToggleContext.Provider>
    </React.Fragment>
  );
}

export default App;
