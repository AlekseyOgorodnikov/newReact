import React from "react";
import classes from "./Users.module.css";

function Users(props) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://manula.r.sizr.io/large/user/2105/img/mona300-thumb2.jpg",
        followed: false,
        firstName: "Дмитрий",
        status: "На работе",
        location: { city: "Минск", country: "Беларусь" },
      },
      {
        id: 2,
        photoUrl: "http://media.tumblr.com/tumblr_lkdjbyJ7ec1qfz2wv.gif",
        followed: true,
        firstName: "Василий",
        status: "Дома",
        location: { city: "Самара", country: "Россия" },
      },
      {
        id: 3,
        photoUrl:
          "https://www.meme-arsenal.com/memes/64778250478209d48c5dbc733a3256b0.jpg",
        followed: false,
        firstName: "Виктор",
        status: "В сети, всегда доступен",
        location: { city: "Киев", country: "Украина" },
      },
      {
        id: 4,
        photoUrl:
          "https://www.shareicon.net/data/2015/10/27/140583_normal_300x300.png",
        followed: true,
        firstName: "Алексей",
        status: "В пути",
        location: { city: "Москва", country: "Россия" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img
                className={classes.avatarImg}
                src={user.photoUrl}
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
              <div>{user.firstName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
