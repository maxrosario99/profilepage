import React from "react";

const ProfileCard = ({ profile, show, setShow }) => {
  return (
    <div id="profile-container">
      ProfileCard
      <div id="profile-banner">
        <div
          className="circle-button"
          id="profile-edit"
          onClick={() => setShow(!show)}
        >
          EDIT
        </div>
      </div>
      <div id="contact-info">
        <h2>{profile.name}</h2>
        <h5>{profile.jobTitle}</h5>
        <p>{profile.address}</p>
        <span>
          {" "}
          <a href="#"></a>Contact Info"
        </span>
      </div>
      <div id="links">
        {" "}
        <div className="link-item">
          <img className="link-img" src="#" />
          <a href="#">{profile.links[0]}</a>
        </div>
        <div className="link-item">
          <img className="link-img" src="#" />
          <a href="#">{profile.links[1]}</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
