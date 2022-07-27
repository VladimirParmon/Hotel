import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GuestsTypes } from "app/constants/enums";
import { ApartmentTypes, FiltersRange, IFilters } from "app/constants/models";
import { RootState } from "./store";

const oneDayMs = 86_000_000;

const initialState = {
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
  rating: null,
  type: null,
  guestsAllowed: false,
  petsAllowed: false,
  smokingAllowed: false,
  suitableForDisabled: false,
  hasWideCorridor: false,
  hasNoiseInsulation: false,
  hasBigWindows: false,
  hasBalcony: false,
  hasFireplace: false,
  floor: null,
  bedsAmount: null,
} as IFilters;

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateAllFilters: (state, action: PayloadAction<IFilters>) => {
      return action.payload;
    },
    updateFiltersPrice: (state, action: PayloadAction<FiltersRange>) => {
      state.price = action.payload;
    },
    updateFiltersGuests: (
      state,
      action: PayloadAction<{ guestType: GuestsTypes; newValue: number }>
    ) => {
      state.guests[action.payload.guestType] = action.payload.newValue;
    },
    updateFiltersDate: (
      state,
      action: PayloadAction<{ type: keyof FiltersRange; value: number }>
    ) => {
      state.date[action.payload.type] = action.payload.value;
    },
    updateFiltersReviews: (state, action: PayloadAction<boolean>) => {
      state.hasReviews = action.payload;
    },
    updateFiltersRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    updateFiltersType: (state, action: PayloadAction<ApartmentTypes>) => {
      state.type = action.payload;
    },
    updateFiltersGuestsAllowed: (state, action: PayloadAction<boolean>) => {
      state.guestsAllowed = action.payload;
    },
    updateFiltersPetsAllowed: (state, action: PayloadAction<boolean>) => {
      state.petsAllowed = action.payload;
    },
    updateFiltersSmokingAllowed: (state, action: PayloadAction<boolean>) => {
      state.smokingAllowed = action.payload;
    },
    updateFiltersSuitableForDisabled: (state, action: PayloadAction<boolean>) => {
      state.suitableForDisabled = action.payload;
    },
    updateFiltersHasWideCorridor: (state, action: PayloadAction<boolean>) => {
      state.hasWideCorridor = action.payload;
    },
    updateFiltersHasNoiseInsulation: (state, action: PayloadAction<boolean>) => {
      state.hasNoiseInsulation = action.payload;
    },
    updateFiltersHasBigWindows: (state, action: PayloadAction<boolean>) => {
      state.hasBigWindows = action.payload;
    },
    updateFiltersHasBalcony: (state, action: PayloadAction<boolean>) => {
      state.hasBalcony = action.payload;
    },
    updateFiltersHasFireplace: (state, action: PayloadAction<boolean>) => {
      state.hasFireplace = action.payload;
    },
    updateFiltersFloor: (state, action: PayloadAction<number>) => {
      state.floor = action.payload;
    },
    updateFiltersBedsAmount: (state, action: PayloadAction<1 | 2>) => {
      state.bedsAmount = action.payload;
    },
    updateFiltersHasAirConditioning: (state, action: PayloadAction<boolean>) => {
      state.hasAirConditioning = action.payload;
    },
    updateFiltersHasWiFi: (state, action: PayloadAction<boolean>) => {
      state.hasWiFi = action.payload;
    },
    updateFiltersHasWorkspace: (state, action: PayloadAction<boolean>) => {
      state.hasWorkspace = action.payload;
    },
    setDefaultFilters: () => {
      return initialState;
    },
  },
});

export const {
  updateAllFilters,
  setDefaultFilters,
  updateFiltersPrice,
  updateFiltersGuests,
  updateFiltersDate,
  updateFiltersReviews,
  updateFiltersRating,
  updateFiltersType,
  updateFiltersGuestsAllowed,
  updateFiltersPetsAllowed,
  updateFiltersSmokingAllowed,
  updateFiltersSuitableForDisabled,
  updateFiltersHasWideCorridor,
  updateFiltersHasNoiseInsulation,
  updateFiltersHasBigWindows,
  updateFiltersHasBalcony,
  updateFiltersHasFireplace,
  updateFiltersFloor,
  updateFiltersBedsAmount,
  updateFiltersHasAirConditioning,
  updateFiltersHasWiFi,
  updateFiltersHasWorkspace,
} = filtersSlice.actions;

export const selectFiltersInfo = (state: RootState) => state.filters;

export default filtersSlice.reducer;
