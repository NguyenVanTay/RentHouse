/** @format */

import React, { memo, useState } from "react";
import { Icon } from "@iconify/react";

const Item = ({
  images,
  address,
  attributes,
  description,
  star,
  title,
  user,
}) => {
  const indexs = [0, 1, 2, 3];
  const [isHoverHeart, setHoverHeart] = useState(false);
  return (
    <div className="w-full flex border-t-2 border-orange-600 p-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i) => {
              return (
                <img
                  className="w-[140px] h-[120px] object-cover"
                  src={i}
                  alt="preview"
                ></img>
              );
            })}
        <p className="text-white bg-over-lay-70  px-2 rounded-md absolute bottom-4 left-2">
          {`${images.length} ảnh`}
        </p>
        <div
          className=""
          onMouseEnter={() => setHoverHeart(true)}
          onMouseLeave={() => setHoverHeart(false)}
        >
          {isHoverHeart ? (
            <Icon
              icon={"mdi:heart"}
              className="absolute right-14 bottom-4 text-red-500"
              width={24}
              height={24}
            ></Icon>
          ) : (
            <Icon
              icon={"mdi:heart-outline"}
              width={24}
              height={24}
              className="absolute right-14 bottom-4 text-white "
            ></Icon>
          )}
        </div>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4 items-start">
          <div className="text-red-500 ml-1 ">
            <Icon
              icon={"material-symbols:star"}
              width={24}
              height={24}
              className="text-yellow-300 inline-block"
            ></Icon>
            <Icon
              icon={"material-symbols:star "}
              width={24}
              height={24}
              className="text-yellow-300 inline-block"
            ></Icon>
            <Icon
              icon={"material-symbols:star"}
              width={24}
              height={24}
              className="text-yellow-300 inline-block mb-[6px] "
            ></Icon>
            <Icon
              icon={"material-symbols:star"}
              width={24}
              height={24}
              className="text-yellow-300 inline-block  mb-[6px] "
            ></Icon>
            <Icon
              icon={"material-symbols:star"}
              width={24}
              height={24}
              className="text-yellow-300 inline-block  mb-[6px] "
            ></Icon>
            <Icon
              icon={"material-symbols:star"}
              width={24}
              height={24}
              className="text-yellow-300 inline-block  mb-[6px] "
            ></Icon>
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <Icon
              icon={"bi:bookmark-star-fill"}
              width={24}
              height={24}
              className="text-yellow-600"
            ></Icon>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-green-400">{attributes?.price}</p>
          <p className="">{attributes?.acreage}</p>
          <p className="">{attributes?.address}</p>
        </div>
        <div className="">
          <p className="text-gray-500 w-full h-[100px] line-clamp-4 ">
            {description}
          </p>
        </div>
        <div className="flex items-center my-5 justify-between">
          <div className="flex items-center  gap-2">
            <img
              className="w-[30px] h-[30px] object-cover rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
              alt="avatar"
            ></img>
            <p className="">{user?.name}</p>
          </div>
          <div className=" flex items-center gap-4">
            <button
              className="bg-blue-700 text-white p-1 rounded-md"
              type="button"
            >
              {`Gọi ${user?.phone}`}
            </button>
            <button
              className="bg-white text-blue-700 p-1 rounded-md border-2 border-blue-700"
              type="button"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default memo(Item);
