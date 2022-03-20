import Logo from './Logo';
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.header}>
        <Logo/>
    </header>
  );
};

export default Header;
