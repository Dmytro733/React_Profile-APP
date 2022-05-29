import ProfileInfo from "./Profile-Info/ProfileInfo";
import MyPosts from "./My-Posts/MyPosts";
import MyPostsContainer from "./My-Posts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;