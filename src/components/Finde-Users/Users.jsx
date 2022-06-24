import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";


const Users = (props) => {
  let UsersElements = props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} location={user.location} status={user.status} followed={user.followed} toogleFollowFunction={props.toogleFollow} />)

  return (
    <div className={style.users_wrap}>
      <div className={style.users}>
        <div className={style.users_items}>
          {UsersElements}
        </div>
        <div className={style.show_more}>
          <button>
            show more
          </button>  
        </div>
      </div>
    </div>
  );
};

export default Users;