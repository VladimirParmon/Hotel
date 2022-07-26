import { Divider, Typography } from "@mui/material";
import { GuestsTypes } from "app/constants/enums";
import { IFilters } from "app/constants/models";
import { updateFiltersGuests } from "app/redux/filtersSlice";
import { useAppDispatch } from "app/redux/hooks";
import { Counter } from "./counterComponent";

interface GuestsCounterProps {
  filters: IFilters;
}

export function GuestsCounter({ filters }: GuestsCounterProps) {
  const dispatch = useAppDispatch();
  function handleChange(guestType: GuestsTypes, newValue: number) {
    dispatch(updateFiltersGuests({ guestType, newValue }));
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
