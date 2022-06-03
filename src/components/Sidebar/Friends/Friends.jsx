import Friend from "./FriendItem/FriendItem";
import style from "./Friends.module.css";
import React from 'react';


const Friends = (props) => {
  let FriendsElements = props.friends.map(friend => <Friend  key={friend.id} name={friend.name} id={friend.id} avatar={friend.avatar} />)

  return (
    <div className={style.friends_items}>
      {FriendsElements}
    </div>
  );
};

export default Friends;