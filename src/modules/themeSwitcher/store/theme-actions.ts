import { AppDispatch } from "../../../store/index";
import { themeSlice } from "./theme-slice";

export const themeChanger = (theme: boolean) => (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.themeChange(theme));
    localStorage.setItem('collection-theme', theme.toString())
};
