import { choices } from "app/constants/constants";
import { selectFiltersInfo } from "app/redux/filtersSlice";
import { useAppSelector } from "app/redux/hooks";
import ChoicesList from "./choicesList";
import DatePickerComponent from "./datePicker";
import GuestsCounter from "./guestsCounter";
import { PriceRange } from "./priceRange/priceRange";

export function BookingControlsComponent() {
  const filters = useAppSelector(selectFiltersInfo);

  return (
    <div className="booking-controls">
      <div className="booking-controls__date-pickers">
        <DatePickerComponent label="Arrival date" initialDate={filters.date.from} />
        <DatePickerComponent label="Departure date" initialDate={filters.date.to} />
      </div>
      <GuestsCounter filters={filters} />
      <PriceRange price={filters.price} />
      {choices.map((section) => (
        <ChoicesList
          sectionName={section.sectionName}
          choices={section.choices}
          key={section.sectionName}
        />
      ))}
    </div>
  );
}
