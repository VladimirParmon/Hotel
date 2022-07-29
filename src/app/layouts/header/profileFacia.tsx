import Avatar from "@mui/material/Avatar";
import { Greeting, ProfileFaciaContainer } from "./components";

export function ProfileFacia() {
  return (
    <ProfileFaciaContainer>
      {/* <Avatar alt="User's avatar" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} /> */}
      <Avatar sx={{ width: 40, height: 40 }}>U</Avatar>
      <Greeting>
        <span style={{ fontSize: "0.9rem" }}>Добро пожаловать!</span>
        <span>Username here</span>
      </Greeting>
    </ProfileFaciaContainer>
  );
}
