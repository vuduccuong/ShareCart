import React, { Fragment } from "react";
import FoodItem from "./food-item";

const FoodList = (props) => {
  const { foods = [] } = props;

  return (
    <Fragment>
      {foods.map((food, index) => {
        return (
          <FoodItem
            key={index}
            food={food}
            onViewDetail={() => props.onViewDetail(food)}
          />
        );
      })}
    </Fragment>
  );
};

export default FoodList;
