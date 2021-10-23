import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import ContainerLogin from "../../components/home/Login/containerLogin";

const LoginRestaurant = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const onRegisterHandler = (e) => {
    e.preventDefault();
    history.push("/register");
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
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
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
