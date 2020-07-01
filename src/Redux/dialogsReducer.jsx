const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { messageUser: action.newMessageElement },
        ],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageElement) => ({
  type: ADD_MESSAGE,
  newMessageElement,
});

export default dialogsReducer;
