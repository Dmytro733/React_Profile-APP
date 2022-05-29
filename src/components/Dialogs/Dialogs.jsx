import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {
  
  let DialogsElements = props.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let MessagesElements = props.messagesData.map(message => <MessageItem key={message.id} message={message.message} id={message.id} />)

  let onAddMessage = () => {
    props.addDialogMessageItem();
  }

  let onUpdateMessage = (event) => {
    props.updateMessageText(event.target.value);
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
            <textarea onChange={onUpdateMessage} rows="1" placeholder="type" value={props.newMessageText}></textarea>
            <button  onClick={onAddMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;