import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking, BookingsState } from "app/constants/models";
import { AppThunk, RootState } from "./store";
import * as APIService from "../../app/services/APIService";
import { updateErrorState } from "./errorSlice";

const initialState: BookingsState = {
  bookings: [],
  isLoading: false,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    updateAllBookings: (state, action: PayloadAction<Booking[]>) => {
      state.bookings = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { updateAllBookings, setIsLoading } = bookingsSlice.actions;

export const selectBookingsState = (state: RootState) => state.bookings;

export const getBookings = (): AppThunk => (dispatch, getState) => {
  dispatch(setIsLoading(true));
  APIService.getBookings()
    .then((data) => {
      dispatch(updateAllBookings(data));
      dispatch(setIsLoading(false));
    })
    .catch(() => dispatch(updateErrorState(true)));
};

export default bookingsSlice.reducer;
