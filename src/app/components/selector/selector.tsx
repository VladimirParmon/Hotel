import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ChoicesDescriptionAction } from "app/constants/models";
import { useAppDispatch } from "app/redux/hooks";
import { useEffect, useState } from "react";
import { SelectorContainer } from "./components";

interface SelectorProps {
  label: string;
  options: {
    name: string;
    value: string;
  }[];
  action: ChoicesDescriptionAction;
}

export function Selector({ label, options, action }: SelectorProps) {
  const [defaultOption] = options;
  const [value, setValue] = useState(defaultOption.value);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const trueType = JSON.parse(value);
    dispatch(action(trueType));
  }, [value, dispatch, action]);

  return (
    <SelectorContainer variant="outlined">
      <InputLabel color="secondary">{label}</InputLabel>
      <Select label={label} value={value} color="secondary" onChange={handleChange}>
        <MenuItem value="" disabled>
          {label}
        </MenuItem>
        {options.map((item) => (
          <MenuItem key={item.name} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </SelectorContainer>
  );
}
