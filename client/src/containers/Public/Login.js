/** @format */
import React, { useState, useEffect } from "react";
import { Button, InputForm } from "../../components";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  return (
    <div className=" bg-white w-[40%] mx-auto rounded-md shadow-md my-4 ">
      <div className="w-[80%] mx-auto flex flex-col gap-y-5 p-4">
        <p className="text-xl font-bold">
          {isRegister ? "Đăng Ký Tài Khoản" : "Đăng Nhập"}
        </p>
        <div className="flex flex-col gap-y-4 ">
          {isRegister && <InputForm label="HỌ TÊN" type="text"></InputForm>}
          <InputForm label="SỐ ĐIỆN THOẠI" type="text"></InputForm>
          <InputForm label="MẬT KHẨU" type="password"></InputForm>
        </div>

        <Button
          text={isRegister ? "Đăng Ký" : "Đăng nhập"}
          textColor="text-white"
          bgColor="bg-secondary1"
          fullwidth
          hoverStyle={"hover:bg-blue-700"}
        />
        <div className="flex justify-between">
          {isRegister ? (
            <div className="flex items-center">
              <p className="">Bạn đã có tài khoản</p>
              <Button
                onclick={() => {
                  setIsRegister(false);
                }}
                text="Đăng nhập ngay "
                hoverStyle={"hover:text-orange-400"}
              ></Button>
            </div>
          ) : (
            <>
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
                onclick={() => {
                  setIsRegister(true);
                }}
              ></Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
