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

interface CreateType {
  tags: string[];
  collectionId: number;
  author?: string;
  comment?: string;
  additionalInfo?: string;
  publication?: string;
  foundation?: string;
  price?: number;
  reward?: number;
  score?: number;
  favorite?: boolean;
  country?: string;
  language?: string;
  shortName?: string;
  status?: boolean;
  terminated?: string;
  original?: boolean;
}

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

interface EditType {
  id: number;
  title: string;
  author?: string;
  comment?: string;
  additionalInfo?: string;
  publication?: string;
  foundation?: string;
  price?: number;
  reward?: number;
  score?: number;
  favorite?: boolean;
  country?: string;
  language?: string;
  shortName?: string;
  status?: boolean;
  terminated?: string;
  original?: boolean;
}

export const fetchEditItem =
  (options: EditType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(itemsSlice.actions.updateFetching());
      const response = await API.put(`item/edit`, options);
      dispatch(itemsSlice.actions.updateFetchingSuccess(response.data.item));
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.updateFetchingError(error.response.data.message)
      );
    }
  };

interface DeleteType {
  id: number;
  collectionId: number;
}

export const fetchDeleteItem =
  (options: DeleteType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(itemsSlice.actions.itemsFetching());
      const response = await API.delete(`item/delete`, { data: options });
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
}

export const fetchAddLike =
  (options: LikeTypes) => async (dispatch: AppDispatch) => {
    try {
      const { id, userId } = options;
      dispatch(itemsSlice.actions.updateFetching());
      const response = await API.put(`item/addLike`, {
        id: id,
        userId: userId,
      });
      dispatch(itemsSlice.actions.updateFetchingSuccess(response.data.data));
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.updateFetchingError(error.response.data.message)
      );
    }
  };

export const fetchRemoveLike =
  (options: LikeTypes) => async (dispatch: AppDispatch) => {
    try {
      const { id, userId } = options;
      dispatch(itemsSlice.actions.updateFetching());
      const response = await API.put(`item/removeLike`, {
        id: id,
        userId: userId,
      });
      dispatch(itemsSlice.actions.updateFetchingSuccess(response.data.data));
    } catch (error: any) {
      dispatch(
        itemsSlice.actions.updateFetchingError(error.response.data.message)
      );
    }
  };
