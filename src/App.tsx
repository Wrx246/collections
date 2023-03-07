import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import { useAppDispatch, useAppSelector } from './shared/hooks/redux';
import locales from './shared/constants/Locales';
import enMessages from './shared/localization/en.json'
import ruMessages from './shared/localization/ru.json'
import { setLocale } from './modules/localization/store/action';
import { checkUser } from './store/user/actions';
import { RouterWrap } from './shared/components/RouterWrap';


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

  // useEffect(() => {
  //   let user = JSON.parse(localStorage.getItem('user-data') || 'false')
  //   if (user !== 'false') {
  //     dispatch(checkUser(Number(user.id), navigate))
  //   }
  // }, [navigate])

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
        <RouterWrap />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
