import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegistrationState {
  token: string;
  isLoading: boolean;
  error: string;
}

const initialState: RegistrationState = {
  token: '',
  isLoading: false,
  error: "",
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationFetching(state) {
      state.isLoading = true;
    },
    registrationFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = "";
      state.token = action.payload;
    },
    registrationFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const registrationReducer = registrationSlice.reducer;

export const registrationActions = registrationSlice.actions;
