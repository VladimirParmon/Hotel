import { Divider, TextField, Typography } from "@mui/material";
import { FiltersRange } from "app/constants/models";
import { updateFiltersPrice } from "app/redux/filtersSlice";
import { useAppDispatch } from "app/redux/hooks";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { Inputs, PriceRangeContainer, PriceSlider } from "./components";

interface PriceRangeProps {
  price: FiltersRange;
}

export function PriceRange({ price }: PriceRangeProps) {
  const cortege = [price.from, price.to];
  const [sliderValue, setSliderValue] = useState(cortege);
  const dispatch = useAppDispatch();

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setSliderValue(newValue);
    }
  };

  function handleSliderValueDispatch(
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) {
    if (Array.isArray(newValue)) {
      const prices = {
        from: newValue[0],
        to: newValue[1],
      };
      dispatch(updateFiltersPrice(prices));
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let prices: FiltersRange;
    prices =
      event.target.name === "min"
        ? { ...price, from: +event.target.value }
        : { ...price, to: +event.target.value };
    dispatch(updateFiltersPrice(prices));
  }

  function getLabel(value: number) {
    return `$${value}`;
  }

  return (
    <PriceRangeContainer>
      <Typography sx={{ alignSelf: "center" }}>Price range:</Typography>
      <Divider />
      <PriceSlider
        value={sliderValue}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderValueDispatch}
        valueLabelDisplay="auto"
        valueLabelFormat={getLabel}
        min={0}
        max={15000}
        step={100}
      />
      <Inputs>
        <TextField
          name="min"
          type="number"
          label="From"
          value={price.from}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          name="max"
          type="number"
          label="To"
          value={price.to}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Inputs>
      <Typography sx={{ fontSize: "0.8rem" }} color="secondary">
        *Price per 24 hours of stay
      </Typography>
    </PriceRangeContainer>
  );
}
