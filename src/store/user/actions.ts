
import { AppDispatch } from "..";
import { API } from "../../shared/api/api";
import { userSlice } from "./slice";


export const checkBan =
  (userId: number, navigate: (arg: string) => void) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userFetching());
      const response = await API.post(`auth/check`, {userId: userId});
      dispatch(userSlice.actions.userFetchingSuccess(response.data.member));
      if (response.data.member.isActive === false) {
        localStorage.removeItem("user-data");
        localStorage.removeItem("user-token");
        navigate("/login");
      }
    } catch (error: any) {
      dispatch(
        userSlice.actions.userFetchingError(error.response.data.message)
      );
    }
  };
