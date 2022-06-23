import { connect } from "react-redux";
import { toogleFollowActionCreator } from "../../redux/reducerUsers";
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;