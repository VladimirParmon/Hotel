import RoomServiceIcon from "@mui/icons-material/RoomService";
import { NavigationMenu } from "./navigationMenu";
import { ProfileFacia } from "./profileFacia";
import { useNavigate } from "react-router";
import CustomSwitch from "app/components/switch";
import { AppHeader, Logo, Settings, SettingsContainer } from "./components";
import LanguageSelector from "app/components/languageSelector";
import { NavigationLinks } from "app/constants/enums";

export function Header() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goSettings = () => navigate(NavigationLinks.SETTINGS);
  return (
    <AppHeader color="primary">
      <Logo onClick={goHome}>
        <RoomServiceIcon />
        <span>Hotel project</span>
      </Logo>
      <NavigationMenu inHeader={true} />
      <Settings onClick={goSettings} />
      <SettingsContainer>
        <CustomSwitch />
        <LanguageSelector />
      </SettingsContainer>
      <ProfileFacia />
    </AppHeader>
  );
}
