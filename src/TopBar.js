import Logo from './Logo.js';
import ContentTopBar from './ContentTopBar.js';
import SearchInput from './SearchInput.js';

const TopBar = () => {
  return (
    <div className='container'>
      <div className='top_bar_wrap'>
        <Logo/>
        <ContentTopBar/>
        <SearchInput/>
      </div>
    </div>
  );
};

export default TopBar;
