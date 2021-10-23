import React from "react";
import { useHistory } from "react-router";
import ContainerLogin from "../../components/home/Login/containerLogin";

const RegisterPage = () => {
  const history = useHistory();
  const registerHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <ContainerLogin>
      <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
        />
        <input
          type="text"
          placeholder="Pasword"
          className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
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
