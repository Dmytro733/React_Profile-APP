import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import * as axios from "axios";


class Users extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      this.props.setUsers(response.data);
    })
  }

  render(){
    return(
      <div className={style.users_wrap}>
        <div className={style.users}>
          <div className={style.users_items}>
            {
              this.props.usersData.map(user => <UserItem key={user.id} name={user.name} id={user.id} avatar={user.avatar} location={user.address} status={user.status} followed={user.followed} toogleFollowFunction={this.props.toogleFollow} />)
            }
          </div>
          <div className={style.show_more}>
            <button>show more</button>  
          </div>
        </div>
      </div>
    )
  }  
}

export default Users;