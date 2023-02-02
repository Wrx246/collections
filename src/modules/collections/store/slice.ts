import { CollectionType } from "./../models/collection";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CollectionsState {
  collections: CollectionType[];
  isLoading: boolean;
  error: string;
}

const initialState: CollectionsState = {
  collections: [],
  isLoading: false,
  error: "",
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    collectionsFetching(state) {
      state.isLoading = true;
    },
    collectionsFetchingSuccess(state, action: PayloadAction<CollectionType[]>) {
      state.isLoading = false;
      state.error = "";
      state.collections = action.payload;
    },
    collectionsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createFetching(state) {
        state.isLoading = true;
    },
    createFetchingSuccess(state, action: PayloadAction<CollectionType>) {
        state.isLoading = false;
        state.error = "";
        state.collections = [...state.collections, action.payload];
    },
    createFetchingError(state, action: PayloadAction<string>) {
        state.isLoading = false;
        state.error = action.payload;
      },
  },
});

export const collectionsReducer = collectionsSlice.reducer;

export const collectionsActions = collectionsSlice.actions;
