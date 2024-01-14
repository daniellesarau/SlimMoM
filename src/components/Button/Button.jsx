import css from './Button.module.css';

export default function Button({
  onClickHandler,
  btnText,
  type,
  disabled,
  autofocus,
}) {
  return (
    <button
      className={css.buttonStyle}
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      autoFocus={autofocus}
    >
      {btnText}
    </button>
  );
}
