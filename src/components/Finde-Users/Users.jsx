import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import * as axios from "axios";


const Users = (props) => {
  // let UsersElements = props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} location={user.location} status={user.status} followed={user.followed} toogleFollowFunction={props.toogleFollow} />)
  let UsersElements = props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} location={user.address} status={user.status} followed={user.followed} toogleFollowFunction={props.toogleFollow} />)


  if(props.usersData.length == 0){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      props.setUsers(response.data);
    })
  }

  return (
    <div className={style.users_wrap}>
      <div className={style.users}>
        <div className={style.users_items}>
          {UsersElements}
        </div>
        <div className={style.show_more}>
          {
            props.usersData.length == 0 
            ? <button onClick={props.setUsers}>Get Users</button>
            : <button>show more</button>  
          }
        </div>
      </div>
    </div>
  );
};

export default Users;