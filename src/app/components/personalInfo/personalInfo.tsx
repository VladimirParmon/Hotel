import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { logOut, selectUserInfo } from "app/redux/userSlice";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { Container, ImagePlaceholder, Info, Line, SpanKey, SpanValue } from "./components";

function getFormattedDate(userDateOfBirth: Date | string): string {
  const date = new Date(userDateOfBirth);
  const day = date.getDay().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear();
  const y = `${day}/${month}/${year}`;
  return y;
}

export function PersonalInfo() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserInfo).userData;
  if (!userData) return <Typography variant="h5">Please login in to see the data</Typography>;
  const date = getFormattedDate(userData.userDateOfBirth);
  function logOutHandler() {
    dispatch(logOut());
  }
  return (
    <Container>
      <ImagePlaceholder>
        <Typography>Image goes here</Typography>
      </ImagePlaceholder>
      <Info>
        <Line>
          <SpanKey>First name:</SpanKey>
          <SpanValue>{userData?.userFirstName}</SpanValue>
        </Line>
        <Line>
          <SpanKey>Last name:</SpanKey>
          <SpanValue>{userData?.userLastName}</SpanValue>
        </Line>
        <Line>
          <SpanKey>Gender:</SpanKey>
          {userData.userGender === "male" ? <MaleIcon /> : <FemaleIcon />}
        </Line>
        <Line>
          <SpanKey>Date of birth:</SpanKey>
          <SpanValue>{date}</SpanValue>
        </Line>
        <Line>
          <SpanKey>Email:</SpanKey>
          <SpanValue>{userData?.userEmail}</SpanValue>
        </Line>
        {userData?.userAdminStatus && (
          <Line>
            <SpanKey>Status:</SpanKey>
            <SpanValue>admin</SpanValue>
          </Line>
        )}
        <Button onClick={logOutHandler} variant="outlined" color="secondary">
          Log out
        </Button>
      </Info>
    </Container>
  );
}
