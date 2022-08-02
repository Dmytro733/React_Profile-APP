import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Preloader from "../common/Preloader/Preloader";
import Filter from "./Filter/Filter";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsers / props.perPage);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return( 
    <div className={style.users_wrap}>
      <Filter perPage={props.perPage} isFatching={props.isFatching} onCountItemsChanged={props.onCountItemsChanged} />
      {props.isFatching 
      ? <Preloader /> 
      : <div className={style.users}>
          <div className={style.users_items}>
            {props.usersData.map(user => 
              <UserItem 
                key={user.id} 
                id={user.id} 
                first_name={user.first_name} 
                last_name={user.last_name} 
                avatar={user.avatar} 
                location={user.address} 
                status={user.status} 
                followed={user.followed} 
                toogleFollowFunction={props.toogleFollow}
              />
            )}
          </div>
          <div className={style.pagination}>
            {pages.map(page => {
              return  <span 
                        className={props.currentPage === page ? `${style.carrent_page} ${style.page_item}` : style.page_item} 
                        onClick={()=>{props.onPageChanged(page)}}>{page}
                      </span> 
            })}
          </div>
        </div>
      }
    </div>
  )
}

export default Users;