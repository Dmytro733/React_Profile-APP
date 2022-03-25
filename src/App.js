import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AnnouncmenteBar from './components/Announcement-Bar/AnnouncementBar';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavMenu from './components/Nav-Menu/NavMenu';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrap">
        <AnnouncmenteBar/>
        <div className="container">
          <div className="App">
            <Header/>
            <NavMenu/>
              <div className='App_wrap_content'>
                <Routes>
                  <Route index path="/profile" element={ <Profile/> } />
                  <Route path="/dialogs" element={<Dialogs />} />
                </Routes>
              </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
