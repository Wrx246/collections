import { API } from "../../api/api";
import { AppDispatch } from "../index";
import { authSlice } from "./auth-slice";

type RegistrationTypes = {
  name: string;
  email: string;
  password: string;
};

type LoginTypes = {
  name: string;
  password: string;
};

export const fetchRegistration =
  (options: RegistrationTypes, navigate: (arg: string) => void) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authFetching());
      const response = await API.post(`auth/registration`, options);
      navigate("/login");
      dispatch(
        authSlice.actions.authFetchingSuccess(
          response.data.token
        )
      );
    } catch (error: any) {
      dispatch(authSlice.actions.authFetchingError(error.response.data.message));
    }
  };

export const fetchLogin =
  (options: LoginTypes, navigate: (arg: string) => void) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authFetching());
      const response = await API.post(`auth/login`, options);
      localStorage.setItem("user-token", JSON.stringify(response.data.token));
      dispatch(authSlice.actions.authFetchingSuccess(response.data.token));
      localStorage.setItem("user-data", JSON.stringify(response.data.member));
      let u = JSON.parse(localStorage.getItem("user-token") || "");
      if (u) {
        navigate("/");
      }
    } catch (error: any) {
      dispatch(authSlice.actions.authFetchingError(error.response.data.message));
    }
  };