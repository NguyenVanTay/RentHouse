/** @format */

import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
const List = () => {
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPostsLimit(0));
  }, []);

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
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
