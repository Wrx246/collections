import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemType {
  id: number;
  title: string;
  tags: string[];
  likes: number[];
  createdAt: string;
  updatedAt: string;
  author?: string;
  language?:string;
  shortName?: string;
  comment?: string;
  additionalInfo?: string;
  country?: string;
  publication?: string;
  foundation?: string;
  terminated?: string;
  price?: number;
  reward?: number;
  score?: number;
  favorite?: boolean;
  status?: boolean;
  original?: boolean;
  collectionId: number;
}
interface TagsState {
  tags: string[];
  items: ItemType[];
  isLoading: boolean;
  error: string;
}

const initialState: TagsState = {
  tags: [],
  items: [],
  isLoading: false,
  error: "",
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    tagsFetching(state) {
      state.isLoading = true;
    },
    tagsFetchingSuccess(state, action: PayloadAction<string[]>) {
      state.isLoading = false;
      state.error = "";
      state.tags = action.payload;
    },
    tagsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
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

export const tagsReducer = tagsSlice.reducer;

export const tagsActions = tagsSlice.actions;
