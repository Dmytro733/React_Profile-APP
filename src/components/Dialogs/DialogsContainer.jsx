import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "./../../redux/reducerDirectPage"
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let state = props.store.getState();

  let addDialogMessageItem = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let updateMessageText = (text) => {
    props.store.dispatch(updateMessageActionCreator(text));
  }

  return (
    <Dialogs updateMessageText={updateMessageText} 
             addDialogMessageItem={addDialogMessageItem}
             dialogsData={state.DirectPage.DialogsData}
             messagesData={state.DirectPage.MessagesData}
             newMessageText={state.DirectPage.newMessageText} />
  );
};

export default DialogsContainer;