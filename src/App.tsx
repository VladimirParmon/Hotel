import React, { useEffect, useState } from "react";
import Header from "./app/layouts/header";
import { Routes, Route, HashRouter } from "react-router-dom";
import WelcomePage from "./app/pages/welcomePage";
import { PaletteMode } from "./app/constants/models";
import { createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { getDesignTokens } from "./app/material/theme";
import { NavigationLinks } from "app/constants/enums";
import ApartmentsPage from "app/pages/apartmentsPage";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { fetchApartmentsInfo, selectApartmentsInfo } from "app/redux/apartmentsSlice";
import Loader from "app/components/loader";
import SingleApartmentPage from "app/pages/singleApartmentPage";
import { NavigationMenu } from "app/layouts/header/navigationMenu";
import { fetchUserData, selectUserInfo } from "app/redux/userSlice";
import { selectErrorState } from "app/redux/errorSlice";
import InProgressPage from "app/pages/inProgressPage";
import Page404 from "app/pages/page404";
import SettingsPage from "app/pages/settingsPage";
import AdminPanel from "app/components/adminPanel";
import { fetchBookings } from "app/redux/bookingsSlice";

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
  const adminStatus = useAppSelector(selectUserInfo).userData?.userAdminStatus;

  useEffect(() => {
    dispatch(fetchApartmentsInfo());
    dispatch(fetchBookings());
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
    if (userId && accessToken) {
      dispatch(fetchUserData(userId, accessToken));
    }
  }, [dispatch]);

  const fetchingError = useAppSelector(selectErrorState);
  const isDataLoaded = useAppSelector(selectApartmentsInfo).length;

  return (
    <React.Fragment>
      {fetchingError ? (
        <Typography variant="h2">Server is unavailable. Please try later</Typography>
      ) : (
        <ColorModeToggleContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {isDataLoaded ? (
              <HashRouter>
                <Header />
                <NavigationMenu inHeader={false} />
                <Routes>
                  <Route path="/" element={<WelcomePage />} />
                  <Route path={NavigationLinks.APARTMENTS} element={<ApartmentsPage />} />
                  <Route
                    path={`${NavigationLinks.APARTMENTS}/:id`}
                    element={<SingleApartmentPage />}
                  />
                  <Route path={NavigationLinks.SETTINGS} element={<SettingsPage />} />
                  {adminStatus && (
                    <Route
                      path={NavigationLinks.SETTINGS + NavigationLinks.ADMIN_PANEL}
                      element={<AdminPanel />}
                    />
                  )}
                  <Route path={NavigationLinks.JOBS} element={<InProgressPage />} />
                  <Route path={NavigationLinks.OFFERS} element={<InProgressPage />} />
                  <Route path={NavigationLinks.SERVICES} element={<InProgressPage />} />
                  <Route path={NavigationLinks.TERMS} element={<InProgressPage />} />
                  <Route path={NavigationLinks.UPDATES} element={<InProgressPage />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </HashRouter>
            ) : (
              <Loader isMain />
            )}
          </ThemeProvider>
        </ColorModeToggleContext.Provider>
      )}
    </React.Fragment>
  );
}

export default App;
