import { connect } from "react-redux";
import { setCurrentPage, setTotalUsersCount, setUsers, toogleFollow, toogleIsFetching, onSelectCountItems } from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.toogleIsFetching(true)
    console.log(this.props)
    setTimeout(() => {
      axios.get(`https://reqres.in/api/users`)
      .then(response => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(response.data.data);
        this.props.setCurrentPage(response.data.page);
        this.props.onSelectCountItems(response.data.per_page);
        this.props.setTotalUsersCount(response.data.total);
      })
    }, 2000)
    
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toogleIsFetching(true);
    setTimeout(() => {
      axios.get(`https://reqres.in/api/users?page=${currentPage}&per_page=${this.props.perPage}`)
      .then(response => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(response.data.data);
      })
    }, 3000)
  }

  onCountItemsChanged = (countItems) => {
    console.log(countItems)
    this.props.onSelectCountItems(countItems);
    this.props.toogleIsFetching(true);
    setTimeout(() => {
      axios.get(`https://reqres.in/api/users?per_page=${countItems}`)
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
              onCountItemsChanged={this.onCountItemsChanged} 
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

export default connect( mapStateToProps, {toogleFollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching, onSelectCountItems} ) (UsersContainer);;