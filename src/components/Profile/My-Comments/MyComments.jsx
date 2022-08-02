import React from "react";
import style from "./MyComments.module.css";
import Comment from "./Comment/Comment";

const MyComments = (props) => {
  let onCommentAdd = () => {
    props.addComment();
  }
  let onCommentChancge = (event) => {
    props.updateComment(event.target.value);
  }

  let CommentsElements = props.comments.map(comment => <Comment key={comment.id} avatar={comment.avatar} first_name={comment.first_name} last_name={comment.last_name} text={comment.text} likeCount={comment.likeCount} />)

  return (
    <div className={style.posts}>
      <div className={style.author_post}>
        <div className={style.post_title}>
          <span>my post</span>
        </div>
        <div className={style.post_text}>
          <input className={style.post_input} type="text" onChange={onCommentChancge} value={props.newCommentText} />
          <button className="primary_button" type="button" onClick={onCommentAdd}>Send</button>
        </div>
      </div>
      <div className={style.post_items}>
        <h3 className={style.posts_header}>Customers posts</h3>
        {CommentsElements}
      </div>
    </div>
  );
};

export default MyComments;