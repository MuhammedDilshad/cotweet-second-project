import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getTimelinePosts = (id) => {
  return API.get(`/post/${id}/timeline`);
};

export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });

export const addComment = (comment, userId, id) => {
  console.log(comment, userId);
  return API.put(`/post/${id}/comment`, { comment, userId });
};

export const deletePost = (id, userId) => API.delete(`/post/${id}/${userId}`);
