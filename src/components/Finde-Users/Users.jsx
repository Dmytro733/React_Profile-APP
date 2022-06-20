import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";


const Users = (props) => {
  let UsersElements = props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} />)

  let onAddMessage = () => {
    props.addDialogMessageItem();
  }

  let onUpdateMessage = (event) => {
    props.updateMessageText(event.target.value);
  }

  return (
    <div className={style.dialogs_wrap}>
      <div className={style.dialogs}>
        <div className={style.dialogs_items}>
          {UsersElements}
        </div>
      </div>
    </div>
  );
};

export default Users;