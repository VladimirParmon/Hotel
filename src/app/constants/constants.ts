import { IFilters } from "./models";

export const oneDayMs = 86_000_000;

export const defaultFilters = {
  price: {
    from: 0,
    to: 15000,
  },
  date: {
    from: Date.now(),
    to: Date.now() + oneDayMs,
  },
  guests: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  hasReviews: false,
  rating: 0,
  type: "standard",
  guestsAllowed: false,
  petsAllowed: false,
  smokingAllowed: false,
  suitableForDisabled: false,
  hasWideCorridor: false,
  noiseInsulation: false,
  hasBigWindows: false,
  hasBalcony: false,
  hasFireplace: false,
  floor: 1,
  bedsAmount: 1,
} as IFilters;
