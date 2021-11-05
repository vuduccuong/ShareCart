import React, { Fragment } from "react";

const ModalHeader = (props) => {
  return (
    <Fragment>
      <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
        {props.children}
      </p>
      <hr />
    </Fragment>
  );
};

export default ModalHeader;
