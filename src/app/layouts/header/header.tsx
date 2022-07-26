import RoomServiceIcon from "@mui/icons-material/RoomService";
import { AppBar } from "@mui/material";
import { NavigationMenu } from "./navigationMenu";
import { ProfileFacia } from "./profileFacia";
import { useNavigate } from "react-router";
import { useCallback } from "react";

export function Header() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate("/", { replace: true }), [navigate]);
  return (
    <AppBar id="appHeader" color="primary">
      <div id="appHeader__logo" onClick={handleClick}>
        <RoomServiceIcon />
        <span>Hotel project</span>
      </div>
      <NavigationMenu />
      <ProfileFacia />
    </AppBar>
  );
}
