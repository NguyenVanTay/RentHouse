/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    // Do somthing before request is sent
    // gán token vào header
    return config;
  },
  function (err) {
    console.log(err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    // làm mới token
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default instance;
