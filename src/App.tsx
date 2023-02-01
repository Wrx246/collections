import { Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material';
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
import './shared/styles/App.css'
import { useAppSelector } from './shared/hooks/redux';



function App() {
  const themeMode = useAppSelector(state => state.themeReducer.theme)
  const theme = createTheme({
    palette: {
      mode: themeMode ? 'dark' : 'light',
      primary: {
        main: '#6954D6'
      },
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='container'>
        <Routes>
          <Route path={loginPath} element={<Login />} />
          <Route path={registrationPath} element={<Registration />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={homePath} element={<Modal><Main /></Modal>} />
            <Route path={userPath} element={<Modal><User /></Modal>} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
