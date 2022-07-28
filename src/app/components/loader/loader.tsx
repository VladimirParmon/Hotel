import { useTheme } from "@emotion/react";
import { Theme } from "@mui/material/styles";
import logo from "app/assets/logo.png";

interface LoaderProps {
  isMain?: boolean;
}

export function Loader({ isMain }: LoaderProps) {
  const theme = useTheme() as Theme;
  return (
    <div className="loader" style={{ backgroundColor: theme.palette.primary.light }}>
      {isMain ? (
        <div className="loader__flex-container">
          <img alt="loading..." src={logo} className="loader__image" />
          <span>App is loading ...</span>
        </div>
      ) : (
        <div className="gooey" style={{ backgroundColor: theme.palette.primary.light }}>
          <span
            className="gooey__dot"
            style={{ backgroundColor: theme.palette.secondary.contrastText }}
          ></span>
          <div
            className="gooey__dots"
            style={{ backgroundColor: theme.palette.secondary.contrastText }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
}
