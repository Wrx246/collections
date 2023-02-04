import { ItemType } from "./../models/itemTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemsState {
  items: ItemType[];
  isLoading: boolean;
  error: string;
}

const initialState: ItemsState = {
  items: [],
  isLoading: false,
  error: "",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemsFetching(state) {
      state.isLoading = true;
    },
    itemsFetchingSuccess(state, action: PayloadAction<ItemType[]>) {
      state.isLoading = false;
      state.error = "";
      state.items = action.payload;
    },
    itemsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createFetching(state) {
        state.isLoading = true;
    },
    createFetchingSuccess(state, action: PayloadAction<ItemType>) {
        state.isLoading = false;
        state.error = "";
        state.items = [...state.items, action.payload];
    },
    createFetchingError(state, action: PayloadAction<string>) {
        state.isLoading = false;
        state.error = action.payload;
      },
  },
});

export const itemsReducer = itemsSlice.reducer;

export const itemsActions = itemsSlice.actions;
