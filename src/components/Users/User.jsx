import React from "react";
import classes from "./Users.module.css";
import UserPhoto from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={classes.avatarImg}
              src={user.photos.small != null ? user.photos.small : UserPhoto}
              alt="Avatar"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(
                (id) => id === user.id
              )} /*send array type id*/
              onClick={() => {
                unfollow(user.id);
              }}
              className={classes.button}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(
                (id) => id === user.id
              )} /*send array type id*/
              onClick={() => {
                follow(user.id);
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
  );
};

export default User;
