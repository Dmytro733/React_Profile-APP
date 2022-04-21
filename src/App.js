import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AnnouncmenteBar from './components/Announcement-Bar/AnnouncementBar';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrap">
        <AnnouncmenteBar/>
        <Header/>
        <div className="content_img">
          <div></div>
          <div></div>
        </div>
        <Sidebar Sidebar={props.state.Sidebar} />
        <div className='main_content'>
          <div className="container">
            <div className="App">
                <div className='App_wrap_content'>
                  <Routes>
                    <Route index path="/profile" element={ <Profile ProfilePage={props.state.ProfilePage}/> } />
                    <Route path="/dialogs" element={ <Dialogs DirectPage={props.state.DirectPage} addDialogMessage={props.addDialogMessage} updateMessageText={props.updateMessageText}/>} />
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
