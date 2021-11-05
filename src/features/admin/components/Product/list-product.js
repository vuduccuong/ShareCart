import React from "react";
import ProductInfo from "./productInfo";

const ListProduct = (props) => {
  const { products, edit, del } = props;

  return products.map((item) => {
    const { name, price, image, isActive, itemId, shopId } = item;

    return (
      <ProductInfo
        key={itemId}
        name={name}
        price={price}
        image={image}
        isActive={isActive}
        edit={() => edit(item)}
        del={() => del({ itemId, shopId })}
      />
    );
  });
};

export default ListProduct;
