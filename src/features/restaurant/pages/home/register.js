import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ContainerLogin from "../../components/home/Login/containerLogin";
import { register } from "./customerSlice";

const RegisterPage = () => {
  const rName = useRef("");
  const rPhoneNumber = useRef("");

  const dispatch = useDispatch();

  const history = useHistory();
  const registerHandler = (e) => {
    e.preventDefault();

    const name = rName.current;
    const phoneNumber = rPhoneNumber.current;

    const fData = new FormData();
    fData.append('name', name.value);
    fData.append('phoneNumber', phoneNumber.value);

    dispatch(register(fData));
  };

  return (
    <ContainerLogin>
      <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
        <input
          type="text"
          placeholder="Name"
          className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
          ref={rName}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
          ref={rPhoneNumber}
        />
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg"
          onClick={(e) => {
            registerHandler(e);
          }}
        >
          Register
        </button>
      </form>
    </ContainerLogin>
  );
};

export default RegisterPage;
