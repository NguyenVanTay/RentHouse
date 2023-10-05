/** @format */
import React, { useState, useEffect } from "react";
import { Button, InputForm } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);

  //  Biến dùng để check xem người dùng đăng ở trạng thái đăng nhập hay đăng ký dựa trên useLocation state
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  //  Cập nhật lại trạng thái auth
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);
  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };

    let invalids = validate(finalPayload);
    if (invalids === 0) {
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
    }
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);

    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: " Bạn không được bỏ trống trường này",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: " Mật khẩu phải có tối thiểu 6 ký ",
              },
            ]);
            invalids++;
          }
          break;

        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: " Số điện thoại không hợp lệ ",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
  };
  return (
    <div className=" bg-white w-[40%] mx-auto rounded-md shadow-md my-4 ">
      <div className="w-[80%] mx-auto flex flex-col gap-y-5 p-4">
        <p className="text-xl font-bold">
          {isRegister ? "Đăng Ký Tài Khoản" : "Đăng Nhập"}
        </p>
        <div className="flex flex-col gap-y-4 ">
          {isRegister && (
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label="HỌ TÊN"
              keyPayload="name"
              value={payload.name}
              setValue={setPayload}
            ></InputForm>
          )}
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label="SỐ ĐIỆN THOẠI"
            keyPayload="phone"
            setValue={setPayload}
            value={payload.phone}
            style="text"
          ></InputForm>
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label="MẬT KHẨU"
            keyPayload="password"
            value={payload.password}
            setValue={setPayload}
            type="password"
          ></InputForm>
        </div>

        <Button
          text={isRegister ? "Đăng Ký" : "Đăng nhập"}
          textColor="text-white"
          bgColor="bg-secondary1"
          fullwidth
          hoverStyle={"hover:bg-blue-700"}
          onclick={handleSubmit}
        />
        <div className="flex justify-between">
          {isRegister ? (
            <div className="flex items-center">
              <p className="">Bạn đã có tài khoản</p>
              <Button
                onclick={() => {
                  setIsRegister(false);
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
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
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
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
