import React from "react";
import "./ProfileCard.scss";
import Cover from "../../img/mdnew.jpg";
import Profile from "../../img/myprofile.jpg";

function ProfileCard() {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <di className="profileName">
        <span>Dilshad</span>
        <span>MEARN stack dev</span>
      </di>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>100000</span>
            <span>followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>14</span>
            <span>following</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? "" : <span>My profile</span>}
    </div>
  );
}

export default ProfileCard;
