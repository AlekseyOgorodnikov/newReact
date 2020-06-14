import React from "react";
import classes from '../.././Dialogs.module.css';

function Message(props) {
    return (
        <div className={classes.message}>
            {props.messageUser}
        </div>
    );

}

export default Message;