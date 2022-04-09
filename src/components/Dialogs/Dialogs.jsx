import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const MessageItem = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  )
}

let DialogsData = [
  {id: 1, name: "Janet"},
  {id: 2, name: "Dima"},
  {id: 3, name: "Anna"},
  {id: 4, name: "Volodimir"},
  {id: 5, name: "Oksana"},
  {id: 6, name: "Anastasiya"}
];

let MessagesData = [
  {id: 1, message: "Hi😊"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Do you go?"},
  {id: 4, message: "Yes😂"},
];

let DialogsElements = DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
let MessagesElements = MessagesData.map(message => <MessageItem message={message.message} id={message.id} />)

const Dialogs = () => {
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