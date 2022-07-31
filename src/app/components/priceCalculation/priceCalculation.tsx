import { Divider, Typography } from "@mui/material";
import { Container, PriceSpan } from "./components";

interface PriceCalculationProps {
  rawPrice: number;
  fullPrice: number;
  daysOfStay: number;
  discount: number;
  tip: number;
  totalPrice: number;
}

export function PriceCalculation({
  rawPrice,
  fullPrice,
  daysOfStay,
  discount,
  tip,
  totalPrice,
}: PriceCalculationProps) {
  return (
    <Container>
      <PriceSpan>
        <Typography>
          ${rawPrice} x {daysOfStay} days:
        </Typography>
        <Typography>${fullPrice}</Typography>
      </PriceSpan>
      <PriceSpan>
        <Typography>Personnel tip:</Typography>
        <Typography>${tip}</Typography>
      </PriceSpan>
      <PriceSpan>
        <Typography>First time discount:</Typography>
        <Typography>-10% (${discount})</Typography>
      </PriceSpan>
      <Divider />
      <PriceSpan>
        <Typography variant="h4">Total:</Typography>
        <Typography variant="h4">${totalPrice}</Typography>
      </PriceSpan>
    </Container>
  );
}
