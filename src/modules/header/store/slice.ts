import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemType {
  id: number;
  title: string;
  tags: string[];
  // description?: string;
  // author?: string;
  // date?: string;
  likes: number[];
  createdAt: string;
  updatedAt: string;
  collectionId: number;
}

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

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchFetching(state) {
      state.isLoading = true;
    },
    searchFetchingSuccess(state, action: PayloadAction<ItemType[]>) {
      state.isLoading = false;
      state.error = "";
      state.items = action.payload;
    },
    searchFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const searchActions = searchSlice.actions;
