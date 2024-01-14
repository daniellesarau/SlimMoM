import css from './Background.module.css';

const Background = ({ children }) => {
  return <div className={css.background}>{children}</div>;
};

export default Background;
