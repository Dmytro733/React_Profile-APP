import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {
  let DialogsElements = props.DirectPage.DialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let MessagesElements = props.DirectPage.MessagesData.map(message => <MessageItem key={message.id} message={message.message} id={message.id} />)

  return (
    <div className={style.dialogs_wrap}>
      <div className={style.dialogs}>
        <div className={style.dialogs_items}>
          {DialogsElements}
        </div>
        <div className={style.messages}>
          {MessagesElements}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;