export interface IApartment {
  id: string;
  number: number;
  price: number;
  reviews: string[];
  rate: number;
  bookings: string[];
  type: "standard" | "premium" | "luxurious";
  guestsAllowed: boolean;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  suitableForDisabled: boolean;
  hasWideCorridor: boolean;
  noiseInsulation: boolean;
  hasBigWindows: boolean;
  hasBalcony: boolean;
  hasFireplace: boolean;
  floor: number;
  bedsAmount: number;
}

export interface apartmentsState {
  entities: IApartment[];
}
