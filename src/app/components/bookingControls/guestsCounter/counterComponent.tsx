import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Typography } from "@mui/material";
import React from "react";

type CounterProps = {
  name: string;
  label: string;
  value: number;
  min?: number;
  max?: number;
};

export const Counter: React.FC<CounterProps> = ({ name, label, value, min = 0, max = 5 }) => {
  const handleIncrease = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
  };
  const handleDecrease = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
  };

  return (
    <div className="counter">
      <Typography className="counter__label">{label}</Typography>
      <div className="counter__buttons">
        <Button variant="contained" color="secondary" className="counter__button">
          <RemoveIcon fontSize="small" />
        </Button>
        <input className="counter__input" type="text" value={value} readOnly />
        <Button variant="contained" color="secondary" className="counter__button">
          <AddIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
};
