import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { Theme } from "@mui/material/styles";
import GuestsCounter from "app/components/bookingControls/guestsCounter";
import { useImageLoader } from "app/assets/useImageLoader";
import { selectFiltersInfo, setDefaultFilters } from "app/redux/filtersSlice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { PaletteMode } from "../../constants/models";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { NavigationLinks } from "app/constants/enums";
import Loader from "app/components/loader";
import { ButtonsContainer, GreetingForm, GreetingSpan, WelcomePageContainer } from "./components";
import { DateRange } from "app/components/bookingControls/datePicker/dateRange";

export function WelcomePage() {
  const navigate = useNavigate();
  const navigateToApartments = useCallback(() => navigate(NavigationLinks.APARTMENTS), [navigate]);

  const theme = useTheme() as Theme;
  const mode: PaletteMode = theme.palette.mode;
  const backgroundSrc = mode === "light" ? "room-cream.jpg" : "room-coffee.jpg";
  const loadedImage = useImageLoader(backgroundSrc);

  const filters = useAppSelector(selectFiltersInfo);
  const dispatch = useAppDispatch();

  function clearFilters() {
    dispatch(setDefaultFilters());
  }

  return loadedImage ? (
    <WelcomePageContainer style={{ backgroundImage: `url(${loadedImage})` }}>
      <GreetingForm elevation={24} color="primary">
        <GreetingSpan>Let us find just the right apartment for you:</GreetingSpan>
        <DateRange date={filters.date} />
        <GuestsCounter filters={filters} />
        <ButtonsContainer>
          <Button variant="outlined" color="secondary" onClick={clearFilters}>
            Clear
          </Button>
          <Button variant="contained" color="secondary" onClick={navigateToApartments}>
            Find an apartment
          </Button>
        </ButtonsContainer>
      </GreetingForm>
    </WelcomePageContainer>
  ) : (
    <Loader />
  );
}
