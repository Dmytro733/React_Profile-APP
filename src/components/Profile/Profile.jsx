import AuthorInfo from "./Author-Info/AuthorInfo";
import MyPosts from "./My-Posts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.profile_content}>
      <div className={style.profile_content_img}>
        <img src="https://img3.goodfon.com/wallpaper/nbig/0/56/doom-dos-code.jpg" alt="" />
      </div>
      <div className={style.post_info}>
        <AuthorInfo/>
        <MyPosts/>
      </div>
    </div>
  );
};

export default Profile;