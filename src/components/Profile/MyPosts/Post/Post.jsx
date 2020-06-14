import React from "react";
import classes from "./Post.module.css";

function Post(props) {
    return (
    <div className={classes.item}>
      <img src="https://www.meme-arsenal.com/memes/64778250478209d48c5dbc733a3256b0.jpg" alt=""/>
      {props.message}
      <div>
        <span className="like">Like {props.likesCount}</span>
      </div>
    </div>
  );
}
export default Post;
