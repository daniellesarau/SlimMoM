import { Link } from 'react-router-dom';
import LogoImage from '../../styles/images/logo_image.png';
import LogoText from '../../styles/images/logo_text.png';

import css from './Logo.module.css'

const Logo = () => {
  return (
    <Link to="/">
      <div className={css.logoBox}>
        <img className={css.logoPic } src={LogoImage} alt="Logo" />
        <img className={ css.logoText} src={LogoText} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
