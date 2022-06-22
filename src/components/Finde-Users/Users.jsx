import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";


const Users = (props) => {
  let UsersElements = props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} country={user.country} city={user.city} message={user.message} />)

  let onAddMessage = () => {
    props.addDialogMessageItem();
  }

  let onUpdateMessage = (event) => {
    props.updateMessageText(event.target.value);
  }

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