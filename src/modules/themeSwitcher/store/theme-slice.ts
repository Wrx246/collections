import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: boolean;
}

const initialState: ThemeState = {
  theme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeChange(state) {
      state.theme = !state.theme;
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const themeActions = themeSlice.actions;
