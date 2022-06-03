import style from "./Sidebar.module.css";
import Friends from "./Friends/Friends";
import React from 'react';

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <div>
        <Friends friends={props.sidebarData.Friends} />
      </div>
    </div>
  );
};

export default Sidebar;