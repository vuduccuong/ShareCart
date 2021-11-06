import React from "react";
import Card from "../../../../../components/Card";
import ImageScale from "../../../../../components/ImageScale";

const FoodItem = (props) => {
  const { image, name, ingredients, price, unit } = props.food;

  return (
    <Card onViewDetail={props.onViewDetail}>
      <ImageScale image={image} />
      <div className="m-3 text-center">
        <span className="text-xl">{name}</span>
        <span className="block text-gray-600 text-sm">{ingredients}</span>
        <span className="block text-custom-yellow mt-10 text-3xl">
          {price.toLocaleString("vi-VN")}
          {unit ? `/ ${unit}` : null}
        </span>
      </div>
    </Card>
  );
};

export default FoodItem;
