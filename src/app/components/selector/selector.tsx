import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import "./style.scss";

interface SelectorProps {
  label: string;
  options: string[];
}

export function Selector({ label, options }: SelectorProps) {
  const [value, setValue] = useState(options[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" className="selector">
      <InputLabel color="secondary">{label}</InputLabel>
      <Select label={label} value={value} color="secondary" onChange={handleChange}>
        <MenuItem value="" disabled>
          {label}
        </MenuItem>
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
