/* eslint-disable eqeqeq */
import React from "react";
import classes from "../Dialogs.module.css";
import DialogItem from "../DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {
  required,
  maxLengthCreatore,
} from "../../../utills/validators/validators";

function Dialogs(props) {
  let state = props.dialogPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElement = state.messages.map((messages, id) => (
    <Message messageUser={messages.messageUser} key={id} />
  ));

  function addNewMessage(values) {
    props.addMessage(values.newMessageElement);
  }

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElement}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const maxLength = maxLengthCreatore(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength]}
          name="newMessageElement"
          placeholder="Введи сообщение"
        />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
