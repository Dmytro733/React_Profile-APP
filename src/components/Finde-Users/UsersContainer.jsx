import { connect } from "react-redux";
import { setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, toogleFollowActionCreator, toogleIsFetchingAC } from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.toogleIsFetching(true)
    setTimeout(() => {
      axios.get(`https://reqres.in/api/users?per_page=${this.props.perPage}`)
      .then(response => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(response.data.data);
        this.props.setTotalUsersCount(response.data.total);
        this.props.setCurrentPage(response.data.page);
      })
    }, 3000)
    
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    this.props.toogleIsFetching(true)
    setTimeout(() => {
      axios.get(`https://reqres.in/api/users?page=${currentPage}&per_page=${this.props.perPage}`)
      .then(response => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(response.data.data);
      })
    }, 3000)
  }

  render(){
    return  <Users 
              totalUsers={this.props.totalUsers}
              perPage={this.props.perPage}
              onPageChanged={this.onPageChanged} 
              currentPage={this.props.currentPage}
              toogleFollow={this.props.toogleFollow}
              usersData={this.props.usersData}
              isFatching ={this.props.isFatching}
            />
  }  
}

let mapStateToProps = (state) => {
  return {
    usersData: state.UsersPage.Users,
    totalUsers: state.UsersPage.totalUsers,
    perPage: state.UsersPage.perPage,
    currentPage: state.UsersPage.currentPage,
    isFatching: state.UsersPage.isFatching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toogleFollow: (userId) => {
      dispatch(toogleFollowActionCreator(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },

    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage))
    },

    setTotalUsersCount: (usersCount) => {
      dispatch(setTotalUsersCountActionCreator(usersCount))
    },

    toogleIsFetching: (isFatching) => {
      dispatch(toogleIsFetchingAC(isFatching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);;