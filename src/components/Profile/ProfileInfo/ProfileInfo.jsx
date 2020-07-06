import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/avatar.png";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : UserPhoto
          }
          alt="AVATAR"
        />
        <span>VK : </span>
        {props.profile.contacts.vk}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
