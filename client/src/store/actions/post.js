/** @format */

import actionTypes from "./actionTypes";
import { apiGetPosts, apiGetPostsLimit, getPostDetails } from "../../services/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();

    // if (response?.data.err === 0) {
    //   dispatch({
    //     type: actionTypes.GET_POSTS,
    //     posts: response.data.response,
    //   });
    // } else {
    //   dispatch({
    //     type: actionTypes.GET_POSTS,
    //     data: response.data.msg,
    //   });
    // }
    if (response.status == 200) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.Data,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};

export const getPostDetail = (code) => async (dispatch) => {
  try {
    const response = await getPostDetails(code);
    if (response.status == 200) {
      dispatch({
        type: actionTypes.GET_POSTSDETAIL,
        posts: response.data.Data,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTSDETAIL,
      posts: null,
    });
  }
};

export const getPostsLimit = (page) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(page);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        posts: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts: null,
    });
  }
};
