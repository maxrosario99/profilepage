import React, { useState } from "react";

const EditProfileForm = ({ profile, setProfile, show, setShow }) => {
  const [newprofile, setNewProfile] = useState({});

  function updateProfile(value) {
    console.log(value);
    const copy = { ...profile };
    copy[Object.keys(value)[0]] = value[Object.keys(value)[0]];
    setNewProfile(copy);
  }

  function onSubmit() {
    setProfile(newprofile);

    setShow(!show);
  }
  return (
    <div
      style={{ display: show ? "block" : "none" }}
      id="edit-profile-container"
    >
      fdasdf
      <div id="edit-profile-header">
        <h4>Edit Profile</h4>
        <div
          onClick={() => setShow(!show)}
          className="circle-button close-button"
        >
          X
        </div>
      </div>
      <form id="edit-profile-form">
        <div className="edit-input">
          <label>Name</label>
          <input
            placeholder={profile.name}
            onChange={(e) => updateProfile({ name: e.target.value })}
            className="edit-input-field"
            type="text"
          />
        </div>
        <div className="edit-input">
          <label>Job Title</label>
          <input
            className="edit-input-field"
            type="text"
            placeholder={profile.jobTitle}
            onChange={(e) => updateProfile({ jobTitle: e.target.value })}
          />
        </div>
        <div className="edit-input">
          <label>Address</label>
          <input
            className="edit-input-field"
            type="text"
            placeholder={profile.address}
            onChange={(e) => updateProfile({ address: e.target.value })}
          />
        </div>
      </form>
      <div id="edit-profile-footer">
        <button onClick={onSubmit}>Save</button>
      </div>
    </div>
  );
};

export default EditProfileForm;
