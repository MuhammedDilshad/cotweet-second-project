import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/userAction";
import Comment from "../../img/comment.png";
import { useNavigate } from "react-router-dom";
import { createChat } from "../../api/ChatRequests";
import { Link } from "react-router-dom";

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  const addToChat = () => {
    const chatData = {
      senderId: user._id,
      receiverId: person._id,
    };
    createChat(chatData);
    navigate("/chat");
  };

  return (
    <div className="follower">
      <div>
        <img
          src={
            publicFolder + person.coverPicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImg"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>{person.username}</span>
        </div>
      </div>
      <img
        src={Comment}
        style={{ height: "15px", width: "15px", cursor: "pointer" }}
        onClick={addToChat}
        alt=""
      />
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
