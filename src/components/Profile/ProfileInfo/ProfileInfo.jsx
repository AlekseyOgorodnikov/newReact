import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img
                    className={classes.top_img}
                    src="https://i.pinimg.com/originals/37/a9/06/37a906be8bd465bb52f092f3f89f9def.jpg"
                />
            </div>
            <div className={classes.descriptionBlock}>ava+description</div>
        </div>
    );
}

export default ProfileInfo;