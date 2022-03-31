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

const Dialogs = () => {
  return (
    <div className={style.dialogs_wrap}>
      <div className={style.dialogs}>
        <div className={style.dialogs_items}>
          <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
          <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}  />
          <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}  />
          <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}  />
          <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}  />
          <DialogItem name={DialogsData[5].name} id={DialogsData[5].id}  />
        </div>
        <div className={style.messages}>
          <MessageItem message={MessagesData[0].message} id={MessagesData[0].id} />
          <MessageItem message={MessagesData[1].message} id={MessagesData[1].id} />
          <MessageItem message={MessagesData[2].message} id={MessagesData[2].id} />
          <MessageItem message={MessagesData[3].message} id={MessagesData[3].id} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;