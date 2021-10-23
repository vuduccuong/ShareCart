import React from "react";

const Overlay = (props) => {
  return (
    <div
      className="bg-black opacity-50 z-20 top-0 bottom-0 left-0 right-0 overflow-hidden fixed"
      onClick={props.clickHandler}
    ></div>
  );
};

export default Overlay;
