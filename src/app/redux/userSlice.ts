import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
import * as APIService from "../../app/services/APIService";
import { UserData, UserState } from "app/constants/models";
import { updateErrorState } from "./errorSlice";

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    updateIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateUserData, updateIsUserLoggedIn } = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user;

export const fetchUserData = (): AppThunk => (dispatch, getState) => {
  APIService.getUserDataFromServer()
    .then((data) => {
      dispatch(updateUserData(data));
      dispatch(updateIsUserLoggedIn(true));
      localStorage.setItem("userId", data.userId);
    })
    .catch(() => dispatch(updateErrorState(true)));
};

export default userSlice.reducer;
