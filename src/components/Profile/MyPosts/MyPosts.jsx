import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsElement = props.posts.map((posts) => (
    <Post likesCount={posts.likeCounts} message={posts.message} key={posts.id}/>
  ));

  let newPostElement = React.createRef();

  function onAddPost() {
    props.addPost();
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My-post</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder="Поделиться новостью"
        />
      </div>
      <div className={classes.button}>
        <button onClick={onAddPost}>Добавить пост</button>
      </div>

      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
