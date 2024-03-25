/** @format */

import React, { memo, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import { formatVietnameseToString } from "../utils/Common/formatStringVietnamese";
const Item = ({
  images,
  address,
  attributes,
  description,
  star,
  title,
  user,
  id,
  priceJP,
  priceEN,
  locationDescription,
  latitude,
  longitude,
  acreage,
}) => {
  const indexs = [0, 1, 2, 3];
  const [isHoverHeart, setHoverHeart] = useState(false);
  const navigate = useNavigate();
  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++) {
      stars.push(
        <Icon
          icon={"material-symbols:star"}
          width={24}
          height={24}
          className="text-yellow-300 inline-block mb-[6px] "
        ></Icon>
      );
    }
    return stars;
  };
  console.log(handleStar(star));

  return (
    <div className="w-full flex border-t-2 border-orange-600 p-4 py-10">
      <Link
        // to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
        to={`detail/${id}`}
        className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer"
      >
        {/* {images.length > 0 &&
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
            })}         */}
        <img
          className="w-full h-full object-cover"
          src={images}
          alt="preview"
        ></img>
        {/* <div
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
        </div> */}
      </Link>
      <div className="w-3/5 p-10">
        <div className="flex justify-between gap-4 items-start">
          <div className="text-red-500 font-bold text-2xl">
            {/* {handleStar(star).length > 0 &&
              handleStar(star).map((star, number) => {
                return star;
              })} */}
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <Icon
              icon={"iconamoon:location-pin-fill"}
              width={24}
              height={24}
              className="text-red-400"
            ></Icon>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="font-bold flex-3 whitespace-nowrap overflow-hidden text-ellipsis ">
            {priceJP} Yen - {priceEN} USD
          </p>
          <p className="flex-1">{acreage} m2</p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="">Address: {address}</p>
          <p className="text-gray-500 w-full h-[100px] line-clamp-4 ">
            Location detail: {locationDescription}
          </p>
        </div>
        {/* <div className="flex items-center my-5 justify-between">
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
        </div> */}
        <div className="">Latitude: {latitude}</div>
        <div className="">Longitude: {longitude}</div>
        <div className="mt-[40px] flex items-center w-full justify-center">
          <Link
            className="p-4 rounded-lg bg-blue-500 text-white"
            to={`detail/${id}`}
          >
            More Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
