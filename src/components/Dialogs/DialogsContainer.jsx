import { connect } from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "./../../redux/reducerDirectPage"
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.DirectPage.DialogsData,
    messagesData: state.DirectPage.MessagesData,
    newMessageText: state.DirectPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addDialogMessageItem: () => {
      dispatch(addMessageActionCreator())
    },

    updateMessageText: (text) => {
      dispatch(updateMessageActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;