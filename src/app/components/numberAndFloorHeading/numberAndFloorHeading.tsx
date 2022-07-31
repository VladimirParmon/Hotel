import { Typography } from "@mui/material";
import { IApartment } from "app/constants/models";
import { Container } from "./components";

interface NumberAndFloorHeadingProps {
  apartment: IApartment;
}

export function NumberAndFloorHeading({ apartment }: NumberAndFloorHeadingProps) {
  return (
    <Container>
      <span style={{ letterSpacing: "1px" }}>
        Apartment <b>№{apartment.number}</b>
      </span>
      <Typography sx={{ display: "inline-block" }}>{apartment.floor} floor</Typography>
    </Container>
  );
}
