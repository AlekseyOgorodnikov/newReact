import {
  addMessageActionCreator,
  updateNewMessageText,
} from "../../Redux/dialogsReducer";
import Dialogs from "./MyMessage/Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageText(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
