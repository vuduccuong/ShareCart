import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faPizzaSlice,
  faCarrot,
  faCocktail,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const MainBody = () => {
  return (
    <div className="p-32" id="order">
      <div className="text-center text-5xl">What's the mood?</div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 mt-12 text-center items-center text-lg">
        <Link to="/orders/salad" className="my-3">
          <div className="bg-custom-yellow rounded-full py-6 w-4/5 md:w-1/3 mx-auto">
            <span className="bg-white p-4 rounded-full text-center">
              <FontAwesomeIcon icon={faCarrot} />
            </span>
            <span className="block mt-5">Salad</span>
          </div>
        </Link>
        <Link to="/orders/burger" className="my-3">
          <div className="bg-custom-yellow rounded-full py-6 w-4/5 md:w-1/3 mx-auto">
            <span className="bg-white p-4 rounded-full">
              <FontAwesomeIcon icon={faHamburger} />
            </span>
            <span className="block mt-5">Burger</span>
          </div>
        </Link>
        <Link to="/orders/pizza" className="my-3">
          <div className="bg-custom-yellow rounded-full py-6 w-4/5 md:w-1/3 mx-auto">
            <span className="bg-white p-4 rounded-full">
              <FontAwesomeIcon icon={faPizzaSlice} />
            </span>
            <span className="block mt-5">Pizza</span>
          </div>
        </Link>
        <Link to="/orders/drink" className="my-3">
          <div className="bg-custom-yellow rounded-full py-6 w-4/5 md:w-1/3 mx-auto">
            <span className="bg-white p-4 rounded-full">
              <FontAwesomeIcon icon={faCocktail} />
            </span>
            <span className="block mt-5">Drinks</span>
          </div>
        </Link>
        <Link to="/orders/drink" className="my-3">
          <div className="bg-custom-yellow rounded-full py-6 w-4/5 md:w-1/3 mx-auto">
            <span className="bg-white p-4 rounded-full">
              <FontAwesomeIcon icon={faIceCream} />
            </span>
            <span className="block mt-5">Dessert</span>
          </div>
          </Link>
      </div>
    </div>
  );
};

export default MainBody;
