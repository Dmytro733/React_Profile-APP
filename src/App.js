import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AnnouncmenteBar from './components/Announcement-Bar/AnnouncementBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Finde-Users/UsersContainer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import SidebarContainer from './components/Sidebar/SidebarContainer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrap">
        <AnnouncmenteBar/>
        <Header/>
        <div className="content_img">
          <div></div>
          <div></div>
        </div>
        <SidebarContainer />
        <div className='main_content'>
          <div className="container">
            <div className="App">
                <div className='App_wrap_content'>
                  <Routes>
                    <Route index path="/profile" element={ <Profile/> } />
                    <Route path="/dialogs" element={ <DialogsContainer />} />
                    <Route path="/users" element={ <UsersContainer />} />
                  </Routes>
                </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
