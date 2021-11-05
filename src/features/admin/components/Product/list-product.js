import React from "react";
import ProductInfo from "./productInfo";

const ListProduct = (props) => {
  const { products } = props;

  return products.map((item) => {
    const { name, price, image, isActive, itemId } = item;

    return (
      <ProductInfo
        key={itemId}
        name={name}
        price={price}
        image={image}
        isActive={isActive}
      />
    );
  });
};

export default ListProduct;
