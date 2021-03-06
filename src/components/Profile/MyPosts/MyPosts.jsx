import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreatore,
} from "../../../utills/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  // React.memo делает отрисовку один раз, пока нет изменений в State
  // PureComponent делае тоже самое без проверок
  // Проверка на рендеринг, для простого и быстрострого отображения в один рендер
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }
  //clean function-copy post warrning
  let postsElement = [...props.posts].reverse().map((posts, id) => {
    return (
      <Post likesCount={posts.likeCounts} message={posts.message} key={id} />
    );
  });

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>Мои посты</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
});

const maxLenght10 = maxLengthCreatore(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Поделиться новостью"
          component={Textarea}
          name="newPostText"
          validate={[required, maxLenght10]}
        />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};
const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(AddPostForm);

export default MyPosts;
