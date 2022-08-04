import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
  ChoicesSections,
  Choices_Accessability,
  Choices_Conveniences,
  Choices_Terms,
  GuestsTypes,
} from "./enums";

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
  hasWiFi: boolean;
  hasAirConditioning: boolean;
  hasWorkspace: boolean;
  photos: string[];
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
  rating: number | null;
  type: ApartmentTypes | null;
  floor: number | null;
  bedsAmount: 1 | 2 | null;
  hasReviews: boolean;
  guestsAllowed: boolean;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  suitableForDisabled: boolean;
  hasWideCorridor: boolean;
  hasNoiseInsulation: boolean;
  hasBigWindows: boolean;
  hasBalcony: boolean;
  hasFireplace: boolean;
  hasWiFi: boolean;
  hasAirConditioning: boolean;
  hasWorkspace: boolean;
  itemsPerPage: number;
}

export interface ApartmentsState {
  entities: IApartment[];
}

export interface UserState {
  userData: UserData | null;
  isLoggedIn: boolean;
}

export interface UserData {
  accessToken: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userDateOfBirth: Date | string;
  userGender: "male" | "female";
  userAdminStatus: boolean;
}

export interface ErrorState {
  hasError: boolean;
}

export type PaletteMode = "light" | "dark";

export type ChoicesDescriptionAction = ActionCreatorWithPayload<any>;

export interface ChoicesDescription {
  sectionName: ChoicesSections;
  choices: {
    name: Choices_Conveniences | Choices_Terms | Choices_Accessability;
    action: ChoicesDescriptionAction;
    description?: string;
    mark: keyof IFilters;
  }[];
  filters?: IFilters;
}
