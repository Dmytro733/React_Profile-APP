import TopBar from './TopBar.js';
import NavMenu from './NavMenu.js';

const Header = () => {
  return (
    <header className='header'>
      <TopBar/>
      <NavMenu/>
    </header>
  );
};

export default Header;
