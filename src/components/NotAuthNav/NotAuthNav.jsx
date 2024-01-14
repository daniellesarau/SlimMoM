import Logo from '../../components/Logo/Logo';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './NotAuthNav.module.css';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const NotAuthNav = ({ localPage }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if (
    (localPage === 'LoginPage' || localPage === 'RegistrationPage') &&
    windowSize.innerWidth > 1279
  ) {
    return (
      <>
        <Logo />
      </>
    );
  }

  return (
    <div className={css.container}>
      <Logo />
      <div className={css.redirect}>
        <NavLink className={css.linkTo} to="/login">
          Login
        </NavLink>
        <NavLink className={css.linkTo} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default NotAuthNav;
