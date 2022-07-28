import { Divider, Paper, Typography } from "@mui/material";
import { IApartment } from "app/constants/models";
import { SliderComponent } from "../slider/slider";
import Stars from "../stars";

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
    <Paper elevation={5} className="card">
      <SliderComponent items={pics} />
      <div className="card__inner">
        <div className="card__description">
          <span>
            Apartment <b>№{apartment.number}</b>
          </span>
          <Typography sx={{ display: "inline-block" }}>{apartment.floor} floor</Typography>
        </div>
        <Divider />
        <Typography variant="h4">${apartment.price}</Typography>
        <div className="card__reviews">
          <Stars starSize={24} rating={apartment.rating} />
          <Typography>{apartment.reviews.length} review(s)</Typography>
        </div>
      </div>
    </Paper>
  );
}
