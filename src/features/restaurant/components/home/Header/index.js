import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Overlay from "../../../../../components/Overlay";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="top-0 left-0 right-0 p-16 bg-custom-yellow h-screen-75 rounded-b-full">
      <div className="flex justify-center relative">
        <div className="uppercase mr-auto">
          <a href="/" className="text-xl">
            <i className="fas fa-user-ninja mr-2"></i>Food{" "}
            <span className="text-red-700">Ninja</span>
          </a>
        </div>
        <div>
          <a href="#" className="py-2 px-5">
            Home
          </a>
          <a href="#order" className="py-2 px-5">
            Order
          </a>
          <a href="#contact" className="py-2 px-5">
            Contact
          </a>
        </div>
        <div className="ml-auto">
          <Link
            to="/login"
            className="rounded-full bg-gray-100 py-2 px-5 ml-2 cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:ml-48 mt-12 lg:mt-32 text-center lg:text-left">
          <span className="text-hero">
            <span className="text-red-700">Ninja</span> food
          </span>
          <span className="text-6xl block lg:ml-48 xl:block">your choice</span>
        </div>
        <div className="col-span-5 lg:mt-40 hidden md:block">
          <img
            src="images/pizza-hero.png"
            className="h-64 mx-auto lg:mx-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
