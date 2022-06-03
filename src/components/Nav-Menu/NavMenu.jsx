import { Link, NavLink } from "react-router-dom";
import style from "./NavMenu.module.css";
import React from "react";

const NavMenu = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_item}>
        <NavLink to='/'><span>H</span>ome</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink to='/dialogs'><span>M</span>essages</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink to='/profile'><span>P</span>rofile</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink to='/'><span>A</span>bout</NavLink>
      </div>
    </nav>
  );
}

export default NavMenu;
  