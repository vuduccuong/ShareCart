import React from "react";

const ImageScale = (props) => {
  const { image, title } = props;
  return (
    <img
      src={image}
      alt={title}
      className="w-full transform hover:scale-125 transition duration-300"
      loading="lazy"
    ></img>
  );
};

export default ImageScale;
