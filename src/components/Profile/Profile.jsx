import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyPostsContainer from "./My-Posts/MyPostsContainer";
import React from "react";

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;