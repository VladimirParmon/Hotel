import { Typography } from "@mui/material";
import { useAppSelector } from "app/redux/hooks";
import { selectUserInfo } from "app/redux/userSlice";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { Container, ImagePlaceholder, Info, Line, SpanKey, SpanValue } from "./components";

export function PersonalInfo() {
  const userData = useAppSelector(selectUserInfo).userData;
  if (!userData) return <Typography variant="h5">Please login in to see the data</Typography>;
  const date = new Date(userData.userDateOfBirth);
  const day = date.getDay().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear();
  const y = `${day}/${month}/${year}`;
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
          <SpanValue>{y}</SpanValue>
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
      </Info>
    </Container>
  );
}
