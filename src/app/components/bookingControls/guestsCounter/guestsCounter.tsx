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
  const { adults, children, infants } = filters.guests;
  const totalGuests = adults + children + infants;

  return (
    <div>
      <Typography sx={{ textAlign: "center" }}>Total: {totalGuests} guest(s)</Typography>
      <Divider sx={{ marginBottom: "20px" }} />
      <Counter
        name={GuestsTypes.ADULTS}
        label="Adults"
        min={1}
        value={adults}
        handleChange={handleChange}
      />
      <Counter
        name={GuestsTypes.CHILDREN}
        label="Children"
        value={children}
        handleChange={handleChange}
      />
      <Counter
        name={GuestsTypes.INFANTS}
        label="Infants"
        value={infants}
        handleChange={handleChange}
      />
    </div>
  );
}
