import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import apartmentsReducer from "./apartmentsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer,
    filters: filtersReducer,
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
