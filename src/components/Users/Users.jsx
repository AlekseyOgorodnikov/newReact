import React from "react";
import classes from "./Users.module.css";
import UserPhoto from "../../assets/images/avatar.png";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                props.currentPage === pagesNumber && classes.selectedPage
              }
              onClick={(event) => {
                props.onPageChanched(pagesNumber);
              }}
            >
              {pagesNumber}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img
                className={classes.avatarImg}
                src={user.photos.small != null ? user.photos.small : UserPhoto}
                alt="Avatar"
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                  className={classes.button}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
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
};

export default Users;
