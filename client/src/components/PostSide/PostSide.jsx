import React from "react";
import Navigation from "../Navigation/Navigation";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.scss";

function PostSide() {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
      <Navigation />
    </div>
  );
}

export default PostSide;
