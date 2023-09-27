/** @format */
import React from "react";
import { Button, InputForm } from "../../components";
const Login = () => {
  return (
    <div className="bg-white w-[40%] mx-auto rounded-md shadow-md my-4">
      <div className="w-[80%] mx-auto flex flex-col gap-y-5 p-4">
        <p className="text-xl font-bold">Đăng Nhập</p>
        <div className="flex flex-col gap-y-4 ">
          <InputForm label="SỐ ĐIỆN THOẠI" type="text"></InputForm>
          <InputForm label="MẬT KHẨU" type="password"></InputForm>
        </div>

        <Button
          text="Đăng Nhập"
          textColor="text-white"
          bgColor="bg-secondary1"
          fullwidth
          hoverStyle={"hover:bg-blue-700"}
        />
        <div className="flex justify-between">
          <Button
            text="Bạn quên tài khoản"
            textColor="text-blue-400"
            bgColor="bg-transparent"
            hoverStyle={"hover:text-orange-400"}
          ></Button>
          <Button
            text="Tạo tài khoản mởi"
            textColor="text-blue-400"
            bgColor="bg-transparent"
            hoverStyle={"hover:text-orange-400"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
