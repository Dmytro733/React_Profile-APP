import { NavLink } from "react-router-dom";
import style from "./../Users.module.css";
import React from "react";

const UserItem = (props) => {
  let path = '/user/' + props.id;
  return (
    <NavLink className={style.dialog} to={path}>
      <div>
        <img className={style.dialog_avatar} src={props.avatar} alt="" />
      </div>
      {props.name}
    </NavLink>
  )
}

export default UserItem;