/** @format */

import React, { useEffect, useRef } from "react";
import { Button, Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
const List = ({ page }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const listRef = useRef();
  useEffect(() => {
    let offset = page ? +page - 1 : 0;
    dispatch(getPostsLimit(offset));
  }, [page]);

  return (
    <div className=" border-2 p-2 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between my-3 px-4">
        <p className="text-lg font-bold">Danh sách tin đăng </p>
        <p className="">Cập nhật : 12:05 25/08/2022</p>
      </div>
      <div className="flex items-center gap-2 px-4">
        <p className="">Sắp xếp</p>
        <Button
          text={"Mặc định"}
          bgColor={"bg-gray-200"}
          hoverStyle="hover:underline"
        />

        <Button
          text={"Mới nhất"}
          bgColor={"bg-gray-200"}
          hoverStyle="hover:underline"
        />
      </div>
      <div className="">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
