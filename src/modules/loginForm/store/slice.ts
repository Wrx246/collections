import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  token: string;
  isLoading: boolean;
  error: string;
}

const initialState: LoginState = {
  token: '',
  isLoading: false,
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginFetching(state) {
      state.isLoading = true;
    },
    loginFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = "";
      state.token = action.payload;
    },
    loginFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const loginReducer = loginSlice.reducer;

export const loginActions = loginSlice.actions;
