import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let PostsData = [
    {avatar: "https://historyurok.com.ua/wp-content/uploads/2020/01/Aktor.jpg", name: "Will Smith", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", likeCount: 10 },
    {avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", name: "Leonardo Dicaprio", message: "Lorem adipisicing elit.", likeCount: 7 }
  ];

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
        <Post avatar={PostsData[0].avatar} name={PostsData[0].name} message={PostsData[0].message} />
        <Post avatar={PostsData[1].avatar} name={PostsData[1].name} message={PostsData[1].message} />
      </div>
    </div>
  );
};

export default MyPosts;