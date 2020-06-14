import React from "react";
import classes from '../Dialogs.module.css';
import DialogItem from "../DialogItem/DialogsItem";
import Message from "./Message/Message";

function MyMessage(props) {

    let dialogElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.messages.map(messages => <Message messageUser={messages.messageUser}/>)

    let newMessageElement = React.createRef();

    function addMessage() {
        props.dispatchMessage({type: 'ADD-MESSAGE'});
    }

    function onMessageChange() {
        let text = newMessageElement.current.value;
        props.dispatchMessage({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                <button onClick={addMessage}>Отправить</button>
                {messagesElement}
            </div>

        </div>
    );
}

export default MyMessage;