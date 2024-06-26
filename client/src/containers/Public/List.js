/** @format */

import React, { useEffect, useRef } from "react";
import { Button, Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
const List = ({ page }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const listRef = useRef();
  // useEffect(() => {
  //   let offset = page ? +page - 1 : 0;
  //   dispatch(getPostsLimit(offset));
  // }, [page]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts);
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
                id={item?.BasicInformation.Code}
                address={item?.BasicInformation.Address}
                title={item?.BasicInformation.Description}
                priceJP={item?.BasicInformation.PriceJP}
                priceEN={item?.BasicInformation.PriceUSA}
                locationDescription={item?.BasicInformation.LocationDescription}
                longitude={item?.BasicInformation.Latitude}
                latitude={item?.BasicInformation.Logitude}
                acreage={item?.LandInformation.LI_Area}
                // attributes={item?.attributes}
                // description={JSON.parse(item?.description)}
                images={item?.PictureURL}
              // star={+item?.star}
              // title={item?.title}
              // user={item?.user}
              // id={item?.id}
              />
              // <></>
            );
          })}
      </div>
    </div>
  );
};

export default List;
