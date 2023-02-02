import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './../modules/themeSwitcher/';
import { registrationReducer } from './../modules/registrationForm/';
import { loginReducer } from './../modules/loginForm/';
import { collectionsReducer } from './../modules/collections/';

const rootReducer = combineReducers({
  themeReducer, registrationReducer, loginReducer, collectionsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']