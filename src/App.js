import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Finde-Users/UsersContainer';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = () => {
  return (
    <Routes>
      <Route to="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="profile" element={ <ProfileContainer /> } />
        <Route path="profile/:id" element={ <ProfileContainer /> } />
        <Route path="dialogs/*" element={ <DialogsContainer />} />
        <Route path="users/*" element={ <UsersContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
