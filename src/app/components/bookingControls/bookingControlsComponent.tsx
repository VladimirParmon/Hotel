import { choices } from "app/constants/constants";
import { selectFiltersInfo } from "app/redux/filtersSlice";
import { useAppSelector } from "app/redux/hooks";
import ChoicesList from "./choicesList";
import { BookingControls, DatePickers } from "./components";
import DatePickerComponent from "./datePicker";
import GuestsCounter from "./guestsCounter";
import { PriceRange } from "./priceRange/priceRange";

export function BookingControlsComponent() {
  const filters = useAppSelector(selectFiltersInfo);

  return (
    <BookingControls>
      <DatePickers>
        <DatePickerComponent label="Arrival date" initialDate={filters.date.from} />
        <DatePickerComponent label="Departure date" initialDate={filters.date.to} />
      </DatePickers>
      <GuestsCounter filters={filters} />
      <PriceRange price={filters.price} />
      {choices.map((section) => (
        <ChoicesList
          sectionName={section.sectionName}
          choices={section.choices}
          key={section.sectionName}
        />
      ))}
    </BookingControls>
  );
}
