import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { LoginModalWindow, RegistrationModalWindow } from "app/components/modalWindows";
import { useAppSelector } from "app/redux/hooks";
import { selectUserInfo } from "app/redux/userSlice";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Greeting, ProfileFaciaContainer } from "./components";

export function ProfileFacia() {
  const isLoggedIn: boolean = useAppSelector(selectUserInfo).isLoggedIn;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("login");

  function openModal(mode: "login" | "register") {
    setModalMode(mode);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <ProfileFaciaContainer>
      {!isLoggedIn ? (
        <>
          <Avatar sx={{ width: 40, height: 40 }}>U</Avatar>
          <Greeting>
            <span style={{ fontSize: "0.9rem" }}>Добро пожаловать!</span>
            <span>Username here</span>
          </Greeting>
        </>
      ) : (
        <>
          <Popup open={isModalOpen} closeOnDocumentClick onClose={closeModal}>
            {modalMode === "login" ? (
              <LoginModalWindow close={closeModal} />
            ) : (
              <RegistrationModalWindow close={closeModal} />
            )}
          </Popup>
          <Button variant="outlined" color="secondary" onClick={() => openModal("login")}>
            Log in
          </Button>
          <Button variant="contained" color="secondary" onClick={() => openModal("register")}>
            Register
          </Button>
        </>
      )}
    </ProfileFaciaContainer>
  );
}
