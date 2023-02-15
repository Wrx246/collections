import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { itemsSlice } from "./slice";

export const fetchItems = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await API.get(`item/collection/${id}`);
    dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data.data));
  } catch (error: any) {
    dispatch(
      itemsSlice.actions.itemsFetchingError(error.response.data.message)
    );
  }
};

export const fetchItem = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.itemFetching());
    const response = await API.get(`item/collection/item/${id}`);
    dispatch(itemsSlice.actions.itemFetchingSuccess(response.data.data));
  } catch (error: any) {
    dispatch(itemsSlice.actions.itemFetchingError(error.response.data.message));
  }
};

export const fetchLatest = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await API.get(`item/latest`);
    dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data.data));
  } catch (error: any) {
    dispatch(
      itemsSlice.actions.itemsFetchingError(error.response.data.message)
    );
  }
};

type CreateType = {
  title: string;
  author?: string;
  description?: string;
  date?: string;
  tags: string[];
  collectionId: number;
};

export const fetchCreateItem =
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

  interface DeleteType {
    id: number;
    collectionId: number
  }

export const fetchDeleteItem =
  (options: DeleteType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(itemsSlice.actions.itemsFetching());
      const response = await API.delete(`item/delete`, {data: options});
      dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data.data));
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.itemsFetchingError(error.response.data.message)
      );
    }
  };

interface LikeTypes {
  userId: number;
  id: number;
  setIsLike: (value: React.SetStateAction<boolean>) => void;
}

export const fetchAddLike =
  (options: LikeTypes) => async (dispatch: AppDispatch) => {
    try {
      const { id, userId, setIsLike } = options;
      dispatch(itemsSlice.actions.updateFetching());
      const response = await API.put(`item/addLike`, {
        id: id,
        userId: userId,
      });
      dispatch(itemsSlice.actions.updateFetchingSuccess(response.data.data));
      setIsLike(true);
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.updateFetchingError(error.response.data.message)
      );
    }
  };

export const fetchRemoveLike =
  (options: LikeTypes) => async (dispatch: AppDispatch) => {
    try {
      const { id, userId, setIsLike } = options;
      dispatch(itemsSlice.actions.updateFetching());
      const response = await API.put(`item/removeLike`, {
        id: id,
        userId: userId,
      });
      dispatch(itemsSlice.actions.updateFetchingSuccess(response.data.data));
      setIsLike(false);
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.updateFetchingError(error.response.data.message)
      );
    }
  };
