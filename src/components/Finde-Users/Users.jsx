import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import { NavLink } from "react-router-dom";


// const Users = (props) => {
//   let UsersElements = props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} location={user.location} status={user.status} followed={user.followed} />)

//   return (
//     <div className={style.users_wrap}>
//       <div className={style.users}>
//         <div className={style.users_items}>
//           {UsersElements}
//         </div>
//         <div className={style.show_more}>
//           <button>
//             show more
//           </button>  
//         </div>
//       </div>
//     </div>
//   );
// };


const Users = (props) => {
  console.log(props)
  return (
    <div className={style.users_wrap}>
      <div className={style.users}>
        <div className={style.users_items}>
          {props.usersData.map(user => {
            return (
              <div className={style.user_item_wrap}>
                <div className={style.follow_and_avatar}>
                  <div className={style.user_avatar}>
                    <img src={user.avatar} alt="" />
                  </div>
                  <button type="button" className={style.to_follow} onClick={()=> { props.toogleFollow(user.id) }}>
                    {user.followed ? "unfollow" : "follow"}
                  </button>
                </div>
                <div className={style.user_info}>
                  <NavLink className={style.user_name} to={`/user/${user.id}`}>
                    {user.name}
                  </NavLink>
                  <div className={style.user_location}>
                    <span></span>
                    {user.location.country}, {user.location.city} 
                  </div>
                  <div className={style.user_status}>
                    {user.status}
                  </div>
                </div>
              </div>
            )
          })}
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