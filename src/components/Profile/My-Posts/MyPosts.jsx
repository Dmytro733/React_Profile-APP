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
        <h3 className={style.posts_header}>Customers posts</h3>
        <Post avatar="https://historyurok.com.ua/wp-content/uploads/2020/01/Aktor.jpg" name="Will Smith" message="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
        <Post avatar="https://www.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg" name="Leonardo Dicaprio" message="Lorem adipisicing elit."/>
      </div>
    </div>
  );
};

export default MyPosts;