import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Как дела?', likeCounts: 12 },
                { id: 2, message: 'Это моя первая социальная сеть...', likeCounts: 122 },
                { id: 3, message: 'Круто!', likeCounts: 500 },
                { id: 4, message: 'Получилось?', likeCounts: 54 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State change');
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likeCounts: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         messageUser: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newMessageText) {
    //     this._state.dialogsPage.newMessageText = newMessageText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer) {
        this._callSubscriber = observer; //observer //publisher-subscriber //addEventListener
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}
//         if (action.type === ADD_POST) {
//             let newPost = {
//                 id: 5,
//                 message: this._state.profilePage.newPostText,
//                 likeCounts: 0
//             }
//             this._state.profilePage.posts.push(newPost);
//             this._state.profilePage.newPostText = '';
//             this._callSubscriber(this._state);
//         } else if (action.type === UPDATE_NEW_POST_TEXT) {
//             this._state.profilePage.newPostText = action.newText;
//             this._callSubscriber(this._state);
//         }
//     },
//     dispatchMessage(action) {
//         if (action.type === ADD_MESSAGE) {
//             let newMessage = {
//                 messageUser: this._state.dialogsPage.newMessageText
//             }
//             this._state.dialogsPage.messages.push(newMessage);
//             this._state.dialogsPage.newMessageText = '';
//             this._callSubscriber(this._state);
//         } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//             this._state.dialogsPage.newMessageText = action.newText;
//             this._callSubscriber(this._state);
//         }
//     }
// }
// export const addPostActionCreator = () => {
//         return { type: ADD_POST }
//     }

// export const updateNewPostText = (text) => {
//         return { type: UPDATE_NEW_POST_TEXT, newText: text }
//     }

// export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

// export const updateNewMessageText = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;
    window.store = store;














