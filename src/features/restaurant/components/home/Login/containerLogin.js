import React from "react";
import { useHistory } from "react-router";

const ContainerLogin = (props) => {
  const history = useHistory();

  const onClickLogo = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="p-96 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
      <div className="content text-3xl text-center md:text-left">
        <h1
          className="text-5xl text-blue-500 font-bold cursor-pointer"
          onClick={(e) => onClickLogo(e)}
        >
          Cart Sharing
        </h1>
        <p>Connect with friends and the world around you.</p>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        {props.children}
      </div>
    </div>
  );
};

export default ContainerLogin;
