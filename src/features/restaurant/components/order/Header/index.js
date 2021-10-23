import {
  faLongArrowAltLeft,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";

const Header = () => {
  const openCardHandle = () => {};
  return (
    <Fragment>
      <div className="flex justify-center md:justify-end">
        <Link to="/" className="rounded-full bg-gray-200 py-2 px-6 mr-auto">
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </Link>

        <button
          onClick={openCardHandle}
          className="rounded-full bg-white mr-2 py-2 px-3 shadow sm:block hidden cart"
        >
          {/* <FontAwesomeIcon icon={faShoppingBasket} />${items.length} items - $ */}
          {/* {totalMoney} */}
        </button>
      </div>
      <button
        onClick={openCardHandle}
        className="rounded-full bg-white mr-2 py-2 px-3 shadow block sm:hidden mt-5 w-full cart"
      >
        <FontAwesomeIcon icon={faShoppingBasket} className="mr-3" />$
        {/* {items.length} items - ${totalMoney} */}
      </button>
    </Fragment>
  );
};

export default Header;
