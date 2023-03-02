import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../shared/models/user";

interface UsersState {
  users: UserType[];
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<UserType[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateFetching(state) {
      state.isLoading = true;
    },
    updateFetchingSuccess(state, action: PayloadAction<UserType>) {
      state.isLoading = false;
      state.error = "";
      state.users = [
        ...state.users.map((c) =>
          c.id === action.payload.id ? (c = action.payload) : c
        ),
      ];
    },
    updateFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const usersActions = usersSlice.actions;
