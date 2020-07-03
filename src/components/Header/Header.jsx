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
        { props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
        :<NavLink to={'/login'}>Войти</NavLink>}
      </div>
    </div>
  );
}
export default Header;
