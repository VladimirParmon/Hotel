import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apartmentsState } from "../constants/models";
import { RootState, AppThunk } from "./store";
import * as APIService from "../../app/services/APIService";
import { SortingOrder } from "app/constants/enums";

const initialState: apartmentsState = {
  entities: [],
};

export const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    saveFetchedApartmentsInfoToStore: (state, action) => {
      state.entities = action.payload;
    },
    updateSingleApartmentInfoInStore: (state, action) => {
      const apartmentToBeChanged = action.payload;
      const newState = state.entities.map((apartmentInStore) => {
        if (apartmentInStore.id === apartmentToBeChanged) {
          return apartmentToBeChanged;
        } else return apartmentInStore;
      });
      state.entities = newState;
    },
    sortUsingPopularity: (state, action: PayloadAction<SortingOrder.ASC | SortingOrder.DESC>) => {
      state.entities.sort((a, b) => {
        return action.payload === SortingOrder.ASC
          ? a.reviews.length - b.reviews.length
          : b.reviews.length - a.reviews.length;
      });
    },
    sortUsingNumber: (state, action: PayloadAction<SortingOrder.ASC | SortingOrder.DESC>) => {
      state.entities.sort((a, b) => {
        return action.payload === SortingOrder.ASC ? a.number - b.number : b.number - a.number;
      });
    },
    sortUsingPrice: (state, action: PayloadAction<SortingOrder.ASC | SortingOrder.DESC>) => {
      state.entities.sort((a, b) => {
        return action.payload === SortingOrder.ASC ? a.price - b.price : b.price - a.price;
      });
    },
    sortUsingRating: (state, action: PayloadAction<SortingOrder.ASC | SortingOrder.DESC>) => {
      state.entities.sort((a, b) => {
        return action.payload === SortingOrder.ASC ? a.rating - b.rating : b.rating - a.rating;
      });
    },
  },
});

export const {
  saveFetchedApartmentsInfoToStore,
  updateSingleApartmentInfoInStore,
  sortUsingPopularity,
  sortUsingNumber,
  sortUsingPrice,
  sortUsingRating,
} = apartmentsSlice.actions;

export const selectApartmentsInfo = (state: RootState) => state.apartments.entities;

export const fetchApartmentsInfo = (): AppThunk => (dispatch, getState) => {
  APIService.getApartmentsDataFromServer().then((data) => {
    dispatch(saveFetchedApartmentsInfoToStore(data));
  });
};

export default apartmentsSlice.reducer;

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
