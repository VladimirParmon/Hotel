import { Paper, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

function getMediaQueries(isHighRes: boolean, theme: Theme) {
  const up = theme.breakpoints.up("fullscreen");
  const down = theme.breakpoints.down("fullscreen");
  return `
  ${down} {
    display: ${isHighRes ? "none" : "flex"}
  }
  ${up} {
    display: ${isHighRes ? "flex" : "none"}
  }
  `;
}

export const Container = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "highRes",
})<{ highRes: boolean }>(
  ({ highRes, theme }) => `
  display: ${highRes ? "flex" : "none"};
  ${getMediaQueries(highRes, theme)}
  position: sticky;
  top: 0;
  left: 0;
  min-width: 300px;
  max-width: 360px;
  width: 100%;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  alight-items: center;
  gap: 25px;
  ${theme.breakpoints.down("tablets")} {
    max-width: 100%;
    position: relative;
  }
`
);

export const AgreeOnTermsCheckbox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)(
  ({ theme }) => `
  &:link,
  &:visited {
    color: ${theme.palette.primary.contrastText};
  }

  &:hover {
    color: ${theme.palette.secondary.dark};
  }
`
);
