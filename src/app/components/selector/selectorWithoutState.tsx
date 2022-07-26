import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { SelectorContainer } from "./components";

interface SelectorWithoutStateProps<T> {
  label: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

export function SelectorWithoutState<T extends string>({
  label,
  options,
  value,
  setValue,
}: SelectorWithoutStateProps<T>) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as T);
  };

  return (
    <SelectorContainer variant="outlined">
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
    </SelectorContainer>
  );
}
