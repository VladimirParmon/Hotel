import { GuestsTypes } from "./enums";

export interface IApartment {
  id: string;
  number: number;
  price: number;
  reviews: string[];
  rating: number;
  bookings: string[];
  type: ApartmentTypes;
  guestsAllowed: boolean;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  suitableForDisabled: boolean;
  hasWideCorridor: boolean;
  hasNoiseInsulation: boolean;
  hasBigWindows: boolean;
  hasBalcony: boolean;
  hasFireplace: boolean;
  floor: number;
  bedsAmount: 1 | 2;
}

export interface FiltersRange {
  from: number;
  to: number;
}

export type Guests = {
  [key in GuestsTypes]: number;
};

export type ApartmentTypes = "standard" | "premium" | "luxurious";

export interface IFilters {
  price: FiltersRange;
  date: FiltersRange;
  guests: Guests;
  hasReviews: boolean;
  rating: number;
  type: ApartmentTypes;
  guestsAllowed: boolean;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  suitableForDisabled: boolean;
  hasWideCorridor: boolean;
  hasNoiseInsulation: boolean;
  hasBigWindows: boolean;
  hasBalcony: boolean;
  hasFireplace: boolean;
  floor: number;
  bedsAmount: 1 | 2;
}

export interface apartmentsState {
  entities: IApartment[];
}

export type PaletteMode = "light" | "dark";
