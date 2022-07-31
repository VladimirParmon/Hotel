import { Button, Checkbox, Typography } from "@mui/material";
import { NavigationLinks } from "app/constants/enums";
import { IApartment, IFilters } from "app/constants/models";
import { getPrice } from "app/services/getPrice";
import { useState } from "react";
import { DateRange } from "../bookingControls/datePicker/dateRange";
import GuestsCounter from "../bookingControls/guestsCounter";
import NumberAndFloorHeading from "../numberAndFloorHeading";
import PriceCalculation from "../priceCalculation";
import { AgreeOnTermsCheckbox, Container, Link } from "./components";

interface BookingWindowProps {
  apartment: IApartment;
  filters: IFilters;
  highRes: boolean;
}

export function BookingWindow({ apartment, filters, highRes }: BookingWindowProps) {
  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const calculationProps = getPrice({
    date: filters.date,
    price: apartment.price,
  });

  function handleTermsCheckbox(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    setTermsCheckbox(checked);
  }

  return (
    <Container elevation={5} highRes={highRes}>
      <NumberAndFloorHeading apartment={apartment} />
      <DateRange date={filters.date} />
      <GuestsCounter filters={filters} />
      <PriceCalculation {...calculationProps} />
      <AgreeOnTermsCheckbox>
        <Checkbox color="secondary" value={termsCheckbox} onChange={handleTermsCheckbox} />
        <Typography>
          I agree with the <Link to={NavigationLinks.TERMS}>terms of service</Link>
        </Typography>
      </AgreeOnTermsCheckbox>
      <Button
        color="secondary"
        variant="contained"
        disabled={!termsCheckbox}
        sx={{ fontSize: "1.2rem", textTransform: "none" }}
      >
        Book the apartment
      </Button>
    </Container>
  );
}
