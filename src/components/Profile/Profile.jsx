import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyPosts from "./My-Posts/MyPosts";
import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts ProfilePage={props.ProfilePage} objectFunctions_ProfilePage={props.objectFunctions_ProfilePage}/>
    </div>
  );
};

export default Profile;