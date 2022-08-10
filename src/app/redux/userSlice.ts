import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
import * as APIService from "../../app/services/APIService";
import { UserData, UserState } from "app/constants/models";
import { updateErrorState } from "./errorSlice";

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<UserData | null>) => {
      state.userData = action.payload;
    },
    updateIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { updateUserData, updateIsUserLoggedIn, setIsLoading, setUserError } =
  userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user;

export const logUserIn =
  (login: string, password: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(setIsLoading(true));
    APIService.loginIn(login, password)
      .then((res) => {
        localStorage.setItem("userId", res.userId);
        localStorage.setItem("accessToken", res.accessToken);
        dispatch(fetchUserData(res.userId, res.accessToken));
      })
      .catch((err) => dispatch(setUserError(err)));
  };

export const fetchUserData =
  (userId: string, accessToken: string): AppThunk =>
  (dispatch, getState) => {
    APIService.getUserDataFromServer(userId, accessToken)
      .then((data) => {
        dispatch(setIsLoading(false));
        dispatch(updateUserData(data));
        dispatch(updateIsUserLoggedIn(true));
      })
      .catch(() => dispatch(updateErrorState(true)));
  };

export const logOut = (): AppThunk => (dispatch, getState) => {
  dispatch(updateUserData(null));
  dispatch(updateIsUserLoggedIn(false));
  localStorage.clear();
};

export default userSlice.reducer;
