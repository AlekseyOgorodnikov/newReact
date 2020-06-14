import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.avatar}
                 src="https://www.meme-arsenal.com/memes/64778250478209d48c5dbc733a3256b0.jpg" alt="Аватар"/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;