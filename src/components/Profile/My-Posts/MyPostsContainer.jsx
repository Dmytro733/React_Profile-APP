// import React from "react";
import { connect } from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "./../../../redux/reducerProfilePage"
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addNewPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }
//   let updateNewPostText = (text) => {
//     props.store.dispatch(updatePostActionCreator(text));
//   }

//   return (
//     <MyPosts updateNewPostText={updateNewPostText} 
//              addNewPost={addNewPost}
//              posts={state.ProfilePage.PostsData}
//              newPostText={state.ProfilePage.newPostText} />
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.ProfilePage.PostsData,
    newPostText: state.ProfilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updatePostActionCreator(text));
    },

    addNewPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;