import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <img
        className={classes.logo}
        src="https://steemitimages.com/DQmVvqzbaTcPRybxkBLioLszXZVFabiGvu43yP47dUaB9jm/steemcleaners_logo_300x300.png"
        alt="Logotipe"
      />
    </div>
  );
}
export default Header;
