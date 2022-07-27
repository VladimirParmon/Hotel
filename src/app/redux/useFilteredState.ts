import { IApartment } from "app/constants/models";
import { selectApartmentsInfo } from "./apartmentsSlice";
import { selectFiltersInfo } from "./filtersSlice";
import { useAppSelector } from "./hooks";

export function useFilteredState() {
  const apartmentsData = useAppSelector(selectApartmentsInfo).entities;
  const currentFilters = useAppSelector(selectFiltersInfo);
  const activeFilters = Object.entries(currentFilters).filter(
    (pair) => pair[1] !== false && pair[1] !== null
  );
  const result = apartmentsData.filter((apartment) => assess(apartment));

  function assess(apartment: IApartment): boolean {
    let result = true;
    activeFilters.forEach((filter) => {
      const [key, value] = filter;
      switch (key) {
        case "price":
          if (apartment.price <= value.from || apartment.price >= value.to) result = false;
          break;
        case "rating":
          if (apartment.rating < value) result = false;
          break;
        case "hasReviews":
          if (apartment.reviews.length === 0) result = false;
          break;
        case "type":
        case "bedsAmount":
        case "floor":
          if (apartment[key] !== value) result = false;
          break;
        case "guestsAllowed":
        case "petsAllowed":
        case "smokingAllowed":
        case "suitableForDisabled":
        case "hasWideCorridor":
        case "hasNoiseInsulation":
        case "hasBigWindows":
        case "hasBalcony":
        case "hasFireplace":
        case "hasWiFi":
        case "hasAirConditioning":
        case "hasWorkspace":
          if (apartment[key] !== false) result = false;
          break;
        case "date":
        case "guests":
          break;
      }
    });
    return result;
  }

  return result;
}
