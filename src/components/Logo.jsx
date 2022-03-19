import logo from '../logo.svg';
import style from "./Header.module.css"

const Logo = () => {
  return(
    <div className={style.logo_header}>
      <img src={logo} className={style.App_logo} alt="logo" />
    </div>
  );
}

export default Logo;
