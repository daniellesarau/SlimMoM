import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import CloseBtn from '../CloseBtn/CloseBtn';
import IconBack from '../../styles/images/arrow-mobile.png';
import css from './Modal.module.css';

function Modal({
  closeModalHandle,
  userData: { userDailyCalorieIntake, userNotRecommendedProducts },
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const escKeyHandle = event => {
      if (event.keyCode === 27) {
        closeModalHandle();
      }
    };

    const handleEscKeyPress = event => {
      escKeyHandle(event);
    };

    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [closeModalHandle]);

  const onClickOverlayHandle = event => {
    if (event.target.id === 'modal-overlay') {
      closeModalHandle();
    }
  };

  const onBtnClickHandle = () => {
    closeModalHandle();
    navigate('/register', { replace: true });
  };

  const closeModal = () => {
    closeModalHandle();
  };

  return (
    <div
      className={css.container}
      id="modal-overlay"
      onClick={onClickOverlayHandle}
    >
      <div className={css.modal}>
        <div className={css.buttonBox}>
          <button className={css.buttonBack} onClick={() => closeModal()}>
            <img src={IconBack} alt="IconBack" width={12} height={7} />
          </button>
          <div className={css.buttonCloseBox}>
            <CloseBtn onHandleClick={closeModal} />
          </div>
        </div>
        <div className={css.content}>
          <h2 className={css.title}>
            Your recommended daily calorie intake is
          </h2>
          <p className={css.text}>
            {userDailyCalorieIntake}
            <span> Kcal</span>
          </p>
          <p className={css.productText}>Foods you shouldn't eat</p>
          <ol className={css.list}>
            {userNotRecommendedProducts?.map(product => (
              <li key={product}></li>
            ))}
          </ol>
          <Button
            onClickHandler={onBtnClickHandle}
            btnText="Start losing weight"
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
