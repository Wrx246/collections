import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { tagsSlice } from "./slice";

export const fetchTags = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(tagsSlice.actions.tagsFetching());
    const response = await API.get(`item/tags`);
    dispatch(tagsSlice.actions.tagsFetchingSuccess(response.data.tags));
  } catch (error: any) {
    dispatch(tagsSlice.actions.tagsFetchingError(error.response.data.message));
  }
};

export const fetchSearchTags = (tag: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(tagsSlice.actions.searchFetching);
        const response = await API.post(`item/tags/search`, {tag: tag})
        dispatch(tagsSlice.actions.searchFetchingSuccess(response.data.items));
    } catch (error: any) {
        dispatch(tagsSlice.actions.searchFetchingError(error.response.data.message));
    }
}