import React, { useEffect, useState } from "react";
import Header from "./app/layouts/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./app/pages/welcomePage";
import { PaletteMode } from "./app/constants/models";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./app/material/theme";
import { NavigationLinks } from "app/constants/enums";
import ApartmentsPage from "app/pages/apartmentsPage";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { fetchApartmentsInfo, selectApartmentsInfo } from "app/redux/apartmentsSlice";
import Loader from "app/components/loader";
import SingleApartmentPage from "app/pages/singleApartmentPage";
import { NavigationMenu } from "app/layouts/header/navigationMenu";

export const ColorModeToggleContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const dispatch = useAppDispatch();
  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode: PaletteMode) => {
          return prevMode === "light" ? "dark" : "light";
        });
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  useEffect(() => {
    dispatch(fetchApartmentsInfo());
  }, [dispatch]);

  const isDataLoaded = useAppSelector(selectApartmentsInfo).length;

  return (
    <React.Fragment>
      <ColorModeToggleContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isDataLoaded ? (
            <BrowserRouter>
              <Header />
              <NavigationMenu inHeader={false} />
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path={NavigationLinks.APARTMENTS} element={<ApartmentsPage />} />
                <Route
                  path={`${NavigationLinks.APARTMENTS}/:id`}
                  element={<SingleApartmentPage />}
                />
              </Routes>
            </BrowserRouter>
          ) : (
            <Loader isMain />
          )}
        </ThemeProvider>
      </ColorModeToggleContext.Provider>
    </React.Fragment>
  );
}

export default App;
