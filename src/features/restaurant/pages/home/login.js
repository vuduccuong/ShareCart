import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { customerAuth } from "../../../../_storage/storage";
import ContainerLogin from "../../components/home/Login/containerLogin";
import { isAuth, login } from "./customerSlice";

const LoginRestaurant = () => {
  const rPhoneNumber = useRef("");

  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.customer.isAuth);

  if (auth) {
    window.location.href = "/";
  }

  const onRegisterHandler = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const onLoginHandler = (e) => {
    const phoneNumber = rPhoneNumber.current;
    const data = {
      phoneNumber: phoneNumber.value,
    };

    e.preventDefault();
    dispatch(login(data));
  };

  return (
    <ContainerLogin>
      <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
        <input
          type="text"
          placeholder="Phone Number"
          className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
          ref={rPhoneNumber}
        />
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg"
          onClick={(e) => {
            onLoginHandler(e);
          }}
        >
          Login
        </button>
        <a className="text-blue-400 text-center my-2">Forgot Pasword?</a>
        <hr />
        <button
          className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg"
          onClick={(e) => onRegisterHandler(e)}
        >
          Create New Account
        </button>
      </form>
    </ContainerLogin>
  );
};

export default LoginRestaurant;
