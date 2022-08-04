import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "app/redux/hooks";
import { selectUserInfo } from "app/redux/userSlice";
import { Greeting, ProfileFaciaContainer } from "./components";

export function ProfileFacia() {
  const isLoggedIn: boolean = useAppSelector(selectUserInfo).isLoggedIn;
  return (
    <ProfileFaciaContainer>
      {isLoggedIn ? (
        <>
          <Avatar sx={{ width: 40, height: 40 }}>U</Avatar>
          <Greeting>
            <span style={{ fontSize: "0.9rem" }}>Добро пожаловать!</span>
            <span>Username here</span>
          </Greeting>
        </>
      ) : (
        <>
          <Button variant="outlined" color="secondary">
            Log in
          </Button>
          <Button variant="contained" color="secondary">
            Register
          </Button>
        </>
      )}
    </ProfileFaciaContainer>
  );
}
