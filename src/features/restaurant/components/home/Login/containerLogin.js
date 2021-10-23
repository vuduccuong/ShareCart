import React from "react";

const ContainerLogin = (props) => {
  return (
    <div className="p-96 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
      <div className="content text-3xl text-center md:text-left">
        <h1 className="text-5xl text-blue-500 font-bold">CartSharing</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        {props.children}
      </div>
    </div>
  );
};

export default ContainerLogin;