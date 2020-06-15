import React from "react";
import classes from "../Dialogs.module.css";
import DialogItem from "../DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageText,
} from "../../../Redux/dialogsReducer";

function MyMessage(props) {
  let dialogElement = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = props.messages.map((messages) => (
    <Message messageUser={messages.messageUser} />
  ));

  let newMessageElement = React.createRef();

  function addMessage() {
    props.dispatch(addMessageActionCreator());
  }

  function onMessageChange() {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageText(text));
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
          placeholder="Введи сообщение"
        />
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default MyMessage;
