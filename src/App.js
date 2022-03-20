import './App.css';
import AnnouncmenteBar from './components/Announcement-Bar/AnnouncementBar';
import Header from './components/Header/Header';
import NavMenu from './components/Nav-Menu/NavMenu';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="App-wrap">
      <AnnouncmenteBar/>
      <div className="container">
        <div className="App">
          <Header/>
          <NavMenu/>
          <Profile/>
        </div>
      </div>
    </div>
  );
}

export default App;
