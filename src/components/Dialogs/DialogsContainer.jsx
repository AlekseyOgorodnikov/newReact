import {
  addMessageActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./MyMessage/Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageElement) => {
      dispatch(addMessageActionCreator(newMessageElement));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
