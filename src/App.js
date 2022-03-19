import './App.css';
import AnnouncmenteBar from './components/AnnouncementBar';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Profile from './components/Profile';

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
