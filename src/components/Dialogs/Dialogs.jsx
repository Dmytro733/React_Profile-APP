import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "./../../redux/state"


const Dialogs = (props) => {
  
  let DialogsElements = props.DirectPage.DialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let MessagesElements = props.DirectPage.MessagesData.map(message => <MessageItem key={message.id} message={message.message} id={message.id} />)
  let newMessageElement = React.createRef();

  let addDialogMessageItem = () => {
    props.dispatch(addMessageActionCreator());
  }

  let updateMessageText = () => {
    props.dispatch(updateMessageActionCreator(newMessageElement.current.value));
  }

  return (
    <div className={style.dialogs_wrap}>
      <div className={style.dialogs}>
        <div className={style.dialogs_items}>
          {DialogsElements}
        </div>
        <div className={style.messages}>
          {MessagesElements}
          <div className={style.typing_message}>
            <textarea onChange={updateMessageText} ref={newMessageElement} rows="1" placeholder="type" value={props.DirectPage.newMessageText}></textarea>
            <button  onClick={addDialogMessageItem}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;