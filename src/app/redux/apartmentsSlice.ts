import { createSlice } from "@reduxjs/toolkit";
import { apartmentsState } from "../constants/models";
import { RootState, AppThunk } from "./store";
import * as APIService from "../../app/services/APIService";

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
  },
});

export const { saveFetchedApartmentsInfoToStore, updateSingleApartmentInfoInStore } =
  apartmentsSlice.actions;

export const selectApartmentsInfo = (state: RootState) => state.apartments;

export const fetchApartmentsInfo = (): AppThunk => (dispatch, getState) => {
  const data = APIService.getApartmentsDataFromServer();
  dispatch(saveFetchedApartmentsInfoToStore(data));
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