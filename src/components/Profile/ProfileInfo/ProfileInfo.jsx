import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/avatar.png";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onMainphotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className={classes.descriptionBlock}>
        <img
          src={profile.photos.large || UserPhoto}
          className={classes.mainPhoto}
          alt="AVATAR"
        />
        <div>
          {isOwner && <input type={"file"} onChange={onMainphotoSelected} />}
          {/* Если режим редактирования тогда покажи ProfileDataForm, а если не режим редактирования ProfileData */}
          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Редактирование профиля</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
