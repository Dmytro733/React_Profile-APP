import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyPosts from "./My-Posts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
};

export default Profile;