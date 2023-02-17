import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { searchSlice } from "./slice";

export const fetchSearch = (search: string) => async (dispatch: AppDispatch) => {
  try {
    if(!search.length) {
        dispatch(searchSlice.actions.searchFetchingSuccess([]));
    }
    dispatch(searchSlice.actions.searchFetching());
    const response = await API.get(`item/?search=${search}`);
    dispatch(searchSlice.actions.searchFetchingSuccess(response.data.items));
  } catch (error: any) {
    dispatch(
        searchSlice.actions.searchFetchingError(error.response.data.message)
    );
  }
};
