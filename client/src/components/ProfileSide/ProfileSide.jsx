import React from "react";
import "./ProfileSide.scss";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";

function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard location="homePage" />
      <FollowersCard />
    </div>
  );
}

export default ProfileSide;
