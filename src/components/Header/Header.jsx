import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className={classes.header}>
      <img
        className={classes.logo}
        src="https://steemitimages.com/DQmVvqzbaTcPRybxkBLioLszXZVFabiGvu43yP47dUaB9jm/steemcleaners_logo_300x300.png"
        alt="Logotipe"
      />
      <div className={classes.loginBlock}>
        { props.isAuth ? props.login
        :<NavLink to={'/login'}>Login</NavLink>}

      </div>
    </div>
  );
}
export default Header;
