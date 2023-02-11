import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { commentsSlice } from "./slice";

export const fetchComments = (itemId: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(commentsSlice.actions.commentsFetching());
    const response = await API.get(`comment/current/${itemId}`);
    dispatch(commentsSlice.actions.commentsFetchingSuccess(response.data.comments));
  } catch (error: any) {
    dispatch(
        commentsSlice.actions.commentsFetchingError(error.response.data.message)
    );
  }
};

type CreateType = {
  text: string;
  author: string;
  itemId: number;
};

export const fetchCreateComment =
  (options: CreateType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(commentsSlice.actions.createFetching());
      const response = await API.post(`comment/create`, options);
      dispatch(commentsSlice.actions.createFetchingSuccess(response.data.comment));
    } catch (error: any) {
      dispatch(
        commentsSlice.actions.createFetchingError(error.response.data.message)
      );
    }
  };