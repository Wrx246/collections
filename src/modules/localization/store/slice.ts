import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalesState {
  locale: string;
  isLoading: boolean;
  error: string;
}

const initialState: LocalesState = {
  locale: 'en',
  isLoading: false,
  error: "",
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    localeFetching(state) {
      state.isLoading = true;
    },
    localeFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = "";
      state.locale = action.payload;
    },
    localeFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const localeReducer = localeSlice.reducer;

export const localeActions = localeSlice.actions;
