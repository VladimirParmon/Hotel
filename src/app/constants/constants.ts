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
import BalconyIcon from "@mui/icons-material/Balcony";
import AirIcon from "@mui/icons-material/Air";
import WifiIcon from "@mui/icons-material/Wifi";
import SpatialTrackingIcon from "@mui/icons-material/SpatialTracking";
import WindowIcon from "@mui/icons-material/Window";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import GroupIcon from "@mui/icons-material/Group";
import PetsIcon from "@mui/icons-material/Pets";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccessibleIcon from "@mui/icons-material/Accessible";

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
      { name: Choices_Conveniences.BALCONY, action: updateFiltersHasBalcony, mark: "hasBalcony" },
      {
        name: Choices_Conveniences.CONDITIONER,
        action: updateFiltersHasAirConditioning,
        mark: "hasAirConditioning",
      },
      {
        name: Choices_Conveniences.FIREPLACE,
        action: updateFiltersHasFireplace,
        mark: "hasFireplace",
      },
      {
        name: Choices_Conveniences.INSULATION,
        action: updateFiltersHasNoiseInsulation,
        mark: "hasNoiseInsulation",
      },
      { name: Choices_Conveniences.WIFI, action: updateFiltersHasWiFi, mark: "hasWiFi" },
      {
        name: Choices_Conveniences.WINDOWS,
        action: updateFiltersHasBigWindows,
        mark: "hasBigWindows",
      },
      {
        name: Choices_Conveniences.WORKSPACE,
        action: updateFiltersHasWorkspace,
        mark: "hasWorkspace",
      },
    ],
  },
  {
    sectionName: ChoicesSections.TERMS,
    choices: [
      {
        name: Choices_Terms.GUESTS,
        action: updateFiltersGuestsAllowed,
        description: Choices_Terms.GUESTS_DESCRIPTION,
        mark: "guestsAllowed",
      },
      { name: Choices_Terms.PETS, action: updateFiltersPetsAllowed, mark: "petsAllowed" },
      { name: Choices_Terms.SMOKING, action: updateFiltersSmokingAllowed, mark: "smokingAllowed" },
    ],
  },
  {
    sectionName: ChoicesSections.ACCESSABILITY,
    choices: [
      {
        name: Choices_Accessability.CORRIDOR,
        action: updateFiltersHasWideCorridor,
        description: Choices_Accessability.CORRIDOR_DESCRIPTION,
        mark: "hasWideCorridor",
      },
      {
        name: Choices_Accessability.DISABLED,
        action: updateFiltersSuitableForDisabled,
        description: Choices_Accessability.DISABLED_DESCRIPTION,
        mark: "suitableForDisabled",
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

const standardApartmentDescription = `
  This room type can be found in most service apartments and 
  hotels. Housekeeping services are provided every day, seven days of the week.
  May be occupied by one or more people.
  The room size or area is generally between 96 m² to 250 m².
`;

const premiumApartmentDescription = `
  Premium rooms are  larger than their standard counterparts, include a 
  bathtub and a shower in the bathroom, and include more high-end amenities. 
  Premium apartment offers guests desirable scenery for travelers to enjoy: 
  bay and city view from the large sized windows.
`;

const luxuriousApartmentDescription = `
  The most expensive room provided by the hotel. 
  Usually, only several are available at a time. 
  Similar to the normal suites, a luxurious apartment always 
  has one or more bedrooms and a living space with a strong 
  emphasis on grand in-room decoration, high-quality amenities 
  and supplies, and tailor-made services 
  (e.g. personal butler during the stay).
  The room size or area is generally between 80 m² to 350 m².
`;

export const typeDescriptions = {
  standard: standardApartmentDescription,
  premium: premiumApartmentDescription,
  luxurious: luxuriousApartmentDescription,
};

export const conveniences = [
  {
    span: "Has a balcony",
    icon: BalconyIcon,
    mark: "hasBalcony",
    dimmed: false,
  },
  {
    span: "Has air conditioning",
    icon: AirIcon,
    mark: "hasAirConditioning",
    dimmed: false,
  },
  {
    span: "Has Wifi",
    icon: WifiIcon,
    mark: "hasWiFi",
    dimmed: false,
  },
  {
    span: "Has noise insulation",
    icon: SpatialTrackingIcon,
    mark: "hasNoiseInsulation",
    dimmed: false,
  },
  {
    span: "Has big windows",
    icon: WindowIcon,
    mark: "hasBigWindows",
    dimmed: false,
  },
  {
    span: "Has a fireplace",
    icon: FireplaceIcon,
    mark: "hasBigWindows",
    dimmed: false,
  },
  {
    span: "Has workspace",
    icon: TableRestaurantIcon,
    mark: "hasWorkspace",
    dimmed: false,
  },
];

export const freedoms = [
  {
    span: "Guests are allowed",
    icon: GroupIcon,
    mark: "guestsAllowed",
    dimmed: false,
  },
  {
    span: "Pets are allowed",
    icon: PetsIcon,
    mark: "petsAllowed",
    dimmed: false,
  },
  {
    span: "Smoking is not prohibited",
    icon: SmokingRoomsIcon,
    mark: "smokingAllowed",
    dimmed: false,
  },
];

export const accessability = [
  {
    span: "Has a wide corridor (no less than 91 cm wide)",
    icon: AccessibilityNewIcon,
    mark: "hasWideCorridor",
    dimmed: false,
  },
  {
    span: "Suitable for a disabled person",
    icon: AccessibleIcon,
    mark: "suitableForDisabled",
    dimmed: false,
  },
];
