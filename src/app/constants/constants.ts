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
  { name: "Any floor", value: "null" },
  { name: "1", value: "1" },
  { name: "2", value: "2" },
  { name: "3", value: "3" },
  { name: "4", value: "4" },
  { name: "5", value: "5" },
];

// export const floors = [
//   "Any floor",
//   ...Array.from(Array.from({ length: 5 }, (_, i) => i + 1)).map((key) => key.toString()),
// ];

export const beds = [
  { name: "Any amount", value: "null" },
  { name: "1", value: "1" },
  { name: "2", value: "2" },
];

export const apartmentType = [
  { name: "Any type", value: "null" },
  { name: "Standard", value: '"standard"' },
  { name: "Premium", value: '"premium"' },
  { name: "Luxurious", value: '"luxurious"' },
];

export const ratings = [
  { name: "Any rating", value: "null" },
  { name: "At least one star", value: "1" },
  { name: "At least two stars", value: "2" },
  { name: "At least three stars", value: "3" },
  { name: "At least four stars", value: "4" },
  { name: "Five stars only", value: "5" },
];

export const itemsPerPage = [
  { name: "8", value: "8" },
  { name: "12", value: "12" },
  { name: "16", value: "16" },
  { name: "20", value: "20" },
];
