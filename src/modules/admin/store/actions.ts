import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { usersSlice } from "./slice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const response = await API.get(`admin/users`);
    dispatch(usersSlice.actions.usersFetchingSuccess(response.data.users));
  } catch (error: any) {
    dispatch(
      usersSlice.actions.usersFetchingError(error.response.data.message)
    );
  }
};

type AdminOptions = {
  userId: number,
  id: number
}

export const userBlock = (options: AdminOptions) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const response = await API.put(`admin/user/block`, options);
    dispatch(usersSlice.actions.usersFetchingSuccess(response.data.users));
  } catch (error: any) {
    dispatch(
      usersSlice.actions.usersFetchingError(error.response.data.message)
    );
  }
};

export const userUnblock = (options: AdminOptions) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const response = await API.put(`admin/user/unblock`, options);
    dispatch(usersSlice.actions.usersFetchingSuccess(response.data.users));
  } catch (error: any) {
    dispatch(
      usersSlice.actions.usersFetchingError(error.response.data.message)
    );
  }
};

export const userDelete = (options: AdminOptions) => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.usersFetching());
      const response = await API.delete(`admin/user/delete`, {data: options});
      dispatch(usersSlice.actions.usersFetchingSuccess(response.data.users));
    } catch (error: any) {
      dispatch(
        usersSlice.actions.usersFetchingError(error.response.data.message)
      );
    }
  };

  interface AdminPromote extends AdminOptions {
    role: string
  }

export const userPromote = (options: AdminPromote) => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.updateFetching());
      const response = await API.put(`admin/user/promote`, options);
      dispatch(usersSlice.actions.updateFetchingSuccess(response.data.user));
    } catch (error: any) {
      dispatch(
        usersSlice.actions.updateFetchingError(error.response.data.message)
      );
    }
  };