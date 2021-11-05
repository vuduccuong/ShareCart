import React from "react";

const ModalBody = (props) => {
  const { header } = props;
  return (
    <div className="mt-4 mb-6">
      {props.children}
    </div>
  );
};

export default ModalBody;
