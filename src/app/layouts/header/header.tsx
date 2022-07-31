import RoomServiceIcon from "@mui/icons-material/RoomService";
import { NavigationMenu } from "./navigationMenu";
import { ProfileFacia } from "./profileFacia";
import { useNavigate } from "react-router";
import CustomSwitch from "app/components/switch";
import { AppHeader, Logo } from "./components";

export function Header() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <AppHeader color="primary">
      <Logo onClick={handleClick}>
        <RoomServiceIcon />
        <span>Hotel project</span>
      </Logo>
      <NavigationMenu inHeader={true} />
      <CustomSwitch />
      <ProfileFacia />
    </AppHeader>
  );
}
