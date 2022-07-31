import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface DatePickerProps {
  label: string;
  initialDate?: string | number;
  handleChange: (newDate: Date | null) => void;
}

export function DatePickerComponent({
  label,
  initialDate = Date.now(),
  handleChange,
}: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disablePast
        views={["day"]}
        label={label}
        value={initialDate}
        onChange={(newValue: Date | null) => {
          handleChange(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}
