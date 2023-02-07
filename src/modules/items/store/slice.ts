import { ItemType } from "./../models/itemTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemsState {
  items: ItemType[];
  item: ItemType | null;
  isLoading: boolean;
  error: string;
}

const initialState: ItemsState = {
  items: [],
  item: null,
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
    itemFetching(state) {
      state.isLoading = true;
    },
    itemFetchingSuccess(state, action: PayloadAction<ItemType>) {
      state.isLoading = false;
      state.error = "";
      state.item = action.payload;
    },
    itemFetchingError(state, action: PayloadAction<string>) {
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
