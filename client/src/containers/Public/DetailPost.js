/** @format */

import React from "react";
import { Carousel } from "antd";
import GoogleMapReact from "google-map-react";

const DetailPost = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 10,
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="h-[300px] py-4">
      <Carousel afterChange={onChange} className="w-[80%] mx-auto">
        <div className="bg-slate-500 w-full h-[500px] ">
          <img
            className="object-cover w-full h-full"
            src="https://th.bing.com/th/id/R.9b9614f5491079fb529b4c15cbdda32a?rik=8D82gZAKyoLF7Q&riu=http%3a%2f%2fphongthuyhoangtra.vn%2fuploads%2fposts%2f2016-10%2f1477714344_mau-nha-o-nhat-ban-kieu-biet-thu-dep32.jpg&ehk=xpDjcGSaa9YRwnozikkTL1T1S2u5DATBeLxt7fAq0Ww%3d&risl=&pid=ImgRaw&r=0"
          ></img>
        </div>

        <div className="bg-slate-500 w-full h-[500px] ">
          <img
            className="object-cover w-full h-full"
            src="https://th.bing.com/th/id/R.12caf3eb9b0853c1654d98f8e5f6be11?rik=tF5irtCD5X3UDg&riu=http%3a%2f%2fphongthuyhoangtra.vn%2fuploads%2fposts%2f2016-10%2f1477711990_mau-nha-o-nhat-ban-kieu-biet-thu-dep22.jpg&ehk=vFjPPZZNs0uRwnPkh8UfiYR7xVFtN4D2qkYTksfdX2w%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          ></img>
        </div>
        <div className="bg-slate-500 w-full h-[500px] ">
          <img
            className="object-cover w-full h-full"
            src="https://th.bing.com/th/id/R.8e6238cf7d926c9cfa125c2eadfb4470?rik=6carxPJmw0UKPA&riu=http%3a%2f%2fphongthuyhoangtra.vn%2fuploads%2fposts%2f2016-10%2f1477713291_mau-nha-o-nhat-ban-kieu-biet-thu-dep26.jpg&ehk=A1%2bIOmpam0HjbWkvvQ04JfjFj96CEC87GXgVU5S4918%3d&risl=&pid=ImgRaw&r=0"
          ></img>
        </div>
      </Carousel>

      <div className="mx-auto w-[80%]">
        <p className="py-4 text-3xl font-bold">Basic infomation</p>
      </div>

      <div className="grid grid-cols-4 w-[80%] mx-auto">
        <div className="py-5">
          <p className="font-bold">Description</p>
          <p className="">CHIYODA</p>
        </div>
        <div className="py-5">
          <p className="font-bold">Price</p>
          <p className="">46,000.00 Y</p>
          <p className="">3,133,934.00 USD</p>
        </div>
        <div className="py-5">
          <p className="font-bold">Address</p>
          <p className="">2-8-4 Kanda Sudacho, Chiyoda, Tokyo, Japan</p>
        </div>
        <div className="py-5">
          <p className="font-bold">Location</p>
          <p className="">
            1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
            minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
          </p>
        </div>
      </div>

      <div className="flex justify-center w-[80%] mx-auto  gap-20">
        <div className="">
          <div className="mx-auto ">
            <p className="py-4 text-3xl font-bold">Building infomation</p>
          </div>
          <div className="py-5">
            <p className="font-bold">Structure</p>
            <p className="">CHIYODA</p>
          </div>
          <div className="py-5">
            <p className="font-bold">Operation Year</p>
            <p className="">46,000.00 Y</p>
            <p className="">3,133,934.00 USD</p>
          </div>
          <div className="py-5">
            <p className="font-bold">Total area</p>
            <p className="">2-8-4 Kanda Sudacho, Chiyoda, Tokyo, Japan</p>
          </div>
          <div className="py-5">
            <p className="font-bold">number unit</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Inspection cerficate</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Legel restriction</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Parking plot</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Fire prevention regulation</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Current Status</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">lifeline</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Delevery</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">altitude area</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">orther restriction</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">property type</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto ">
            <p className="py-4 text-3xl font-bold">Land infomation</p>
          </div>
          <div className="py-5">
            <p className="font-bold">Structure</p>
            <p className="">CHIYODA</p>
          </div>
          <div className="py-5">
            <p className="font-bold">Operation Year</p>
            <p className="">46,000.00 Y</p>
            <p className="">3,133,934.00 USD</p>
          </div>
          <div className="py-5">
            <p className="font-bold">Total area</p>
            <p className="">2-8-4 Kanda Sudacho, Chiyoda, Tokyo, Japan</p>
          </div>
          <div className="py-5">
            <p className="font-bold">number unit</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Inspection cerficate</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Legel restriction</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Parking plot</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Fire prevention regulation</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Current Status</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">lifeline</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">Delevery</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">altitude area</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">orther restriction</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
          <div className="py-5">
            <p className="font-bold">property type</p>
            <p className="">
              1-minute walk to Iwamotocho Station on the Toei Shinjuku Line; 5
              minutes walk to Akihabara Station on the Tokyo Metro Hibiya Line
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[800px] py-10">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={139.6902013010577}
            lng={35.66788837636711}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default DetailPost;
