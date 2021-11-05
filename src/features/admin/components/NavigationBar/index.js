import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import IcDocument from "../Icon/document";
import IcHome from "../Icon/home";

const NavBar = () => {
  return (
    <Fragment>
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <h1 className="font-bold uppercase flex justify-center">
            <a aria-current="page" className="active cursor-pointer" href={null}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-ninja"
                className="svg-inline--fa fa-user-ninja fa-w-14 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="purple"
                  d="M325.4 289.2L224 390.6 122.6 289.2C54 295.3 0 352.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-70.2-54-127.1-122.6-133.2zM32 192c27.3 0 51.8-11.5 69.2-29.7 15.1 53.9 64 93.7 122.8 93.7 70.7 0 128-57.3 128-128S294.7 0 224 0c-50.4 0-93.6 29.4-114.5 71.8C92.1 47.8 64 32 32 32c0 33.4 17.1 62.8 43.1 80-26 17.2-43.1 46.6-43.1 80zm144-96h96c17.7 0 32 14.3 32 32H144c0-17.7 14.3-32 32-32z"
                ></path>
              </svg>
              Food<span className="text-red-700">Ninja</span>
            </a>
          </h1>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <NavLink
                to="/admin/dashboard"
                className="flex rounded-lg py-2 px-3 text-md tracking-wider text-gray-800"
                activeStyle={{
                  backgroundColor: "#7e3af2",
                  color: "#fff",
                }}
              >
                <IcHome />
                <span className="ml-4">Dashboard</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <NavLink
                to="/admin/products"
                className="flex rounded-lg py-2 px-3 text-md tracking-wider text-gray-800"
                activeStyle={{
                  backgroundColor: "#7e3af2",
                  color: "#fff",
                }}
              >
                <IcDocument />
                <span className="ml-4">Menu</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  );
};

export default NavBar;
