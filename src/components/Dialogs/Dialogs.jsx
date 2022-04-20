import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {
  let DialogsElements = props.DirectPage.DialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let MessagesElements = props.DirectPage.MessagesData.map(message => <MessageItem key={message.id} message={message.message} id={message.id} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
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
            <textarea ref={newPostElement} rows="2"></textarea>
            <button  onClick={addPost}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;