import { API } from "../../../shared/api/api";
import { AppDispatch } from "../../../store";
import { loginSlice } from "./slice";

type LoginTypes = {
  name: string;
  password: string;
};

export const fetchLogin =
  (options: LoginTypes, navigate: (arg: string) => void) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loginSlice.actions.loginFetching());
      const response = await API.post(`auth/login`, options);
      localStorage.setItem("user-token", JSON.stringify(response.data.token));
      dispatch(loginSlice.actions.loginFetchingSuccess(response.data.token));
      localStorage.setItem("user-data", JSON.stringify(response.data.member));
      let u = JSON.parse(localStorage.getItem("user-token") || "");
      if (u) {
        navigate("/");
      }
    } catch (error: any) {
      dispatch(
        loginSlice.actions.loginFetchingError(error.response.data.message)
      );
    }
  };
