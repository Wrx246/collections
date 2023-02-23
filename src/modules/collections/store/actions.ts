import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { collectionsSlice } from "./slice";

export const fetchCollections =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(collectionsSlice.actions.collectionsFetching());
      const response = await API.get(`collection/current/${id}`);
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

export const fetchEdit =
  (options: CreateType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(collectionsSlice.actions.updateFetching());
      const response = await API.put(`collection/edit`, options);
      dispatch(
        collectionsSlice.actions.updateFetchingSuccess(response.data.collection)
      );
    } catch (error: any) {
      dispatch(
        collectionsSlice.actions.updateFetchingError(
          error.response.data.message
        )
      );
    }
  };

  interface ImageTypes {
    id: number;
    image: string;
  }

  export const fetchSaveImage =
  (options: ImageTypes) => async (dispatch: AppDispatch) => {
    try {
      dispatch(collectionsSlice.actions.updateFetching());
      const response = await API.put(`collection/image`, options);
      dispatch(
        collectionsSlice.actions.updateFetchingSuccess(response.data)
      );
    } catch (error: any) {
      dispatch(
        collectionsSlice.actions.updateFetchingError(
          error.response.data.message
        )
      );
    }
  };

export const fetchDelete =
  (id: number, userId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(collectionsSlice.actions.collectionsFetching());
      const response = await API.delete(`collection/delete`, {
        data: { id: id, userId: userId },
      });
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

  export const fetchPopular = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(collectionsSlice.actions.collectionsFetching());
      const response = await API.get(`collection/popular`);
      dispatch(
        collectionsSlice.actions.collectionsFetchingSuccess(response.data.collections)
      );
    } catch (error: any) {
      dispatch(
        collectionsSlice.actions.collectionsFetchingError(
          error.response.data.message
        )
      );
    }
  }
