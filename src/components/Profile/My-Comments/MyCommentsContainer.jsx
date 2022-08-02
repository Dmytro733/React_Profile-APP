// import React from "react";
import { connect } from "react-redux";
import {addComment, updateComment} from "../../../redux/reducerProfilePage"
import MyComments from "./MyComments";

let mapStateToProps = (state, props) => {
  return {
    comments: props.profileComments,
    newCommentText: state.ProfilePage.newCommentText
  }
}


const MyCommentsContainer = connect(mapStateToProps, {updateComment, addComment}) (MyComments);

export default MyCommentsContainer;