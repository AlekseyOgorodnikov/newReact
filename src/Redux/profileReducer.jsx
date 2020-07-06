import { usersAPI, profileAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "UPDATE-NEW-SET_USER_PROFILE-TEXT";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Как дела?", likeCounts: 12 },
    { id: 2, message: "Это моя первая социальная сеть...", likeCounts: 122 },
    { id: 3, message: "Круто!", likeCounts: 500 },
    { id: 4, message: "Получилось?", likeCounts: 54 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: action.newPostText,
        likeCounts: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

//thunk
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  //if answer serever = resaultCode 0 status used
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
