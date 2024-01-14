import { useEffect } from 'react';
import Button from '../Button/Button';
import css from './ChoiceModal.module.css';

function ChoiceModal({ text, choiceHandler, closeModalHandle, subText }) {
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
  });

  const escKeyHandle = event => {
    if (event.keyCode === 27) {
      choiceHandler(false);
      closeModalHandle();
      document.body.style.overflow = 'visible';
    }
  };

  const onClickOvrlHandle = event => {
    if (event.target.id === 'modal-overlay') {
      choiceHandler(false);
      closeModalHandle();
      document.body.style.overflow = 'visible';
    }
  };

  const onOkClickHandle = () => {
    choiceHandler(true);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  const onCancelClickHandle = () => {
    choiceHandler(false);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  const closeModal = () => {
    choiceHandler(false);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  return (
    <div className={css.overlay} id="modal-overlay" onClick={onClickOvrlHandle}>
      <div className={css.modal}>
        <div className={css.buttonBox}>
          <button className={css.button} onClick={() => closeModal()}>
            <svg viewBox="0 0 30 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </svg>
          </button>
        </div>

        <div className={css.content}>
          <h2 className={css.title}>Are you sure, {text}?</h2>
          <p className={css.subtext}>{subText}</p>

          <div className={css.buttonWrapper}>
            <Button
              onClickHandler={onCancelClickHandle}
              btnText="Cancel"
              autofocus={true}
            />
            <Button
              onClickHandler={onOkClickHandle}
              btnText="Confirm"
              autofocus={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceModal;
