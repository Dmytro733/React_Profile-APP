import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post_item}>
      <div className={style.post_avatar}>
        <div>
          <img src={props.avatar} alt="" />
        </div>
      </div>
      <div className={style.post_content}>
        <div className={style.post_name}>
          <span>{props.name}</span>
        </div>
        <div className={style.post_text}>
          {props.message}
        </div>
        <div className={style.post_buttons}>
          <div className={style.post_like}>
            Like
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;