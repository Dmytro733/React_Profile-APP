import { NavLink } from "react-router-dom";
import style from "./../Users.module.css";
import React from "react";

const UserItem = (props) => {
  let path = '/user/' + props.id;

  return (
    <div className={style.user_item_wrap}>
      <div className={style.follow_and_avatar}>
        <div className={style.user_avatar}>
          <img src={props.avatar} alt="" />
        </div>
        <button type="button" className={style.to_follow} onClick={()=>{props.toogleFollowFunction(props.id)}}>
          {props.followed ? "unfollow" : "follow"}
        </button>
      </div>
      <div className={style.user_info}>
        <NavLink className={style.user_name} to={path}>
          {props.name}
        </NavLink>
        <div className={style.user_location}>
          <span></span>
          {props.location.country}, {props.location.city} 
        </div>
        <div className={style.user_status}>
          {props.status}
        </div>
      </div>
    </div>
  )
}

export default UserItem;