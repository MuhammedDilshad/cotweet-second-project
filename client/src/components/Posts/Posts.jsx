import React from "react";
import "./Posts.scss";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import { useParams } from "react-router-dom";

function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const refresh = useSelector((state) => state.postReducer.refresh);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [refresh]);

  if (!posts) return "no Post";
  if (params.id) posts.filter((post) => post.userId === params.id);

  return (
    <div className="Posts">
      {loading
        ? "fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
}

export default Posts;
