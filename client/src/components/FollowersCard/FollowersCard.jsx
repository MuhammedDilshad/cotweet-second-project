import React from "react";
import "./FollowersCard.scss";
import { Followers } from "../../Data/FollowersData";

function FollowersCard() {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImg" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;