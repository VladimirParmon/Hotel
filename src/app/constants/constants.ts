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
      { name: Choices_Conveniences.BALCONY },
      { name: Choices_Conveniences.CONDITIONER },
      { name: Choices_Conveniences.FIREPLACE },
      { name: Choices_Conveniences.INSULATION },
      { name: Choices_Conveniences.WIFI },
      { name: Choices_Conveniences.WINDOWS },
      { name: Choices_Conveniences.WORKSPACE },
    ],
  },
  {
    sectionName: ChoicesSections.TERMS,
    choices: [
      {
        name: Choices_Terms.GUESTS,
        description: Choices_Terms.GUESTS_DESCRIPTION,
      },
      { name: Choices_Terms.PETS },
      { name: Choices_Terms.SMOKING },
    ],
  },
  {
    sectionName: ChoicesSections.ACCESSABILITY,
    choices: [
      {
        name: Choices_Accessability.CORRIDOR,
        description: Choices_Accessability.CORRIDOR_DESCRIPTION,
      },
      {
        name: Choices_Accessability.DISABLED,
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
  "Any",
  ...Array.from(Array.from({ length: 5 }, (_, i) => i + 1)).map((key) => key.toString()),
];

export const beds = ["Any", "1", "2"];

export const apartmentType = ["Any", "Standard", "Premium", "Luxurious"];
