import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyPosts from "./My-Posts/MyPosts";
import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts ProfilePage={props.ProfilePage} dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;