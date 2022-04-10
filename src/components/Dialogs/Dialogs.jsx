import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {
  let DialogsElements = props.DialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
  let MessagesElements = props.MessagesData.map(message => <MessageItem key={message.id} message={message.message} id={message.id} />)

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