import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyPosts from "./My-Posts/MyPosts";
import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts ProfilePage={props.ProfilePage} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;