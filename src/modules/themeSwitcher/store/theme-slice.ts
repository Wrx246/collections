import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: boolean;
}

const initialState: ThemeState = {
  theme: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeChange(state, action: PayloadAction<boolean>) {
      state.theme = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const themeActions = themeSlice.actions;
