import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageText,
} from "../../Redux/dialogsReducer";
import Dialogs from './MyMessage/Dialogs';

function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  function onAddMessage() {
    props.store.dispatch(addMessageActionCreator());
  }

  function onMessageChange(text) {
    props.store.dispatch(updateNewMessageText(text));
  }

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      addMessage={onAddMessage}
      dialogPage={state}
    />
  );
}

export default DialogsContainer;
