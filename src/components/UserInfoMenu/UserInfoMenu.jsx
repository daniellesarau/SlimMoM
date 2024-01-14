import { useNavigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import IconBack from '../../styles/images/arrow-mobile.png';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { useState } from 'react';
import ChoiceModal from '../../components/ChoiceModal/ChoiceModal';
import css from './UserInfoMenu.module.css';

export const UserInfoMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(authSelectors.getUserName);
  const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);

  const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/login', { replace: true });
      });
    }
  };

  const handleLogout = () => {
    setIsShowChoiceModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModalHandle = () => {
    setIsShowChoiceModal(false);
  };

  return (
    <div className={css.container}>
      {isShowChoiceModal && (
        <ChoiceModal
          text={'Do you want to log out of your account?'}
          choiceHandler={choiceHandler}
          closeModalHandle={closeModalHandle}
        />
      )}
      <button className={css.buttonBack} onClick={() => navigate(-1)}>
        <img src={IconBack} alt="IconBack" width={12} height={7} />
      </button>

      <div className={css.userInfo}>
        <button className={css.buttonName}>{userName}</button>
        <div className={css.box}></div>
        <button className={css.buttonExit} onClick={handleLogout}>
          Exit
        </button>
      </div>
    </div>
  );
};
