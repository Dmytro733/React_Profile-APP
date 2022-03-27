import Logo from './Logo';
import style from "./Header.module.css"
import NavMenu from '../Nav-Menu/NavMenu';

const Header = () => {
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.header_content}>
          <Logo/>
          <NavMenu/>
        </div>
      </div>
    </header>
  );
};

export default Header;
