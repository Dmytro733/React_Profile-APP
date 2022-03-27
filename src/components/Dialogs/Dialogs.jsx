import style from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={style.dialogs_wrap}>
      <div className={style.dialogs}>
        <div className={style.dialogs_items}>
          <div className={style.dialog}>Janna</div>
          <div className={style.dialog}>Dima</div>
          <div className={style.dialog}>Anna</div>
          <div className={style.dialog}>Volodimir</div>
          <div className={style.dialog}>Oksana</div>
          <div className={style.dialog}>Anastasiya</div>
        </div>
        <div className={style.messages}>
          <div className={style.message}>Hi😊</div>
          <div className={style.message}>How are you?</div>
          <div className={style.message}>Do you go?</div>
          <div className={style.message}>Yes😂</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;