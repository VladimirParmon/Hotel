import {
  updateFiltersGuestsAllowed,
  updateFiltersHasAirConditioning,
  updateFiltersHasBalcony,
  updateFiltersHasBigWindows,
  updateFiltersHasFireplace,
  updateFiltersHasNoiseInsulation,
  updateFiltersHasWideCorridor,
  updateFiltersHasWiFi,
  updateFiltersHasWorkspace,
  updateFiltersPetsAllowed,
  updateFiltersSmokingAllowed,
  updateFiltersSuitableForDisabled,
} from "app/redux/filtersSlice";
import {
  ChoicesSections,
  Choices_Accessability,
  Choices_Conveniences,
  Choices_Terms,
  NavigationLinks,
  NavigationOptions,
  SortingOptions,
  SortingOrder,
} from "./enums";
import { ChoicesDescription } from "./models";

export const oneDayMs = 86_000_000;

export const navigationOptions = [
  {
    name: NavigationOptions.APARTMENTS,
    link: NavigationLinks.APARTMENTS,
  },
  {
    name: NavigationOptions.SERVICES,
    link: NavigationLinks.SERVICES,
  },
  {
    name: NavigationOptions.OFFERS,
    link: NavigationLinks.OFFERS,
  },
  {
    name: NavigationOptions.JOBS,
    link: NavigationLinks.JOBS,
  },
  {
    name: NavigationOptions.UPDATES,
    link: NavigationLinks.UPDATES,
  },
  {
    name: NavigationOptions.TERMS,
    link: NavigationLinks.TERMS,
  },
];

export const choices: ChoicesDescription[] = [
  {
    sectionName: ChoicesSections.CONVENIENCES,
    choices: [
      { name: Choices_Conveniences.BALCONY, action: updateFiltersHasBalcony },
      { name: Choices_Conveniences.CONDITIONER, action: updateFiltersHasAirConditioning },
      { name: Choices_Conveniences.FIREPLACE, action: updateFiltersHasFireplace },
      { name: Choices_Conveniences.INSULATION, action: updateFiltersHasNoiseInsulation },
      { name: Choices_Conveniences.WIFI, action: updateFiltersHasWiFi },
      { name: Choices_Conveniences.WINDOWS, action: updateFiltersHasBigWindows },
      { name: Choices_Conveniences.WORKSPACE, action: updateFiltersHasWorkspace },
    ],
  },
  {
    sectionName: ChoicesSections.TERMS,
    choices: [
      {
        name: Choices_Terms.GUESTS,
        action: updateFiltersGuestsAllowed,
        description: Choices_Terms.GUESTS_DESCRIPTION,
      },
      { name: Choices_Terms.PETS, action: updateFiltersPetsAllowed },
      { name: Choices_Terms.SMOKING, action: updateFiltersSmokingAllowed },
    ],
  },
  {
    sectionName: ChoicesSections.ACCESSABILITY,
    choices: [
      {
        name: Choices_Accessability.CORRIDOR,
        action: updateFiltersHasWideCorridor,
        description: Choices_Accessability.CORRIDOR_DESCRIPTION,
      },
      {
        name: Choices_Accessability.DISABLED,
        action: updateFiltersSuitableForDisabled,
        description: Choices_Accessability.DISABLED_DESCRIPTION,
      },
    ],
  },
];

export const sortingOptions = [
  SortingOptions.POPULARITY,
  SortingOptions.NUMBER,
  SortingOptions.PRICE,
  SortingOptions.RATING,
];

export const sortingOrder: [SortingOrder.DESC, SortingOrder.ASC] = [
  SortingOrder.DESC,
  SortingOrder.ASC,
];

export const floors = [
  "Any floor",
  ...Array.from(Array.from({ length: 5 }, (_, i) => i + 1)).map((key) => key.toString()),
];

export const beds = ["Any amount", "1", "2"];

export const apartmentType = ["Any type", "Standard", "Premium", "Luxurious"];

export const ratings = [
  "Any rating",
  "At least one star",
  "At least two stars",
  "At least three stars",
  "At least four stars",
  "Five stars only",
];
