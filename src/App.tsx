import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import Modal from './components/Modal';
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Registration from './pages/Registration';
import User from './pages/User';
import {
  homePath,
  loginPath,
  registrationPath,
  userPath
} from './shared/constants/Paths';
import { useAppDispatch, useAppSelector } from './shared/hooks/redux';
import locales from './shared/constants/Locales';
import enMessages from './shared/localization/en.json'
import ruMessages from './shared/localization/ru.json'
import { localStorageKeys } from './shared/constants/Storage';
import { setLocale } from './modules/localization/store/action';



function App() {
  const locale = useAppSelector(state => state.localeReducer.locale)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!localStorage.getItem(localStorageKeys.LOCALE)) {
      localStorage.setItem(localStorageKeys.LOCALE, locales.EN)
    } else {
      dispatch(setLocale(localStorage.getItem(localStorageKeys.LOCALE) || locales.EN))
    }
  }, [])

  const themeMode = useAppSelector(state => state.themeReducer.theme)
  const theme = createTheme({
    palette: {
      mode: themeMode ? 'dark' : 'light',
      primary: {
        main: '#6954D6'
      },
      secondary: {
        main: '#FFFFF'
      }
    }
  })

  const messages = {
    [locales.EN]: enMessages,
    [locales.RU]: ruMessages,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path={loginPath} element={<Login />} />
            <Route path={registrationPath} element={<Registration />} />
            <Route element={<ProtectedRoutes />}>
              <Route path={homePath} element={<Modal><Main /></Modal>} />
              <Route path={userPath} element={<Modal><User /></Modal>} />
            </Route>
          </Routes>
        </Grid>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
