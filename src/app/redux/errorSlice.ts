import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ErrorState } from "app/constants/models";

const initialState: ErrorState = {
  hasError: false,
};

export const errorSlice = createSlice({
  name: "fetchingError",
  initialState,
  reducers: {
    updateErrorState: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
});

export const { updateErrorState } = errorSlice.actions;

export const selectErrorState = (state: RootState) => state.fetchingError.hasError;

export default errorSlice.reducer;
