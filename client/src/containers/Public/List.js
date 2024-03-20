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
        <p className="text-lg font-bold">Real Estate & Property</p>
        <p className="">Updated : 21:00 18/03/2024</p>
      </div>
      <div className="flex items-center gap-2 px-4">
        <p className="">Sort</p>
        <Button
          text={"Default"}
          bgColor={"bg-gray-200"}
          hoverStyle="hover:underline"
        />

        <Button
          text={"Latest"}
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
