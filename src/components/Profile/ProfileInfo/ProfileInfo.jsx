import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        {/* <img
          className={classes.top_img}
          src="https://i.pinimg.com/originals/37/a9/06/37a906be8bd465bb52f092f3f89f9def.jpg"
          alt="Avatarik"
        /> */}
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="AVATAR" />
        <span>VK : </span>
        {props.profile.contacts.vk}
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
