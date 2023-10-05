/** @format */

import db from "../models";

// get all category

export const getCategories = () =>
  new Promise(async (reslove, reject) => {
    try {
      const respone = await db.Category.findAll({ raw: true });
      reslove({
        err: reslove ? 0 : 1,
        msg: respone ? "Ok" : "Failed to get categories.",
        respone,
      });
    } catch (error) {
      reject(error);
    }
  });
