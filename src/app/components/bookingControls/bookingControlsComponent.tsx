import { choices } from "app/constants/constants";
import { selectFiltersInfo } from "app/redux/filtersSlice";
import { useAppSelector } from "app/redux/hooks";
import ChoicesList from "./choicesList";
import { BookingControls } from "./components";
import { DateRange } from "./datePicker/dateRange";
import GuestsCounter from "./guestsCounter";
import { PriceRange } from "./priceRange/priceRange";

export function BookingControlsComponent() {
  const filters = useAppSelector(selectFiltersInfo);

  return (
    <BookingControls>
      <DateRange date={filters.date} />
      <GuestsCounter filters={filters} />
      <PriceRange price={filters.price} />
      {choices.map((section) => (
        <ChoicesList
          sectionName={section.sectionName}
          choices={section.choices}
          key={section.sectionName}
          filters={filters}
        />
      ))}
    </BookingControls>
  );
}
