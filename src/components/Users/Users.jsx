import React from "react";
import Paginator from "../common/Pagainator/Paginator";
import User from "./User";

let Users = ({
  totalUsersCount,
  pageSize,
  onPageChanched,
  currentPage,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanched={onPageChanched}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
