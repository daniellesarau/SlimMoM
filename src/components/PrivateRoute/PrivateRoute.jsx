import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';
import { authSelectors } from '../../redux/auth';

export const PrivateRoute = ({ navigateTo = '/login' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={navigateTo} />;
};
