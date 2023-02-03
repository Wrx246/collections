import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { collectionsSlice } from "./slice";

export const fetchCollections =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(collectionsSlice.actions.collectionsFetching());
      const response = await API.get(`collection/${id}`);
      dispatch(
        collectionsSlice.actions.collectionsFetchingSuccess(response.data.data)
      );
    } catch (error: any) {
      dispatch(
        collectionsSlice.actions.collectionsFetchingError(
          error.response.data.message
        )
      );
    }
  };

type CreateType = {
  title: string;
  description: string;
  tags: string[];
  theme: string;
  userId: number;
};

export const fetchCreate =
  (options: CreateType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(collectionsSlice.actions.createFetching());
      const response = await API.post(`collection/create`, options);
      dispatch(
        collectionsSlice.actions.createFetchingSuccess(response.data.data)
      );
    } catch (error: any) {
      dispatch(
        collectionsSlice.actions.createFetchingError(
          error.response.data.message
        )
      );
    }
  };