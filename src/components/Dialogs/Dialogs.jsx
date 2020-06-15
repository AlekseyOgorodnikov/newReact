import React from "react";
import MyMessage from "./MyMessage/MyMessage";

function Dialogs(props) {
  return (
    <div>
      <MyMessage
        messages={props.dialogsPage.messages}
        dialogs={props.dialogsPage.dialogs}
        dispatch={props.dispatch}
        newMessageText={props.dialogsPage.newMessageText}
      />
    </div>
  );
}

export default Dialogs;
