/** @format */
import axiosConfig from "../axiosConfig";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/V1/Metadata",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getPostDetails = (code) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/V1/Metadata?RealEstateCode=${code}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = (page) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/api/v1/post/limit?page=${page}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
