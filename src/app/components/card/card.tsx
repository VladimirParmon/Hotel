import { Divider, Typography } from "@mui/material";
import { NavigationLinks } from "app/constants/enums";
import { IApartment } from "app/constants/models";
import { useNavigate } from "react-router";
import NumberAndFloorHeading from "../numberAndFloorHeading";
import { SliderComponent } from "../slider/slider";
import Stars from "../stars";
import { CardContainer, CardContainerNonAdaptive, CardInner, CardReviews } from "./components";

interface CardProps {
  apartment: IApartment;
  noSizeChange?: boolean;
}

export function Card({ apartment, noSizeChange }: CardProps) {
  const navigate = useNavigate();
  const navigateToApartment = () => navigate(`${NavigationLinks.APARTMENTS}/${apartment.id}`);
  const Container = noSizeChange ? CardContainerNonAdaptive : CardContainer;
  return (
    <Container elevation={5} onClick={navigateToApartment} color="primary">
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
    </Container>
  );
}
