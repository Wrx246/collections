import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { itemsSlice } from "./slice";

export const fetchItems = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await API.get(`item/${id}`);
    dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data.data));
  } catch (error: any) {
    dispatch(
      itemsSlice.actions.itemsFetchingError(error.response.data.message)
    );
  }
};

type CreateType = {
  title: string;
  tags: string[];
  collectionId: number;
};

export const fetchCreate =
  (options: CreateType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(itemsSlice.actions.createFetching());
      const response = await API.post(`item/create`, options);
      dispatch(itemsSlice.actions.createFetchingSuccess(response.data.data));
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.createFetchingError(error.response.data.message)
      );
    }
  };
