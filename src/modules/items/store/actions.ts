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
    dispatch(
      itemsSlice.actions.itemFetchingError(error.response.data.message)
    );
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

export const fetchAddLike = (id: number, setIsLike: (value: React.SetStateAction<boolean>) => void) => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.createFetching());
    const response = await API.post(`item/addLike`, { id: id });
    dispatch(itemsSlice.actions.createFetchingSuccess(response.data.data));
    setIsLike(true)
  } catch (error: any) {
    dispatch(
      itemsSlice.actions.createFetchingError(error.response.data.message)
    );
  }
};

export const fetchRemoveLike =
  (id: number, setIsLike: (value: React.SetStateAction<boolean>) => void) => async (dispatch: AppDispatch) => {
    try {
      dispatch(itemsSlice.actions.createFetching());
      const response = await API.post(`item/removeLike`, { id: id });
      dispatch(itemsSlice.actions.createFetchingSuccess(response.data.data));
      setIsLike(false)
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.createFetchingError(error.response.data.message)
      );
    }
  };
