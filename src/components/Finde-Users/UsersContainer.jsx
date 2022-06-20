import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    usersData: state.UsersPage.Users
  }
}

let mapDispatchToProps = (dispatch) => {
  // return {
  //   addDialogMessageItem: () => {
  //     dispatch(addMessageActionCreator())
  //   },

  //   updateMessageText: (text) => {
  //     dispatch(updateMessageActionCreator(text))
  //   }
  // }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;