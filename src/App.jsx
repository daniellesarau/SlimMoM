import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import Toasts from './components/Toasts/Toasts';
import { useDispatch, useSelector } from 'react-redux';
import { actionCurrent } from './redux/auth/auth-operations';
import { authSelectors } from './redux/auth/auth-selectors';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);

function App() {
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const dispatch = useDispatch();
  const token = localStorage.getItem('AUTH_TOKEN');

  useEffect(() => {
    if (token) {
      dispatch(actionCurrent());
    }
  }, [dispatch, token]);

  return (
    <>
      {!isFetchingUser && (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<PublicRoute restricted />}>
                <Route path="" element={<MainPage />} />
              </Route>

              <Route path="/register" element={<PublicRoute restricted />}>
                <Route path="" element={<RegistrationPage />} />
              </Route>

              <Route path="/login" element={<PublicRoute restricted />}>
                <Route path="" element={<LoginPage />} />
              </Route>

              <Route path="/calculator" element={<PrivateRoute />}>
                <Route path="" element={<CalculatorPage />} />
              </Route>

              <Route path="/diary" element={<PrivateRoute />}>
                <Route path="" element={<DiaryPage />} />
              </Route>

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
          <Toasts />
        </>
      )}
    </>
  );
}

export default App;
