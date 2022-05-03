import axios from "axios";
import {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
} from "./PostActions";

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get("/posts", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailure());
  }
};

//delete
export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    await axios.delete("/posts/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deletePostSuccess(id));
    window.location.replace();
  } catch (err) {
    dispatch(deletePostFailure());
  }
};
