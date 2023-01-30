import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Registration from './pages/Registration';

function App() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: '100vh' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
