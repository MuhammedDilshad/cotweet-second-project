import React from "react";
import "./Post.scss";
import Comment from "../../img/comment.png";
import Dot from "../../img/dot.png";
import Delete from "../../img/delete.jpg";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addComment, likePost } from "../../api/PostRequest";
import { deletePost, getTimelinePosts } from "../../actions/PostsAction";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [openComment, setOpenComment] = useState(false);
  const [comment, setComment] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const theme = useMantineTheme();
  const dispatch = useDispatch();

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: comment,
      commentBy: user._id,
    };
    try {
      const response = await addComment(comment, user._id, data._id);
      setComment("");
      dispatch(getTimelinePosts(user._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setModalOpened(true);
  };

  const handleDelete = (postId) => {
    alert("Do you want to delete this post");
    dispatch(deletePost(postId, user._id));
    setModalOpened(false);
  };

  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />
      <div className="postReact">
        {user._id === data.userId ? (
          <img
            src={Delete}
            style={{ width: "25px", height: "25px" }}
            alt=""
            onClick={() => handleDelete(data._id)}
          />
        ) : (
          ""
        )}
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img
          src={Comment}
          onClick={() => setOpenComment((prev) => !prev)}
          alt=""
          style={{ cursor: "pointer" }}
        />
        {/* <img src={Share} alt="" />
        <img
          src={Dot}
          style={{ cursor: "pointer", width: "30px" }}
          onClick={() => handleModal()}
          alt=""
        /> */}
      </div>
      {/* <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        title="choose your choice"
        overlayOpacity={0.55}
        overlayBlur={3}
        size="30%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      /> */}

      {openComment && (
        <div>
          <div style={{ display: "flex", position: "relative" }}>
            <input
              type="text"
              className="infoInput"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              style={{
                border: "none",
                position: "absolute",
                right: "2px",
                top: "12px",
                cursor: "pointer",
              }}
              onClick={handleSend}
            >
              post
            </button>
          </div>
          <div
            className="infoInput"
            style={{
              height: "50px",
              position: "relative",
              marginTop: "5px",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {data.comments?.map((comment) => {
              return <p>{comment.comment}</p>;
            })}
          </div>
        </div>
      )}
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
