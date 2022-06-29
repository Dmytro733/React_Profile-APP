import { connect } from "react-redux";
import { setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, toogleFollowActionCreator } from "../../redux/reducerUsers";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    usersData: state.UsersPage.Users,
    totalUsers: state.UsersPage.totalUsers,
    perPage: state.UsersPage.perPage,
    currentPage: state.UsersPage.currentPage
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;