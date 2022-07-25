import { Divider, Typography } from "@mui/material";
import { GuestsTypes } from "app/constants/enums";
import { IFilters } from "app/constants/models";
import { Counter } from "./counterComponent";

interface GuestsCounterProps {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export function GuestsCounter({ filters, setFilters }: GuestsCounterProps) {
  function handleChange(guestType: GuestsTypes, newValue: number) {
    const newFilters = Object.assign({}, filters);
    newFilters.guests[guestType] = newValue;
    setFilters(newFilters);
  }

  return (
    <div className="guestsCounter">
      <Typography className="guestsCounter__total">1 guest</Typography>
      <Divider />
      <Counter
        name={GuestsTypes.ADULTS}
        label="Adults"
        min={1}
        value={filters.guests.adults}
        handleChange={handleChange}
      />
      <Counter
        name={GuestsTypes.CHILDREN}
        label="Children"
        value={filters.guests.children}
        handleChange={handleChange}
      />
      <Counter
        name={GuestsTypes.INFANTS}
        label="Infants"
        value={filters.guests.infants}
        handleChange={handleChange}
      />
    </div>
  );
}
