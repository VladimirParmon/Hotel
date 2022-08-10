import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import apartmentsReducer from "./apartmentsSlice";
import filtersReducer from "./filtersSlice";
import userReducer from "./userSlice";
import errorReducer from "./errorSlice";
import bookingsReducer from "./bookingsSlice";

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer,
    filters: filtersReducer,
    user: userReducer,
    fetchingError: errorReducer,
    bookings: bookingsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
