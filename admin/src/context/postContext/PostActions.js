  export const getPostsStart = () => ({
    type: "GET_POSTS_START",
  });
  export const getPostsSuccess = (posts) => ({
    type: "GET_POSTS_SUCCESS",
    payload: posts,
  });
  export const getPostsFailure = () => ({
    type: "GET_POSTS_FAILURE",
  });
  export const deletePostStart = () => ({
    type: "DELETE_POST_START",
  });
  
  export const deletePostSuccess = (id) => ({
    type: "DELETE_POST_SUCCESS",
    payload: id,
  });
  
  export const deletePostFailure = () => ({
    type: "DELETE_POST_FAILURE",
  });