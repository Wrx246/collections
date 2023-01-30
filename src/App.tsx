import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Registration from './pages/Registration';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
