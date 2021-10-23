import React from "react";

const TitlePage = (props) => {
  const { children, image } = props;
  return (
    <div>
      <span className="text-2xl md:text-4xl">{children}</span>
      <img
        src={image}
        className="h-6 w-6 md:h-8 md:w-8 mb-3 ml-2 md:ml-5 inline-flex"
      />
    </div>
  );
};

export default TitlePage;
