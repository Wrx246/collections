import { API } from "../../../shared/api/api";
import { loginPath } from "../../../shared/constants/Paths";
import { AppDispatch } from "./../../../store/index";
import { registrationSlice } from "./slice";

type RegistrationTypes = {
  name: string;
  email: string;
  password: string;
};

export const fetchRegistration =
  (options: RegistrationTypes, navigate: (arg: string) => void) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registrationSlice.actions.registrationFetching());
      const response = await API.post(`auth/registration`, options);
      navigate(loginPath);
      dispatch(
        registrationSlice.actions.registrationFetchingSuccess(
          response.data.token
        )
      );
    } catch (error: any) {
      dispatch(
        registrationSlice.actions.registrationFetchingError(
          error.response.data.message
        )
      );
    }
  };
