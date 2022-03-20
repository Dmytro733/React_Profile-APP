import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.posts}>
      <div className={style.author_post}>
        <div className={style.post_title}>
          <span>my post</span>
        </div>
        <div className={style.post_text}>
          <input className={style.post_input} type="text" />
          <input className={style.post_input_submit} type="submit" />
        </div>
      </div>
      <div className={style.post_items}>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;