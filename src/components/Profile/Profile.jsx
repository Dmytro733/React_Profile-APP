import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyCommentsContainer from "./My-Comments/MyCommentsContainer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
  return (
    <div>
      {props.isFetching
      ? <Preloader />
      : <>
          <ProfileInfo profile={props.profile} />
          <MyCommentsContainer profileComments={props.profile.comments} />
        </>
      }
      
    </div>
  );
};

export default Profile;