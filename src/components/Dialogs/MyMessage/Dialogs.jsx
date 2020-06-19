import React from "react";
import classes from "../Dialogs.module.css";
import DialogItem from "../DialogItem/DialogsItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let state = props.dialogPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElement = state.messages.map((messages) => (
    <Message messageUser={messages.messageUser} key={messages.id} id={messages.id}/>
  ));
  let newMessageText = state.newMessageText;

  let newMessageElement = React.createRef();

  function addMessage() {
    props.addMessage();
  }

  function onMessageChange() {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElement}
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={newMessageText}
          placeholder="Введи сообщение"
        />
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default Dialogs;
