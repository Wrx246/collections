import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/auth-slice';
import { themeReducer } from './../modules/themeSwitcher/';

const rootReducer = combineReducers({
  authSlice, themeReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']