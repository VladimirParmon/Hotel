import { Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { LoginModalWindow, RegistrationModalWindow } from "app/components/modalWindows";
import { NavigationLinks } from "app/constants/enums";
import { useAppSelector } from "app/redux/hooks";
import { selectUserInfo } from "app/redux/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router";
import Popup from "reactjs-popup";
import { Greeting, ProfileFaciaContainer } from "./components";

export function ProfileFacia() {
  const isLoggedIn: boolean = useAppSelector(selectUserInfo).isLoggedIn;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("login");
  const userData = useAppSelector(selectUserInfo).userData;
  const navigate = useNavigate();
  const goSettings = () => navigate(NavigationLinks.SETTINGS);

  function openModal(mode: "login" | "register") {
    setModalMode(mode);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <ProfileFaciaContainer onClick={goSettings}>
      {isLoggedIn ? (
        <>
          <Avatar sx={{ width: 40, height: 40 }}>
            {userData?.userFirstName[0]}
            {userData?.userLastName[0]}
          </Avatar>
          <Greeting>
            <Typography style={{ fontSize: "0.7rem" }}>Welcome! You logged in as:</Typography>
            <span>
              {userData?.userFirstName} {userData?.userLastName}
            </span>
          </Greeting>
        </>
      ) : (
        <>
          <Button variant="outlined" color="secondary" onClick={() => openModal("login")}>
            Log in
          </Button>
          <Button variant="contained" color="secondary" onClick={() => openModal("register")}>
            Register
          </Button>
        </>
      )}
      <Popup open={isModalOpen && !isLoggedIn} closeOnDocumentClick onClose={closeModal}>
        {modalMode === "login" ? (
          <LoginModalWindow close={closeModal} />
        ) : (
          <RegistrationModalWindow close={closeModal} />
        )}
      </Popup>
    </ProfileFaciaContainer>
  );
}
