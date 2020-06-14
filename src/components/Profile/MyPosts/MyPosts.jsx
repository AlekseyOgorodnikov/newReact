import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElement = props.posts.map(posts => <Post likesCount={posts.likeCounts} message={posts.message}/>)

    let newPostElement = React.createRef();

    function addPost() {
        props.dispatch({type:'ADD-POST'});
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My-post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div className={classes.button}>
                <button onClick={addPost}>Добавить пост</button>
            </div>

            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;
