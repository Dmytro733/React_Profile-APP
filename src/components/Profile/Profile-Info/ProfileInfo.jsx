import style from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
  return (
    <div className={style.profile_content}>
      <div className={style.author_info}>
        <div className={style.author_photo_wrap}>
          <div className={style.author_photo}>
            <img src={props.profile.avatar} alt="" />
          </div>
        </div>
        <div className={style.author_data_wrap}>
          <div className={style.author_data}>
            <div className={`${style.author_name} ${style.author_date_item}`}>
              <span>{props.profile.first_name} </span>
              <span>{props.profile.last_name}</span>
            </div>
            <div className={style.author_date_item}>
              <span>Day of Birth:</span>
              <span className={style.author_birth}>{props.profile.day_of_birth}</span>
            </div>
            <div className={style.author_date_item}>
              <span>City:</span>
              <span className={style.author_home_location}>
                {props.profile.location.country}, {props.profile.location.city}
              </span>
            </div>
            <div className={style.author_date_item}>
              <span>Education:</span>
              <span className={style.author_education}>
                {props.profile.education}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;