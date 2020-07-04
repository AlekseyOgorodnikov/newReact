import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  //array two elements
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  //изменения в локальном state
  const onStatusChange = (eventObject) => {
    setStatus(eventObject.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>{props.status || "-------"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
