import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <div className={style.content_img}>
        <img src="https://img3.goodfon.com/wallpaper/nbig/0/56/doom-dos-code.jpg" alt="" />
      </div>
      <div className={style.post_info}>
        <div className={style.author_info}>
          <div className={style.author_photo}>
            <img src="https://line25.com/wp-content/uploads/2016/06/6-Code-Wallpaper.jpg" alt="" />
          </div>
          <div className={style.author_date}>
            author data
          </div>
        </div>
        <div className={style.post_text}>
          my post
          <input type="text" />
        </div>
      </div>
      <div className={style.post_items}>
        <div className={style.post_item}>post item</div>
        <div className={style.post_item}>post item</div>
      </div>
    </div>
  );
};

export default Profile;