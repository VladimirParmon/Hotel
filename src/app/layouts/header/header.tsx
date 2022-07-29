import RoomServiceIcon from "@mui/icons-material/RoomService";
import { AppBar } from "@mui/material";
import { NavigationMenu } from "./navigationMenu";
import { ProfileFacia } from "./profileFacia";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import CustomSwitch from "app/components/switch";
import { AppHeader, Logo } from "./components";

export function Header() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate("/", { replace: true }), [navigate]);
  return (
    <AppHeader color="primary">
      <Logo onClick={handleClick}>
        <RoomServiceIcon />
        <span>Hotel project</span>
      </Logo>
      <NavigationMenu />
      <CustomSwitch />
      <ProfileFacia />
    </AppHeader>
  );
}
