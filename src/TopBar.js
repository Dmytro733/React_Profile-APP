import Logo from './Logo.js';
import ContentTopBar from './ContentTopBar.js';
import SearchInput from './SearchInput.js';

const TopBar = () => {
  return (
    <div>
      <Logo/>
      <ContentTopBar/>
      <SearchInput/>
    </div>
  );
};

export default TopBar;
