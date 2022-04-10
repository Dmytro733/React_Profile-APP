import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let PostsElements = props.PostsData.map(post => <Post key={post.id} avatar={post.avatar} name={post.name} message={post.message} likeCount={post.likeCount} />)

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
        {PostsElements}
      </div>
    </div>
  );
};

export default MyPosts;