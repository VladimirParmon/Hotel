import RoomServiceIcon from "@mui/icons-material/RoomService";
import { AppBar } from "@mui/material";
import { NavigationMenu } from "./navigationMenu";
import { ProfileFacia } from "./profileFacia";

export function Header() {
  return (
    <AppBar id="appHeader" color="primary">
      <div id="appHeader__logo">
        <RoomServiceIcon />
        <span>Hotel project</span>
      </div>
      <NavigationMenu />
      <ProfileFacia />
    </AppBar>
  );
}
