import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { themeReducer } from "./../modules/themeSwitcher/";
import { registrationReducer } from "./../modules/registrationForm/";
import { loginReducer } from "./../modules/loginForm/";
import { collectionsReducer } from "./../modules/collections/";
import { localeReducer } from "./../modules/localization/";
import { itemsReducer } from "./../modules/items/";
import { commentsReducer } from './../modules/comments/';
import { searchReducer } from './../modules/header/';
import { tagsReducer } from './../modules/tags/';

const rootReducer = combineReducers({
  themeReducer,
  registrationReducer,
  loginReducer,
  collectionsReducer,
  localeReducer,
  itemsReducer,
  commentsReducer,
  searchReducer,
  tagsReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
