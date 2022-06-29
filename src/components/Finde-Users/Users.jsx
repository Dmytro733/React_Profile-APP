import React from "react";
import style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import * as axios from "axios";


class Users extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    axios.get(`https://reqres.in/api/users?per_page=${this.props.perPage}`)
    .then(response => {
      this.props.setUsers(response.data.data);
      this.props.setTotalUsersCount(response.data.total);
      this.props.setCurrentPage(response.data.page);
    })
  }

  onPageChanged(currentPage){
    this.props.setCurrentPage(currentPage)
    axios.get(`https://reqres.in/api/users?page=${currentPage}&per_page=${this.props.perPage}`)
    .then(response => {
      this.props.setUsers(response.data.data);
    })
  }

  render(){
    let pagesCount = Math.ceil(this.props.totalUsers / this.props.perPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return( 
      <div className={style.users_wrap}>
        <div className={style.users}>
          <div className={style.users_items}>
            {this.props.usersData.map(user => 
              <UserItem 
                key={user.id} 
                id={user.id} 
                first_name={user.first_name} 
                last_name={user.last_name} 
                avatar={user.avatar} 
                location={user.address} 
                status={user.status} 
                followed={user.followed} 
                toogleFollowFunction={this.props.toogleFollow} 
              />
            )}
          </div>
          <div className={style.pagination}>
            {pages.map(page => {
              return  <span 
                        className={this.props.currentPage === page ? `${style.carrent_page} ${style.page_item}` : style.page_item} 
                        onClick={()=>{this.onPageChanged(page)}}>{page}
                      </span> 
            })}
          </div>
        </div>
      </div>
    )
  }  
}

export default Users;