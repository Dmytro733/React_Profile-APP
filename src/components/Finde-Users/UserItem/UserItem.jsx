import { NavLink } from "react-router-dom";
import style from "./../Users.module.css";
import React from "react";

const UserItem = (props) => {
  let path = '/profile/'+props.id;
  
  return (
    <NavLink className={style.user_item_wrap} to={path}>
      <div className={style.follow_and_avatar}>
        <div className={style.user_avatar}>
          {
            props.avatar === undefined
            ? <img src="https://images.unsplash.com/photo-1470441623172-c47235e287ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            : <img src={props.avatar} alt="" />
          }
        </div> 
        <button type="button" className={style.to_follow} onClick={()=>{props.toogleFollowFunction(props.id)}}>
          {props.followed ? "unfollow" : "follow"}
        </button>
      </div>
      <div className={style.user_info}>
        <div className={style.user_name}>
          {props.first_name} {props.last_name}
        </div>
        <div className={style.user_location}>
          <span></span>
          {
            props.location !== undefined && props.location.city !== undefined 
            ? props.location.city
            : "London, "
          }
          {
            props.location !== undefined && props.location.street !== undefined
            ? props.location.street
            : "Kulas Light"
          }
        </div>
        <div className={style.user_status}>
          {
            props.status === undefined 
            ? "I`m boss"
            : props.status
          }
        </div>
      </div>
    </NavLink>
  )
}

export default UserItem;