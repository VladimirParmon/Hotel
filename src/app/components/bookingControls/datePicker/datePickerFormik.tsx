import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface DatePickerProps {
  value: Date | null;
  name: string;
  setFieldValue: (name: string, value: Date | null) => void;
  touched: boolean | undefined;
  error: string | undefined;
}

export const DatePickerFormik = ({
  value,
  name,
  setFieldValue,
  error,
  touched,
}: DatePickerProps) => {
  const myMaxDate = new Date("01-01-2005");
  const myMinDate = new Date("01-01-1930");
  const theme = useTheme();

  function handleChange(value: Date | null) {
    if (value) setFieldValue(name, value);
  }
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Date of birth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="year"
              value={value}
              disableFuture
              maxDate={myMaxDate}
              minDate={myMinDate}
              onChange={(newValue) => {
                handleChange(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </AccordionDetails>
      </Accordion>
      {touched && error && (
        <Typography
          sx={{
            paddingLeft: "15px",
            paddingTop: "5px",
            fontSize: "12px",
            color: theme.palette.error.main,
          }}
        >
          {error}
        </Typography>
      )}
    </div>
  );
};
