import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPagrAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC,
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetchingAC(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanched = (pagesNumber) => {
    this.props.toggleIsFetchingAC(true);
    this.props.setCurrentPage(pagesNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pagesNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetchingAC(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanched={this.onPageChanched}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetchingAC: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
