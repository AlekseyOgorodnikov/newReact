import React, { useState } from "react";
import classes from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanched,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            //установить порцию -1
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (pagesNumber) =>
            pagesNumber >= leftPortionPageNumber &&
            pagesNumber <= rightPortionPageNumber
        )
        .map((pagesNumber) => {
          return (
            <span
              className={cn(
                {
                  [classes.selectedPage]: currentPage === pagesNumber,
                },
                classes.pageNumber
              )}
              key={pagesNumber}
              onClick={(event) => {
                onPageChanched(pagesNumber);
              }}
            >
              {pagesNumber}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        //порция большечем текущая
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
