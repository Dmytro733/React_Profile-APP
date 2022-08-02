import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyCommentsContainer from "./My-Comments/MyCommentsContainer";
import React from "react";
import { useParams } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
  const {id} = useParams();
  const toogleId = id ? id : 1;
  props.setUserId(toogleId)
  return (
    <div>
      {props.isFetching
      ? <Preloader />
      : <>
          <ProfileInfo isFetching={props.isFetching} profile={props.profile} />
          <MyCommentsContainer isFetching={props.isFetching} profileComments={props.profile.comments} />
        </>
      }
      
    </div>
  );
};

export default Profile;