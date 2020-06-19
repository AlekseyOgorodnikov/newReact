const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  newMessageText: "",
  messages: [
    { id: 1, messageUser: "Привет!" },
    { id: 2, messageUser: "Как твои дела?" },
    { id: 3, messageUser: "Огонь!" },
    { id: 4, messageUser: "А как твои?" },
    { id: 5, messageUser: "Никак..." },
    { id: 6, messageUser: "Почему?" },
  ],
  dialogs: [
    { id: 1, name: "Виктор" },
    { id: 2, name: "Василий" },
    { id: 3, name: "Николай" },
    { id: 4, name: "Александр" },
    { id: 5, name: "Валерий" },
    { id: 6, name: "Толик" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    messages: [...state.messages],
  };

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        messageUser: state.newMessageText,
      };
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
