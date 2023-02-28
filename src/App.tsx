import { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import Modal from './shared/components/Modal';
import { Login, Main, Registration, User, Item, Collection } from './shared/helpers/Lazy';
import ProtectedRoutes from './pages/ProtectedRoutes';
import {
  adminPath,
  collectionPath,
  homePath,
  itemPath,
  loginPath,
  registrationPath,
  searchPath,
  userPath
} from './shared/constants/Paths';
import { useAppDispatch, useAppSelector } from './shared/hooks/redux';
import locales from './shared/constants/Locales';
import enMessages from './shared/localization/en.json'
import ruMessages from './shared/localization/ru.json'
import { setLocale } from './modules/localization/store/action';
import Preloader from './shared/components/Preloader';
import { SearchItems } from './modules/items';
import Admin from './pages/Admin';
import { checkBan } from './store/user/actions';


function App() {
  const locale = useAppSelector(state => state.localeReducer.locale)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!JSON.parse(JSON.stringify(localStorage.getItem('app.locale')))) {
      localStorage.setItem('app.locale', locales.EN)
    } else {
      dispatch(setLocale(JSON.parse(JSON.stringify(localStorage.getItem('app.locale'))) || locales.EN))
    }
  }, [])

  useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-data') || 'false')
        if(user !== 'false') {
          dispatch(checkBan(Number(user.id), navigate))
        }
      }, [navigate])

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
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path={loginPath} element={<Login />} />
              <Route path={registrationPath} element={<Registration />} />
              <Route path={homePath} element={<Modal><Main /></Modal>} />
              <Route path={`/${collectionPath}`} element={<Modal><Collection /></Modal>} />
              <Route path={`/${itemPath}`} element={<Modal><Item /></Modal>} />
              <Route path={`/${searchPath}`} element={<Modal><SearchItems /></Modal>} />
              <Route path={`/${adminPath}`} element={<Modal><Admin /></Modal>} />
              <Route element={<ProtectedRoutes />}>
                <Route path={userPath} element={<Modal><User /></Modal>} />
              </Route>
            </Routes>
          </Suspense>
        </Grid>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
