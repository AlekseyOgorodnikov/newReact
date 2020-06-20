const FOLLOW = "FOLLOW";
const UNFOLOW = "UNFOLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:'https://manula.r.sizr.io/large/user/2105/img/mona300-thumb2.jpg',
    //   followed: false,
    //   firstName: "Дмитрий",
    //   status: "На работе",
    //   location: { city: "Минск", country: "Беларусь" },
    // },
    // {
    //   id: 2,
    //   photoUrl:'http://media.tumblr.com/tumblr_lkdjbyJ7ec1qfz2wv.gif',
    //   followed: true,
    //   firstName: "Василий",
    //   status: "Дома",
    //   location: { city: "Самара", country: "Россия" },
    // },
    // {
    //   id: 3,
    //   photoUrl:'https://www.meme-arsenal.com/memes/64778250478209d48c5dbc733a3256b0.jpg',
    //   followed: false,
    //   firstName: "Виктор",
    //   status: "В сети, всегда доступен",
    //   location: { city: "Киев", country: "Украина" },
    // },
    // {
    //   id: 4,
    //   photoUrl:'https://www.shareicon.net/data/2015/10/27/140583_normal_300x300.png',
    //   followed: true,
    //   firstName: "Алексей",
    //   status: "В пути",
    //   location: { city: "Москва", country: "Россия" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollowAC = (userId) => {
  return { type: UNFOLOW, userId };
};

export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};

export default usersReducer;
