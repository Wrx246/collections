import { AppDispatch } from "../../../store/index";
import { themeSlice } from "./theme-slice";

export const themeChanger = () => (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.themeChange());
};
