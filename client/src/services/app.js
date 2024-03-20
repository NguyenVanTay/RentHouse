/** @format */
import axiosConfig from "../axiosConfig";

export const apiGetPrices = () =>
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

export const apiGetAreas = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/v1/area/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
