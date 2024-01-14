import Logo from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authOperations, authSelectors } from '../../redux/auth';
import MenuIcon from '../../styles/images/menu.png';
import CloseMenuIcon from '../../styles/images/close.png';
import ChoiceModal from '../ChoiceModal/ChoiceModal';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const AuthNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const userName = useSelector(authSelectors.getUserName);
  const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);

  const UserMenuOpen = () => {
    const MenuRoot = document.querySelector('#menu-root');
    if (openMenu) {
      const ScrollVisible = () => {
        document.body.style.overflow = 'visible';
      };
      return createPortal(
        <div className={css.modalBox}>
          <NavLink
            className={css.modalOpen}
            to="/diary"
            onClick={() => {
              setOpenMenu(false);
              ScrollVisible();
            }}
          >
            {' '}
            Diary
          </NavLink>
          <NavLink
            className={css.modalOpen}
            to="/calculator"
            onClick={() => {
              setOpenMenu(false);
              ScrollVisible();
            }}
          >
            Calculator
          </NavLink>
        </div>,
        MenuRoot
      );
    }
    return null;
  };

  const UserMenu = () => {
    return (
      <div className={css.navigation}>
        <NavLink className={css.navLink} to="/diary">
          Diary
        </NavLink>
        <NavLink className={css.navLink} to="/calculator">
          Calculator
        </NavLink>
      </div>
    );
  };

  const handleLogout = () => {
    setIsShowChoiceModal(true);
    document.body.style.overflow = 'hidden';
  };

  const CloseMenu = () => {
    const HandleClickOpen = e => {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      setOpenMenu(true);
      return;
    };

    const HandleClickClose = e => {
      e.preventDefault();
      document.body.style.overflow = 'visible';
      setOpenMenu(false);
      return;
    };
    if (openMenu) {
      return (
        <button
          className={css.buttonMenu}
          onClick={HandleClickClose}
          style={{ marginRight: '4px' }}
        >
          <img src={CloseMenuIcon} alt="CloseMenuIcon" />
        </button>
      );
    }
    return (
      <button className={css.buttonMenu} onClick={HandleClickOpen}>
        <img src={MenuIcon} alt="MenuIcon" />
      </button>
    );
  };

  const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/login', { replace: true });
      });
    }
  };
  const closeModalHandle = () => {
    setIsShowChoiceModal(false);
  };

  return (
    <div className={css.containerAuthNav}>
      {isShowChoiceModal && (
        <ChoiceModal
          text={'you want to log out of your account?'}
          choiceHandler={choiceHandler}
          closeModalHandle={closeModalHandle}
        />
      )}

      <div className={css.header}>
        <div className={css.logoBox}>
          <Logo />
        </div>
        <div className={css.containerUser}>
          <UserMenu />
        </div>
        <div className={css.user}>
          <div className={css.userBox}>
            <span>{userName}</span>
            <div className={css.buttonBox}></div>
            <button className={css.button} type="button" onClick={handleLogout}>
              Exit
            </button>
          </div>
          <CloseMenu />
        </div>
      </div>
      <UserMenuOpen />
    </div>
  );
};

export default AuthNav;
