import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "./../../../redux/reducerProfilePage"
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let updateNewPostText = (text) => {
    props.store.dispatch(updatePostActionCreator(text));
  }

  return (
    <MyPosts updateNewPostText={updateNewPostText} 
             addNewPost={addNewPost}
             posts={state.ProfilePage.PostsData}
             newPostText={state.ProfilePage.newPostText} />
  );
};

export default MyPostsContainer;