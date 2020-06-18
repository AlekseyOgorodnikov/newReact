import {
  addPostActionCreator,
  updateNewPostText,
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToPropsMessage = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToPropsMessage = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text));
    },
      addPost: () => {
        dispatch(addPostActionCreator());
      },
    }
  }
  
const MyPostsContainer = connect(
  mapStateToPropsMessage,
  mapDispatchToPropsMessage
)(MyPosts);
export default MyPostsContainer;
