import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/avatar.png";

function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto }) {
  if (!profile) {
    return <Preloader />;
  }
  const onMainphotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          src={profile.photos.large || UserPhoto}
          className={classes.mainPhoto}
          alt="AVATAR"
        />
        {isOwner && <input type={"file"} onChange={onMainphotoSelected} />}
        <span>VK : </span>
        {profile.contacts.vk}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;
