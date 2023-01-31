import { memberTypes } from "./../../models/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  token: '',
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },
    authFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = "";
      state.token = action.payload;
    },
    authFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
