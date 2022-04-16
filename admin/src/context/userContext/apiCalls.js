import axios from "axios";
import { getUsersStart, getUsersSuccess, getUsersFailure } from "./UserActions";
export const getLists = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users/all", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};
