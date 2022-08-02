import React from "react";
import { Outlet } from "react-router-dom";

import AnnouncmenteBar from '../Announcement-Bar/AnnouncementBar';
import Header from '../Header/Header';
import SidebarContainer from '../Sidebar/SidebarContainer';

let Layout = () => {
  return( 
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
                <Outlet />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;