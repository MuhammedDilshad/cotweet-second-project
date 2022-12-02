import React from "react";
import "./ProfileCard.scss";
import Cover from "../../img/mdnew.jpg";
import Profile from "../../img/myprofile.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile"
          }
          alt=""
        />
      </div>

      <di className="profileName">
        <span>
          {user.firstname}
          {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about you"}</span>
      </di>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>follower</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}
          >
            My profile
          </Link>
        </span>
      )}
    </div>
  );
}

export default ProfileCard;
