import { Route, Routes } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import { useAppSelector } from './shared/hooks/redux';



function App() {
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
