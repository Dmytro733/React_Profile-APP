import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";


const Users = (props) => {
  let UsersElements = props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} location={user.location} status={user.status} followed={user.followed} toogleFollowFunction={props.toogleFollow} />)

  let usersAPI = [
    {
      id: 1, 
      name: "Janet", 
      avatar: "https://images.unsplash.com/photo-1470441623172-c47235e287ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      location: {
        country: "Ukraine",
        city: "Ivano-Frankovsk",
      },
      status: "I`m boss",
      followed: true
    },
    {
      id: 2, 
      name: "Dima", 
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      location: {
        country: "English",
        city: "London",
      },
      status: "I`m boss too",
      followed: true
    },
    {
      id: 3, 
      name: "Anna", 
      avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80",
      location: {
        country: "USA",
        city: "California",
      },
      status: "I`m boss too",
      followed: false
    },
    {
      id: 4, 
      name: "Volodimir", 
      avatar: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      location: {
        country: "Ukraine",
        city: "Ivano-Frankovsk",
      },
      status: "I`m boss too",
      followed: false
    }
  ]

  return (
    <div className={style.users_wrap}>
      <div className={style.users}>
        <div className={style.users_items}>
          {UsersElements}
        </div>
        <div className={style.show_more}>
          {
            props.usersData.length == 0 
            ? <button onClick={()=>{props.setUsers(usersAPI)}}>Get Users</button>
            : <button>show more</button>  
          }
        </div>
      </div>
    </div>
  );
};

export default Users;