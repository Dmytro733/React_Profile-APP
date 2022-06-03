import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";
import React from "react";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <NavLink className={style.dialog} to={path}>
      <div>
        <img className={style.dialog_avatar} src={props.avatar} alt="" />
      </div>
      {props.name}
    </NavLink>
  )
}

export default DialogItem;