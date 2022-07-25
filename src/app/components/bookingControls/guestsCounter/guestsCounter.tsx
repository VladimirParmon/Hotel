import { Divider, Typography } from "@mui/material";
import { Guests } from "app/constants/models";
import { Counter } from "./counterComponent";

interface GuestsCounterProps {
  guests: Guests;
}

export function GuestsCounter({ guests }: GuestsCounterProps) {
  return (
    <div className="guestsCounter">
      <Typography className="guestsCounter__total">1 guest</Typography>
      <Divider />
      <Counter name="adults" label="Adults" min={1} value={guests.adults} />
      <Counter name="children" label="Children" value={guests.children} />
      <Counter name="babies" label="Infants" value={guests.infants} />
    </div>
  );
}
