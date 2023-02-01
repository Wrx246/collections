import { Route, Routes } from 'react-router-dom'
import Modal from './components/Modal';
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Registration from './pages/Registration';
import User from './pages/User';
import './shared/styles/App.css'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Modal><Main /></Modal>} />
          <Route path="/user" element={<Modal><User /></Modal>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
