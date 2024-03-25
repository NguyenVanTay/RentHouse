/** @format */

import React from "react";
import { Carousel } from "antd";
import GoogleMapReact from "google-map-react";
import { useParams } from "react-router-dom";
import {
  getPosts,
  getPostsLimit,
  getPostDetail,
} from "../../store/actions/post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";
import { Icon } from "@iconify/react";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const DetailPost = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: posts?.BasicInformation?.Latitude,
      lng: posts?.BasicInformation?.Logitude,
    },
    zoom: 10,
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const postId = useParams();
  useEffect(() => {
    dispatch(getPostDetail(postId.title));
  }, []);
  console.log(posts);

  const [la, setLa] = useState(null);
  const [lo, setLo] = useState(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setLa(posts?.BasicInformation?.Latitude);
    setLo(posts?.BasicInformation?.Logitude);
  }, [posts]);

  useEffect(() => {
    setSrc(`https://maps.google.com/maps?q=${la},${lo}&hl=es;&output=embed`);
  }, [la, lo]);

  return (
    <div className="pb-10">
      <div className=" py-4 grid-cols-2 grid">
        <div className="">
          <div className="py-5">
            <p className="text-3xl font-bold">
              {posts?.BasicInformation?.Description}
            </p>
          </div>
          <div className="flex items-center gap-4 text-gray-800 py-1">
            <Icon icon={"mdi:location"}></Icon>
            <p className="">{posts?.BasicInformation?.Address}</p>
          </div>
          <div className="flex items-center gap-4 text-gray-800 py-1">
            <p className="">{posts?.BasicInformation?.LocationDescription}</p>
          </div>
          <div className=" bg-gray-200  my-4 p-4 flex w-[80%] mx-auto justify-around ">
            <div className="">
              <p className="font-bold">Number of unit</p>
              <p className="italic">
                {posts?.BuildingInformation?.BI_NumberOfUnits}
              </p>
            </div>
            <div className="">
              <p className="font-bold">Total area</p>
              <p className="italic">
                {posts?.BuildingInformation?.BI_TotalArea}
              </p>
            </div>
            <div className="">
              <p className="font-bold">Operation Year</p>
              <p className="italic">
                {posts?.BuildingInformation?.BI_OperationYear}
              </p>
            </div>
          </div>

          <div className="py-4">
            <div className="py2 text-xl text-gray-600">
              <p className="">Monthly Rent</p>
            </div>
            <div className="flex justify-between w-[60%]">
              <div className="flex items-center text-3xl font-bold  ">
                <Icon icon={"mdi:yen"}></Icon>
                <p className=""> {posts?.BasicInformation?.PriceJP}</p>
              </div>
              <div className="flex items-center text-3xl font-bold  gap-1">
                <Icon icon={"fa:usd"}></Icon>
                <p className="">{posts?.BasicInformation?.PriceUSA}</p>
              </div>
            </div>
          </div>
          <div className="py-2 text-xl text-gray-600">
            <p className="">Features</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-[14px] italic"> Area</p>
                <p className="">{posts?.LandInformation?.LI_Area}</p>
              </div>
              <div className="">
                <p className="text-[14px] italic">Floor area ratio</p>
                <p className="">{posts?.LandInformation?.LI_FloorAreaRatio}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-[14px] italic"> Building coverage ratio</p>
                <p className="">
                  {posts?.LandInformation?.LI_BuildingCoverageRatio}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] italic"> Volumn ratio</p>
                <p className="">{posts?.LandInformation?.LI_VolumnRatio}</p>
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="py-2 text-xl text-gray-600">
              <p className="">Expenses</p>
            </div>

            <div className="items-center justify-between flex w-[20%] pb-[2px]">
              <p className="">App fee</p>
              <p className="font-bold">100$</p>
            </div>
            <div className="items-center justify-between flex w-[20%] pb-[2px]">
              <p className="">Parking fee</p>
              <p className="font-bold">30$</p>
            </div>
            <div className="items-center justify-between flex w-[20%] pb-[2px]">
              <p className="">Water fee</p>
              <p className="font-bold">100$</p>
            </div>
            <div className="items-center justify-between flex w-[20%] pb-[2px]">
              <p className="">Electric fee</p>
              <p className="font-bold">100$</p>
            </div>
          </div>

          <div className="py-4 ">
            <p className="text-xl text-gray-600 pb-[2px]">
              About vantage collection
            </p>
            <p className="">{posts?.LandInformation?.LI_FacingRoad}</p>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <Carousel afterChange={onChange} className="w-[80%] mx-auto" autoplay>
            <div className="bg-slate-500 w-full h-[500px] ">
              <img
                className="object-cover w-full h-full"
                src={posts?.PictureURL}
              ></img>
            </div>
            <div className="bg-slate-500 w-full h-[500px] ">
              <img
                className="object-cover w-full h-full"
                src={posts?.PictureURL}
              ></img>
            </div>
            <div className="bg-slate-500 w-full h-[500px] ">
              <img
                className="object-cover w-full h-full"
                src={posts?.PictureURL}
              ></img>
            </div>
          </Carousel>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3240.199372895672!2d139.6908933!3d35.6967111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzQ4LjIiTiAxMznCsDQxJzI3LjIiRQ!5e0!3m2!1svi!2s!4v1710940510022!5m2!1svi!2s"
              width="80%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
