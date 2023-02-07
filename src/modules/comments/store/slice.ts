
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentType } from "../models/commentTypes";

interface CommentsState {
  comments: CommentType[];
  isLoading: boolean;
  error: string;
}

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  error: "",
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsFetching(state) {
      state.isLoading = true;
    },
    commentsFetchingSuccess(state, action: PayloadAction<CommentType[]>) {
      state.isLoading = false;
      state.error = "";
      state.comments = action.payload;
    },
    commentsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createFetching(state) {
      state.isLoading = true;
    },
    createFetchingSuccess(state, action: PayloadAction<CommentType>) {
      state.isLoading = false;
      state.error = "";
      state.comments = [...state.comments, action.payload];
    },
    createFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const commentsReducer = commentsSlice.reducer;

export const commentsActions = commentsSlice.actions;
