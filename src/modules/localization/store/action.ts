
import { AppDispatch } from "../../../store";
import { localeSlice } from "./slice";

export const setLocale = (local: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(localeSlice.actions.localeFetching());
    localStorage.setItem('app.locale', local)
    dispatch(localeSlice.actions.localeFetchingSuccess(local));
  } catch (error: any) {
    dispatch(
      localeSlice.actions.localeFetchingError(error.response.data.message)
    );
  }
};
