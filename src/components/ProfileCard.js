import React from "react";

const profileInfo = {
  name: "Max Rosario",
  jobTitle: "Software Engineer",
  address: "Miami, Florida, United States",
  links: ["TEXT 1", "TEXT 2"],
};
const ProfileCard = () => {
  return (
    <div id="profile-container">
      ProfileCard
      <div id="profile-banner">BANNER</div>
      <div id="contact-info">
        <h2>{profileInfo.name}</h2>
        <h5>{profileInfo.jobTitle}</h5>
        <p>{profileInfo.address}</p>
        <span>
          {" "}
          <a href="#"></a>Contact Info"
        </span>
      </div>
      <div id="links">
        {" "}
        <div className="link-item">
          <img className="link-img" src="#" />
          <a href="#">{profileInfo.links[0]}</a>
        </div>
        <div className="link-item">
          <img className="link-img" src="#" />
          <a href="#">{profileInfo.links[1]}</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
