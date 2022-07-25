import { useTheme } from "@emotion/react";
import { Button, Paper } from "@mui/material";
import { Theme } from "@mui/material/styles";
import DatePickerComponent from "app/components/bookingControls/datePicker";
import GuestsCounter from "app/components/bookingControls/guestsCounter";
import { useEffect, useState } from "react";
import { IFilters, PaletteMode } from "../../constants/models";

function useImageLoader(imageSrc: string) {
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const path = "app/pages/welcomePage/assets/";

  useEffect(() => {
    console.log("loader on");
    import(`${path}${imageSrc}`).then((image) => {
      setBackgroundImage(image.default);
      console.log("loader off");
    });
  }, [imageSrc]);

  return backgroundImage;
}

interface WelcomePageProps {
  filters: IFilters;
}

export function WelcomePage({ filters }: WelcomePageProps) {
  const theme = useTheme() as Theme;
  const mode: PaletteMode = theme.palette.mode;
  const backgroundSrc = mode === "light" ? "room-cream.jpg" : "room-coffee.jpg";
  const loadedImage = useImageLoader(backgroundSrc);

  return loadedImage ? (
    <div className="welcome-page" style={{ backgroundImage: `url(${loadedImage})` }}>
      <Paper elevation={24} className="welcome-page__form">
        <span className="welcome-page__greeting">
          Let us find just the right apartment for you:
        </span>
        <div className="welcome-page__date-pickers">
          <DatePickerComponent label="Arrival date" initialDate={filters.date.from} />
          <DatePickerComponent label="Departure date" initialDate={filters.date.to} />
        </div>
        <GuestsCounter guests={filters.guests} />
        <div className="welcome-page__buttons">
          <Button variant="outlined" color="secondary">
            Clear
          </Button>
          <Button variant="contained" color="secondary">
            Find an apartment
          </Button>
        </div>
      </Paper>
    </div>
  ) : (
    <p>her tebe</p>
  );
}
