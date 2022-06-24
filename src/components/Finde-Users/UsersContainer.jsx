import { connect } from "react-redux";
import { setUsersActionCreator, toogleFollowActionCreator } from "../../redux/reducerUsers";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    usersData: state.UsersPage.Users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toogleFollow: (userId) => {
      dispatch(toogleFollowActionCreator(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;