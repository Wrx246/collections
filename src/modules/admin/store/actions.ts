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

export const userBlock = (userId: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const response = await API.put(`admin/user/block`, { userId: userId });
    dispatch(usersSlice.actions.usersFetchingSuccess(response.data.users));
  } catch (error: any) {
    dispatch(
      usersSlice.actions.usersFetchingError(error.response.data.message)
    );
  }
};

export const userUnblock = (userId: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const response = await API.put(`admin/user/unblock`, { userId: userId });
    dispatch(usersSlice.actions.usersFetchingSuccess(response.data.users));
  } catch (error: any) {
    dispatch(
      usersSlice.actions.usersFetchingError(error.response.data.message)
    );
  }
};

export const userDelete = (userId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.usersFetching());
      const response = await API.delete(`admin/user/delete`, { data: userId });
      dispatch(usersSlice.actions.usersFetchingSuccess(response.data.users));
    } catch (error: any) {
      dispatch(
        usersSlice.actions.usersFetchingError(error.response.data.message)
      );
    }
  };
