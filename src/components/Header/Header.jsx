import AuthNav from '../AuthNav/AuthNav';
import NotAuthNav from '../NotAuthNav/NotAuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import css from './Header.module.css';

const Header = ({ localPage }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  if ((localPage = 'CalculatorPage')) {
  }

  return (
    <>
      <header className={css.headerBox}>
        {!isUserLoggedIn && <NotAuthNav localPage={localPage} />}

        {isUserLoggedIn && <AuthNav localPage={localPage} />}
      </header>
      <div className={css.menu} id="menu-root"></div>
    </>
  );
};

export default Header;
