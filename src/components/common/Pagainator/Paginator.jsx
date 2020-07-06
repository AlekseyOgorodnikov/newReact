import React from "react";
import classes from "./Paginator.module.css";

let Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanched,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((pagesNumber) => {
        return (
          <span
            className={currentPage === pagesNumber && classes.selectedPage}
            onClick={(event) => {
              onPageChanched(pagesNumber);
            }}
          >
            {pagesNumber}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
