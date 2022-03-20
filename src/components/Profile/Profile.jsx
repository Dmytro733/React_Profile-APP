import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <div className={style.content_img}>
        <img src="https://img3.goodfon.com/wallpaper/nbig/0/56/doom-dos-code.jpg" alt="" />
      </div>
      <div className={style.post_info}>
        <div className={style.author_info}>
          <div className={style.author_photo_wrap}>
            <div className={style.author_photo}>
              <img src="https://line25.com/wp-content/uploads/2016/06/6-Code-Wallpaper.jpg" alt="" />
            </div>
          </div>
          <div className={style.author_data_wrap}>
            <div className={style.author_data}>
              <div className={`${style.author_name} ${style.author_date_item}`}>DamiKing</div>
              <div className={style.author_date_item}>
                <span>Day of Birth:</span>
                <span className={style.author_birth}>4 April</span>
              </div>
              <div className={style.author_date_item}>
                <span>City:</span>
                <span className={style.author_home_location}>Ivano-Frankovsk</span>
              </div>
              <div className={style.author_date_item}>
                <span>Education:</span>
                <span className={style.author_education}>IFNTU-NH</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.post_text}>
          <span className={style.post_title}>my post</span>
          <input className={style.post_input} type="text" />
          <input className={style.post_input_submit} type="submit" />
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