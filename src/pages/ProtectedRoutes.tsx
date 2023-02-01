import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoutes = () => {
    const isAuth = localStorage.getItem('user-token');

    return (
      isAuth ? <Outlet /> : <Navigate to='/login' />
    );
}

export default ProtectedRoutes