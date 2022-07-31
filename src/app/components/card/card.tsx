import { Divider, Typography } from "@mui/material";
import { NavigationLinks } from "app/constants/enums";
import { IApartment } from "app/constants/models";
import { useNavigate } from "react-router";
import NumberAndFloorHeading from "../numberAndFloorHeading";
import { SliderComponent } from "../slider/slider";
import Stars from "../stars";
import { CardContainer, CardInner, CardReviews } from "./components";

interface CardProps {
  apartment: IApartment;
}

export function Card({ apartment }: CardProps) {
  const navigate = useNavigate();
  const navigateToApartment = () => navigate(`${NavigationLinks.APARTMENTS}/${apartment.id}`);
  return (
    <CardContainer elevation={5} onClick={navigateToApartment} color="primary">
      <SliderComponent items={apartment.photos} />
      <CardInner>
        <NumberAndFloorHeading apartment={apartment} />
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
