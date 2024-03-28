import React, { useState } from "react";
import MyNav from "./MyNav";
import ProfileCard from "./ProfileCard";
import EditProfileForm from "./EditProfileForm";

const Layout = () => {
  const [show, setShow] = useState(false);

  const [profile, setProfile] = useState({
    name: "Max Rosario",
    jobTitle: "Software Engineer",
    address: "Miami, Florida, United States",
    links: ["TEXT 1", "TEXT 2"],
  });

  return (
    <div id="Layout">
      <MyNav />
      <ProfileCard profile={profile} show={show} setShow={setShow} />
      <EditProfileForm
        profile={profile}
        setProfile={setProfile}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default Layout;
