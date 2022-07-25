import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Typography } from "@mui/material";
import { GuestsTypes } from "app/constants/enums";
import React from "react";

type CounterProps = {
  name: GuestsTypes;
  label: string;
  value: number;
  min?: number;
  max?: number;
  handleChange: (inputName: GuestsTypes, newValue: number) => void;
};

export const Counter: React.FC<CounterProps> = ({
  name,
  label,
  value,
  min = 0,
  max = 5,
  handleChange,
}) => {
  const handleIncrease = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (value === max) return;
    handleChange(name, value + 1);
  };
  const handleDecrease = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (value === min) return;
    handleChange(name, value - 1);
  };

  return (
    <div className="counter">
      <Typography className="counter__label">{label}</Typography>
      <div className="counter__buttons">
        <Button
          variant="contained"
          color="secondary"
          className="counter__button"
          onClick={handleDecrease}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <input className="counter__input" type="text" value={value} readOnly />
        <Button
          variant="contained"
          color="secondary"
          className="counter__button"
          onClick={handleIncrease}
        >
          <AddIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
};
