const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Как дела?", likeCounts: 12 },
    { id: 2, message: "Это моя первая социальная сеть...", likeCounts: 122 },
    { id: 3, message: "Круто!", likeCounts: 500 },
    { id: 4, message: "Получилось?", likeCounts: 54 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCounts: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostText = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export default profileReducer;
