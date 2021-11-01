import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { adminLogin } from "../../adminSlice";
import Container from "../../components/container";

const GeneratePage = () => {
  const refPhone = useRef("");

  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.admin.isAuth);

  if (auth) {
    //history.push("/admin");
    window.location.href = "/admin";
  }

  const onLoginAdminHandler = (e) => {
    e.preventDefault();
    const phoneInput = refPhone.current;
    const data = {
      phoneNumber: phoneInput.value,
    };

    dispatch(adminLogin(data));
  };

  const onRegisterAdminHandler = e => {
    e.preventDefault();
    history.push('/admin/register');
  }

  return (
    <Container>
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center bg-black rounded-xl p-4">
          <h2 className="text-3xl font-bold text-white">
            Restaurant
            <span className="text-black bg-yellow-600 rounded-lg pl-2 pr-2 ml-2">
              Generate
            </span>
          </h2>
        </div>
        <form className="mt-8 space-y-3" action="#" method="POST">
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Phone Number
            </label>
            <input
              className={`text-base p-2 border ${
                false ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:border-indigo-500`}
              type="text"
              ref={refPhone}
            />
          </div>
          <div>
            <button
              className="my-5 w-full text-3xl flex justify-center bg-yellow-600 p-2  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-black hover:text-white shadow-lg cursor-pointer transition ease-in duration-75"
              onClick={(e) => {
                onLoginAdminHandler(e);
              }}
            >
              Login
            </button>
            <p className="text-center">Or</p>
            <button
              className="my-5 w-full text-3xl flex justify-center bg-yellow-600 p-2  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-black hover:text-white shadow-lg cursor-pointer transition ease-in duration-75"
              onClick={(e) => {
                onRegisterAdminHandler(e);
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default GeneratePage;
