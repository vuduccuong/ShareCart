import {
  faBars,
  faBeer,
  faCarrot,
  faHamburger,
  faPizzaSlice,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const showMenuHandle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="lg:col-span-1">
      <nav>
        <div className="flex justify-between mb-6 px-2 md:mb-16">
          <h1 className="uppercase">
            <NavLink to="/" className="text-xl">
              <FontAwesomeIcon icon={faUserNinja} className="mr-2" />
              Food
              <span className="text-red-700">Ninja</span>
            </NavLink>
          </h1>
          <div
            className="px-4 cursor-pointer lg:hidden"
            onClick={showMenuHandle}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <ul
          className={`${!showMenu ? "" : "hidden"} lg:block mr-10 mb-10`}
          onClick={showMenuHandle}
        >
          <li className="my-3">
            <NavLink
              to="/orders/salad"
              activeStyle={{
                backgroundColor: "#febc2e",
              }}
              className="rounded-lg py-2 px-3 text-md tracking-wider block"
            >
              <FontAwesomeIcon icon={faCarrot} className="mr-2" />
              <span>Salads</span>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="/orders/burger"
              activeStyle={{
                backgroundColor: "#febc2e",
              }}
              className="rounded-lg py-2 px-3 text-md tracking-wider block"
            >
              <FontAwesomeIcon icon={faHamburger} className="mr-2" />
              <span>Burgers</span>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="/orders/pizza"
              activeStyle={{
                backgroundColor: "#febc2e",
              }}
              className="rounded-lg py-2 px-3 text-md tracking-wider block"
            >
              <FontAwesomeIcon icon={faPizzaSlice} className="mr-2" />
              <span>Pizza</span>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              to="/orders/drink"
              activeStyle={{
                backgroundColor: "#febc2e",
              }}
              className="rounded-lg py-2 px-3 text-md tracking-wider block"
            >
              <FontAwesomeIcon icon={faBeer} className="mr-2" />
              <span>Beverages</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
