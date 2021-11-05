import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../adminSlice";
import Search from "./search";

const Header = (props) => {
  const { adminInfo } = props;

  const dispatch = useDispatch();

  const onLogouthandle = (e) => {
    dispatch(logout());
  };

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <button
          className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex justify-center flex-1 lg:mr-32">
          {/* <Search /> */}
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple text-gray-700"
              aria-label="Toggle color mode"
            >
              {adminInfo.name}
            </button>
          </li>
          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none flex  items-center"
              aria-label="Account"
              aria-haspopup="true"
              onClick={onLogouthandle}
            >
              <img
                className="object-cover w-8 h-8 rounded-full mr-3"
                src={`data:image/jpeg;charset=utf-8;base64, ${adminInfo.image}`}
                alt=""
                aria-hidden="true"
              />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
