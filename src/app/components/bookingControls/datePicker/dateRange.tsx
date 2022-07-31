import { oneDayMs } from "app/constants/constants";
import { FiltersRange } from "app/constants/models";
import { updateFiltersDate } from "app/redux/filtersSlice";
import { useAppDispatch } from "app/redux/hooks";
import { DatePickers } from "./components";
import { DatePickerComponent } from "./datePicker";

interface DateRangeProps {
  date: FiltersRange;
}

export function DateRange({ date }: DateRangeProps) {
  const dispatch = useAppDispatch();
  function setArrival(newDate: Date | null) {
    if (newDate) {
      const newValue = newDate.getTime();
      dispatch(updateFiltersDate({ type: "from", value: newValue }));
      dispatch(updateFiltersDate({ type: "to", value: newValue + oneDayMs }));
    }
  }
  function setDeparture(newDate: Date | null) {
    if (newDate) {
      const newValue = newDate.getTime();
      dispatch(updateFiltersDate({ type: "to", value: newValue }));
    }
  }
  return (
    <DatePickers>
      <DatePickerComponent label="Arrival date" initialDate={date.from} handleChange={setArrival} />
      <DatePickerComponent
        label="Departure date"
        initialDate={date.to}
        handleChange={setDeparture}
      />
    </DatePickers>
  );
}
