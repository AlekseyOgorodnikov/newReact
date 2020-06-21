import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPagrAC,
  setUsersTotalCountAC,
} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPagrAC(pageNumber));
    },
    setTotalUsersCount: (totalCount)=> {
      dispatch(setUsersTotalCountAC(totalCount));
    },
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UserContainer;
