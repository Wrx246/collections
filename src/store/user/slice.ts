import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../shared/models/user";

interface UserState {
  user: UserType | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<UserType>) {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;
