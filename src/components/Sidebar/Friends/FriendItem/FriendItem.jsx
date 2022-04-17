import { NavLink } from "react-router-dom";
import style from "./../Friends.module.css";

const FriendItem = (props) => {
  let path = '/profile/' + props.id;
  return (
    <NavLink className={style.link_to_profile} to={path}>
      <div className={style.friend_item}>
        <div>
          <img src={props.avatar} alt="" />
        </div>
        <span>{props.name}</span>
      </div>
    </NavLink>
  );
};

export default FriendItem;