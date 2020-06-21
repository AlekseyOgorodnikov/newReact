import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import UserPhoto from "../../assets/images/avatar.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanched = (pagesNumber)=>{
    this.props.setCurrentPage(pagesNumber);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((pagesNumber) => {
            return (
              <span
                className={
                  this.props.currentPage === pagesNumber && classes.selectedPage
                }
                onClick={(event)=>{ this.onPageChanched(pagesNumber) }}
              >
                {pagesNumber}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  className={classes.avatarImg}
                  src={
                    user.photos.small != null ? user.photos.small : UserPhoto
                  }
                  alt="Avatar"
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                    className={classes.button}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                    className={classes.button}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
