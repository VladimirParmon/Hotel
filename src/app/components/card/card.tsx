import { Divider, Typography } from "@mui/material";
import { IApartment } from "app/constants/models";
import { SliderComponent } from "../slider/slider";
import Stars from "../stars";
import { CardContainer, CardDescription, CardInner, CardReviews } from "./components";

interface CardProps {
  apartment: IApartment;
}

export function Card({ apartment }: CardProps) {
  const pics = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  return (
    <CardContainer elevation={5}>
      <SliderComponent items={pics} />
      <CardInner>
        <CardDescription>
          <span style={{ letterSpacing: "1px" }}>
            Apartment <b>№{apartment.number}</b>
          </span>
          <Typography sx={{ display: "inline-block" }}>{apartment.floor} floor</Typography>
        </CardDescription>
        <Divider />
        <Typography variant="h4">${apartment.price}</Typography>
        <CardReviews>
          <Stars starSize={24} rating={apartment.rating} />
          <Typography>{apartment.reviews.length} review(s)</Typography>
        </CardReviews>
      </CardInner>
    </CardContainer>
  );
}
