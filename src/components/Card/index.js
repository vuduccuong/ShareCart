import React from "react";

const Card = (props) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg item"
      onClick={props.onViewDetail ?? null}
    >
      {props.children}
    </div>
  );
};

export default Card;
