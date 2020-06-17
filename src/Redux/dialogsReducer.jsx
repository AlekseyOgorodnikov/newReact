const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState =  {
  newMessageText: '',
  messages: [
      { messageUser: 'Привет!' },
      { messageUser: 'Как твои дела?' },
      { messageUser: 'Огонь!' },
      { messageUser: 'А как твои?' },
      { messageUser: 'Никак...' },
      { messageUser: 'Почему?' }
  ],
  dialogs: [
      { id: 1, name: 'Виктор' },
      { id: 2, name: 'Василий' },
      { id: 3, name: 'Николай' },
      { id: 4, name: 'Александр' },
      { id: 5, name: 'Валерий' },
      { id: 6, name: 'Толик' }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        messageUser: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
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
