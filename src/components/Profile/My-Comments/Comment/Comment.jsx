import style from "./Comment.module.css";
import React from "react";

const Comment = (props) => {
  return (
    <div className={style.post_item}>
      <div className={style.post_avatar}>
        <div>
          <img src={props.avatar} alt="" />
        </div>
      </div>
      <div className={style.post_content}>
        <div className={style.post_name}>
          <span>{props.first_name} {props.last_name}</span>
        </div>
        <div className={style.post_text}>
          {props.text}
        </div>
        <div className={style.post_buttons}>
          <div className={style.post_like}>
            👍 {props.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;