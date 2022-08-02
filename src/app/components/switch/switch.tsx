import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { SwitchProps } from "@mui/material/Switch";
import { useContext } from "react";
import { ColorModeToggleContext } from "App";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CustomSwitch = styled((props: SwitchProps) => {
  const toggle = useContext(ColorModeToggleContext);
  return (
    <Container>
      <LightModeIcon />
      <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
        onChange={toggle.toggleColorMode}
      />
      <DarkModeIcon />
    </Container>
  );
})(({ theme }) => {
  //console.log(theme);
  return {
    width: 52,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(26px)",
        color: theme.palette.primary.main,
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.secondary.main,
          opacity: 1,
          border: 0,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "red",
        border: "6px solid #fff",
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.grey[400],
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  };
});
