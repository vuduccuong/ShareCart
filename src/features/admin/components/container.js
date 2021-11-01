import React from "react";

const Container = (props) => {
  return (
    <div
      className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{
        backgroundImage: `url(/images/bg-main.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
