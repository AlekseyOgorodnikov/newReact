import {
  addMessageActionCreator,
  updateNewMessageText,
} from "../../Redux/dialogsReducer";
import Dialogs from "./MyMessage/Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
